import React from "react";

const AboutTNPcell = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Training & Placement Cell
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Bridging Industry and Institution
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* About Us Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              About Us
            </h3>
            <p className="mb-4">
              T&P Cell strives for bridging the gap between Industry and Institution. Consistent efforts are made to ensure students get placed in their dream jobs. The biggest names in the corporate world visit the campus on a regular basis, with huge number of recruitment openings. The Placement section boasts of maintaining an excellent rapport with a wide spectrum of companies spread across various industry sectors. Our hospitality and facilities on offer to conduct massive recruitment drives makes our campus ideal for a Company's recruitment activities.
            </p>
            <p className="mb-4">
              The Training & Placement Office provides the infra-structural facilities to conduct group discussions, tests and interviews besides catering to other logistics. The Office interacts with many industries in the country, of which nearly 200 companies visit the campus for holding campus interviews. The industries which approach the institute come under the purview of: Core Engineering industries, IT & IT enabled services, Manufacturing Industries, Consultancy Firms, Finance Companies, Management Organizations, R & D laboratories.
            </p>
          </div>

          {/* Functions Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Functions
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Help students to develop or clarify their academic and career interests, and their short and long-term goals through individual counselling and group sessions</li>
              <li>Maintaining and regularly updating the database of students. Maintaining database of companies and establishing strategic links for campus recruitments.</li>
              <li>Coordinating with companies to learn about their requirements and recruitment procedures</li>
              <li>Identifying the needs and expectations of the companies to assist them in recruiting most suitable candidates.</li>
              <li>Organizing pre-placement training/workshops/seminars for students.</li>
              <li>Training Students to make them Corporate Ready.</li>
              <li>To provide resources and activities to facilitate the career planning process.</li>
              <li>Help students in obtaining placement in reputed companies.</li>
            </ul>
          </div>

          {/* Core Values Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Core Values
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "To Make the Students Industry Ready.",
                "To Act as a Bridge between Industry and Students.",
                "To Explore Best Placement Opportunities and Prepare Students accordingly.",
                "To Guide Students for Higher Studies.",
                "To Enhance Current Technical & Practical Knowledge of Students."
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2"></div>
                    <p className="text-gray-700">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            {[
              { value: "200+", label: "Companies" },
              { value: "95%", label: "Placement Rate" },
              { value: "10+", label: "Industry Sectors" },
              { value: "1000+", label: "Students Placed" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-4 text-center border border-gray-200 rounded-md"
              >
                <div className="text-2xl font-bold text-[#0d173b] mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTNPcell; 