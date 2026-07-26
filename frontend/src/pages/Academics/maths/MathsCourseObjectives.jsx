import React from "react";
import { Book, Target, FileText } from "lucide-react";

const courses = [
  {
    subject: "Engineering Mathematics I",
    code: "3000A02AT014",
    objectives: [
      "Develop the basic mathematical skills of engineering students that are imperative for effective understanding of engineering subjects.",
      "The topics introduced will serve as basic tools for specialized studies in many fields of engineering and technology.",
      "This course includes: Matrices, Differential Calculus, Partial Differentiation, Integral Calculus and Ordinary Differential Equations.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/semester-1-chemical-engineering/?wpdmdl=21211&refresh=6a3e3b36db7671782463286",
  },
  {
    subject: "Engineering Mathematics II",
    code: "3000B02AT014",
    objectives: [
      "The objective of the course is aimed to develop the basic mathematical skills of engineering students that are imperative for effective understanding of engineering subjects. Also, the topics introduced will serve as basic tools for specialized studies in many fields of engineering and technology. This course includes: Complex numbers, Sequence and Series, Multivariable Calculus, Vector Calculus and Statistics.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/semester-2-chemical-engineering/?wpdmdl=21212&refresh=6a3e3dd7ba9351782463959",
  },
  {
    subject: "Mathematics III",
    code: "B000311(014)",
    objectives: [
      "To provide knowledge of Laplace transform of elementary functions including its properties and applications to solve ordinary differential equations.",
      "To have thorough knowledge of partial differential equations which arise in mathematical descriptions of situations in engineering.",
      "To study about a quantity that may take any of a given range of values that can’t be predicted as it is but can be described in terms of their probability.",
      "To provide a thorough understanding of interpolation and methods to solve ordinary differential equation.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/b-tech-3rd-semester-3/?wpdmdl=12485&refresh=6a3e45817dc901782465921",
  },
  {
    subject: "Discrete Mathematics",
    code: "B022411(014)",
    objectives: [
      "To introduce a number of discrete mathematical structures found to be serving as tools in the development of theoretical computer science. Course focuses on how discrete structures actually helped computer engineers to solve problems occurred in the development of programming languages. Course highlights the importance of discrete structures towards simulation of a problem in computer science engineering.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/b-tech-4th-semester-10/?wpdmdl=13582&refresh=6a3e45817afe01782465921",
  },
];

const MathsCourseObjectives = () => {
  return (
    <div className="space-y-8">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Course Objectives
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Department of Mathematics
            </p>
            <div className="h-0.5 w-12 bg-[#0d173b] mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6 bg-gray-50 border-b">
              <h3 className="text-xl font-bold text-[#0d173b] flex items-center gap-3">
                <Book className="w-6 h-6" />
                {course.subject}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Code: {course.code}</p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-blue-500" />
                  Course Objectives
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  {course.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={course.syllabus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0d173b] text-white rounded-md hover:bg-[#1e305f] transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  View Syllabus
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathsCourseObjectives;