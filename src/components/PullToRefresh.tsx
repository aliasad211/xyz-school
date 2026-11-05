"use client";

import { useEffect, useRef, useState } from "react";

const THRESHOLD = 80; // indicator distance (px) needed to trigger a refresh
const MAX_PULL = 120; // indicator never travels further than this
const TOUCH_RESISTANCE = 0.5; // finger moves 2px → indicator moves 1px
const WHEEL_RESISTANCE = 0.3; // trackpad deltas are larger, so resist more
const WHEEL_GESTURE_END_MS = 180; // no wheel events for this long = gesture finished

/**
 * App-style "pull to refresh".
 * The native overscroll bounce is disabled in CSS (overscroll-behavior: none),
 * so instead of the page sliding down and showing a gap, a loader appears.
 * Pulling past THRESHOLD and releasing reloads the page.
 *
 * Works with touch (phones/tablets) and trackpad wheel events (laptops).
 */
export default function PullToRefresh() {
  const [pull, setPull] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const pullRef = useRef(0);
  const refreshingRef = useRef(false);

  useEffect(() => {
    const atTop = () => window.scrollY <= 0;
    const update = (value: number) => {
      pullRef.current = value;
      setPull(value);
    };

    // Called when the finger lifts / the trackpad gesture ends.
    const release = () => {
      setDragging(false);
      if (pullRef.current >= THRESHOLD) {
        refreshingRef.current = true;
        setRefreshing(true);
        update(THRESHOLD * 0.75); // park the spinner while reloading
        setTimeout(() => window.location.reload(), 700);
      } else {
        update(0);
      }
    };

    /* ---- Touch (mobile) ---- */
    let startY: number | null = null;

    const onTouchStart = (e: TouchEvent) => {
      if (refreshingRef.current || e.touches.length !== 1 || !atTop()) return;
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (startY === null) return;
      const distance = e.touches[0].clientY - startY;
      if (distance > 0 && atTop()) {
        setDragging(true);
        update(Math.min(MAX_PULL, distance * TOUCH_RESISTANCE));
        if (e.cancelable) e.preventDefault(); // we handle the pull, not the browser
      } else if (pullRef.current > 0) {
        update(0);
      }
    };

    const onTouchEnd = () => {
      if (startY === null) return;
      startY = null;
      release();
    };

    /* ---- Trackpad (desktop) ---- */
    // Wheel events have no "release", so a gesture ends after a short pause.
    // A gesture only counts if the page was ALREADY at the top when it began,
    // so momentum from scrolling up never triggers an accidental refresh.
    let gestureTimer: ReturnType<typeof setTimeout> | undefined;
    let gestureStartedAtTop = false;
    let distance = 0;

    const onWheel = (e: WheelEvent) => {
      if (refreshingRef.current) return;

      if (gestureTimer === undefined) {
        gestureStartedAtTop = atTop();
        distance = 0;
      }
      clearTimeout(gestureTimer);
      gestureTimer = setTimeout(() => {
        gestureTimer = undefined;
        if (gestureStartedAtTop && pullRef.current > 0) release();
      }, WHEEL_GESTURE_END_MS);

      if (!gestureStartedAtTop) return;
      if (e.deltaY < 0) {
        distance += -e.deltaY;
        setDragging(true);
        update(Math.min(MAX_PULL, distance * WHEEL_RESISTANCE));
      } else if (e.deltaY > 0) {
        // User changed direction and is scrolling down: cancel the pull.
        gestureStartedAtTop = false;
        setDragging(false);
        update(0);
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchcancel", onTouchEnd);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      clearTimeout(gestureTimer);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchcancel", onTouchEnd);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  const progress = Math.min(pull / THRESHOLD, 1);
  const circumference = 2 * Math.PI * 9;
  const visible = pull > 0 || refreshing;

  return (
    <div
      className={`ptr${dragging ? " ptr--dragging" : ""}${refreshing ? " ptr--refreshing" : ""}${
        progress >= 1 ? " ptr--ready" : ""
      }`}
      style={{ transform: `translate(-50%, ${pull - 56}px)`, opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" style={{ transform: `rotate(${progress * 270}deg)` }}>
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeDasharray={circumference}
          // The arc fills up as you pull; at the threshold it's ~80% closed.
          strokeDashoffset={refreshing ? circumference * 0.25 : circumference * (1 - progress * 0.8)}
        />
      </svg>
    </div>
  );
}
