import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth physics springs
  const springConfig = { damping: 22, stiffness: 280, mass: 0.45 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const handleMouseOver = (e) => {
      const target = e.target.closest("button, a, input, textarea, [data-cursor], .card-premium, .tech-badge");
      if (target) {
        setIsHovered(true);
        const label = target.getAttribute("data-cursor-text") || "";
        setCursorText(label);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? (cursorText ? 1.35 : 1.7) : 1,
          width: cursorText ? "auto" : isHovered ? 48 : 28,
          height: cursorText ? "auto" : isHovered ? 48 : 28,
          borderRadius: 9999,
          backgroundColor: isHovered
            ? "hsl(var(--foreground))"
            : "hsl(var(--foreground))",
          color: "hsl(var(--background))",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 24 }}
        className="px-3.5 py-1.5 flex items-center justify-center shadow-elevated"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-mono font-bold uppercase tracking-widest whitespace-nowrap text-background"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
