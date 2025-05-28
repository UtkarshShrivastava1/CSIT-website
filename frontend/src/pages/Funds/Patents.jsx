import React from "react";

export default function PatentsTable() {
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
              Patents
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Intellectual Property
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
                <th className="px-6 py-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {[
                [
                  "1",
                  <div>
                    Patent title "
                    <strong>
                      Integrating the Algorithms and Foundations of Chip Design
                      with Biochemistry and the Life Sciences within the
                      Framework of Designing Microfluidic Biochips
                    </strong>
                    ", by <strong>Dr. Shailendra Kumar Kushawaha</strong> in
                    INTELLECTUAL PROPERTY INDIA.
                  </div>,
                ],
                [
                  "2",
                  <div>
                    Patent title "
                    <strong>Stirrer for Casting of Composite Materials</strong>
                    ", by <strong>Prof. Sanjay Kumar Singh</strong> in
                    INTELLECTUAL PROPERTY INDIA.
                  </div>,
                ],
                [
                  "3",
                  <div>
                    Patent title "
                    <strong>
                      A Multidisciplinary Intelligent System for Smart
                      Agriculture using Internet of Things (IoT)
                    </strong>
                    ", by{" "}
                    <strong>
                      Dr. Santosh Kumar Sharma, Dr. Rajesh Kumar, Prof. Sanjay
                      Kumar Singh, Prof. Prabhas Kumar Gupta and Er. Rahul
                      Barchhiha
                    </strong>{" "}
                    in INTELLECTUAL PROPERTY INDIA.
                  </div>,
                ],
              ].map(([no, description], idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td
                    className={`px-6 py-4 font-medium text-[${primaryColor}] border-b border-gray-100 align-top`}
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
                  <td className="px-6 py-4 border-b border-gray-100">
                    {description}
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
