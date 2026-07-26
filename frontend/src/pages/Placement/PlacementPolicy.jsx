import React from 'react';

const PlacementPolicy = () => {
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
              Placement Policy
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Simple | Transparent | Efficient – A seamless recruitment experience for recruiters and students.
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="prose max-w-none text-gray-700">
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              This Placement Policy outlines the procedures and guidelines for organizations seeking to conduct campus recruitment at CSIT, Durg. The Training &amp; Placement Cell ensures a smooth, transparent, and efficient recruitment process for both recruiters and students.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              {/* 1. Initial Communication */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">1. Initial Communication</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Organizations interested in campus recruitment are requested to initiate communication with the Single Point of Contact (SPOC) of CSIT by sharing their intent to participate in the placement process.
                </p>
              </div>
              
              {/* 2. Invitation Process */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#1e305f] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">2. Invitation Process</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Upon receiving the request, the Training &amp; Placement Cell will respond within 24 hours and request essential details, including:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                  <li>Job profile and role description</li>
                  <li>Eligibility criteria</li>
                  <li>Compensation package</li>
                  <li>Selection process details</li>
                </ul>
              </div>
              
              {/* 3. Scheduling of Campus Drive */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">3. Scheduling of Campus Drive</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  The date and time of the recruitment drive will be mutually finalized in coordination with the Training &amp; Placement Cell. A dedicated SPOC will be assigned to the company for seamless coordination.
                </p>
              </div>
              
              {/* 4. Pre-Placement Requirements */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#1e305f] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">4. Pre-Placement Requirements</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Companies may conduct:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                  <li>Pre-Placement Talks (PPTs)</li>
                  <li>Online/Offline Aptitude Tests</li>
                  <li>Technical Assessments</li>
                </ul>
                <p className="text-sm text-gray-700 mt-2">
                  The institute will provide all necessary infrastructural and logistical support.
                </p>
              </div>
              
              {/* 5. On-Campus Recruitment Management */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">5. On-Campus Recruitment Management</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  The entire recruitment process will be coordinated by the assigned SPOC. Recruiters are free to structure their selection process (tests, group discussions, interviews) as per their requirements using campus facilities.
                </p>
              </div>
              
              {/* 6. Selection Process */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#1e305f] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">6. Selection Process</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Upon completion of the recruitment process, companies are requested to:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                  <li>Declare the final list of selected candidates on the same day, or</li>
                  <li>Share the results via email within a reasonable timeframe</li>
                </ul>
              </div>
              
              {/* 7. Offer Rollout */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">7. Offer Rollout</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Organizations may:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                  <li>Issue offer letters on the spot, or</li>
                  <li>Share them within a mutually agreed timeframe</li>
                </ul>
              </div>
              
              {/* 8. Offer Acceptance & Joining */}
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#1e305f] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">8. Offer Acceptance &amp; Joining</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  The Training &amp; Placement Cell will:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                  <li>Communicate offer acceptance from selected candidates</li>
                  <li>Coordinate with students to ensure timely joining as per company schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementPolicy;