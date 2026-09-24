import { useEffect, useRef } from "react";

/** True only for mouse/trackpad users who haven't asked for reduced motion. */
export function canUsePointerEffects() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Binds rAF-throttled pointer handlers to an element.
 * `onMove(el, x, y, rect)` receives pointer coords relative to the element.
 */
function usePointer(onMove, onLeave) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canUsePointerEffects()) return undefined;

    let frame = 0;
    const move = (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        onMove(el, event.clientX - rect.left, event.clientY - rect.top, rect);
      });
    };
    const leave = () => {
      cancelAnimationFrame(frame);
      onLeave(el);
    };

    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
    // Handlers are module-level constants; binding once is intentional.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

const MAGNET_STRENGTH = 0.22;

function magnetMove(el, x, y, rect) {
  el.style.setProperty("--mag-x", `${(x - rect.width / 2) * MAGNET_STRENGTH}px`);
  el.style.setProperty("--mag-y", `${(y - rect.height / 2) * MAGNET_STRENGTH}px`);
  el.style.setProperty("--hl-x", `${x}px`);
  el.style.setProperty("--hl-y", `${y}px`);
}

function magnetLeave(el) {
  el.style.setProperty("--mag-x", "0px");
  el.style.setProperty("--mag-y", "0px");
}

/** Magnetic hover: the element leans toward the pointer and a highlight follows it. */
export function useMagnetic() {
  return usePointer(magnetMove, magnetLeave);
}

const MAX_TILT = 5;

function tiltMove(el, x, y, rect) {
  const px = x / rect.width - 0.5;
  const py = y / rect.height - 0.5;
  el.classList.add("is-tilting");
  el.style.setProperty("--ry", `${px * MAX_TILT * 2}deg`);
  el.style.setProperty("--rx", `${-py * MAX_TILT * 2}deg`);
  el.style.setProperty("--gx", `${x}px`);
  el.style.setProperty("--gy", `${y}px`);
}

function tiltLeave(el) {
  el.classList.remove("is-tilting");
  el.style.setProperty("--rx", "0deg");
  el.style.setProperty("--ry", "0deg");
}

/** Subtle 3D tilt toward the pointer. Pair with the `.tilt` class. */
export function useTilt() {
  return usePointer(tiltMove, tiltLeave);
}
