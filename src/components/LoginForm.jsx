import React, { useState, useEffect } from 'react';

const LoginForm = () => {
  // State to manage form fields and validation
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Check if all fields are filled
  const validateForm = () => {
    const { email, password } = formData;
    setIsFormValid(email !== '' && password !== '');
  };

  // Validate form on every field change
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Handle form submission and show alert only when form is valid
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert('Form Submitted');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateForm}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={validateForm}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message for incomplete form */}
        {!isFormValid && isHovering && (
          <div className="absolute text-sm text-red-500 top-0 left-1/2 transform -translate-x-1/2 mt-4">
            Please fill all fields
          </div>
        )}

        {/* Submit Button */}
        <div className="relative">
          <button
            type="submit"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`w-1/3 py-3 rounded-md text-white font-semibold transition-all duration-300 relative ${
              isFormValid
                ? 'bg-blue-500 hover:bg-blue-600 cursor-pointer'
                : 'bg-red-400 cursor-not-allowed'
            } 
            ${!isFormValid && isHovering ? 'transform translate-x-full' : ''}`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
