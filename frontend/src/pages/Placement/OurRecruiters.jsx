import React, { useState } from 'react';

const OurRecruiters = () => {
  // Companies with their official domain for Clearbit logo fetching
  // Corrected domains for better logo display
  const companies = [
    { name: "LTI", domain: "larsentoubro.com" }, // Updated domain for LTI
    { name: "HCL", domain: "hcltech.com" },
    { name: "Cummins", domain: "cummins.com" },
    { name: "BOSCH", domain: "bosch.com" },
    { name: "Accenture", domain: "accenture.com" },
    { name: "Cognizant", domain: "cognizant.com" },
    { name: "HEXAWARE", domain: "hexaware.com" },
    { name: "Capgemini", domain: "capgemini.com" },
    { name: "SYNAPSE", domain: "synapse.com" }, // Changed to simpler domain
    { name: "Mahindra", domain: "mahindra.com" },
    { name: "Tech Mahindra", domain: "techmahindra.com" },
    { name: "INDIAN ARMY", domain: "indianarmy.gov.in" }, // Changed to more standard domain
    { name: "GlobalLogic", domain: "globallogic.com" }
  ];

  // For tracking images that failed to load
  const [failedImages, setFailedImages] = useState({});

  // Handle image load error
  const handleImageError = (companyName, domain) => {
    setFailedImages(prev => ({
      ...prev,
      [companyName]: true
    }));
  };

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
              CSIT | Industry Partners
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Introduction */}
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              CSIT has established strong relationships with leading companies across various industries. Our placement cell works closely with these organizations to provide excellent career opportunities for our students.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              The following companies have recruited our students, offering them promising career paths and professional growth opportunities.
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center"
              >
                <div className="h-24 flex items-center justify-center mb-4">
                  {failedImages[company.name] ? (
                    <div className="flex items-center justify-center w-full h-full bg-gray-100 rounded-md">
                      <span className="text-lg font-medium text-gray-500">{company.name}</span>
                    </div>
                  ) : (
                    <img 
                      src={`https://logo.clearbit.com/${company.domain}`} 
                      alt={`${company.name} logo`} 
                      className="max-h-full max-w-full object-contain"
                      onError={() => handleImageError(company.name, company.domain)}
                    />
                  )}
                </div>
                <h4 className="text-base font-medium text-[#0d173b] text-center">
                  {company.name}
                </h4>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-2">Recruitment Process</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Companies visit our campus for recruitment drives</li>
              <li>Students undergo rigorous training to prepare for interviews</li>
              <li>Placement cell facilitates the entire recruitment process</li>
              <li>Regular feedback sessions help improve placement outcomes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecruiters;