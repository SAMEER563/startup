import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-yellow-500 via-indigo-600 to-pink-700">
      <div 
        className="w-80 h-96 relative preserve-3d cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Card Front */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden transition-transform duration-1000 ${isFlipped ? 'rotate-y-180' : ''}`}>
          <img 
            src="https://miro.medium.com/v2/resize:fit:1400/1*l6s7ev65uD6otx9vV6A2AQ.png" 
            alt="Front image" 
            className="w-full h-1/2 object-cover"
          />
          <div className="p-4 bg-white">
            <h3 className="text-xl font-bold text-blue-600 mb-2">ReactJS</h3>
            <p className="text-gray-600">This component is made with ReactJS.</p>
            <h1>😍😍😍</h1>
          </div>
        </div>

        {/* Card Back */}
        <div className={`absolute w-full h-full backface-hidden rounded-xl shadow-lg overflow-hidden bg-white rotate-y-180 transition-transform duration-1000 ${isFlipped ? 'rotate-y-0' : ''}`}>
          <img 
            src="https://devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg" 
            alt="Back image" 
            className="w-full h-1/2 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Tailwind CSS</h3>
            <p className="text-gray-600">And also used Tailwind CSS.</p>
            <h1>🫠🫠🫠</h1>
            <div className="absolute bottom-4 right-4">
              <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .preserve-3d {
            transform-style: preserve-3d;
            perspective: 1000px;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .rotate-y-0 {
            transform: rotateY(0deg);
          }
        `}</style>
      </div>
    </div>
  );
};

export default FlipCard;
