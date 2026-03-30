import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SemiDonutChart = ({ percentage, fill, txt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Calculate stroke-dasharray for the SVG
  const radius = 40;
  const circumference = Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center w-32 h-32"
    >
      <svg width="100" height="60" viewBox="0 0 100 60">
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke={fill}
          strokeWidth="10"
          strokeDasharray={`${progress},${circumference}`}
          style={{
            transition: "stroke-dasharray 1s ease",
            opacity: isVisible ? 1 : 0.2,
          }}
        />
      </svg>
      <span className="mt-2 text-base font-semibold text-gray-800 dark:text-gray-100">
        {txt}
      </span>
      <span className="text-blue-600 dark:text-blue-300 font-bold">
        {percentage}%
      </span>
    </div>
  );
};

export default SemiDonutChart;
