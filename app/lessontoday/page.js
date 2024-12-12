import React from "react";

const AIInfoPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <div className="flex items-center space-x-4">
          {/* Back Button */}
          <a href="/domaindetails" className="flex items-center justify-center w-8 h-8 bg-black text-white rounded-full">
          &#8592;
          </a>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <h2 className="text-xl font-bold">The basics of AI</h2>
        {/* User Icon */}
        <button className="flex items-center justify-center h-12 max-w-16 bg-black text-white rounded-full">
          <img src="Header Logo.png"></img>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex p-6 space-x-6">
        {/* Sidebar */}
        <aside className="bg-gray-200 p-4 w-1/4 rounded-lg">
          <ul className="space-y-4 text-gray-700">
            <li className="font-medium">Level of difficulty</li>
            <li>Intermediate</li>
            <li className="font-medium">Required Pre-Requisites</li>
            <li>Basic programming and mathematics</li>
            <li className="font-medium">Suggested Next topic</li>
            <li>Deep Learning Basics</li>
            <li className="font-medium">Learning path options</li>
            <li>AI for Mechanical Engineers</li>
          </ul>
        </aside>

        {/* Content Section */}
        <section className="flex-1 bg-white p-6 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Understanding the Basics of AI
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Artificial Intelligence (AI) is reshaping industries worldwide,
            offering groundbreaking possibilities to transform traditional
            processes, including mechanical engineering. While mechanical
            engineering focuses on the design, analysis, and manufacturing of
            physical systems, AI brings in computational intelligence to enhance
            these processes. Understanding AI's basics can empower mechanical
            engineers to leverage its potential for efficiency, innovation, and
            improved outcomes.
          </p>
          <h3 className="text-gray-800 font-semibold mb-2">
            What is Artificial Intelligence?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            AI is a branch of computer science that aims to create systems
            capable of performing tasks that typically require human
            intelligence. These tasks include learning, reasoning,
            problem-solving, understanding natural language, and even perceiving
            sensory data like images and sounds. In essence, AI enables machines
            to mimic human cognitive functions, making them capable of
            autonomous decision-making.
          </p>
          <h3 className="text-gray-800 font-semibold mb-2">
            AI operates on three main pillars:
          </h3>
          <ol className="list-decimal list-inside text-gray-600 mb-4">
            <li>
              <strong>Data:</strong> The fuel for AI, enabling systems to learn
              from historical and real-time information.
            </li>
            <li>
              <strong>Algorithms:</strong> The mathematical frameworks and
              models that process and interpret data.
            </li>
            <li>
              <strong>Computing Power:</strong> Advanced hardware and cloud
              platforms that support the computational requirements of AI
              models.
            </li>
          </ol>
          <h3 className="text-gray-800 font-semibold mb-2">
            Key AI Concepts for Mechanical Engineers
          </h3>
          <h4 className="text-gray-700 font-semibold mb-1">
            1. Machine Learning (ML)
          </h4>
          <p className="text-gray-600 leading-relaxed mb-2">
            Machine Learning is a subset of AI where systems learn from data to
            make predictions or decisions without being explicitly programmed.
            It has three main types:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>
              <strong>Supervised Learning:</strong> The model learns from
              labeled data. For example, predicting material properties based on
              past experimental results.
            </li>
            <li>
              <strong>Unsupervised Learning:</strong> The model identifies
              patterns in unlabeled data. For instance, clustering different
              mechanical components based on their dimensions or performance
              characteristics.
            </li>
            <li>
              <strong>Reinforcement Learning:</strong> The system learns by
              trial and error, optimizing actions to achieve the best outcome.
              This is useful in robotics, where machines learn to navigate or
              assemble components efficiently.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AIInfoPage;
    