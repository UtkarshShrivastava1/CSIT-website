import React from 'react';

const CapacityDevelopment = () => {
  // Training modules list
  const trainingModules = [
    "Communicative English",
    "Business English Communication",
    "Accent Training",
    "CV/Resume Writing",
    "Cover Letter Writing",
    "Presentation Skills",
    "Group Discussion",
    "Mock Interview Preparation",
    "Mock Tests",
    "Aptitude & Analytical Skills",
    "Logical Reasoning",
    "Employability Skills",
    "Personality Development Techniques",
    "Leadership Skills",
    "Teamwork",
    "Workplace Etiquette",
    "Dressing Sense",
    "Personal Hygiene & Grooming",
    "Stress Management",
    "Life Skills Sessions",
    "Industrial Visits",
    "Campus Connect Program",
    "HR Meet & Interaction Sessions",
    "Webinars & Expert Talks",
    "Workshops & Skill Development Sessions"
  ];

  // Program benefits
  const programBenefits = [
    "Industry-Aligned Curriculum: Designed in consultation with industry experts to meet current job market requirements",
    "Practical Learning Approach: Real-world scenarios, case studies, and mock sessions for hands-on experience",
    "Personalized Feedback: Continuous evaluation with individual improvement strategies",
    "Regular Assessments: Track student progress through tests, mock interviews, and performance reviews",
    "Industry Exposure: Interaction with professionals and insights into current industry trends",
    "Confidence Building: Enhances communication, presentation, and interpersonal skills"
  ];

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
              Capacity Development Program
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              From Campus to Corporate – Building Skills, Confidence, and Career Success.
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Introduction */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#0d173b] mb-3">
              Training Programs
            </h3>
            <p className="text-base text-gray-600 mb-4">
              The Pre-Placement Training Program at CSIT is designed to prepare students for success in campus recruitment processes by enhancing their technical, aptitude, and professional skills. The program bridges the gap between academic learning and industry expectations, enabling students to transition smoothly from campus life to corporate environments.
            </p>
            <p className="text-base text-gray-600 mb-4">
              Through a well-structured combination of soft skills training, technical preparation, and industry interaction, students build confidence and become fully equipped to face placement assessments, group discussions, and interviews.
            </p>
            <p className="text-base text-gray-600">
              In addition, specialized training support is provided for competitive exams such as <strong>Graduate Record Examination (GRE)</strong> and <strong>Test of English as a Foreign Language (TOEFL)</strong>, helping students pursue higher education opportunities globally.
            </p>
          </div>

          {/* Training Modules */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#0d173b] mb-3">
              Training Modules
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              The program covers a comprehensive range of modules aimed at holistic student development:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {trainingModules.map((module, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center">
                    <span className="text-[#0d173b] font-bold text-sm mr-2">{String(index + 1).padStart(2, '0')}.</span>
                    <span className="text-sm text-gray-700">{module}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Program Benefits */}
          <div className="mt-8 p-5 bg-blue-50 border border-blue-100 rounded-md">
            <h3 className="text-lg font-medium text-[#0d173b] mb-3">
              Program Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {programBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 bg-white p-3 rounded-md shadow-sm">
                  <span className="text-[#0d173b] font-bold text-lg mt-0.5">•</span>
                  <p className="text-sm text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityDevelopment;