import type { CSSProperties } from "react";

/** Inline style that staggers a `.reveal` element's entrance animation. */
export const stagger = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;
