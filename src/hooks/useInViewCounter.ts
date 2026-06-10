import { useState, useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from './useReducedMotion';

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

export function useInViewCounter(
  target: number,
  duration = 2000,
  decimals = 0
): { ref: React.RefObject<HTMLDivElement | null>; value: number; inView: boolean } {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const [inView, setInView] = useState(false);
  const reducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    if (reducedMotion) {
      setValue(target);
      return;
    }

    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      const current = eased * target;
      setValue(Number(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, decimals, reducedMotion]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animate]);

  return { ref, value, inView };
}
