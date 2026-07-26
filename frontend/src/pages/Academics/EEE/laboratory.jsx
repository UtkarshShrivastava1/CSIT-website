import React from "react";

const LaboratoriesContent = () => {
  const labDetails = [
    { id: 1, name: "Basic Electrical Engineering Laboratory", description: "Provides hands-on experience in fundamental electrical engineering concepts such as DC/AC circuits, RLC networks, and electrical measurements. Students learn to use instruments like voltmeters, ammeters, wattcmeters, millimeters, variances, and rheostats. The lab also introduces the basics of DC and AC machines." },
    { id: 2, name: "Electrical Machines-I Laboratory", description: "Offers practical exposure to transformers, DC machines, induction motors, and synchronous machines. Students study machine characteristics, testing methods, and energy conversion principles. The laboratory bridges theoretical concepts with real-world machine operation and applications." },
    { id: 3, name: "Electric Circuits Analysis Laboratory", description: "Enables students to design, analyze, and test electrical circuits using resistors, capacitors, inductors, and power supplies. Practical experiments help in understanding circuit behavior, measurements, and data analysis. The lab strengthens circuit analysis and troubleshooting skills." },
    { id: 4, name: "Electrical Measurements & Instrumentation Laboratory", description: "Focuses on measurement techniques, instrument calibration, and electrical parameter evaluation. Students perform experiments involving bridge circuits, transformers, and metering devices. The lab develops accuracy in measurement and understanding of instrumentation principles." },
    { id: 5, name: "Electrical Machines-II Laboratory", description: "Provides advanced practical training on DC machines, transformers, induction motors, and synchronous machines. Students perform load tests, efficiency tests, speed control, and performance analysis. The laboratory enhances understanding of machine operation and control." },
    { id: 6, name: "Installation, Maintenance & Testing of Electrical Equipment Laboratory", description: "Develops practical skills in installation, operation, maintenance, and testing of electrical equipment and systems. Students learn industrial practices, fault diagnosis, safety procedures, and equipment testing techniques. The lab prepares students for field and maintenance engineering roles." },
    { id: 7, name: "Power System Simulation Laboratory", description: "Facilitates analysis and simulation of power system operation, stability, fault studies, and renewable energy integration. Students use specialized software tools to model and evaluate complex power networks. The lab supports planning, control, and reliability studies of modern power systems." },
    { id: 8, name: "Power Electronics Devices & Circuits Laboratory", description: "Provides practical knowledge of power semiconductor devices, rectifiers, choppers, and inverters. Students study device characteristics, triggering techniques, and converter performance. The lab encourages circuit development and experimentation in power electronic applications." },
    { id: 9, name: "Power System Protection Laboratory", description: "Introduces students to protective relays, circuit breakers, and protection schemes used in power systems. Practical experiments cover transformer, generator, transmission line, and overcurrent protection. The lab develops expertise in ensuring system safety and reliability." },
    { id: 10, name: "Electric Drives Laboratory", description: "Focuses on speed control and operation of DC, AC, induction, stepper, and universal motor drives. Students gain hands-on experience with chopper control, variable frequency drives, and microcontroller-based drive systems. The laboratory supports learning of modern motor control techniques." },
    { id: 11, name: "High Voltage Engineering Laboratory", description: "Provides facilities for generation, measurement, and testing of high voltages up to 150 kV. Students perform experiments on insulation testing, corona effects, impulse voltage generation, and transformer oil testing. The lab supports both academic learning and research in high-voltage engineering." },
    { id: 12, name: "Digital Electronics Laboratory", description: "Offers practical experience in digital logic design using logic gates, flip-flops, counters, registers, and digital ICs. Students design and verify combinational and sequential circuits. The laboratory builds a strong foundation in digital system design and applications." }
  ];

  return (
    <div className="w-full">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Laboratories
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | Laboratories</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#0d173b] mb-2">Importance of EEE Laboratory</h3>
            <p className="text-gray-700 mb-4">The Electrical and Electronics Engineering (EEE) Laboratory is an essential component of engineering education because it bridges the gap between theoretical knowledge and practical application. Laboratories provide students with hands-on experience in electrical circuits, machines, power systems, control systems, power electronics, and renewable energy technologies.</p>
            <h4 className="font-semibold text-[#0d173b] mb-2">Key Importance of EEE Laboratories</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Practical Understanding of Concepts</li>
                <li>Development of Technical Skills</li>
                <li>Problem-Solving Ability</li>
                <li>Industry Readiness</li>
                <li>Research and Innovation</li>
                <li>Teamwork and Communication</li>
                <li>Safety Awareness</li>
                <li>Outcome-Based Learning</li>
            </ul>
        </div>
        {labDetails.map((lab) => (
          <div key={lab.id} className="border-b pb-4 mb-4">
            <h3 className="text-lg font-semibold text-[#0d173b] mb-1">{lab.id}. {lab.name}</h3>
            <p className="text-gray-700">{lab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaboratoriesContent;
