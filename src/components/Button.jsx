import React from 'react'

const Button = () => {
  return (
    <>
    <div className="flex  items-center justify-center h-screen">
    <div className="mt-2 ml-20">
      <button className="px-4 py-2 text-white bg-blue-700 rounded transition-transform duration-300 hover:bg-yellow-700 hover:scale-110 hover:shadow-lg">
        Hover Me
      </button>
    </div>
    <div className="mt-2 ml-20">
    <button className="px-4 py-2 text-white bg-pink-700 rounded-full animate-pulse">
      Click Me
    </button>
    </div>
    <div className="mt-5 ml-20">
    <button className="px-4 py-2 text-white bg-green-700 rounded-full animate-bounce">
      Click Me
    </button>
    </div>
    <div className="mt-5 ml-20">
    <button className="px-4 py-2 text-white bg-purple-600 rounded-full animate-spin [animation-duration:3s]">
      Click Me
    </button>
    </div>
    <div className="mt-5 ml-20">
    <button className="px-4 py-2 text-white bg-blue-700 rounded-full animate-ping [animation-duration:2s]">
      Click Me
    </button>
    </div>
    <div className="mt-5 ml-20">
    <button className="px-4 py-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transition-transform duration-300 hover:from-pink-500 hover:to-orange-500 hover:scale-105 hover:shadow-lg">
      Gradient
    </button>
    </div>
    <div className="mt-5 ml-20">
    <button className="rounded-2xl border-2   bg-pink-500 px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Hover me
    </button>
    </div>
    </div>
   </>
  )
}

export default Button