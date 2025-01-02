import { useState } from "react";

const CircularSpinnerButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000); // Simulate a delay
  };

  return (
    <button
      className={`relative px-6 py-3 bg-purple-600 text-white rounded-lg flex items-center justify-center ${
        isLoading ? "cursor-not-allowed" : "hover:bg-purple-700"
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="relative w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
      ) : (
        "Load Data"
      )}
    </button>
  );
};

export default CircularSpinnerButton;
