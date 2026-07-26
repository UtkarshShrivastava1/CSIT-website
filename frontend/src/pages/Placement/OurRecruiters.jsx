import React from "react";
import companyLogos from "../../assets/Compaines/assets.js";

const OurRecruiters = () => {
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
              Our Recruiters
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Trusted by Industry Leaders – Empowering Students with Career Opportunities.
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            CSIT has built strong and long-standing relationships with leading
            organizations across diverse industry sectors. The Training &amp;
            Placement Cell actively collaborates with these companies to create
            meaningful career opportunities for students and ensure successful
            campus recruitment outcomes.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3">
            With a focus on quality placements and industry alignment, the
            institute continues to strengthen its network of recruiters year after
            year.
          </p>
        </div>

        {/* Recruiter Logos Grid */}
        <div>
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">
            Our Recruiting Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`Company Logo ${index + 1}`}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecruiters;