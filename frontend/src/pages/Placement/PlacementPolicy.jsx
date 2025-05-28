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
              CSIT | Guidelines for Campus Recruitment
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="prose max-w-none text-gray-700">
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              The following policy outlines the procedures and guidelines for companies wishing to conduct campus recruitment at CSIT, Durg.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">Initial Communication</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Companies wishing to visit CSIT, Durg for Campus Placements should communicate to SPOC of CSIT.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">Invitation Process</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  The Training and Placement Cell will send an invitation mail to the company within 24 hrs seeking essential information about the Job Profile and other relevant details.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">Scheduling</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Date of Campus visit will be negotiated with the Training and Placements Cell and a SPOC will be allotted for the purpose.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">On-Campus Management</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Companies' entire schedule will be managed by the SPOC allotted to them. Companies can organize their placement session as per their convenience using the facilities available at our campus.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">Selection Process</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Once the recruitment process is over, the Company needs to declare the final selection list on spot or through e-mail.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">Offer Rollout</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  The Company can rollout the offers on spot or can send within a reasonable span of time.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-1 sm:mb-2">Offer Acceptance</h3>
                <p className="text-sm sm:text-base text-gray-700">
                  The Training and Placement Department will be communicating the acceptance of the offers by the candidates and ensure to make them reach to the company on the date assigned for joining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementPolicy;
