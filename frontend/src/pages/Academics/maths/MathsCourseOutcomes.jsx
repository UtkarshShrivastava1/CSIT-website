import React from "react";
import { Book, CheckCircle, FileText } from "lucide-react";

const courses = [
  {
    subject: "Engineering Mathematics I",
    code: "3000A02AT014",
    outcomes: [
      "Apply the concept of Rank of Matrices and Cayley-Hamilton Theorem. Problems on solution of a system of linear equations by matrix method. Implement the concept of Eigen values and Eigen vectors in engineering problems.",
      "Apply the method of Successive Differentiation for Expansion of functions and Tracing of simple curves.",
      "Solve the problems of Maxima & Minima of functions of two variables and use Jacobians in formulation of practical problems.",
      "Apply integration for Rectification, Quadrature and Volume of revolution and apply Differentiation under the integral sign to definite integrals.",
      "Solve Linear as well as Nonlinear Differential Equations of first order. Also, to solve Linear Differential Equations of Higher Order.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/semester-1-chemical-engineering/?wpdmdl=21211&refresh=6a3e3b36db7671782463286",
  },
  {
    subject: "Engineering Mathematics II",
    code: "3000B02AT014",
    outcomes: [
      "Implement the De Moivre’s theorem for finding roots of Complex numbers and use the Method of separation into real and imaginary parts in the study of complex numbers and Summation of series C+iS method.",
      "Use the concept of convergence and tool of power series in various problems of advanced Mathematics.",
      "Use the Multivariable Integral Calculus for finding Area and Volume and to employ the Beta and Gamma functions for evaluating improper finite integrals.",
      "Differentiate and Integrate Vector functions and apply Stoke’s, Gauss and Divergence theorem for easier evaluation.",
      "Fit Linear and Second order Parabolic curves to given set of data. And use Correlation and Regression for Interpolation or Extrapolation.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/semester-2-chemical-engineering/?wpdmdl=21212&refresh=6a3e3dd7ba9351782463959",
  },
  {
    subject: "Mathematics III",
    code: "B000311(014)",
    outcomes: [
      "After studying the contents of the syllabus in detail the students will be able to: Define (mathematically) unit step unit impulse, Laplace transform its properties, inverse and applications to solve ordinary differential equations and find Numerical solution of differential equations, which may be arising due to mathematical modelling based on engineering problems. Hands on these Mathematical topics will make them equipped to prepare for higher studies through competitive examinations.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/b-tech-3rd-semester-3/?wpdmdl=12485&refresh=6a3e45817dc901782465921",
  },
  {
    subject: "Discrete Mathematics",
    code: "B022411(014)",
    outcomes: [
      "After completion of this course students will be Able to apply mathematical logic and Boolean algebra in switching circuits & logic circuits. Familiar with set theory, relation and functions. Familiar with algebraic structures, graph theory and combinatorics. Able to solve problems in various fields in computer science, specially networking.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/b-tech-4th-semester-10/?wpdmdl=13582&refresh=6a3e45817afe01782465921",
  },
];

const MathsCourseOutcomes = () => {
  return (
    <div className="space-y-8">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Course Outcomes
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
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Course Outcomes
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  {course.outcomes.map((out, i) => (
                    <li key={i}>{out}</li>
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

export default MathsCourseOutcomes;