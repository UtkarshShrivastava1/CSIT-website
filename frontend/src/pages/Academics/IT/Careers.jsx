import { useState } from "react";

const CareerOpportunity = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  // Career paths and opportunities data
  const higherStudies = [
    "M.Tech./M.E. in Information Technology / Computer Science & Engineering/ Artificial Intelligence & Machine Learning/ Cyber Security",
    "Master of Computer Applications (MCA)",
    "Master of Science (M.S.) in IT-related specializations (India/Abroad)",
    "MBA in IT Management, Business Analytics, or General Management",
    "Ph.D. in Information Technology, Computer Science, or Emerging Technologies",
    "Professional Certifications in AI, Cloud Computing, Cybersecurity, and Data Analytics",
    "Research and Innovation Programs in Emerging Technologies"
  ];
  
  const governmentSector = [
    "Employment opportunities in premier government organizations such as DRDO, ISRO, NIC, and various Public Sector Undertakings (PSUs).",
    "Eligibility for technical and administrative positions through examinations such as GATE, UPSC, SSC, and state government recruitment processes.",
    "Opportunities to work on national-level projects in software development, cybersecurity, artificial intelligence, data analytics, and e-governance.",
    "Greater scope for career advancement, job security, and leadership roles in government departments and research organizations."
  ];
  
  const privateSector = [
    "Software Development and Engineering",
    "Artificial Intelligence & Machine Learning",
    "Data Science and Analytics",
    "Cyber security and Ethical Hacking",
    "Cloud Computing and DevOps",
    "Web and Mobile Application Development",
    "Database Administration and Management",
    "Networking and System Administration",
    "Internet of Things (IoT) and Embedded Systems",
    "Blockchain Technology",
    "Software Testing and Quality Assurance",
    "UI/UX Design and Front-End Development",
    "Research and Development (R&D)",
    "Government and Public Sector IT Services",
    "Entrepreneurship and Technology Startups"
  ];
  
  const jobTitles = [
    "Artificial Intelligence (AI) Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Data Analyst",
    "Cyber security Analyst",
    "Ethical Hacker / Penetration Tester",
    "Cloud Computing Engineer",
    "DevOps Engineer",
    "Full Stack Developer",
    "Mobile Application Developer",
    "Block chain Developer",
    "Internet of Things (IoT) Engineer"
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
        Computer Science Engineering (IT) is a branch of engineering that focuses on the study and application of computing systems, programming, software development, and computer hardware. It combines concepts from various areas of computer science to design, develop, and manage modern technological solutions. Due to its wide-ranging career opportunities and growing demand in the technology sector, IT has become one of the most sought-after fields of study among students.
        </p>
      </section>
      
      {/* Career paths navigation */}
      <div className="flex flex-wrap gap-2">
        {[
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
                Future of Information Technology Engineering
              </h3>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-5 rounded-xl border border-gray-100">
                <p className="text-gray-700">
                Information Technology (IT) Engineering has a bright and promising future due to the rapid growth of digital technologies across all sectors. IT engineers play a crucial role in developing, managing, and securing computer systems, networks, software applications, and data-driven solutions. Emerging technologies such as Artificial Intelligence (AI), Machine Learning, Cloud Computing, Cyber security, Internet of Things (IoT), Block chain, and Data Analytics are creating vast career opportunities for IT professionals. With organizations increasingly adopting digital transformation, the demand for skilled IT engineers continues to rise in industries such as healthcare, banking, education, manufacturing, e-commerce, and government services. IT engineers can pursue careers in software development, system administration, cloud architecture, cyber security, data science, and IT consulting, making it one of the most dynamic and future-oriented.
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
                Higher Studies Options for Information Technology (IT) Students
              </h3>
              
              <ul className="space-y-3">
                {higherStudies.map((study, index) => (
                  <li key={index} className="bg-indigo-50 rounded-lg p-3 text-gray-800">
                    {study}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Benefits of Higher Studies in Computer Science Engineering (IT)</h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Better Career Opportunities – Higher studies open doors to specialized roles in Artificial Intelligence, Data Science, Cyber security, Cloud Computing, and Research & Development.</li>
                  <li>Higher Salary Potential – Advanced qualifications such as M.Tech, MCA, MS, or Ph.D. often lead to better-paying positions and faster career growth.</li>
                  <li>Enhanced Technical Expertise – Students gain in-depth knowledge of emerging technologies, advanced programming, and research methodologies.</li>
                  <li>Opportunities in Research and Academia – Higher studies provide pathways to become researchers, faculty members, consultants, or innovators contributing to technological advancements.</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "govt-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Government Sector Opportunities for IT Students
              </h3>
              
              <ul className="space-y-3">
                {governmentSector.map((org, index) => (
                  <li key={index} className="bg-green-50 rounded-lg p-3 text-gray-800">
                    {org}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Benefits of Government Jobs for IT Students</h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Job Security and Stability with assured career growth and long-term employment.</li>
                  <li>Competitive Salary and Perks including allowances, medical benefits, pension, and paid leave.</li>
                  <li>Excellent Work-Life Balance through fixed working hours and holidays.</li>
                  <li>Opportunities to Work on National Projects in IT, cybersecurity, digital governance, and public sector technology initiatives.</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "private-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Major Career Verticals for IT Students
              </h3>
              
              <ul className="space-y-3">
                {privateSector.map((company, index) => (
                  <li key={index} className="bg-purple-50 rounded-lg p-3 text-gray-800">
                    {company}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">Benefits of Private Sector Job Opportunities for IT Students</h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Wide Range of Career Options across software development, AI, data science, cyber security, cloud computing, and other emerging technologies.</li>
                  <li>Higher Earning Potential through competitive salaries, incentives, and performance-based rewards.</li>
                  <li>Rapid Career Growth with opportunities for promotions, leadership roles, and skill-based advancement.</li>
                  <li>Exposure to Latest Technologies and innovative projects that enhance technical expertise and industry readiness.</li>
                  <li>Global Employment Opportunities with multinational companies, international projects, and remote work options.</li>
                </ul>
              </div>
            </div>
          )}
          
          {activeSection === "job-titles" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Specialized Roles for IT Students
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