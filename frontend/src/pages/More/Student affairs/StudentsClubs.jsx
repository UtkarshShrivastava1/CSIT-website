import React from "react";

const StudentsClubs = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header with improved gradient */}
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
              Students Clubs
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Empowering students through leadership, innovation, and community
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-none">
          {/* Clubs Table with enhanced design */}
          <div className="my-8 overflow-hidden rounded-xl shadow-sm">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#0d173b] to-[#1e305f]">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Club
                  </th>
                  <th className="px-8 py-5 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Club 1 */}
                <tr className="bg-white hover:bg-blue-50 transition-colors duration-150">
                  <td className="px-8 py-6 align-top">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#0d173b] rounded-lg flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold text-[#0d173b]">
                          ! Click
                        </div>
                        <div className="text-sm text-gray-500">
                          Photography Club
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-gray-700 mb-4">
                      Photography is a knack; for some, it's a passion; and for
                      some, it's a profession. Photographs are the best means to
                      capture reminiscences, and if taken with exactitude, they
                      become treasures.
                    </p>
                    <div className="bg-gray-50/80 p-5 rounded-lg border border-gray-100">
                      <h4 className="font-semibold text-[#0d173b] mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Objectives
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Provide a platform for students to enhance their skills",
                          "Offer membership in an offbeat type of club",
                          "Capture memorable moments uniquely",
                          "Organize photography workshops",
                          "Promote photographic competitions",
                          "Showcase member work publicly",
                          "Foster creative expression",
                          "Provide instruction and mentoring",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#0d173b] mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>

                {/* Club 2 */}
                <tr className="bg-gray-50/50 hover:bg-blue-50 transition-colors duration-150">
                  <td className="px-8 py-6 align-top">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#0d173b] rounded-lg flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold text-[#0d173b]">
                          The Cyrus
                        </div>
                        <div className="text-sm text-gray-500">Music Club</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-gray-700 mb-4">
                      Enrich the campus through concerts and workshops while
                      developing an analytical, creative understanding of music
                      as a cultural language through performance.
                    </p>
                    <div className="bg-white p-5 rounded-lg border border-gray-100">
                      <h4 className="font-semibold text-[#0d173b] mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Objectives
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Develop performance skills on various instruments",
                          "Explore music's relationship to student experiences",
                          "Provide worthy use of time and self-expression",
                          "Enhance group responsibility and social interaction",
                          "Foster leadership skills in members",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#0d173b] mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>

                {/* Club 3 */}
                <tr className="bg-white hover:bg-blue-50 transition-colors duration-150">
                  <td className="px-8 py-6 align-top">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#0d173b] rounded-lg flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold text-[#0d173b]">
                          RAW
                        </div>
                        <div className="text-sm text-gray-500">
                          Robotics Club
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-gray-700 mb-4">
                      Students learn to code and command robots through play,
                      acquiring STEM skills applicable beyond the classroom
                      through hands-on workshops and competitions.
                    </p>
                    <p className="text-gray-600">
                      Over the past three years, we've actively engaged students
                      with workshops, contests, and tutorials to develop their
                      robotics interest.
                    </p>
                  </td>
                </tr>

                {/* Club 4 */}
                <tr className="bg-gray-50/50 hover:bg-blue-50 transition-colors duration-150">
                  <td className="px-8 py-6 align-top">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12 bg-[#0d173b] rounded-lg flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold text-[#0d173b]">
                          SOCH
                        </div>
                        <div className="text-sm text-gray-500">
                          Social Media Club
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-gray-700 mb-4">
                      A crew exploring societal issues through social media
                      while connecting, communicating, and collaborating to
                      transform lives through digital platforms.
                    </p>
                    <div className="bg-white p-5 rounded-lg border border-gray-100">
                      <h4 className="font-semibold text-[#0d173b] mb-3 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Objectives
                      </h4>
                      <ul className="space-y-2">
                        {[
                          "Provide creative expression through social media",
                          "Foster industry-institute interaction",
                          "Develop alumni and professional networks",
                          "Digitally market institute events and activities",
                        ].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-[#0d173b] mr-2">•</span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsClubs;
