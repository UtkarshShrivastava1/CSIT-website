import React from "react";
import administratorImages from "../../assets/Administrators/assets.js";

const Administrators = () => {
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
              Administrators
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Guiding CSIT with Vision, Experience &amp; Dedicated Leadership.
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            CSIT is led by a team of experienced academicians and administrators
            who bring together decades of expertise in teaching, research, and
            institutional management. Their collective vision drives the
            institute&apos;s commitment to academic excellence and holistic student
            development.
          </p>
        </div>

        {/* Administrator Cards Grid */}
        <div>
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {administratorImages.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={`Administrator ${index + 1}`}
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

export default Administrators;