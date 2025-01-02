import { useState } from "react";

const SuccessProgressButton = () => {
  const [progress, setProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setProgress(0);
    setIsSuccess(false);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSuccess(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <button
      className="relative px-6 py-3 bg-green-600 text-white rounded-lg overflow-hidden flex items-center justify-center"
      onClick={handleClick}
    >
      {isSuccess ? (
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Done
        </span>
      ) : (
        <>
          <span
            className="absolute left-0 top-0 h-full bg-green-800 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></span>
          <span className="relative z-10">
            {progress < 100 ? "Submit" : ""}
          </span>
        </>
      )}
    </button>
  );
};

export default SuccessProgressButton;
