import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full py-16">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-12 h-12 rounded-full border-2 border-border animate-spin
                        border-t-primary border-r-primary/40 border-b-primary/20 border-l-transparent" />
        {/* Inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
