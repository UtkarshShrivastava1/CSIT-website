import { useState } from "react";

const CareerOpportunity = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  // Career paths and opportunities data
  const higherStudies = [
    "Master of Technology (M.Tech)",
    "Master of Business Administration",
    "Master of Science ( Abroad)",
    "Post Graduation Diploma",
    "Research and Analysis",
    "Master of Philosophy (M.Phil)",
    "Doctor of Philosophy (Ph.D)",
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
    "Teaching and Academic Careers",
  ];
  
  const privateSector = [
    "Design Engineering",
    "Manufacturing & Production Engineering",
    "Automobile Engineering",
    "Thermal Engineering",
    "Industrial Engineering",
    "Maintenance Engineering",
    "Robotics and Automation",
    "Aerospace Engineering",
    "Oil, Gas and Energy Sector",
    "Quality Engineering",
    "Research and Development (R&D)",
    "Mechatronics and Smart Systems",
  ];
  
  const jobTitles = [
    "Automotive Engineer",
    "Maintenance Engineer",
    "Research And Development Supervisor",
    "Robotics Engineer",
    "Aerospace Engineer",
    "Control And Instrumentation Engineer",
    "Mining Engineer",
    "Nuclear Engineer ",
    "Professor/Lecturer ",
    "Manufacturing Engineer",
    "And many more...",
  ];
  
  return (
    <div className="space-y-8">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
            Career Opportunities
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | Careers</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      {/* Overview section */}
      <section>
        <p className="text-gray-700 leading-relaxed mb-6">
        Mechanical Engineering is one of the broadest and most versatile engineering disciplines. It involves the design, manufacturing, operation, maintenance, and improvement of machines, mechanical systems, and industrial processes. Mechanical engineers are employed in almost every sector of industry, making it one of the most sought-after engineering branches.
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
                Overview
              </h3>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-5 rounded-xl border border-gray-100">
                <p className="text-gray-700">
                Mechanical Engineering offers diverse career paths across education, government, and private sectors. Graduates can pursue advanced degrees, work in prestigious tech companies, or take on specialized technical roles that leverage their engineering skills.
                <br /><br />
                <span className="font-semibold">Future Scope:</span> With the advancement of automation, renewable energy, electric vehicles, smart manufacturing, and sustainable technologies, Mechanical Engineering continues to offer diverse and rewarding career opportunities. Its broad foundation enables graduates to work in traditional industries as well as emerging technology sectors, making it one of the most versatile engineering disciplines.
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
          
          {activeSection === "govt-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Government Sector
              </h3>
              <p className="text-gray-700 mb-4">Mechanical Engineering graduates have a wide range of career opportunities in government organizations, public sector undertakings (PSUs), defense services, railways, and research institutions.</p>
              <ul className="space-y-3">
                {governmentSector.map((org, index) => (
                  <li key={index} className="bg-blue-50 rounded-lg p-3 text-gray-800">
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
                Private Sector
              </h3>
              <p className="text-gray-700 mb-4">Mechanical Engineering offers opportunities across diverse industrial sectors. The major career verticals are:</p>
              <ul className="space-y-3">
                {privateSector.map((company, index) => (
                  <li key={index} className="bg-blue-50 rounded-lg p-3 text-gray-800">
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
                Job Titles
              </h3>
              
              <ul className="space-y-3">
                {jobTitles.map((title, index) => (
                  <li key={index} className="bg-blue-50 rounded-lg p-3 text-gray-800">
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