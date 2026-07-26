import React from 'react';

const Internship = () => {
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
              Vocational Training & Internship
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Learn by Doing – Gain Skills, Experience, and Industry Exposure
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
              Vocational Training is designed to prepare students for careers that require practical and technical expertise. It focuses on hands-on learning and skill development in specific trades, technologies, or professional domains, enabling students to gain real-world experience beyond classroom education.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              An internship is a short-term work experience provided by an organization, allowing students to apply their academic knowledge in a professional environment and gain industry exposure.
            </p>
          </div>
          
          {/* University Requirements */}
          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-medium text-[#0d173b] mb-3 sm:mb-4">
              University Requirements
            </h3>
            <p className="text-sm text-gray-600 mb-2 font-medium">
              As per the norms of Chhattisgarh Swami Vivekanand Technical University (CSVTU):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Students of B.Tech (4th Semester and 6th Semester) must undergo Vocational Training</li>
              <li>Duration: <strong>Minimum 4 weeks</strong> to <strong>Maximum 6 weeks</strong></li>
              <li>Completion of training is mandatory as part of the academic curriculum</li>
            </ul>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-medium text-[#0d173b] mb-3 sm:mb-4">
              Benefits of Internships & Vocational Training
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Practical Experience</h4>
                <p className="text-sm text-gray-700">
                  Students gain hands-on exposure in real work environments, enabling them to apply theoretical concepts to practical situations.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Industry Exposure</h4>
                <p className="text-sm text-gray-700">
                  Provides insight into industry practices, workflows, tools, and technologies used in professional settings.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Skill Development</h4>
                <p className="text-sm text-gray-700">
                  Enhances:
                </p>
                <ul className="list-disc pl-5 mt-1 text-sm text-gray-700">
                  <li>Technical Skills</li>
                  <li>Communication and Teamwork</li>
                  <li>Problem-solving and Professional Behaviour</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Career Exploration</h4>
                <p className="text-sm text-gray-700">
                  Helps students explore different industries and roles, allowing them to make informed career decisions.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Networking Opportunities</h4>
                <p className="text-sm text-gray-700">
                  Builds connections with industry professionals, mentors, and potential employers.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Resume Enhancement</h4>
                <p className="text-sm text-gray-700">
                  Adds valuable work experience to a student's profile, increasing employability and career prospects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;