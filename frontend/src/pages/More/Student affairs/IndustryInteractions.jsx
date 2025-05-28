import React from "react";

const IndustryInteractions = () => {
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
              Industry Interactions
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Bridging academia and industry through practical exposure
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Industry Collaborations
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="mb-4">
                  CSIT maintains strong industry connections to provide students
                  with practical exposure to real-world engineering
                  environments. These industrial visits and workshops bridge the
                  gap between theoretical knowledge and practical application.
                </p>
                <p className="mb-4">
                  Students gain insights into manufacturing processes, quality
                  control, automation, and modern industrial practices through
                  these interactions with leading companies across diverse
                  sectors.
                </p>
              </div>
              <div className="md:w-1/3 bg-gray-50 rounded-md border border-gray-200 p-4 flex-shrink-0">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0d173b] mb-2">
                    8+
                  </div>
                  <div className="h-0.5 w-12 bg-[#0d173b] mx-auto my-2"></div>
                  <p className="text-gray-600">Industry visits annually</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Highlights */}
          <div className="my-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              Recent Industry Visits
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Visit 1 */}
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-[#0d173b]/10 to-[#1e305f]/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-[#0d173b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    ></path>
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-[#0d173b] mb-2">
                    Vossloh Beekay Castings Limited
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-medium">Date:</span> 7th October 2023
                  </p>
                  <p className="text-gray-600 text-sm">
                    Students explored rail fastening systems, concrete sleepers,
                    and switch systems manufacturing processes.
                  </p>
                </div>
              </div>

              {/* Visit 2 */}
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-[#0d173b]/10 to-[#1e305f]/10 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-[#0d173b]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-[#0d173b] mb-2">
                    MSME Technology Centre
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-medium">Date:</span> 11th May 2024
                  </p>
                  <p className="text-gray-600 text-sm">
                    Exposure to Tool Design, CAD/CAM/CAE, CNC Programming,
                    Hydraulics, Pneumatics, and Automation technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Visits List */}
          <div className="my-8">
            <h3 className="text-xl font-medium text-[#0d173b] mb-4">
              All Industry Interactions
            </h3>
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      S.No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <p className="font-medium">
                        Vossloh Beekay Castings Limited
                      </p>
                      <p>
                        Visit on 7th October 2023 to explore rail infrastructure
                        products including rail fastening systems, concrete
                        sleepers, and switch systems.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <p className="font-medium">BEC Foods</p>
                      <p>
                        Visit on 27th December 2023 to their world class
                        integrated food manufacturing facility.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <p className="font-medium">MSME Technology Centre</p>
                      <p>
                        Visit on 11th May 2024 focusing on skill development in
                        Tool Design, CAD/CAM/CAE, CNC Programming, and
                        Automation technologies.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      4
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <p className="font-medium">Cipla Ltd.</p>
                      <p>
                        Visit on 19th February 2024 to their pharmaceutical
                        manufacturing facility specializing in tablets,
                        capsules, and inhalers.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <p className="font-medium">RDC Concrete</p>
                      <p>
                        Visit on 14th May 2024 to learn about Ready Mix Concrete
                        production and IT-enabled operations management.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Testimonial */}
          <div className="my-8 bg-gray-50 rounded-md p-6 border border-gray-200">
            <div className="flex items-start">
              <svg
                className="w-8 h-8 text-[#0d173b] flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
              <div className="ml-4">
                <blockquote className="text-gray-600 italic">
                  "The industrial visits organized by CSIT provided me with
                  invaluable practical exposure that complemented my classroom
                  learning. Seeing manufacturing processes first-hand helped me
                  understand theoretical concepts much better."
                </blockquote>
                <div className="text-sm text-[#0d173b] font-medium mt-2">
                  — Rahul Verma, Mechanical Engineering
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mt-8 p-6 bg-[#0d173b] rounded-md">
            <div className="text-center text-white">
              <h3 className="text-xl font-medium mb-2">
                Upcoming Industry Visits
              </h3>
              <p className="text-gray-200 mb-4">
                Stay updated with our upcoming industry interactions and
                workshops
              </p>
              <button className="inline-block px-6 py-2 bg-white text-[#0d173b] cursor-pointer rounded-md font-medium hover:bg-gray-100 transition-colors duration-200">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryInteractions;
