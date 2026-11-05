"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix?: string; label: string };

/** Counts up from 0 to `value` the first time the stat scrolls into view. */
export default function StatCounter({ value, suffix = "", label }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setCount(value);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1600;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
          setCount(Math.round(eased * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat__value" aria-hidden="true">
        {count.toLocaleString()}
        {suffix}
      </div>
      {/* Screen readers get the final number, not the animation. */}
      <span className="sr-only">
        {value.toLocaleString()}
        {suffix}
      </span>
      <div className="stat__label">{label}</div>
    </div>
  );
}
