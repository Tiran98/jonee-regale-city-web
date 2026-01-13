import React from "react";

const UnderDevelopment = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-linear-to-r from-gray-900 to-purple-900 text-white">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-4xl font-bold mb-2">
          Jonee Regale City
        </h1>

        <p className="text-lg text-gray-300 mt-6 mb-6">
          Our restaurant site is currently under development
        </p>

        <div className="border border-purple-400 rounded-lg p-4 bg-black/30">
          <p className="text-sm text-gray-300">
            We are working hard to bring you an improved dining and management experience.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Please check back soon
        </p>
      </div>
    </div>
  );
};

export default UnderDevelopment;
