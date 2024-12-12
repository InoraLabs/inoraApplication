import React from "react";

const Dashboard = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
                {/* Header Section */}
                <div className="bg-gray-300 rounded-md text-center py-4 px-8 w-full max-w-md mb-6">
                    <h1 className="text-lg font-semibold">
                        Welcome ,TheArkKnight
                    </h1>
                    <h1 className="text-lg font-semibold">Current Streak: 3</h1>
                </div>

                {/* Active Domains */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-4xl">
                    {["Domain 1", "Domain 2", "Domain 3"].map(
                        (domain, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center"
                            >
                                <div className="h-24 w-32 bg-gray-200 mb-4">
                                    <h2 className="text-md font-semibold mb-2">
                                        {domain}
                                    </h2>
                                </div>{" "}
                                {/* Placeholder for Image */}
                                <button className="bg-black text-white px-6 py-2 rounded-md">
                                    {" "}
                                    <a href="/domaindetails">RESUME</a>{" "}
                                </button>
                            </div>
                        )
                    )}
                </div>

                {/* Explore More Section */}
                <div className="text-center mb-6">
                    <h2 className="text-md font-semibold">
                        Wait! There is more.
                    </h2>
                    <p className="text-sm text-gray-700">
                        Here are more Domains you can explore with us.
                    </p>
                </div>

                {/* Explore More Domains */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                    {["Domain 4", "Domain 5", "Domain 6"].map(
                        (domain, index) => (
                            <div
                                key={index}
                                className="bg-gray-300 rounded-md shadow-md p-4 flex flex-col items-center"
                            >
                                <h2 className="text-md font-semibold mb-2">
                                    {domain}
                                </h2>
                                <button className="bg-black text-white px-6 py-2 rounded-md">
                                    Explore
                                </button>
                            </div>
                        )
                    )}
                </div>

                <p className="text-center text-sm text-gray-600 mt-6">
                    More domains as per our offering
                </p>
            </div>
        </>
    );
};

export default Dashboard;
