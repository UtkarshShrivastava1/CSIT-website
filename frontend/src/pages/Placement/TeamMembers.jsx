import React from "react";

// Dynamically import all team member images using Vite's import.meta.glob
const images = import.meta.glob(
  "../../assets/team member/*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const teamMembers = Object.values(images);

const TeamMembers = () => {
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
              Training & Placement Team
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Dedicated Professionals Driving Student Success and Career Growth.
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Team Images - First */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
          {teamMembers.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 relative">
                <img
                  src={image.default}
                  alt={`Team Member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Introduction - After Images */}
        <div className="mb-6">
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            The Training &amp; Placement team at CSIT comprises experienced and dedicated professionals committed to shaping the career paths of students. With a strong understanding of industry expectations and academic requirements, the team works consistently to create meaningful opportunities for students.
          </p>
        </div>

        {/* Our Strength */}
        <div className="mb-4">
          <h3 className="text-base font-semibold text-[#0d173b] mb-2">
            Our Strength
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              A team of skilled and proactive professionals
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              Strong industry connections and networking
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              Student-centric approach to career development
            </li>
          </ul>
        </div>

        {/* Our Role */}
        <div className="mb-4">
          <h3 className="text-base font-semibold text-[#0d173b] mb-2">
            Our Role
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              Bridging the gap between academia and industry
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              Facilitating internships and placement opportunities
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              Coordinating recruitment drives and industry interactions
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              Guiding students through every stage of their career journey
            </li>
          </ul>
        </div>

        {/* Our Commitment */}
        <div>
          <h3 className="text-base font-semibold text-[#0d173b] mb-2">
            Our Commitment
          </h3>
          <p className="text-sm text-gray-600 mb-2 italic">
            "Guiding, Training, and Empowering Students for Successful Careers."
          </p>
          <p className="text-sm text-gray-700">
            The Training &amp; Placement Cell at CSIT is dedicated to providing continuous and comprehensive support to students throughout their academic journey and beyond. Our focus is on nurturing talent, enhancing employability, and preparing students to meet industry expectations with confidence and competence.
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Through a combination of structured training, industry interaction, and personalized guidance, we ensure that every student is well-equipped for a successful career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;