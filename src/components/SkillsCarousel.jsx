import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SkillsCarousel({ skills, category }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % skills.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  return (
    <div className="relative h-80 flex items-center justify-center perspective-1000">
      {/* Category Title */}
      <div className="absolute top-0 left-0 z-20">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-400 rounded-full"></span>
          {category}
        </h3>
      </div>

      {/* 3D Card Stack */}
      <div className="relative w-full max-w-md h-64">
        {skills.map((skill, index) => {
          const offset = index - activeIndex;
          const absOffset = Math.abs(offset);
          
          return (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2 w-64 cursor-pointer"
              style={{
                zIndex: skills.length - absOffset,
              }}
              animate={{
                x: `calc(-50% + ${offset * 80}px)`,
                y: `calc(-50% + ${Math.abs(offset) * 20}px)`,
                scale: 1 - absOffset * 0.15,
                rotateY: offset * 15,
                opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <div className={`bg-almond-50 dark:bg-gray-800/50 backdrop-blur-sm border ${
                index === activeIndex 
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/30' 
                  : 'border-almond-300 dark:border-gray-700'
              } p-6 rounded-xl transition-all`}>
                <div className={`text-5xl ${skill.color} mb-4 text-center`}>
                  <i className={skill.icon}></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-200 text-center mb-3">
                  {skill.name}
                </h4>
                <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: index === activeIndex ? `${skill.level}%` : 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  />
                </div>
                <p className="text-right text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {skill.level}%
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors flex items-center justify-center"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex 
                ? 'bg-blue-500 w-6' 
                : 'bg-gray-400 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
