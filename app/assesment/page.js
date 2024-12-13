import React from "react";
import Link from "next/link";

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
          <img src="Header Logo.png"></img>
        </div>
      </div>
      <div className="max-w-lg p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <button className="text-sm text-gray-600">Leave</button>
          <span className="text-sm text-gray-600">Date</span>
        </div>
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            What is narrow AI and how is it better than or worse than General AI?
          </p>
          <textarea
            className="w-full h-40 p-4 bg-gray-200 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Answer box <User can give an answer>"
          ></textarea>
        </div>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition">
            Previous
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition">
           <Link href="/endingassesment"> Submit</Link>
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;