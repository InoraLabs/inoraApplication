// src/components/TopicPage.jsx

import React from 'react';

const TopicPage = () => {
  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-6">
    <a href='/pastlessons' className="text-xl bg-black text-white px-4 py-2 rounded-md">&#8592;</a> {/* Back Button */}
    <h1 className="text-lg font-semibold">Topic-Date</h1>
    <div className=" bg-black text-white h-12 max-w-16 rounded-full"><img src="Header Logo.png"></img></div> {/* Icon Button */}
  </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-2xl font-bold">What is Artificial Intelligence?</h2>
        
        {/* Description */}
        <p className="text-base leading-relaxed">
          Artificial Intelligence (AI) is a transformative field of computer science that enables machines to perform tasks traditionally requiring human intelligence. These tasks range from learning and reasoning to perceiving sensory data, such as images or sounds, and even engaging in natural language communication. AI is becoming a cornerstone of modern technology, influencing industries from healthcare to manufacturing.
        </p>

        {/* Subheading */}
        <h3 className="text-xl font-semibold">Defining AI</h3>

        {/* Detailed Explanation */}
        <p className="text-base leading-relaxed">
          AI encompasses systems and algorithms designed to simulate cognitive processes. At its core, AI aims to replicate human-like decision-making and problem-solving capabilities. It operates on three fundamental pillars:
        </p>
        <ul className="list-decimal list-inside pl-6 space-y-2">
          <li><strong>Data:</strong> The foundational element of AI, data is used for training models to recognize patterns and make predictions.</li>
          <li><strong>Algorithms:</strong> Mathematical frameworks and rules that allow AI systems to process and analyze data effectively.</li>
          <li><strong>Computing Power:</strong> Hardware and cloud computing infrastructure enable the intensive calculations required for AI systems to function.</li>
        </ul>

        {/* AI Types */}
        <h3 className="text-xl font-semibold">AI systems are categorized into three types:</h3>
        <ul className="list-disc list-inside pl-6 space-y-2">
          <li><strong>Narrow AI:</strong> Focused on specific tasks, such as voice recognition or playing chess.</li>
          <li><strong>General AI:</strong> Theoretical systems capable of performing any intellectual task that a human can do.</li>
          <li><strong>Superintelligent AI:</strong> A futuristic concept of machines surpassing human intelligence in virtually every aspect.</li>
        </ul>
      </div>
    </div>
  );
};

export default TopicPage;
