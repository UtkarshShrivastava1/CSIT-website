import React from "react";

const DevelopmentProgram = () => {
  const modules = [
    "Aptitude & Reasoning Training",
    "Soft Skills & Personality Development",
    "Technical Skill Enhancement",
    "Mock Interviews & GD Sessions",
    "Resume Building & Career Guidance",
    "Certification & Value-Added Programs",
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
              Development Program
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Building Skills for a Successful Future
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Skill Development Cell */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-2">
            Skill Development Cell
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            The Skill Development Cell at Chhatrapati Shivaji Institute of Technology is dedicated to enhancing the employability and professional competencies of students. The cell acts as a bridge between academic learning and industry expectations by focusing on practical skills, personality development, and career readiness.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-2">
            The SDC works closely with the Training &amp; Placement Cell to ensure that students are well-prepared to meet the demands of the corporate world and competitive examinations.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Objectives</h4>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              To develop industry-relevant technical and soft skills
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              To improve communication, aptitude, and problem-solving abilities
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              To prepare students for campus placements and higher studies
            </li>
            <li className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-[#0d173b] font-bold">•</span>
              To promote continuous learning and self-improvement
            </li>
          </ul>
        </div>

        {/* Key Activities */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-4">
          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Key Activities</h4>
          <ul className="space-y-1">
            {modules.map((module, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#0d173b] font-bold">•</span>
                {module}
              </li>
            ))}
          </ul>
        </div>

        {/* Faculty Coordinator */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-[#0d173b] text-sm mb-2">Faculty Coordinator</h4>
          <p className="text-sm text-gray-700">Prof. Kamlesh Upadhyay – Assistant Professor [Management]</p>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProgram;