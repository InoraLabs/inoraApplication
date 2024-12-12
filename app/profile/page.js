// App.jsx
import React from 'react';

const Profile = () => {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center">
      {/* Profile Header */}
      <div className="bg-gray-200 w-3/4 md:w-1/2 rounded-lg shadow-lg flex items-center justify-between p-4">
        {/* User Info */}
        <div className="flex items-center gap-4">
          {/* Profile Picture Placeholder */}
          <div className="w-16 h-16 bg-gray-400 rounded-full"></div>

          {/* User Details */}
          <div>
            <h1 className="text-lg font-semibold text-gray-800">TheArkKnight</h1>
            <p className="text-sm text-gray-600">Abhishek Kumar</p>
            <p className="text-sm text-gray-600">No of certifications: 3</p>
          </div>
        </div>

        {/* Dashboard Button */}
        <button className="bg-black text-white px-4 py-2 rounded-lg">Dashboard</button>
      </div>
      <div>
            {/* User Information Dropdown */}
            <div className="bg-gray-200 rounded-lg shadow-lg mt-4">
            <div className="p-4 flex items-center justify-between">
              <span className="text-gray-800 font-medium">User Information</span>
              <button className="text-gray-800">▼</button>
            </div>
            </div>
        </div>    
    </div>
  );
};

export default Profile;