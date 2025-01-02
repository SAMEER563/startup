import { useState } from "react";

const ResettableProgressButton = () => {
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleReset = () => {
    setProgress(0);
  };

  return (
    <div className="flex space-x-3">
      <button
        className="relative px-6 py-3 bg-indigo-600 text-white rounded-lg"
        onClick={handleStart}
        disabled={progress > 0 && progress < 100}
      >
        {progress === 100 ? "Done" : `Progress: ${progress}%`}
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg"
        onClick={handleReset}
        disabled={progress === 0 || progress === 100}
      >
        Reset
      </button>
    </div>
  );
};

export default ResettableProgressButton;
