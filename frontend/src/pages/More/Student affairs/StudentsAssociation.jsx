import React from "react";

const StudentsAssociation = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header with improved gradient and overlay */}
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
              Students Association
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Empowering students through leadership, innovation, and community
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="prose max-w-none text-gray-700">
          {/* Overview Section - Modernized */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-[#0d173b] mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#0d173b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              About SEnA
            </h3>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 text-gray-600 leading-relaxed">
                <p className="mb-4">
                  SEnA is a student-run organization dedicated to enhancing the
                  engineering education experience through academic support,
                  professional development, and community-building activities.
                  The association serves as the voice of the student body while
                  organizing diverse events throughout the academic year.
                </p>
                <p className="mb-4">
                  Comprising elected student leaders from various departments,
                  SEnA bridges the gap between students and administration while
                  fostering technical, leadership, and interpersonal skills.
                </p>
              </div>
              <div className="md:w-1/3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg border border-indigo-100 p-6 flex-shrink-0 shadow-sm">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#0d173b] mb-2">
                    27+
                  </div>
                  <div className="h-1 w-16 bg-indigo-400 mx-auto my-3 rounded-full"></div>
                  <p className="text-[#0d173b]">Annual events organized</p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Roles Section - Improved cards */}
          <div className="my-12">
            <h3 className="text-2xl font-semibold text-[#0d173b] mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 bg-blue-50 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#0d173b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm1 0v12h12V3H4z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M10 8a1 1 0 00-1 1v2a1 1 0 002 0V9a1 1 0 00-1-1zm-3 5a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              Key Roles of SEnA
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Role cards with improved styling */}
              {[
                {
                  title: "Leadership",
                  description:
                    "Planning and executing the association's initiatives through elected student leaders.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                },
                {
                  title: "Academic Support",
                  description:
                    "Organizing tutoring sessions, study groups, workshops, and guest lectures.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  ),
                },
                {
                  title: "Professional Development",
                  description:
                    "Conducting seminars, workshops, and career fairs for career readiness.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                },
                {
                  title: "Social & Cultural Activities",
                  description:
                    "Organizing festivals, sports tournaments, cultural performances, and social gatherings.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  ),
                },
                {
                  title: "Technical Competitions",
                  description:
                    "Hosting hackathons and technical competitions to showcase engineering skills.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  ),
                },
                {
                  title: "Representation",
                  description:
                    "Acting as a bridge between students and administration to voice concerns and suggestions.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  ),
                },
              ].map((role, index) => (
                <div
                  key={index}
                  className="bg-white border border-indigo-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-20 bg-gradient-to-r from-[#0d173b] to-[#1e305f] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {role.icon}
                    </svg>
                  </div>
                  <div className="p-5">
                    <h4 className="font-medium text-lg text-[#0d173b] mb-2">
                      {role.title}
                    </h4>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Objectives Section - Improved styling */}
          <div className="my-12">
            <h3 className="text-2xl font-semibold text-[#0d173b] mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#0d173b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              Objectives
            </h3>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-100 shadow-sm">
              <ol className="list-none pl-0 space-y-4">
                {[
                  "To provide academic support to students by organizing study groups, tutoring sessions, workshops, and academic resources to enhance their learning experience.",
                  "To foster professional development by organizing events such as seminars, workshops, and career fairs, industry insights, and guidance on career paths.",
                  "To focus on developing and enhancing skills among engineering students, such as technical skills, leadership abilities, communication skills, teamwork, problem-solving, and other relevant competencies.",
                  "To organize social and cultural events, sports tournaments, and other activities to foster interaction and create a sense of community among students.",
                  "To provide a platform representing students' interests and concerns to the college administration for advocating improvements in academic policies, infrastructure, and student facilities.",
                ].map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0d173b] text-white flex items-center justify-center mr-3 mt-0.5 font-medium text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Leadership Team - Improved table */}
          <div className="my-12">
            <h3 className="text-2xl font-semibold text-[#0d173b] mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#0d173b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </span>
              Leadership Team 2023-24
            </h3>
            <div className="overflow-hidden border border-indigo-100 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-indigo-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0d173b] to-[#1e305f]">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        S.No
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Course
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Year
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Branch
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Position
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Contact
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-50">
                    {[
                      {
                        sno: 1,
                        name: "Vaibhav Kose",
                        course: "B Tech",
                        year: "4th",
                        branch: "CSE",
                        position: "President",
                        contact: "96911 02905",
                      },
                      {
                        sno: 2,
                        name: "Shivam Tiwari",
                        course: "B Tech",
                        year: "4th",
                        branch: "CSE",
                        position: "Vice President",
                        contact: "75820 66080",
                      },
                      {
                        sno: 3,
                        name: "Menka Mohbekar",
                        course: "B Tech",
                        year: "3rd",
                        branch: "CSE",
                        position: "Secretary",
                        contact: "91311 88742",
                      },
                      {
                        sno: 4,
                        name: "Anant Sharma",
                        course: "B Tech",
                        year: "3rd",
                        branch: "CSE",
                        position: "Joint Secretary",
                        contact: "62686 08065",
                      },
                      {
                        sno: 5,
                        name: "Sanjay Sahu",
                        course: "B Tech",
                        year: "3rd",
                        branch: "CSE",
                        position: "Treasurer",
                        contact: "78699 38566",
                      },
                      {
                        sno: 6,
                        name: "Monesh Thakkar",
                        course: "B Tech",
                        year: "3rd",
                        branch: "CSE",
                        position: "",
                        contact: "94061 88514",
                      },
                      {
                        sno: 7,
                        name: "Nomeshwari",
                        course: "B Tech",
                        year: "3rd",
                        branch: "CSE",
                        position: "",
                        contact: "79995 76158",
                      },
                      {
                        sno: 8,
                        name: "Yash Berman",
                        course: "B Tech",
                        year: "2nd",
                        branch: "CSE",
                        position: "",
                        contact: "62675 61352",
                      },
                      {
                        sno: 9,
                        name: "Priyanshu Mohobia",
                        course: "B Tech",
                        year: "2nd",
                        branch: "CSE",
                        position: "",
                        contact: "98270 78504",
                      },
                      {
                        sno: 10,
                        name: "Manas Gupta",
                        course: "B Tech",
                        year: "2nd",
                        branch: "CSE",
                        position: "",
                        contact: "96432 08358",
                      },
                    ].map((member, index) => (
                      <tr
                        key={member.sno}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-100"
                        } hover:bg-blue-50 transition-colors duration-150`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#0d173b]">
                          {member.sno}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800">
                          {member.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {member.course}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {member.year}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {member.branch}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {member.position && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-[#0d173b]">
                              {member.position}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {member.contact}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Activities Calendar - Enhanced table */}
          <div className="my-12">
            <h3 className="text-2xl font-semibold text-[#0d173b] mb-6 flex items-center">
              <span className="w-8 h-8 mr-2 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-[#0d173b]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              Annual Events Calendar 2023-24
            </h3>
            <div className="overflow-hidden border border-indigo-100 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-indigo-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0d173b] to-[#1e305f]">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        S.No
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-50">
                    {[
                      {
                        sno: 1,
                        event: "Ganesh Puja",
                        date: "19.09.23 - 29.09.23",
                        category: "cultural",
                      },
                      {
                        sno: 2,
                        event: "Student Association Post Holder Interaction",
                        date: "23.09.23",
                        category: "academic",
                      },
                      {
                        sno: 3,
                        event: "GOT TALENT - Rangoli, Mehandi",
                        date: "06.10.23 & 07.10.23",
                        category: "cultural",
                      },
                      {
                        sno: 4,
                        event: "ENERGIA - Badminton Tournament",
                        date: "11.10.23 - 14.10.23",
                        category: "sports",
                      },
                      {
                        sno: 5,
                        event: "ENERGIA - Volleyball Tournament",
                        date: "14.10.23",
                        category: "sports",
                      },
                      {
                        sno: 6,
                        event: "Garba Night Cultural",
                        date: "21.10.23",
                        category: "cultural",
                      },
                      {
                        sno: 7,
                        event: "ENERGIA - Gully Cricket",
                        date: "04.11.23",
                        category: "sports",
                      },
                      {
                        sno: 8,
                        event: "GOT TALENT - Dancing",
                        date: "25.11.23",
                        category: "cultural",
                      },
                      {
                        sno: 9,
                        event: "Engineering Fresher Party - AAGHZ'23",
                        date: "02.12.23",
                        category: "cultural",
                      },
                      {
                        sno: 10,
                        event: "ENERGIA - Basket Ball Tournament",
                        date: "02.12.23",
                        category: "sports",
                      },
                      {
                        sno: 11,
                        event: "GOT TALENT - Sur N Saaz",
                        date: "16.12.23",
                        category: "cultural",
                      },
                      {
                        sno: 12,
                        event: "ENERGIA - Kabaddi Tournament",
                        date: "23.12.23",
                        category: "sports",
                      },
                      {
                        sno: 13,
                        event: "ENERGIA - BGMI",
                        date: "12.01.24",
                        category: "technical",
                      },
                      {
                        sno: 14,
                        event: "ENERGIA - Free Fire",
                        date: "13.01.24",
                        category: "technical",
                      },
                      {
                        sno: 15,
                        event: "GOT TALENT - SKIT",
                        date: "14.01.24",
                        category: "cultural",
                      },
                      {
                        sno: 16,
                        event: "GOT TALENT - Group Song",
                        date: "15.01.24",
                        category: "cultural",
                      },
                      {
                        sno: 17,
                        event: "ENERGIA - FUTSAL",
                        date: "20.01.24",
                        category: "sports",
                      },
                      {
                        sno: 18,
                        event: "GOT TALENT - Group Dancing / Solo Song",
                        date: "26.01.24",
                        category: "cultural",
                      },
                      {
                        sno: 19,
                        event: "ENERGIA - Caroom / Chess",
                        date: "03.02.24",
                        category: "sports",
                      },
                      {
                        sno: 20,
                        event: "ENERGIA - Cricket",
                        date: "16.02.24",
                        category: "sports",
                      },
                      {
                        sno: 21,
                        event: "ENERGIA - Kho-Kho",
                        date: "17.02.24",
                        category: "sports",
                      },
                      {
                        sno: 22,
                        event: "GOT TALENT - Speech",
                        date: "01.03.24",
                        category: "academic",
                      },
                      {
                        sno: 23,
                        event: "GOT TALENT - Debate",
                        date: "02.03.24",
                        category: "academic",
                      },
                      {
                        sno: 24,
                        event: "Painting / Drawing",
                        date: "03.03.24",
                        category: "cultural",
                      },
                      {
                        sno: 25,
                        event: "ENERGIA - Athletics",
                        date: "23.03.24",
                        category: "sports",
                      },
                      {
                        sno: 26,
                        event: "GOT TALENT - Dancing",
                        date: "13.04.24",
                        category: "cultural",
                      },
                      {
                        sno: 27,
                        event: "GOT TALENT - Sur N Saaz",
                        date: "27.04.24",
                        category: "cultural",
                      },
                    ].map((activity, index) => {
                      // Define category colors
                      const categoryColors = {
                        cultural: "bg-pink-100 text-pink-800",
                        sports: "bg-green-100 text-green-800",
                        technical: "bg-amber-100 text-amber-800",
                        academic: "bg-blue-100 text-blue-800",
                      };

                      return (
                        <tr
                          key={activity.sno}
                          className={`${
                            index % 2 === 0 ? "bg-white" : "bg-gray-100"
                          } hover:bg-blue-50 transition-colors duration-150`}
                        >
                          <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-[#0d173b]">
                            {activity.sno}
                          </td>
                          <td className="px-6 py-3 text-sm text-gray-700">
                            <div className="flex items-center">
                              <span
                                className={`inline-flex mr-2 items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                  categoryColors[activity.category]
                                }`}
                              >
                                {activity.category.charAt(0).toUpperCase() +
                                  activity.category.slice(1)}
                              </span>
                              {activity.event}
                            </div>
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-600">
                            {activity.date}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Footer */}
          {/* <div className="mt-12 pt-8 border-t border-indigo-100">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h4 className="text-lg font-semibold text-indigo-900">
                  Student Engineers Association
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  CSIT Engineering College
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-4 py-2 rounded-md transition-colors duration-200">
                  Contact Us
                </button>
                <button className="bg-white border border-indigo-900 text-indigo-900 hover:bg-indigo-50 px-4 py-2 rounded-md transition-colors duration-200">
                  Join SEnA
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StudentsAssociation;
