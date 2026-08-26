import React, { useEffect, useRef, useState, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const AnimatedBackground = memo(function AnimatedBackground() {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  // Watch for theme changes on <html> class
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Canvas particle engine
  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse & shockwaves
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 200,
    };

    const shockwaves = [];

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleClick = (e) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 280,
        speed: 8,
        alpha: 0.6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    // Initialize particles matching reference screenshots
    const particleCount = width < 768 ? 90 : 180;
    const particles = [];
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radiusDist = Math.pow(Math.random(), 0.8) * Math.max(width, height) * 0.7 + 60;
      const homeX = centerX + Math.cos(angle) * radiusDist;
      const homeY = centerY + Math.sin(angle) * (radiusDist * 0.7);

      particles.push({
        x: homeX,
        y: homeY,
        homeX: homeX,
        homeY: homeY,
        baseAngle: angle,
        orbitRadius: radiusDist,
        orbitSpeed: (Math.random() * 0.0008 + 0.0003) * (i % 2 === 0 ? 1 : -1),
        vx: 0,
        vy: 0,
        length: Math.random() * 3.5 + 4,
        thickness: Math.random() * 1.2 + 2,
        alpha: Math.random() * 0.4 + 0.55,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseAngle: Math.random() * Math.PI * 2,
      });
    }

    // Color mapper based on vertical Y position (Spectrum in reference screenshot 2)
    const getSpectrumColor = (y, isDarkTheme) => {
      const normalizedY = Math.max(0, Math.min(1, y / height));
      if (normalizedY < 0.2) {
        // Gold / Amber
        return isDarkTheme ? "251, 191, 36" : "217, 119, 6";
      } else if (normalizedY < 0.4) {
        // Coral / Orange / Red
        return isDarkTheme ? "248, 113, 113" : "239, 68, 68";
      } else if (normalizedY < 0.6) {
        // Magenta / Violet / Purple
        return isDarkTheme ? "216, 180, 254" : "168, 85, 247";
      } else if (normalizedY < 0.8) {
        // Royal Blue / Indigo
        return isDarkTheme ? "147, 197, 253" : "59, 130, 246";
      } else {
        // Cyan / Ice Blue
        return isDarkTheme ? "103, 232, 249" : "6, 182, 212";
      }
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isCurrentDark = document.documentElement.classList.contains("dark");

      // Draw & update shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += sw.speed;
        sw.alpha = Math.max(0, 0.6 * (1 - sw.radius / sw.maxRadius));

        if (sw.radius > sw.maxRadius) {
          shockwaves.splice(s, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${isCurrentDark ? "147, 197, 253" : "59, 130, 246"}, ${sw.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Push particles from shockwave
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - sw.x;
          const dy = p.y - sw.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (Math.abs(dist - sw.radius) < 40) {
            const push = 2.5;
            p.vx += (dx / (dist || 1)) * push;
            p.vy += (dy / (dist || 1)) * push;
          }
        }
      }

      // Update and draw capsule particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Orbit update
        p.baseAngle += p.orbitSpeed;
        const targetX = centerX + Math.cos(p.baseAngle) * p.orbitRadius;
        const targetY = centerY + Math.sin(p.baseAngle) * (p.orbitRadius * 0.7);

        // Spring force towards orbit home
        const springK = 0.025;
        p.vx += (targetX - p.x) * springK;
        p.vy += (targetY - p.y) * springK;

        // Friction damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        // Mouse displacement physics (clear radius for solid cursor)
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouse.radius && mdist > 0) {
          const force = (1 - mdist / mouse.radius) * 6;
          p.vx += (mdx / mdist) * force;
          p.vy += (mdy / mdist) * force;
        }

        // Apply velocities
        p.x += p.vx;
        p.y += p.vy;

        // Pulse alpha
        p.pulseAngle += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseAngle) * 0.15;
        const colorRgb = getSpectrumColor(p.y, isCurrentDark);

        // Orientation angle: align with velocity or radial trajectory
        const particleAngle = Math.atan2(p.vy || (p.y - centerY), p.vx || (p.x - centerX));

        // Draw rotated rounded capsule / dash particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(particleAngle);

        ctx.beginPath();
        const halfLen = p.length / 2;
        const halfThick = p.thickness / 2;
        ctx.roundRect(-halfLen, -halfThick, p.length, p.thickness, halfThick);
        ctx.fillStyle = `rgba(${colorRgb}, ${Math.max(0.2, Math.min(1, currentAlpha))})`;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* ── Ambient Glowing Aurora Orbs ─────────────────── */}
      <motion.div
        className={`absolute w-[700px] h-[700px] rounded-full blur-[130px] transition-colors duration-700 ${
          isDark
            ? "bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-transparent"
            : "bg-gradient-to-tr from-blue-400/25 via-sky-300/20 to-transparent"
        }`}
        animate={shouldReduceMotion ? undefined : {
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "-10%", left: "-10%" }}
      />

      <motion.div
        className={`absolute w-[750px] h-[750px] rounded-full blur-[140px] transition-colors duration-700 ${
          isDark
            ? "bg-gradient-to-bl from-cyan-500/20 via-teal-500/15 to-transparent"
            : "bg-gradient-to-bl from-sky-400/25 via-cyan-200/20 to-transparent"
        }`}
        animate={shouldReduceMotion ? undefined : {
          x: [0, -100, 0],
          y: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "5%", right: "-10%" }}
      />

      <motion.div
        className={`absolute w-[550px] h-[550px] rounded-full blur-[110px] transition-colors duration-700 ${
          isDark
            ? "bg-gradient-to-r from-purple-600/15 via-indigo-500/15 to-transparent"
            : "bg-gradient-to-r from-indigo-200/30 via-sky-100/30 to-transparent"
        }`}
        animate={shouldReduceMotion ? undefined : {
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "45%", right: "15%" }}
      />

      {/* ── Subtle Cyber Dot Grid Overlay ───────────────── */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        isDark
          ? "bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)]"
          : "bg-[radial-gradient(rgba(26,115,232,0.08)_1px,transparent_1px)]"
        } bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]`}
      />

      {/* ── Interactive Particle Canvas ─────────────────── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
});

export default AnimatedBackground;

