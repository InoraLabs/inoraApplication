import React from "react";

const CourseForm = () => {
  return (
    <>
    <div className="flex justify-between items-center w-full mb-6">
    <a href='/profile' className="text-xl bg-black text-white px-4 py-2 rounded-md">&#8592;</a> {/* Back Button */}
    <h1 className="text-lg font-semibold">Topic-Date</h1>
    <div className=" bg-black text-white h-12 max-w-16 rounded-full"><img src="Header Logo.png"></img></div> {/* Icon Button */}
  </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <form className="space-y-6">
          {/* Short-term Goals */}
          <div>
            <label
              htmlFor="short-term-goals"
              className="block text-sm font-medium text-gray-700"
            >
              What are your short-term goals for taking this course?
            </label>
            <textarea
              id="short-term-goals"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            ></textarea>
          </div>

          {/* Familiarity with Subject */}
          <div>
            <label
              htmlFor="familiarity"
              className="block text-sm font-medium text-gray-700"
            >
              How familiar are you with this subject or related areas? Have you
              studied it before, either formally or informally?
            </label>
            <textarea
              id="familiarity"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            ></textarea>
          </div>

          {/* Learning Pace */}
          <div>
            <label
              htmlFor="learning-pace"
              className="block text-sm font-medium text-gray-700"
            >
              Do you prefer to learn at a fast pace, or would you rather take a
              slower, more in-depth approach to understand concepts thoroughly?
            </label>
            <textarea
              id="learning-pace"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            ></textarea>
          </div>

          {/* Assessment Preferences */}
          <div>
            <label
              htmlFor="assessments"
              className="block text-sm font-medium text-gray-700"
            >
              What types of assessments do you find most effective: quizzes,
              essays, projects, presentations, or other formats?
            </label>
            <textarea
              id="assessments"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              rows="3"
            ></textarea>
          </div>

          {/* Study Groups */}
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium text-gray-700">
              Are you interested in participating in study groups or online
              forums?
            </p>
            <div className="flex items-center space-x-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="study-groups"
                  value="yes"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="study-groups"
                  value="no"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default CourseForm;
