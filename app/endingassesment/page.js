import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex justify-between items-center w-full mb-6 px-4">
        <a href='/domaindetails'
          className="text-xl bg-black text-white px-4 py-2 rounded-md"
          aria-label="Go back"
        >
          &#8592;
        </a>
        <h1 className="text-lg font-semibold  bg-black text-white px-4 py-2 rounded-full"><a href="/">Dashboard</a></h1>
        <div
          className="text-xl bg-black text-white h-12 max-w-16 rounded-full"
        >
        <a href="/"><img src="Header Logo.png"></img></a>
        </div>
      </div>
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button className="text-sm text-gray-600">&#x25C0; Dashboard</button>
        </div>
        <div className="mb-6 text-center">
          <p className="text-lg font-semibold text-gray-800">
            The number of Questions they have answered and how many words were in the answers
          </p>
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;