import React from "react";

const GoverningBody = () => {
  const members = [
    { id: 1, name: "Mr. Ritesh Kumar Kamble", designation: "In-Charge Head & Assistant Professor" },
    { id: 2, name: "Ms. Divya Tamrakar", designation: "Assistant Professor" },
    { id: 3, name: "Ms. Aastha Yadav", designation: "Assistant Professor" },
    { id: 4, name: "Mr. Anmol Bhardwaj", designation: "Assistant Professor" },
    { id: 5, name: "Mr. Shubham Chandrakar", designation: "Assistant Professor" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Our Faculty
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              CSIT | Faculty Members
            </p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-6 overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wider">
              <th className="px-6 py-3">S.No</th>
              <th className="px-6 py-3">Name of Members</th>
              <th className="px-6 py-3">Designation</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {members.map((member, idx) => (
              <tr
                key={member.id}
                className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-6 py-4 font-medium text-[#0d173b]">
                  {idx + 1}
                </td>
                <td className="px-6 py-4">{member.name}</td>
                <td className="px-6 py-4">{member.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoverningBody;
