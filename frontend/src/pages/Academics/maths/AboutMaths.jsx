import React from "react";

const AboutMaths = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              About Department
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Vision, Mission & Strengths
            </p>
            <div className="h-0.5 w-12 bg-[#0d173b] mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Introduction Section */}
          <div className="mb-8">
            <p>
              The Department of Applied Mathematics is dedicated to delivering
              high-quality education that bridges fundamental mathematical
              theories with practical engineering solutions.
            </p>
            <p>
              Mathematics serves as the structural foundation of all engineering
              disciplines. Our department builds this core strength by
              conducting foundational mathematics courses during the first and
              second years and then offering a number of electives designed to
              align with modern industry demands, such as data science,
              cryptography, and computational modeling to the senior students.
            </p>
          </div>

          {/* Vision Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Vision
            </h3>
            <p>
              Department of Mathematics sketches out student knowledge and
              understanding of basic concepts that ropes them to manage and
              apply their knowledge, such as computation, analysis, synthesis
              and evaluation towards their personal values, concerns and
              preferences.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Our Mission
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Provide a platform to acquire mathematical skills for solving
                complex engineering problems.
              </li>
              <li>To impart experiential learning skills in mathematics.</li>
              <li>
                To engage faculty in research to enrich teaching-learning
                process.
              </li>
            </ul>
          </div>

          {/* Strengths Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-2">
              Strengths
            </h3>
            <p>
              A Department of Mathematics serves as a foundational pillar for
              academic institutions. Its core strengths typically lie in expert
              faculty, research excellence, interdisciplinary collaboration,
              and the cultivation of vital lifelong problem-solving skills for
              students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMaths;