import React from "react";

export default function FundsGrantsTable() {
  // The primary color used throughout
  const primaryColor = "#0d173b";

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Header with solid background using the specified color */}
      <div className={`h-44 bg-[${primaryColor}] relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Funds/Grants
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Research & Development
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
              <tr
                className={`bg-[${primaryColor}] text-white text-left text-sm uppercase tracking-wider`}
              >
                <th className="px-6 py-4 font-semibold">S.No</th>
                <th className="px-6 py-4 font-semibold">Faculty Name</th>
                <th className="px-6 py-4 font-semibold">SPI / CO-PI</th>
                <th className="px-6 py-4 font-semibold">Topic</th>
                <th className="px-6 py-4 font-semibold">Ref. No.</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {[
                [
                  "1",
                  "Dr. Shailendra Kumar Kushawaha",
                  "Project Assistant",
                  "Air Quality Monitoring Program",
                  "CRP - (CHeRN) Delhi & and University of Massachusetts, Amherst.",
                  "$ 2500",
                ],
                [
                  "2",
                  "Mr. H. R. Chandrakar",
                  "Co-PI",
                  "Fabrication of safe low pressure acetylene generator for gas welders of Chhattisgarh region",
                  "CSVTU TEQIP-III",
                  "1,00,000/-",
                ],
                [
                  "3",
                  "Prof. Sanjay Kumar Singh",
                  "Co-PI",
                  "Synthesis and Characterization of High Entropy Alloys",
                  "CSVTU TEQIP-III",
                  "3,00,000/-",
                ],
                [
                  "4",
                  "Prof. Sanjay Kumar Singh",
                  "PI",
                  "Development of Functionally Graded Material & Mechanical Object Disk & Plate",
                  "CSVTU TEQIP-III",
                  "2,00,000/-",
                ],
                [
                  "5",
                  "Mr. Prabhas Gupta",
                  "PI",
                  "Smart Irrigation System Using IoT",
                  "CRP under TEQIP-III and CSVTU",
                  "1,00,000/-",
                ],
                [
                  "6",
                  "Mr. V. Hemant Kumar",
                  "Principal Investigator",
                  "Development and Deployment of Smart Controller for Solar Pumps to Drive Agricultural and Domestic Equipment",
                  "CRP under TEQIP-III and CSVTU",
                  "1,50,000/-",
                ],
              ].map(([no, name, role, topic, refNo, amount], idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td
                    className={`px-6 py-4 font-medium text-[${primaryColor}] border-b border-gray-100`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`h-6 w-6 rounded-full bg-[${primaryColor}] flex items-center justify-center mr-2`}
                      >
                        <span className="text-xs font-bold text-white">
                          {no}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">{name}</td>
                  <td className="px-6 py-4 border-b border-gray-100">{role}</td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {topic}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {refNo}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
