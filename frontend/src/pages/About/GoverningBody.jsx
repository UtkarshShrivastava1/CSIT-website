import React from "react";

const GoverningBody = () => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
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
              Governing Body
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Leadership & Oversight
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-6 md:p-8 overflow-x-auto bg-gradient-to-b from-white to-gray-50">
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">S.No</th>
                <th className="px-6 py-4 font-semibold">Name of Members</th>
                <th className="px-6 py-4 font-semibold">Responsibility</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {[
                ["1", "Er. Ajay Prakash Verma", "Chairman"],
                ["2", "Mrs. Satrupa Deshmukh", "Member"],
                ["3", "Mrs. Nandini Verma", "Member"],
                ["4", "Mr. Rajesh Deshmukh", "Member"],
                [
                  "5",
                  "Dr. Santosh Kumar Sharma , Principal, CSIT",
                  "Member- Secretary (Ex-Officio)",
                ],
                ["6", "Mrs. Shakuntala Verma", "Member"],
                ["7", "Nominee of DTE, Raipur", "Member"],
                ["8", "Nominee of the CSVTU, Bhilai", "Member"],
                ["9", "Nominee of the AICTE", "Member"],
                ["10", "Prof. H. R. Chandrakar, Dean (Admission)", "Member"],
              ].map(([no, name, role], idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 font-medium text-[#0d173b] border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-white">
                          {no}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">{name}</td>
                  <td className="px-6 py-4 border-b border-gray-100">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GoverningBody;
