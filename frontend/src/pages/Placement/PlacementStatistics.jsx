import React from "react";

// Dynamically import all images using Vite's import.meta.glob
const images = import.meta.glob(
  "../../assets/placementStat/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
  }
);

const placementStats = Object.values(images);

const PlacementStatistics = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-32 sm:h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Placement Statistics
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              CSIT | Placement Records
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Intro */}
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Our placement statistics showcase the consistent success of our
              students in securing excellent career opportunities. The following
              data represents our placement records across different years and
              departments.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {placementStats.map((image, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={image.default}
                  alt={`Placement Statistics ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementStatistics;
