import React from "react";

const TopicDetails = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          {/* Back Button */}
          <a href="/domaindetails" className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
          &#8592;
          </a>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <h2 className="text-xl font-bold">Artificial Intelligence</h2>
        {/* User Icon */}
        <button className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
          <img src="Header Logo.png"></img>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 p-6 space-x-6">
        {/* Sidebar */}
        <div className="bg-gray-200 p-6 rounded-lg w-1/3">
          <ul className="space-y-6 text-gray-700">
            <li className="font-medium">Name of Topic</li>
            <li className="font-medium">Level of Difficulty</li>
            <li className="font-medium">Prerequisites</li>
            <li className="font-medium">Suggested Next Topic</li>
            <li className="font-medium">Current Learning Path</li>
          </ul>
        </div>

        {/* Graph Display Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-gray-500 text-center">
            This will display the graph for the domain selected
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopicDetails;
