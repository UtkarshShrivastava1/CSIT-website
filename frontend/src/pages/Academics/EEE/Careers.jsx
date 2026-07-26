import { useState } from "react";

const CareerOpportunity = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  // Career paths and opportunities data
  const higherStudies = [
    "M. Tech./M.E. in Core EEE Specializations (Power Systems, Power Electronics & Drives, etc.)",
    "Interdisciplinary M. Tech./M.S. Programs (AI & ML, Robotics, Data Science, IoT)",
    "MBA Programs (Operations Management, Energy Management, Finance)",
    "Research-Oriented Studies (M.S. by Research, Ph.D.)",
    "Specialized Postgraduate Programs (Electric Vehicle Technology, VLSI)",
    "Higher Studies Abroad (M.S. in Electrical Engineering, Power Engineering, etc.)"
  ];
  
  const entranceExams = [
    "GATE – For M.Tech./M.E. admissions",
    "CAT – For MBA admissions",
    "GRE – For international universities",
    "TOEFL / IELTS – English proficiency tests"
  ];
  
  const careerVerticals = [
    { vertical: "Power Generation", roles: "Power Plant Engineer, Operation Engineer, Maintenance Engineer" },
    { vertical: "Power Transmission & Distribution", roles: "Grid Engineer, Substation Engineer, Protection Engineer" },
    { vertical: "Electrical Machines & Drives", roles: "Design Engineer, Testing Engineer, Motor & Drive Specialist" },
    { vertical: "Power Electronics", roles: "Power Electronics Engineer, Converter Design Engineer, UPS Engineer" },
    { vertical: "Renewable Energy", roles: "Solar Engineer, Wind Energy Engineer, Energy Analyst" },
    { vertical: "Electric Vehicles (EV)", roles: "EV Design Engineer, Battery Management Engineer, Charging Infrastructure Engineer" },
    { vertical: "Industrial Automation", roles: "Automation Engineer, PLC/SCADA Engineer, Control Engineer" },
    { vertical: "Instrumentation & Control", roles: "Instrumentation Engineer, Process Control Engineer" },
    { vertical: "Electronics & Embedded Systems", roles: "Embedded Engineer, Hardware Design Engineer, IoT Engineer" },
    { vertical: "Smart Grid & Energy Management", roles: "Smart Grid Engineer, Energy Auditor, Energy Consultant" },
    { vertical: "Research & Development", roles: "Research Engineer, Scientist, Project Associate" },
    { vertical: "Semiconductor Industry", roles: "VLSI Engineer, Chip Design Engineer, Testing Engineer" },
    { vertical: "Academics & Higher Education", roles: "Lecturer, Assistant Professor, Research Scholar" },
    { vertical: "Building Services & Electrical Design", roles: "Electrical Design Engineer, MEP Engineer, Project Engineer" },
    { vertical: "Defense & Aerospace", roles: "Electrical Officer, Avionics Engineer, Defense Scientist" }
  ];
  
  return (
    <div className="space-y-8">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
            Career Opportunity
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | Careers</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      {/* Overview section */}
      <section>
        <p className="text-gray-700 leading-relaxed mb-6">
        EEE graduates have a wide range of opportunities for higher education in India and abroad.
        </p>
      </section>
      
      {/* Career paths navigation */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "higher-studies", name: "Higher Studies" },
          { id: "entrance-exams", name: "Entrance Exams" },
          { id: "career-verticals", name: "Career Verticals" }
        ].map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === section.id 
                ? "bg-gray-900 text-white shadow-md" 
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {section.name}
          </button>
        ))}
      </div>
      
      {/* Career content sections */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6">
          {activeSection === "higher-studies" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Higher Studies Options
              </h3>
              
              <ul className="space-y-3">
                {higherStudies.map((study, index) => (
                  <li key={index} className="bg-indigo-50 rounded-lg p-3 text-gray-800">
                    {study}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Benefits of Advanced Degrees</h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Specialization in cutting-edge technologies and research areas</li>
                  <li>Higher salary potential and advanced career opportunities</li>
                  <li>Access to academic and research positions</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "entrance-exams" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Major Entrance Examinations
              </h3>
              
              <ul className="space-y-3">
                {entranceExams.map((exam, index) => (
                  <li key={index} className="bg-green-50 rounded-lg p-3 text-gray-800">
                    {exam}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === "career-verticals" && (
            <div className="overflow-x-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Vertical Career Opportunities
              </h3>
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-[#0d173b] text-white">
                    <th className="py-2 px-4 text-left">S.N.</th>
                    <th className="py-2 px-4 text-left">Career Vertical</th>
                    <th className="py-2 px-4 text-left">Job Roles</th>
                  </tr>
                </thead>
                <tbody>
                  {careerVerticals.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                      <td className="py-2 px-4 border-t">{index + 1}</td>
                      <td className="py-2 px-4 border-t">{item.vertical}</td>
                      <td className="py-2 px-4 border-t">{item.roles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunity;