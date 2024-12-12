import React from 'react';
import Link from 'next/link';

const PastLesson = () => {
  const lessons = [
    { date: "27/09/2024", title: "What is AI?", link: "/TopicPage" },
    { date: "28/09/2024", title: "Machine Learning Basics", link: "/mlbasics" },
  ];

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full mb-6 px-4">
        <a href='/domaindetails'
          className="text-xl bg-black text-white px-4 py-2 rounded-md"
          aria-label="Go back"
        >
          &#8592;
        </a>
        <h1 className="text-lg font-semibold">Past Lessons</h1>
        <div
          className="bg-black text-white h-12 max-w-16 rounded-full"
        >
          <img src="Header Logo.png"></img>
        </div>
      </div>

      {/* Week Range Section */}
      <div className="w-full text-center  text-gray-600 text-sm mb-4">
        <p>Week wise dates [27/9/24 to 2/10/24]</p>
        <hr className="border-gray-400 mt-2" />
      </div>

      {/* Lessons List */}
      <div className="w-full max-w-4xl">
        {lessons.map((lesson, index) => (
          <Link href={lesson.link} key={index}>
            <button className="w-full bg-gray-300 hover:bg-gray-400 text-black font-medium px-4 py-3 rounded-md shadow-md text-left mb-4">
              {lesson.date} - {lesson.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PastLesson;
