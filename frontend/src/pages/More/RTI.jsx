import React from 'react';
import rtiImage from '../../assets/RTI.jpg';

const RTI = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Right to Information (RTI)</h1>
          <p className="text-base text-gray-200 mt-2">
            Information about the Right to Information Act and procedures at CSIT
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col items-center gap-8">
              {/* Text Content - At the Top */}
              <div className="w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-[#0d173b] mb-6">About RTI at CSIT</h2>
                <p className="text-gray-700 mb-6">
                  The Right to Information Act, 2005 (RTI) is an Act of the Parliament of India "to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities, in order to promote transparency and accountability in the working of every public authority."
                </p>
                <p className="text-gray-700">
                  CSIT is committed to transparency and accountability in its operations. As a public authority, we are obliged to provide information to citizens under the RTI Act.
                </p>
              </div>
              
              {/* Image Section - Below Text */}
              <div className="w-full max-w-2xl mt-8">
                <img 
                  src={rtiImage} 
                  alt="Right to Information" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTI;
