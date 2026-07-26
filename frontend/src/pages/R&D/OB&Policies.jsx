import React from "react";

const OfficeBearersPolicies = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Office Bearers & Policies
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              Students Association | CSIT Durg
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Placeholder */}
      <div className="py-24 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-6">
          <span className="text-5xl">📄</span>
        </div>

        <h3 className="text-3xl font-bold text-[#0d173b]">
          Coming Soon
        </h3>

        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">
          The content for the <strong>Office Bearers & Policies</strong> section
          is currently under preparation and will be updated soon.
        </p>

        <div className="mt-8">
          <span className="inline-block px-6 py-2 rounded-full bg-[#0d173b] text-white text-sm font-medium">
            Stay Tuned
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfficeBearersPolicies;