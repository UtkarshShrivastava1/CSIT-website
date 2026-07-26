import { useState } from "react";

const CareerOpportunity = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const higherStudies = [
    "M.Sc. in Mathematics",
    "M.Sc. in Physics",
    "M.Sc. in Chemistry",
    "M.A. / M.Sc. in Communication Skills / English",
    "Master of Philosophy (M.Phil.)",
    "Doctorate (Ph.D.)",
    "Post Graduate Diploma Courses",
  ];

  const governmentSector = [
    "School Education Departments",
    "Higher Education Institutions",
    "Research Organizations",
    "Public Service Commissions",
    "Scientific and Technical Institutions",
    "State and Central Government Offices",
  ];

  const privateSector = [
    "Educational Institutions",
    "Research Labs",
    "Publishing Houses",
    "Training and Coaching Centers",
    "Media and Communication Firms",
    "EdTech Companies",
    "Content Development Agencies",
    "Scientific Organizations",
  ];

  const jobTitles = [
    "Mathematics Teacher",
    "Physics Teacher",
    "Chemistry Teacher",
    "Communication Skills Trainer",
    "Lab Assistant",
    "Research Assistant",
    "Content Developer",
    "Technical Writer",
  ];

  return (
    <div className="space-y-8">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Career Opportunity
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Science & Humanities | Careers
            </p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <section>
        <p className="text-gray-700 leading-relaxed mb-6">
          Science & Humanities offers a strong foundation in Mathematics,
          Physics, Chemistry, and Communication Skills. It opens pathways to
          higher studies, teaching, research, industry roles, and communication
          based careers.
        </p>
      </section>

      <div className="flex flex-wrap gap-2">
        {[
          { id: "overview", name: "Overview" },
          { id: "higher-studies", name: "Higher Studies" },
          { id: "govt-sector", name: "Government Sector" },
          { id: "private-sector", name: "Private Sector" },
          { id: "job-titles", name: "Job Titles" },
        ].map((section) => (
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

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6">
          {activeSection === "overview" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Future for Science & Humanities Students
              </h3>

              <div className="bg-gradient-to-r from-gray-50 to-gray-50 p-5 rounded-xl border border-gray-100">
                <p className="text-gray-700">
                  Science & Humanities provides diverse career opportunities in
                  education, research, public service, and private sectors.
                  Students can build careers based on analytical thinking,
                  scientific knowledge, and communication skills.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-gray-800">
                    Higher Education
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-gray-800">
                    Government Jobs
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-gray-800">
                    Private Sector
                  </span>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800">
                    Teaching & Research
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
                  <li
                    key={index}
                    className="bg-indigo-50 rounded-lg p-3 text-gray-800"
                  >
                    {study}
                  </li>
                ))}
              </ul>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">
                  Benefits of Advanced Degrees
                </h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Specialization in a chosen subject area.</li>
                  <li>Better opportunities in teaching and research.</li>
                  <li>Improved career growth in academic and professional fields.</li>
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
                  <li
                    key={index}
                    className="bg-blue-50 rounded-lg p-3 text-gray-800"
                  >
                    {org}
                  </li>
                ))}
                <li className="bg-blue-50 rounded-lg p-3 text-gray-800">
                  And many more...
                </li>
              </ul>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">
                  Benefits of Government Jobs
                </h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Job stability and security.</li>
                  <li>Opportunities in education and public service.</li>
                  <li>Respectable career paths with long-term growth.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === "private-sector" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Private Sector Opportunities
              </h3>

              <ul className="space-y-3">
                {privateSector.map((company, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 rounded-lg p-3 text-gray-800"
                  >
                    {company}
                  </li>
                ))}
                <li className="bg-gray-50 rounded-lg p-3 text-gray-800">
                  And many more...
                </li>
              </ul>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-medium text-gray-800 mb-2">
                  Private Sector Advantages
                </h4>
                <ul className="space-y-2 text-gray-700 pl-5 list-disc">
                  <li>Opportunities in education, content, and communication.</li>
                  <li>Skill-based growth and career flexibility.</li>
                  <li>Exposure to modern tools and professional environments.</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === "job-titles" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Job Titles for Science & Humanities Students
              </h3>

              <ul className="space-y-3">
                {jobTitles.map((title, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 rounded-lg p-3 text-gray-800"
                  >
                    {title}
                  </li>
                ))}
                <li className="bg-gray-50 rounded-lg p-3 text-gray-800">
                  And many more...
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerOpportunity;