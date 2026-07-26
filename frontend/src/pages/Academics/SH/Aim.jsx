import React from "react";

const ScienceHumanities = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Department of English
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Vision, Mission & Strengths
            </p>
            <div className="h-0.5 w-12 bg-[#0d173b] mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Vision Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Vision
            </h3>
            <p>
            To help students acquire skills in English Language to communicate effectively in all aspects so as to achieve academic excellence and professional distinctions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Mission
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
              Facilitate the student-fraternity with quality education and strong language-learning environment resulting in affection and a deep understanding about English Language.
              </li>
              <li>
              To inculcate professionally suitable personality traits in the students thereby imbibing ethical, professional and leadership qualities.
              </li>
            </ul>
          </div>

          {/* Program Educational Objectives Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Strengths
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
              Large set of academic resources
              </li>
              <li>
              Well-equipped language laboratory
              </li>
              <li>
              Advanced language learning soft-wares
              </li>
              <li>
              Special support classes for weaker students
              </li>
              <li>
              Guidance facilities for aspiring candidates appearing in campus drives
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceHumanities;