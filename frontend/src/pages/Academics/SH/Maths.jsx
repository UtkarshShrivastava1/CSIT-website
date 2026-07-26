const MathsContent = () => {
  const courses = [
    {
      title: "Engineering Mathematics I",
      code: "3000A02AT014",
      objectives: [
        "Develop the basic mathematical skills of engineering students that are imperative for effective understanding of engineering subjects.",
        "Also, the topics introduced will serve as basic tools for specialized studies in many fields of engineering and technology.",
        "This course includes: Matrices, Differential Calculus, Partial Differentiation, Integral Calculus and Ordinary Differential Equations.",
      ],
      outcomes: [
        "CO1: - Apply the concept of Rank of Matrices and Cayley-Hamilton Theorem. Problems on solution of a system of linear equations by matrix method. Implement the concept of Eigen values and Eigen vectors in engineering problems.",
        "CO2: - Apply the method of Successive Differentiation for Expansion of functions and Tracing of simple curves.",
        "CO3: - Solve the problems of Maxima& Minima of functions of two variables and use Jacobians in formulation of practical problems.",
        "CO4: - Apply integration for Rectification, Quadrature and Volume of revolution and apply Differentiation under the integral sign to definite integrals.",
        "CO5: - Solve Linear as well as Nonlinear Differential Equations of first order. Also, to solve Linear Differential Equations of Higher Order.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/semester-1-chemical-engineering/?wpdmdl=21211&refresh=6a3e3b36db7671782463286",
    },
    {
      title: "Engineering Mathematics II",
      code: "3000B02AT014",
      objectives: [
        "The objective of the course is aimed to develop the basic mathematical skills of engineering students that are imperative for effective understanding of engineering subjects. Also, the topics introduced will serve as basic tools for specialized studies in many fields of engineering and technology. This course includes: Complex numbers, Sequence and Series, Multivariable Calculus, Vector Calculus and Statistics.",
      ],
      outcomes: [
        "CO1. Implement the De Moivre’s theorem for finding roots of Complex numbers and use the Method of separation into real and imaginary parts in the study of complex numbers and Summation of series C+iS method.",
        "CO2. Use the concept of convergence and tool of power series in various problems of advanced Mathematics.",
        "CO3.Use the Multivariable Integral Calculus for finding Area and Volume and to employ the Beta and Gamma functions for evaluating improper finite integrals.",
        "CO4. Differentiate and Integrate Vector functions and apply Stoke’s, Gauss and Divergence theorem for easier evaluation.",
        "CO5.Fit Linear and Second order Parabolic curves to given set of data. And use Correlation and Regression for Interpolation or Extrapolation.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/semester-2-chemical-engineering/?wpdmdl=21212&refresh=6a3e3dd7ba9351782463959",
    },
    {
      title: "Mathematics III",
      code: "B000311(014)",
      objectives: [
        "To provide knowledge of Laplace transform of elementary functions including its properties and applications to solve ordinary differential equations.",
        "To have thorough knowledge of partial differential equations which arise in mathematical descriptions of situations in engineering.",
        "To study about a quantity that may take any of a given range of values that can’t be predicted as it is but can be described in terms of their probability.",
        "To provide a thorough understanding of interpolation and methods to solve ordinary differential equation.",
      ],
      outcomes: [
        "After studying the contents of the syllabus in detail the students will be able to: Define (mathematically) unit step unit impulse, Laplace transform its properties, inverse and applications to solve ordinary differential equations and find Numerical solution of differential equations, which may be arising due to mathematical modelling based on engineering problems. Hands on these Mathematical topics will make them equipped to prepare for higher studies through competitive examinations.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/b-tech-3rd-semester-3/?wpdmdl=12485&refresh=6a3e45817dc901782465921",
    },
    {
      title: "Discrete Mathematics",
      code: "B022411(014)",
      objectives: [
        "To introduce a number of discrete mathematical structures found to be serving as tools in the development of theoretical computer science. Course focuses on how discrete structures actually helped computer engineers to solve problems occurred in the development of programming languages. Course highlights the importance of discrete structures towards simulation of a problem in computer science engineering.",
      ],
      outcomes: [
        "After completion of this course students will be Able to apply mathematical logic and Boolean algebra in switching circuits & logic circuits. Familiar with set theory, relation and functions. Familiar with algebraic structures, graph theory and combinatorics. Able to solve problems in various fields in computer science, specially networking.",
      ],
      syllabus: "https://csvtu.ac.in/ew/download/b-tech-4th-semester-10/?wpdmdl=13582&refresh=6a3e45817afe01782465921",
    },
  ];
  return (
    <div className="prose max-w-none text-gray-700">
      <h3 className="text-xl font-medium text-[#0d173b] mb-2">About Department</h3>
      <p>The Department of Applied Mathematics is dedicated to delivering high-quality education that bridges fundamental mathematical theories with practical engineering solutions.</p>
      <p>Mathematics serves as the structural foundation of all engineering disciplines. Our department builds this core strength by conducting foundational mathematics courses during the first and second years and then offering a number of electives designed to align with modern industry demands, such as data science, cryptography, and computational modeling to the senior students.</p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Vision</h3>
      <p>Department of Mathematics sketches out student knowledge and understanding of basic concepts that ropes them to manage and apply their knowledge, such as computation, analysis, synthesis and evaluation towards their personal values, concerns and preferences.</p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Mission</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Provide a platform to acquire mathematical skills for solving complex engineering problems.</li>
        <li>To impart experiential learning skills in mathematics.</li>
        <li>To engage faculty in research to enrich teaching-learning process.</li>
      </ul>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Strength</h3>
      <p>A Department of Mathematics serves as a foundational pillar for academic institutions. Its core strengths typically lie in expert faculty, research excellence, interdisciplinary collaboration, and the cultivation of vital lifelong problem-solving skills for students.</p>

      <h3 className="text-2xl font-bold text-[#0d173b] mt-12 mb-6 border-b-2 pb-2">Courses Offered</h3>
      <div className="space-y-8">
        {courses.map((course, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold">{course.title} <span className="text-base font-normal text-gray-600">({course.code})</span></h4>
            <div className="mt-4">
              <h5 className="font-semibold">Course Objectives:</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {course.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold">Course Outcomes:</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {course.outcomes.map((out, i) => <li key={i}>{out}</li>)}
              </ul>
            </div>
            <div className="mt-4">
              <a href={course.syllabus} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">View Syllabus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
  export default MathsContent;