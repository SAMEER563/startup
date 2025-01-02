import { useState } from "react";

const IndeterminateProgressButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 5000); // Simulates a delay
  };

  return (
    <button
      className={`relative px-6 py-3 bg-blue-600 text-white rounded-lg overflow-hidden flex items-center justify-center ${
        isLoading ? "cursor-not-allowed" : "hover:bg-blue-700"
      }`}
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="relative flex items-center space-x-1">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></span>
          <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
        </div>
      ) : (
        "Submit"
      )}
    </button>
  );
};

export default IndeterminateProgressButton;
