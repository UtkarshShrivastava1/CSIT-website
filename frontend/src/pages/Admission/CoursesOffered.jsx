import React from "react";

const CoursesOffered = () => {
  // Add mobile cards view and hide table on mobile
  const coursesData = [
    {
      no: "1",
      course: "B.Tech. in Mechanical Engineering",
      estd: "1999",
      seats: "60",
      icon: "⚙️",
    },
    {
      no: "2",
      course: "B.Tech. in Computer Science & Engineering",
      estd: "1999",
      seats: "90",
      icon: "💻",
    },
    {
      no: "3",
      course: "B.Tech. in Information Technology",
      estd: "2008",
      seats: "45",
      icon: "🌐",
    },
    {
      no: "4",
      course: "B.Tech. in Mechatronics Engineering",
      estd: "2009",
      seats: "30",
      icon: "🤖",
    },
    {
      no: "5",
      course: "B.Tech. in Civil Engineering",
      estd: "2017",
      seats: "45",
      icon: "🏗️",
    },
    {
      no: "6",
      course: "B.Tech. in Artificial Intelligence & Data Science",
      estd: "2021",
      seats: "60",
      icon: "🧠",
    },
    {
      no: "7",
      course: "B.Tech. in Electrical & Electronics Engineering",
      estd: "2002",
      seats: "30",
      icon: "⚡",
    },
  ];

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header with gradient background */}
      <div className="h-44 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Courses Offered
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Undergraduate Programs
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table/Card Container */}
      <div className="p-6 md:p-8">
        {/* Mobile View - Cards */}
        <div className="md:hidden space-y-4">
          {coursesData.map((item) => (
            <div
              key={item.no}
              className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 bg-[#0d173b] bg-opacity-10 rounded-full flex items-center justify-center">
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-[#0d173b]">
                    Course {item.no}
                  </span>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {item.estd}
                </span>
              </div>

              <h3 className="text-base font-medium text-gray-900 mb-2">
                {item.course}
              </h3>

              <div className="flex items-center text-sm text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#1e305f] mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>Seats: {item.seats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Existing Table */}
        <div className="hidden md:block">
          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">S.No</th>
                  <th className="px-6 py-4 font-semibold">Courses</th>
                  <th className="px-6 py-4 font-semibold">Estd</th>
                  <th className="px-6 py-4 font-semibold">Seats</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {[
                  {
                    no: "1",
                    course: "B.Tech. in Mechanical Engineering",
                    estd: "1999",
                    seats: "60",
                    icon: "⚙️",
                  },
                  {
                    no: "2",
                    course: "B.Tech. in Computer Science & Engineering",
                    estd: "1999",
                    seats: "90",
                    icon: "💻",
                  },
                  {
                    no: "3",
                    course: "B.Tech. in Information Technology",
                    estd: "2008",
                    seats: "45",
                    icon: "🌐",
                  },
                  {
                    no: "4",
                    course: "B.Tech. in Mechatronics Engineering",
                    estd: "2009",
                    seats: "30",
                    icon: "🤖",
                  },
                  {
                    no: "5",
                    course: "B.Tech. in Civil Engineering",
                    estd: "2017",
                    seats: "45",
                    icon: "🏗️",
                  },
                  {
                    no: "6",
                    course: "B.Tech. in Artificial Intelligence & Data Science",
                    estd: "2021",
                    seats: "60",
                    icon: "🧠",
                  },
                  {
                    no: "7",
                    course: "B.Tech. in Electrical & Electronics Engineering",
                    estd: "2002",
                    seats: "30",
                    icon: "⚡",
                  },
                ].map((item, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-blue-50 transition-colors duration-150`}
                  >
                    <td className="px-6 py-4 font-medium text-[#0d173b] border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="h-6 w-6   rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-2">
                          <span className="text-xs font-bold text-white">
                            {item.no}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.course}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-100">
                      <span className="bg-[#0d173b] bg-opacity-3 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {item.estd}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#1e305f] mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <span>{item.seats}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Facts Section - Show on both views */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-600">
            <p className="font-medium text-[#0d173b] mb-2">Quick Facts:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#0d173b] mr-2"></div>
                <span>All programs are AICTE approved</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#0d173b] mr-2"></div>
                <span>Four-year undergraduate programs</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-[#0d173b] mr-2"></div>
                <span>Choice-based credit system</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesOffered;
