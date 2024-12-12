import React from 'react';


const PastLesson = () => {
  

  return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full max-w-4xl mb-6">
        <button
          className="text-xl bg-black text-white px-4 py-2 rounded-md"
          
        >
          &#8592;
        </button>
        <h1 className="text-lg font-semibold">Past Lessons</h1>
        <div className="text-xl bg-black text-white px-4 py-2 rounded-full">&#9733;</div> {/* Icon Button */}
      </div>

      {/* Week Range Section */}
      <div className="w-full max-w-4xl text-center text-gray-600 text-sm mb-4">
        <p>Week wise dates [27/9/24 to 2/10/24]</p>
        <hr className="border-gray-400 mt-2" />
      </div>

      {/* Lessons List */}
      <div className="w-full max-w-4xl">
        <button
          className="w-full bg-gray-300 text-black font-medium px-4 py-3 rounded-md shadow-md text-left mb-4"
          
        >
          27/09/2024 - What is AI?
        </button>
      </div>
    </div>
  );
};

export default PastLesson;
