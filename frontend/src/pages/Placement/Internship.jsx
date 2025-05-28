import React from 'react'

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
              Internship & Vocational Training
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              CSIT | Career Development
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
              Vocational Training prepares learners for jobs that are based in manual or practical activities, traditionally non-academic and totally related to a specific trade, occupation or vocation, hence the term, in which the learner participates. It is sometimes referred to as technical education, as the learner directly develops expertise in a particular group of techniques or technology.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              An internship is a period of work experience offered by an organization for a limited period of time.
            </p>
          </div>
          
          {/* University Requirements */}
          <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-100 mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-medium text-[#0d173b] mb-3 sm:mb-4">
              University Requirements
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              According to University Norms of CSVTU, Students of 4th Semester and 6th Semester of B.Tech. have to go through Vocational training compulsorily for minimum 4 weeks and maximum 6 weeks.
            </p>
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
                  Gain hands-on experience in real-world work environments and apply theoretical knowledge to practical situations.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Industry Exposure</h4>
                <p className="text-sm text-gray-700">
                  Understand industry practices, workflows, and technologies used in professional settings.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Skill Development</h4>
                <p className="text-sm text-gray-700">
                  Develop technical skills, soft skills, and professional competencies required in the workplace.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Career Exploration</h4>
                <p className="text-sm text-gray-700">
                  Explore different career paths and industries to make informed decisions about future career choices.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Networking</h4>
                <p className="text-sm text-gray-700">
                  Build professional connections with industry professionals, potential mentors, and future employers.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm">
                <h4 className="text-base font-medium text-[#0d173b] mb-2">Resume Enhancement</h4>
                <p className="text-sm text-gray-700">
                  Strengthen your resume with relevant work experience and demonstrate your commitment to professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Internship
