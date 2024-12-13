import React from "react";
import Link from "next/link";

const App = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full mb-6">
        <a href='/domaindetails' className="text-xl bg-black text-white px-4 py-2 rounded-md">&#8592;</a> {/* Back Button */}
        <h1 className="text-lg font-semibold  bg-black text-white px-4 py-2 rounded-full"><a href="/">Dashboard</a></h1>
        <div className=" bg-black text-white h-12 max-w-16 rounded-full"><img src="Header Logo.png"></img></div> {/* Icon Button */}
      </div>

    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Full-width Content */}
      <div className="w-full px-6">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {/* Icon */}
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 text-2xl">📄</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 font-medium">
            IMPORTANT: Please remember this is not an assessment. We are not
            looking for a right answer as much as we are trying to understand
            how well you understand the material.
          </p>
          <div className="mt-6 text-gray-800 text-lg font-semibold">
            Name of Topics being assessed
          </div>
          <Link href="/assesment">
            <button
              aria-label="Navigate to assessment page"
              className="mt-6 px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300 transition-transform transform hover:scale-105"
            >
              Let&#39;s see how well we understand
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
