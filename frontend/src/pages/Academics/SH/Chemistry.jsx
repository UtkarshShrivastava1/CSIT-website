import React from "react";

const ChemistryContent = () => {
  const course = {
    title: "Environmental Chemistry",
    code: "3000B03AT011",
    objectives: [
      "Demonstrate a foundation of atmospheric structure and pollution.",
      "Provide a comprehensive understanding of water and soil pollution,",
      "Learn about different types of pollutant emitted from various types of industries and to explore about environmental consequences.",
      "Familiarize the methods and instrument used to measure environmental pollutants accurately.",
      "Visualize the local and global environmental issues.",
    ],
    outcomes: [
      "Awareness how the human activity affects air quality and the ability to assess the impact.",
      "Ability to classify and evaluate water and soil pollutants and apply numerical techniques for analyzing water quality parameters.",
      "Critically analyze the complexities of industrial pollutants and evaluate solution for mitigation.",
      "Proficiency in using various methods and instruments to measure environmental parameter.",
      "Integrate knowledge from diversified case studies and understanding various environmental challenges.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/semester-2-chemical-engineering/?wpdmdl=21212&refresh=6a3e3dd7ba9351782463959",
  };

  const labObjectives = [
    "Introduce analytical techniques for water quality testing.",
    "Develop proficiency in conducting common water quality tests.",
    "Foster understanding of instrumentation used in environmental testing.",
    "Enable assessment of water quality and air pollutants.",
    "Prepare students for real-world environmental monitoring.",
  ];

  const labOutcomes = [
    "Demonstrate the ability to analyze key water quality parameters.",
    "Utilize laboratory instruments to measure water quality indicators.",
    "Conduct advanced water testing and interprets results.",
    "Collect and analyze particulate matter and pollutants in water samples for environmental management.",
    "Apply analytical data for environmental impact assessment and pollution control",
  ];

  const practicalList = [
    "Determination of alkalinity in water sample.",
    "Determination of hardness in water sample.",
    "Determination of chloride in water sample",
    "Determination of dissolved oxygen by DO meter.",
    "Determination of pH using pH meter.",
    "Determination Na, & K using Flame Photometer.",
    "Spectrophotometric determination of organic/inorganic compounds.",
    "Determination of conductivity and TDS by water testing kit.",
    "Collection of particulates by High Volume Sampler.",
    "Determination of COD in water samples.",
    "Determination of BOD in water samples.",
    "Microbiological test.",
  ];

  const equipmentList = [
    { name: "Digital beckmann thermometer", quantity: 1 },
    { name: "Nickel crucible", quantity: 1 },
    { name: "Chemical balance", quantity: 1 },
    { name: "Physical balance", quantity: 1 },
    { name: "Weigh box", quantity: 1 },
    { name: "Digital electronic balance", quantity: 1 },
    { name: "Spectrophotometer Digital", quantity: 1 },
    { name: "Conductometer", quantity: 1 },
    { name: "Flame photometer", quantity: 1 },
    { name: "Water testing kit", quantity: 1 },
    { name: "Dissolve Oxygen kit", quantity: 1 },
    { name: "BOD Incubator", quantity: 1 },
    { name: "TDS meter", quantity: 1 },
    { name: "pH meter", quantity: 1 },
  ];

  return (
    <div className="prose max-w-none text-gray-700">
      <h3 className="text-xl font-medium text-[#0d173b] mb-2">
        About Department
      </h3>
      <p>
        The Department of Applied Chemistry is committed to providing students
        with a strong foundation in chemical sciences while developing their
        analytical thinking, problem-solving ability, and practical skills. The
        department aims to bridge the gap between theoretical concepts and
        real-world applications, enabling students to understand the role of
        chemistry in engineering, environmental protection, healthcare,
        agriculture, and various industrial sectors.
      </p>
      <p>
        The department is equipped with modern laboratory facilities, including
        instruments such as UV-Visible Spectrophotometer, Flame Photometer, and
        Water Testing Kit, which support practical learning and basic research
        activities in Analytical and Environmental Chemistry.
      </p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">VISION</h3>
      <p>
        “Engineering students as the beginners will be conversant with the
        testing and analytical procedures for the analysis of raw, finished,
        engineering, environmental samples, with the application of principles
        of Chemistry”
      </p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">MISSION</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          To acquaint students with the principles of Chemistry to solve
          specific problems, by conducting experiments.
        </li>
        <li>
          To cultivate the abilities in students to apply fundamentals for the
          analysis of raw materials, finished products and engineering
          materials.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-[#0d173b] mt-12 mb-6 border-b-2 pb-2">
        Course Offered
      </h3>
      <div className="p-4 border rounded-lg">
        <h4 className="text-xl font-semibold">
          {course.title}{" "}
          <span className="text-base font-normal text-gray-600">
            ({course.code})
          </span>
        </h4>
        <div className="mt-4">
          <h5 className="font-semibold">Course Objectives:</h5>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {course.objectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold">Course Outcomes:</h5>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {course.outcomes.map((out, i) => (
              <li key={i}>{out}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <a
            href={course.syllabus}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            View Syllabus
          </a>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#0d173b] mt-12 mb-6 border-b-2 pb-2">
        Environmental Chemistry Lab
      </h3>
      <p>
        A Chemistry Laboratory is an essential part of chemistry education. It
        provides students with practical knowledge and helps them understand
        theoretical concepts through experiments. In the laboratory, students
        learn how to handle chemicals, use scientific instruments, and perform
        various chemical analyses safely. The chemistry lab develops scientific
        thinking, observation skills, accuracy, and problem-solving abilities.
        It helps students verify scientific laws and principles through
        hands-on experiments.
      </p>

      <div className="mt-4">
        <h5 className="font-semibold">Course Objectives:</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {labObjectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h5 className="font-semibold">Course Outcomes:</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {labOutcomes.map((out, i) => (
            <li key={i}>{out}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h5 className="font-semibold">List of Practical:</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {practicalList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">
        List of Equipment
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                S. No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name of the Equipment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {equipmentList.map((item, i) => (
              <tr key={i}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {i + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChemistryContent;