import React, { useState } from "react";

const ProgressButton = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setProgress(0);

    // Simulate a loading process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10; // Increment progress by 10%
      });
    }, 300); // Update progress every 300ms
  };

  return (
    <button
      className={`relative px-6 py-3 text-white font-semibold bg-blue-500 rounded-lg overflow-hidden ${
        isLoading ? "cursor-not-allowed" : "hover:bg-blue-600"
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : "Click Me"}
      <span
        className="absolute left-0 top-0 h-full bg-blue-700 transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></span>
      <span className="relative z-10">{isLoading ? `${progress}%` : ""}</span>
    </button>

    
  );
};

export default ProgressButton;
