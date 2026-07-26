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
              Connecting Talent with Opportunity – Empowering Students for Successful Careers.
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
              The Training &amp; Placement (T&amp;P) Cell plays a pivotal role in bridging the gap between academia and industry by preparing students for successful professional careers. The Cell is committed to guiding students toward achieving their career aspirations through continuous training, industry interaction, and placement support.
            </p>
            <p className="mb-4">
              With consistent efforts and a structured approach, the T&amp;P Cell ensures that students are equipped with the necessary technical skills, aptitude, and professional competencies required by today's competitive job market. Reputed national and multinational companies regularly visit the campus, offering diverse career opportunities across multiple sectors.
            </p>
            <p className="mb-4">
              The institute has established strong and long-standing relationships with a wide spectrum of organizations, making the campus a preferred destination for recruitment drives. Our well-organized infrastructure and seamless coordination enable companies to conduct recruitment processes efficiently, including aptitude tests, group discussions, technical interviews, and HR interactions.
            </p>
            <p className="mb-4">
              The Training &amp; Placement Office provides complete logistical and infrastructural support for recruitment activities. The institute attracts participation from nearly <strong>100 companies</strong> every year, representing sectors such as Core Engineering, IT and IT-enabled services, Manufacturing, Consultancy, Finance, Management, and Research &amp; Development.
            </p>
          </div>

          {/* Functions Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Key Functions of the T&amp;P Cell
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Assist students in identifying and refining their academic and career goals through individual counselling and group sessions</li>
              <li>Maintain and regularly update comprehensive databases of students and recruiting organizations</li>
              <li>Establish and strengthen industry connections for effective campus recruitment</li>
              <li>Coordinate with companies to understand their recruitment needs and processes</li>
              <li>Align student training with industry expectations to enhance employability</li>
              <li>Organize pre-placement training programs, workshops, and seminars</li>
              <li>Develop students' technical, aptitude, communication, and professional skills to make them industry-ready</li>
              <li>Provide resources and structured guidance for career planning</li>
              <li>Facilitate placement opportunities in reputed organizations across various sectors</li>
            </ul>
          </div>

          {/* Core Values Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Core Values
            </h3>
            <p className="text-sm text-gray-500 mb-4 italic">
              "Industry Ready | Connected | Opportunity Focused | Future Guided | Skill Driven"
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200">
                <div className="flex items-start mb-2">
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-semibold text-[#0d173b]">Industry Readiness:</p>
                    <p className="text-gray-700 text-sm">We are committed to transforming students into competent professionals by equipping them with the skills, knowledge, and attitude required by the industry.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200">
                <div className="flex items-start mb-2">
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-semibold text-[#0d173b]">Strong Industry–Institute Connect:</p>
                    <p className="text-gray-700 text-sm">We act as a dynamic bridge between students and industry, fostering meaningful collaborations and career opportunities.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200">
                <div className="flex items-start mb-2">
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-semibold text-[#0d173b]">Opportunity-Driven Approach:</p>
                    <p className="text-gray-700 text-sm">We continuously explore and create diverse placement opportunities, aligning student preparation with evolving industry demands.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200">
                <div className="flex items-start mb-2">
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-semibold text-[#0d173b]">Guidance for Higher Education:</p>
                    <p className="text-gray-700 text-sm">We support and mentor students aspiring for higher studies by providing proper direction and resources.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200 md:col-span-2">
                <div className="flex items-start mb-2">
                  <div className="w-2 h-2 bg-[#0d173b] rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-semibold text-[#0d173b]">Continuous Skill Enhancement:</p>
                    <p className="text-gray-700 text-sm">We focus on strengthening students' technical and practical knowledge through training, workshops, and real-world exposure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-8">
            <div className="p-4 text-center border border-gray-200 rounded-md bg-gradient-to-b from-[#0d173b]/5 to-transparent">
              <div className="text-2xl font-bold text-[#0d173b] mb-1">100+</div>
              <div className="text-gray-500 text-xs">Companies</div>
            </div>
            <div className="p-4 text-center border border-gray-200 rounded-md bg-gradient-to-b from-[#0d173b]/5 to-transparent">
              <div className="text-2xl font-bold text-[#0d173b] mb-1">70%+</div>
              <div className="text-gray-500 text-xs">Placement Rate</div>
            </div>
            <div className="p-4 text-center border border-gray-200 rounded-md bg-gradient-to-b from-[#0d173b]/5 to-transparent">
              <div className="text-2xl font-bold text-[#0d173b] mb-1">20+</div>
              <div className="text-gray-500 text-xs">Industry Sectors</div>
            </div>
            <div className="p-4 text-center border border-gray-200 rounded-md bg-gradient-to-b from-[#0d173b]/5 to-transparent">
              <div className="text-2xl font-bold text-[#0d173b] mb-1">15 LPA</div>
              <div className="text-gray-500 text-xs">Highest Package</div>
            </div>
            <div className="p-4 text-center border border-gray-200 rounded-md bg-gradient-to-b from-[#0d173b]/5 to-transparent">
              <div className="text-2xl font-bold text-[#0d173b] mb-1">4.80 LPA</div>
              <div className="text-gray-500 text-xs">Average Package</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTNPcell;