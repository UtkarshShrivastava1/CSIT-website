import { useState } from "react";

const CareerOpportunity = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  // Career paths and opportunities data
 const higherStudies = [
  "Master of Technology (M.Tech) in CSE",
  "Master of Science (M.S) in CSE in Abroad",
  "MBA in IT",
  "PH.D in CSE"
];

const higherStudyBenefits = [
  "Better Career Opportunities – Higher studies open doors to specialized roles in Artificial Intelligence, Data Science, Cybersecurity, Cloud Computing, and Research & Development.",
  "Higher Salary Potential – Advanced qualifications such as M.Tech, MCA, MS, or Ph.D. often lead to better-paying positions and faster career growth.",
  "Enhanced Technical Expertise – Students gain in-depth knowledge of emerging technologies, advanced programming, and research methodologies.",
  "Opportunities in Research and Academia – Higher studies provide pathways to become researchers, faculty members, consultants, or innovators contributing to technological advancements."
];
  
  const governmentSector = [
  "Employment opportunities in premier government organizations such as DRDO, ISRO, NIC, and various Public Sector Undertakings (PSUs).",
  "Eligibility for technical and administrative positions through examinations such as GATE, UPSC, SSC, and state government recruitment processes.",
  "Opportunities to work on national-level projects in software development, cybersecurity, artificial intelligence, data analytics, and e-governance.",
  "Greater scope for career advancement, job security, and leadership roles in government departments and research organizations."
];

const governmentBenefits = [
  "Job Security and Stability with assured career growth and long-term employment.",
  "Competitive Salary and Perks including allowances, medical benefits, pension, and paid leave.",
  "Excellent Work-Life Balance through fixed working hours and holidays.",
  "Opportunities to Work on National Projects in IT, cybersecurity, digital governance, and public sector technology initiatives.",
  "Structured Career Advancement through regular promotions, training programs, and higher responsibility roles."
];
  
  const privateSector = [
  "Software Development and Engineering",
  "Artificial Intelligence & Machine Learning",
  "Data Science and Analytics",
  "Cyber Security and Ethical Hacking",
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

const privateBenefits = [
  "Wide Range of Career Options across software development, AI, data science, cyber security, cloud computing, and other emerging technologies.",
  "Higher Earning Potential through competitive salaries, incentives, and performance-based rewards.",
  "Rapid Career Growth with opportunities for promotions, leadership roles, and skill-based advancement.",
  "Exposure to Latest Technologies and innovative projects that enhance technical expertise and industry readiness.",
  "Global Employment Opportunities with multinational companies, international projects, and remote work options."
];
  
  const specializedRoles = [
  "Artificial Intelligence (AI) Engineer",
  "Machine Learning Engineer",
  "Data Scientist",
  "Data Analyst",
  "Cyber Security Analyst",
  "Ethical Hacker / Penetration Tester",
  "Cloud Computing Engineer",
  "DevOps Engineer",
  "Full Stack Developer",
  "Mobile Application Developer",
  "Blockchain Developer",
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
        <span className="font-semibold">Computer Science Engineering (CSE) </span>  is a branch of engineering that focuses on the study and application of computing systems, programming, software development, and computer hardware. It combines concepts from various areas of computer science to design, develop, and manage modern technological solutions. Due to its wide-ranging career opportunities and growing demand in the technology sector, CSE has become one of the most sought-after fields of study among students after completing Class 12.
        </p>
      </section>
      
      {/* Career paths navigation */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "overview", name: "Overview" },
          { id: "higher-studies", name: "Higher Studies" },
          { id: "govt-sector", name: "Government Sector" },
          { id: "private-sector", name: "Private Sector" },
          { id: "specialized-roles", name: "Specialized Roles" }
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
                Future for Computer Science Engineers
              </h3>
              
              <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-5 rounded-xl border border-gray-100">
                <p className="text-gray-700">
                  The future of Computer Science Engineers is highly promising due to the rapid growth of digital technologies across all sectors. Emerging fields such as Artificial Intelligence, Machine Learning, Data Science, Cybersecurity, Cloud Computing, and the Internet of Things are creating numerous career opportunities. Organizations worldwide are increasingly relying on software solutions, automation, and data-driven decision-making, leading to a continuous demand for skilled CSE professionals. Computer Science Engineers can pursue careers in multinational companies, government organizations, research institutions, and startups, while also having opportunities for entrepreneurship and innovation. With continuous learning and upskilling, CSE graduates can build successful careers and play a key role in shaping the future of technology and society.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium bg-blue-50 text-gray-800">
                    Higher Education
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium  bg-blue-50 text-gray-800">
                    Master of Technology (M.Tech) in CSE
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium  bg-blue-50 text-gray-800">
                    Master of Technology (M.Tech) in CSE
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium bg-gray-200 text-gray-800">
                    	MBA in IT
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-x font-medium bg-gray-200 text-gray-800">
                    	PH.D in CSE   
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                Select a category above to explore specific opportunities in each area.
              </p>
            </div>
          )}


      {activeSection === "higher-studies" && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <h4 className="font-medium text-gray-800 mb-3">
            Benefits of Higher Studies in CSE
          </h4>

          <ul className="space-y-2">
            {higherStudyBenefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="text-green-600 mt-1">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>)}


        {  
       activeSection === "private-sector" &&  (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <h4 className="font-medium text-gray-800 mb-3">
            Benefits of Private Sector Job Opportunities
          </h4>
          <ul className="space-y-2">
            {privateBenefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="text-green-600 mt-1">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
       )}
          
        {activeSection === "govt-sector" && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="font-medium text-gray-800 mb-3">
              Benefits of Government Jobs
            </h4>
            <ul className="space-y-2">
              {governmentBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-700"
                >
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
          
          {/* {activeSection === "job-titles" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Job Titles for Computer Science Engineers
              </h3>
              
              <ul className="space-y-3">
                {jobTitles.map((title, index) => (
                  <li key={index} className="bg-blue-50 rounded-lg p-3 text-gray-800">
                    {title}
                  </li>
                ))}
                <li className="bg-gray-50 rounded-lg p-3 text-gray-800">And many more...</li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h4 className="font-medium text-gray-800 mb-2">Emerging Job Roles</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-gray-100 text-gray-800 text-x px-3 py-1 rounded-full">AI Engineer</span>
                  <span className="bg-gray-100 text-gray-800 text-x px-3 py-1 rounded-full">Machine Learning Specialist</span>
                  <span className="bg-gray-100 text-gray-800 text-x px-3 py-1 rounded-full">Cloud Architect</span>
                  <span className="bg-gray-100 text-gray-800 text-x px-3 py-1 rounded-full">Data Scientist</span>
                  <span className="bg-gray-100 text-gray-800 text-x px-3 py-1 rounded-full">Blockchain Developer</span>
                  <span className="bg-gray-100 text-gray-800 text-x px-3 py-1 rounded-full">DevOps Engineer</span>
                </div>
              </div>
            </div>
          )} */}

          {activeSection === "specialized-roles" && (
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-4">
      Specialized Roles for CSE Students
    </h3>

    <ul className="space-y-3">
      {specializedRoles.map((role, index) => (
        <li
          key={index}
          className="bg-blue-50 rounded-lg p-3 text-gray-800"
        >
          {role}
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