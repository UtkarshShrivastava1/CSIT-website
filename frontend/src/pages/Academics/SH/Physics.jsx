import React from "react";

const PhysicsContent = () => {
  const faculty = [
    {
      id: 1,
      name: "Mr. Heera Ram Sahu",
      designation: "Assistant Professor",
      qualification: "M.Sc. Physics, PhD (Pursuing)",
      specialization: "Material Science",
      experience: "4 years",
      joiningDate: "12-08-2025",
    },
  ];

  const course = {
    title: "Engineering Physics",
    code: "3000A03AT015",
    objectives: [
      "To provide a strong foundation in the fundamental principles of Physics.",
      "To develop analytical and problem-solving skills through theoretical and experimental learning.",
      "To enable students to apply Physics concepts in engineering and technological applications.",
      "To enhance scientific thinking and laboratory skills.",
    ],
    outcomes: [
      "Understand and explain the fundamental concepts of Engineering Physics.",
      "Apply Physics principles to solve engineering-related problems.",
      "Perform laboratory experiments and analyze experimental data accurately.",
      "Develop scientific, analytical, and critical thinking skills for engineering applications.",
    ],
    syllabus:
      "https://csvtu.ac.in/ew/download/artifical-intelligence-data-sciences-sem-1/?wpdmdl=21180&refresh=6a3fae4ac41501782558282",
  };

  const labObjectivesCircuit = [
    "To study the interaction of light with optical fibers and analyze the diffraction of a laser beam.",
    "To analyze the characteristics of solar cells, photoresistors, and photocells.",
    "To examine the properties of a semiconductor diode by determining the forbidden energy gap and studying its characteristic curves.",
    "To determine the specific resistance of a wire and the frequency of an A.C. source accurately.",
    "To know the concepts of interference and diffraction using bi-prism and grating experiments respectively.",
  ];

  const labOutcomesCircuit = [
    "Demonstrate an understanding of the interaction of light with optical fibers and the diffraction principles applicable to laser beams.",
    "Evaluate the performance and characteristics of solar cells, photoresistors, and photocells in various applications.",
    "Determine the forbidden energy gap of semiconductor diodes and analyze their characteristic curves.",
    "Calculate the specific resistance of a wire. Measure the frequency of an A.C. source",
    "Calculate the fringe width using bi-prism and resolving power of grating.",
  ];

  const labObjectivesNonCircuit = [
    "To study the surface tension of water by using Jaeger’s and capillary rise methods.",
    "To calculate acceleration due to gravity and the moment of inertia of a flywheel.",
    "To determine the wavelength by laser diffraction, and the horizontal component of earth’s magnetic field-H.",
    "To calculate the coefficient of viscosity by different methods.",
    "To analyze thermal conductivity and the mechanical equivalent of heat.",
  ];

  const labOutcomesNonCircuit = [
    "Determine the surface tension of water using different methods.",
    "Calculate acceleration due to gravity and the moment of inertia of a flywheel.",
    "Determine the wavelength of light using the laser diffraction method and calculate the horizontal component of Earth’s magnetic field-H.",
    "Apply various methods to calculate the coefficient of viscosity and understand the principles behind each technique.",
    "Analyze the thermal conductivity of materials and determine the mechanical equivalent of heat.",
  ];

  const practicalListCircuit = [
    "To determine the Numerical Aperture (NA) of an optical fiber.",
    "To determine the wavelength of a given LASER source using a diffraction grating.",
    "To study characteristics of a solar cell.",
    "To study the characteristics of a Photo resistor.",
    "To determine the value of plank’s constant (h) using a photocell.",
    "To determine the forbidden energy gap of a P-N junction diode.",
    "To study the characteristic curve of a P-N junction diode.",
    "To determine the specific resistance of a given wire using a carry foster bridge.",
    "To determine fringe width of an interference pattern using Fresnel’s bi-prism.",
    "To determine the frequency of A.C. mains by a Sonometer.",
    "To determine the resolving power of plane transmission grating.",
    "To determine the radius of curvature of plano convex lens by Newton’s rings method.",
  ];

  const practicalListNonCircuit = [
    "To determine the surface tension of water at laboratory temperature by Jaeger’s Method.",
    "To determine the surface tension of water by capillary rise method.",
    "To accurately measure the acceleration due to gravity with the help of a reversible physical pendulum (or bar pendulum).",
    "To determine the moment of inertia of a flywheel about its own axis of rotation.",
    "To determine wavelength of a given laser source using a diffraction grating.",
    "To determine the value of H, the horizontal component of earth’s magnetic field by deflection and vibration magnetometer.",
    "To determine the coefficient of viscosity by Stoke’s method.",
    "To determine the coefficient of viscosity by Poiseuille’s method.",
    "To determine thermal conductivity of a bad conductor by LEE’s disk method.",
    "To determine the mechanical equivalent of heat by Calender-Barnes method.",
  ];

  const equipmentList = [
    { name: "Optical Fiber Kit", quantity: 1 },
    { name: "LASER with Diffraction Grating Setup", quantity: 1 },
    { name: "Solar Cell Characteristics Setup", quantity: 1 },
    { name: "Photoresistor (LDR) Characteristics Setup", quantity: 1 },
    { name: "Photocell with Planck's Constant Setup", quantity: 1 },
    { name: "P-N Junction Diode Characteristics Setup", quantity: 1 },
    { name: "Carey Foster Bridge", quantity: 1 },
    { name: "Fresnel's Biprism Apparatus", quantity: 1 },
    { name: "Sonometer", quantity: 1 },
    { name: "Plane Transmission Grating", quantity: 1 },
    { name: "Newton's Rings Apparatus", quantity: 1 },
    { name: "Surface Tension by Jaeger's Method Setup", quantity: 1 },
    { name: "Capillary Rise Apparatus", quantity: 1 },
    { name: "Bar (Physical) Pendulum", quantity: 1 },
    { name: "Flywheel Apparatus", quantity: 1 },
    { name: "Deflection and Vibration Magnetometer", quantity: 1 },
    { name: "Stoke's Viscosity Apparatus", quantity: 1 },
    { name: "Poiseuille's Viscosity Apparatus", quantity: 1 },
    { name: "Lee's Disc Apparatus", quantity: 1 },
    { name: "Callendar–Barnes Apparatus", quantity: 1 },
  ];

  return (
    <div className="prose max-w-none text-gray-700">
      <h3 className="text-xl font-medium text-[#0d173b] mb-2">
        About Department
      </h3>
      <p>
        The Department of Applied Physics is dedicated to providing students
        with a strong foundation in fundamental and applied physical sciences
        while fostering scientific thinking, analytical skills,
        problem-solving abilities, and experimental competence. The department
        aims to bridge the gap between theoretical physics and practical
        engineering applications, enabling students to understand the role of
        physics in modern technology, electronics, materials science,
        renewable energy, nanotechnology, and various interdisciplinary
        fields.
      </p>
      <p>
        The department is equipped with well-established laboratory facilities
        that support practical learning and undergraduate research. The
        laboratories include experiments in Mechanics, Optics, Electricity and
        Magnetism, Modern Physics, Semiconductor Physics, and Material
        Characterization. The department also houses advanced instruments such
        as a Spectrophotometer, Four-Probe Resistivity Setup, Hall Effect
        Measurement System, Solar Cell Characterization Unit, and other
        essential equipment to facilitate experimental learning and research
        in condensed matter physics, semiconductor materials, and renewable
        energy applications.
      </p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">VISION</h3>
      <p>
        "To enable engineering students to develop a strong understanding of
        the fundamental and applied principles of Physics, empowering them
        with experimental, analytical, and problem-solving skills to address
        challenges in engineering, materials science, energy, and emerging
        technologies."
      </p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">MISSION</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          To provide students with a strong foundation in the fundamental
          principles of Physics through theoretical and laboratory-based
          learning.
        </li>
        <li>
          To develop experimental, analytical, and critical thinking skills by
          conducting practical experiments and scientific investigations.
        </li>
        <li>
          To enable students to apply the concepts of Physics in solving
          engineering, technological, and industrial problems.
        </li>
        <li>
          To promote innovation, research aptitude, and lifelong learning in
          the fields of applied physics, materials science, semiconductor
          technology, renewable energy, and allied disciplines.
        </li>
      </ul>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">
        Strengths
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Experienced and dedicated faculty.</li>
        <li>Well-equipped Physics laboratories.</li>
        <li>Strong practical and experimental learning.</li>
        <li>Research and innovation-oriented environment.</li>
        <li>Industry and engineering application-focused education.</li>
        <li>Student-centric teaching and mentoring.</li>
        <li>Modern instrumentation and laboratory facilities.</li>
        <li>Interdisciplinary and problem-solving approach.</li>
      </ul>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">
        Faculty Profile
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Designation
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Qualification
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Specialization
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Experience
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date of Joining
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {faculty.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {member.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {member.designation}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {member.qualification}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {member.specialization}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {member.experience}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {member.joiningDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
        Engineering Physics Lab
      </h3>
      <p>
        The Engineering Physics Laboratory provides students with practical
        exposure to the fundamental principles of Physics through well-designed
        experiments. The laboratory enables students to verify theoretical
        concepts, develop experimental skills, and enhance their understanding
        of scientific measurement techniques. It supports hands-on learning in
        areas such as Mechanics, Optics, Electricity and Magnetism,
        Semiconductor Physics, and Modern Physics. The laboratory is equipped
        with essential instruments and experimental setups that help students
        develop analytical thinking, precision in measurements, and
        problem-solving abilities required for engineering and technological
        applications.
      </p>

      <div className="mt-6">
        <h4 className="text-xl font-semibold text-[#0d173b] mb-3">
          Course Objective (Circuit)
        </h4>
        <ul className="list-disc pl-6 space-y-1">
          {labObjectivesCircuit.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h5 className="font-semibold">Course Outcome (Circuit):</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {labOutcomesCircuit.map((out, i) => (
            <li key={i}>{out}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h5 className="font-semibold">List of Practical (Circuit):</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {practicalListCircuit.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-xl font-semibold text-[#0d173b] mb-3">
          Course Objective (Non-Circuit)
        </h4>
        <ul className="list-disc pl-6 space-y-1">
          {labObjectivesNonCircuit.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h5 className="font-semibold">Course Outcome (Non-Circuit):</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {labOutcomesNonCircuit.map((out, i) => (
            <li key={i}>{out}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h5 className="font-semibold">List of Practical (Non-Circuit):</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {practicalListNonCircuit.map((item, i) => (
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
                S. No.
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

export default PhysicsContent;
