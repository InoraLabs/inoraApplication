import React from 'react';

const DomainDetails = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full max-w-4xl mb-6">
        <button className="text-xl bg-black text-white px-4 py-2 rounded-md">&#8592;</button> {/* Back Button */}
        <h1 className="text-lg font-semibold">Artificial Intelligence</h1>
        <div className="text-xl bg-black text-white px-4 py-2 rounded-full">&#9733;</div> {/* Icon Button */}
      </div>

      {/* Exploratory Widget Section */}
      <div className="bg-gray-300 rounded-md shadow-md w-full max-w-4xl p-8 text-center mb-6">
        <p className="text-lg font-medium">Exploratory Widget from Graph Database.</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between w-full max-w-4xl mb-6">
        <button className="bg-gray-300 text-black font-medium px-6 py-2 rounded-md shadow-md">Past Lessons</button>
        <button className="bg-gray-300 text-black font-medium px-6 py-2 rounded-md shadow-md">Lessons Today</button>
        <button className="bg-gray-300 text-black font-medium px-6 py-2 rounded-md shadow-md">Questions</button>
      </div>

      {/* News Section */}
      <div className="w-full max-w-4xl text-center text-sm text-gray-600 mt-6">
        <p>News Articles related to the selected domain</p>
      </div>
    </div>
    </>
  );
};

export default DomainDetails;
