import React from "react";

const Home = () => {
  return (
    <>
      {/* Background Gradient and Centering Content */}
      <div className="min-h-screen bg-gradient-to-b from-yellow-500 via-indigo-600 to-pink-700 flex items-center justify-center">
        
       <div className="flex flex-col gap-6">
       <a
            href="/piechart"
            className="text-white bg-pink-500 hover:bg-teal-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Pie Chart
          </a>
           {/* Button Link */}
           <a
            href="/button"
            className="text-white bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Button
          </a>

          {/* Sign Up Form Link */}
          <a
            href="/signup"
            className="text-white bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Sign Up Form
          </a>

          {/* Sign In Form Link */}
          <a
            href="/signin"
            className="text-white bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Sign In Form
          </a>

          {/* Navbar Link */}
          <a
            href="/navbar"
            className="text-white bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Navbar
          </a>

          {/* Footer Link */}
          <a
            href="/footer"
            className="text-white bg-gray-500 hover:bg-gray-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            Footer
          </a>

          {/* Cards Link */}
          <a
            href="/flipcard"
            className="text-white bg-teal-500 hover:bg-teal-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            FipCard
          </a>
       </div>
      </div>
    </>
  );
};

export default Home;
