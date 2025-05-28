import React from 'react'

const TrainingProgramme = () => {
  // List of training modules
  const trainingModules = [
    "Communicative English",
    "Dressing Sense",
    "Personality Development Techniques",
    "Stress Management",
    "Employ-ability Skills",
    "Life Skills Session",
    "CV/Resume Writing",
    "Workplace Etiquette",
    "Cover letter Writing",
    "Team Work",
    "Mock Interview preparation",
    "Leadership Skills",
    "Aptitude & Analytical Skills",
    "Industrial Visit",
    "Logical Reasoning",
    "Webinar Session",
    "Business English Communication",
    "Group Discussion",
    "Accent Training",
    "Mock Test",
    "Personal Hygiene & Grooming",
    "Campus Connect Program",
    "HR meet and Interaction Session",
    "Presentation Skills",
    "Workshops",
    "Leadership Skills"
  ];

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
              Pre-Placement Training Programs
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
              The Pre-Placement Trainings Sessions aims at sharpening the skills of individuals for success in placement tests. The program spans across days with expertise from the industry, enabling them to transmit from college life to corporate ready individuals. A perfect blend of soft skills and relevant information ensures our students to develop their confidence and become ready to face the selection process.
            </p>
            
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              In order to sharpen, our Students' technical skills and polish their communication skills and make them ready for the corporate world, CSIT offer different training programs which are tailor-made for each student. These programs prepares them from a campus point of view. Also we provide Trainings to appear for Graduate Record Examination and Test of English as a Foreign Language tests.
            </p>
            
            <h3 className="text-lg sm:text-xl font-medium text-[#0d173b] mb-3 sm:mb-4">
              Training Modules
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              In this Training Activities, the following modules covered mentioned below in a Table are as follows:
            </p>
          </div>
          
          {/* Training Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {trainingModules.map((module, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0d173b] rounded-full flex items-center justify-center text-white font-medium">
                    {index + 1}
                  </div>
                  <h4 className="ml-3 text-base font-medium text-[#0d173b]">
                    {module}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Information */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <h3 className="text-base sm:text-lg font-medium text-[#0d173b] mb-2">Program Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li>Industry-aligned curriculum designed by experts</li>
              <li>Hands-on practice with real-world scenarios</li>
              <li>Personalized feedback and improvement strategies</li>
              <li>Regular assessment to track progress</li>
              <li>Exposure to current industry trends and practices</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingProgramme
