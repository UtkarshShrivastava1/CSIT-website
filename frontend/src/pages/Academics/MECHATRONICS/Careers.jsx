import { useState } from "react";

const CareerOpportunity = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  // Career paths and opportunities data
  const higherStudies = [
    "Master's Degree (M.Tech./M.E./MS)",
    "Management Studies",
    "Research Programs",
    "International Higher Education Opportunities",
    "Professional Certifications"
  ];
  
  const governmentSector = [
    "Public Sector Undertakings (PSUs)",
    "Indian Railways",
    "Defense Sector",
    "Engineering Services Examination (ESE/IES)",
    "State Government Departments",
    "Research and Development Organizations",
    "Atomic Energy Sector",
    "Staff Selection Commission (SSC)",
    "Teaching and Academic Careers"
  ];
  
  const privateSector = [
    "Manufacturing and Automation",
    "Automotive and Electric Vehicles",
    "Robotics and Smart Manufacturing",
    "Electronics and Embedded Systems",
    "Information Technology and Industry 4.0"
  ];
  
  const jobTitles = [
    "Mechatronics Engineer",
    "Automation Engineer",
    "Robotics Engineer",
    "Control Systems Engineer",
    "Embedded Systems Engineer",
    "Instrumentation Engineer",
    "Manufacturing Engineer",
    "Production Engineer",
    "Maintenance Engineer",
    "Design Engineer"
  ];
  
  return (
    <div className="space-y-8">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
            CareerOpportunity
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | Careers</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      {/* Overview section */}
      <section>
        <p className="text-gray-700 leading-relaxed mb-6">
        Mechatronics Engineering is an interdisciplinary field that combines Mechanical engineering, Electronics, Electrical Engineering, Computer Science, and Control Systems to design and develop intelligent products and automated systems. With the rapid growth of Industry 4.0, automation, robotics, and smart manufacturing, mechatronics engineers are in high demand across various industries.
        </p>
      </section>
      
      {/* Career paths navigation */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "overview", name: "Overview" },
          { id: "higher-studies", name: "Higher Studies" },
          { id: "govt-sector", name: "Government Sector" },
          { id: "private-sector", name: "Private Sector" },
          { id: "job-titles", name: "Job Titles" }
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
          {activeSection === "overview" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Future Scope
              </h3>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-5 rounded-xl border border-gray-100">
                <p className="text-gray-700">
                The increasing adoption of automation, robotics, and intelligent systems worldwide ensures excellent career prospects for mechatronics engineers. Their multidisciplinary skill set enables them to work across diverse sectors and adapt to rapidly evolving technologies, making Mechatronics Engineering one of the most promising engineering disciplines of the future.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium bg-blue-50 text-gray-800">
                    Higher Education
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium  bg-blue-50 text-gray-800">
                    Government Jobs
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium  bg-blue-50 text-gray-800">
                    Private Sector
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium bg-gray-200 text-gray-800">
                    Specialized Roles
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                Select a category above to explore specific opportunities in each area.
              </p>
            </div>
          )}
          
          {activeSection === "higher-studies" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Higher Education
              </h3>
              
              <ul className="space-y-3">
                {higherStudies.map((study, index) => (
                  <li key={index} className="bg-indigo-50 rounded-lg p-3 text-gray-800">
                    {study}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Professional Certifications</h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>PLC and SCADA Programming</li>
                  <li>Industrial Robotics</li>
                  <li>CAD/CAM/CAE</li>
                  <li>Embedded Systems Design</li>
                  <li>Industrial IoT</li>
                  <li>Artificial Intelligence and Machine Learning</li>
                  <li>Digital Manufacturing</li>
                  <li>Six Sigma and Lean Manufacturing</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "govt-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Government Sector Opportunities
              </h3>
              
              <ul className="space-y-3">
                {governmentSector.map((org, index) => (
                  <li key={index} className="bg-green-50 rounded-lg p-3 text-gray-800">
                    {org}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Benefits of Government Jobs</h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Job stability and security</li>
                  <li>Work on national-level technological infrastructure and defense systems</li>
                  <li>Excellent benefits and pension plans</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "private-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Industries Employing Mechatronics Engineers
              </h3>
              
              <ul className="space-y-3">
                {privateSector.map((company, index) => (
                  <li key={index} className="bg-purple-50 rounded-lg p-3 text-gray-800">
                    {company}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Private Sector Advantages</h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Competitive salary packages and performance bonuses</li>
                  <li>Opportunity to work with cutting-edge technologies</li>
                  <li>Career advancement and global exposure</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "job-titles" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Core Engineering Roles
              </h3>
              
              <ul className="space-y-3">
                {jobTitles.map((title, index) => (
                  <li key={index} className="bg-rose-50 rounded-lg p-3 text-gray-800">
                    {title}
                  </li>
                ))}
              </ul>
              
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunity;