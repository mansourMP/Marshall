"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Animates a number from 0 to `end` when the element enters the viewport.
 * Uses IntersectionObserver — triggers once, then disconnects.
 */
export function useCountUp(
  end: number,
  duration = 1800,
  options?: { suffix?: string; prefix?: string; decimals?: number }
) {
  const [value, setValue] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (!hasTriggered) return;

    let startTimestamp: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(eased * end);

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hasTriggered, end, duration]);

  const suffix = options?.suffix ?? "";
  const prefix = options?.prefix ?? "";
  const decimals = options?.decimals ?? 0;

  const display = hasTriggered
    ? `${prefix}${value.toFixed(decimals)}${suffix}`
    : `${prefix}0${suffix}`;

  return { ref, display };
}
