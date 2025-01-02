import React, { useState } from 'react'
import Popup1Model from '../models/Popup1Model';

const Popup1 = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button 
          onClick={openModal} 
          className="px-4 py-2  bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Open Modal
        </button>
        
  
        <Popup1Model show={isModalVisible} onClose={closeModal}>
            <div className='flex justify-end'>
            <button 
              onClick={closeModal} 
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
            >
             X
            </button>
            </div>
          <h2 className="text-xl font-semibold mb-4">Hi Friends!!</h2>
          <p>This is a simple modal created using React and Tailwind CSS!</p>
          <div className="mt-4">
          </div>
        </Popup1Model>
      </div>
    );
}

export default Popup1