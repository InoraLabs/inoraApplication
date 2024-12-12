import React from 'react';
import Link from "next/link";

const DomainDetails = () => {
  return (
    <>
    <div className="h-screen bg-grey-100 flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full mb-6">
        <a href='/' className="text-xl bg-black text-white px-4 py-2 rounded-md">&#8592;</a> {/* Back Button */}
        <h1 className="text-lg font-semibold">Artificial Intelligence</h1>
        <div className=" bg-black text-white h-12 max-w-16 rounded-full"><img src="Header Logo.png"></img></div> {/* Icon Button */}
      </div>

      {/* Exploratory Widget Section */}
      <div className="bg-gray-300 rounded-md shadow-md w-full max-w-4xl p-8 text-center mb-6">
        <p className="text-lg font-medium"><Link href="/topicexplaination">Exploratory Widget from Graph Database.</Link></p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between w-full max-w-4xl mb-6">
        <button className="bg-gray-300 text-black font-medium px-6 py-2 rounded-md shadow-md"><Link href="/pastlessons">past lessons</Link></button>
        <button className="bg-gray-300 text-black font-medium px-6 py-2 rounded-md shadow-md"><Link href="/lessontoday">Lesson today</Link></button>
        <button className="bg-gray-300 text-black font-medium px-6 py-2 rounded-md shadow-md"><Link href="/startingassesment">Questions</Link></button>
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
