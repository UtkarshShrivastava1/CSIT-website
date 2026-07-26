import React from "react";

const GoverningBody = () => {
  const members = [
    { id: 1, name: "Mr. Anil Kumar", designation: "Head of Department", experience: "4 Years", specialization: "Structural Engg/ Concrete Technology", email: "hodcivil@csitdurg.in" },
    { id: 2, name: "Ms. Divya Tamrakar", designation: "Assistant Professor", experience: "8 Years", specialization: "Structural Engineering", email: "divyatamrakar@csitdurg.in" },
    { id: 3, name: "Mr. Anmol Bhardwaj", designation: "Assistant Professor", experience: "7 Years", specialization: "Transportation Engineering", email: "anmolbhardwaj@csitdurg.in" },
    { id: 4, name: "Mr. Shubham Chandrakar", designation: "Assistant Professor", experience: "5 Years", specialization: "Geotechnical Engineering", email: "Shubhamchandrakar@csitdurg.in" },
    { id: 5, name: "Ms. Aastha Yadav", designation: "Assistant Professor", experience: "3 Years", specialization: "Structural Engineering", email: "aasthayadav@csitdurg.in" },
    { id: 6, name: "Ms. Akansha Ekka", designation: "Assistant Professor", experience: "7 Months", specialization: "Structural Engineering", email: "aakanshaekka@csitdurg.in" },
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
              <th className="px-6 py-3">Experience</th>
              <th className="px-6 py-3">Specialization/Area of Interest</th>
              <th className="px-6 py-3">Mail ID</th>
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
                <td className="px-6 py-4">{member.experience}</td>
                <td className="px-6 py-4">{member.specialization}</td>
                <td className="px-6 py-4">
                  <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">
                    {member.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoverningBody;
