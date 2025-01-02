import React from 'react'

const Popup1Model = ({ show, onClose, children }) => {
    
        if (!show) return null;
      
        return (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <button 
                onClick={onClose} 
                className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800"
              >
                &times;
              </button>
              <div>{children}</div>
            </div>
          </div>
        );
      };

export default Popup1Model