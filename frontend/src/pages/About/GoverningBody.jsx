import React, { useState } from "react";

const GoverningBody = () => {
  const [viewMode, setViewMode] = useState("table"); // "table" or "cards"

const members = [
  ["1", "Mr. Ajay Prakash Verma", "Chairman"],
  ["2", "Mrs. Satrupa Deshmukh", "Member"],
  ["3", "Mrs. Nandini Verma", "Member"],
  ["4", "Mr. Rajesh Deshmukh", "Member"],
  ["5", "Mrs. Shakuntala Verma", "Member"],
  ["6", "Dr. Ravi Mishra, Principal, CSIT", "Member-Secretary (Ex-Officio)"],
  ["7", "Nominee of the AICTE", "Member"],
  ["8", "Nominee of the DTE, Raipur", "Member"],
  ["9", "Dr. R. N. Khare, Nominee of the CSVTU, Bhilai", "Member"],
  ["10", "Dr. S. K. Singh, Nominee of the CSVTU, Bhilai", "Member"],
  ["11", "Dr. Santosh Kumar Sharma", "Member"],
  ["12", "Dr. Chandra Shekhar Sharma", "Member"],
];

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Header with gradient background */}
      <div className="h-32 sm:h-44 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Governing Body
            </h2>
           <p className="text-gray-200 text-sm mt-2">
              Chhatrapati Shivaji Institute of Technology
            </p>
            <div className="h-0.5 w-16 sm:w-20 bg-white mt-2 sm:mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-[#0d173b] mb-3">
                    About the Governing Body
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    The Governing Body of CSIT provides strategic direction, policy
                    guidance, and institutional oversight to ensure academic excellence,
                    transparency, and continuous growth. It comprises distinguished
                    members from academia, administration, industry, and regulatory
                    bodies who contribute to the institution's vision and development.
                  </p>
                </div>


      {/* View Toggle Buttons (Mobile) */}
      <div className="block sm:hidden bg-gray-50 px-4 py-3 border-b">
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode("table")}
            className={`px-3 py-2 text-xs rounded-md font-medium transition-colors ${
              viewMode === "table"
                ? "bg-[#0d173b] text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Table View
          </button>
          <button
            onClick={() => setViewMode("cards")}
            className={`px-3 py-2 text-xs rounded-md font-medium transition-colors ${
              viewMode === "cards"
                ? "bg-[#0d173b] text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Card View
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
        {/* Desktop/Tablet - Table View */}
        <div
          className={`${
            viewMode === "table" ? "block" : "hidden"
          } sm:block overflow-x-auto rounded-lg shadow-md border border-gray-200`}
        >
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#0d173b] text-white text-left text-xs sm:text-sm uppercase tracking-wider">
                <th className="px-3 sm:px-6 py-3 sm:py-4 font-semibold">
                  S.No
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 font-semibold">
                  Name of Members
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 font-semibold">
                  Responsibility
                </th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm text-gray-800">
              {members.map(([no, name, role], idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-[#0d173b] border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-white">
                          {no}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-100 break-words">
                    {name}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        role === "Chairman"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile - Card View */}
        <div
          className={`${
            viewMode === "cards" ? "block" : "hidden"
          } sm:hidden space-y-4`}
        >
          {members.map(([no, name, role], idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#0d173b]">
                      {no}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-gray-900 break-words">
                      {name}
                    </h3>
                    <div className="mt-2">
                     <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          role.includes("Chairman")
                            ? "bg-blue-100 text-blue-800"
                            : role.includes("Secretary")
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoverningBody;
