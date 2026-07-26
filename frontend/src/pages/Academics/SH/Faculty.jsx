import React from "react";

const ScienceHumanitiesFaculty = () => {
  const members = [    
    {  id: 1,
       name: "Dr Chandra Shekhar Sharma",
       designation: "Associate Professor and Head", 
       department: "Department of English", 
       qualification: "MA English, MA Sociology, B.Ed and PhD [English Literature]",
       experience: "26 Years",
       email: "chandrashekhar@csitdurg.in" },
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
              Science & Humanities | Faculty Members
            </p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="p-6 ">
        <table className="min-w-full border border-gray-200 rounded-lg shadow-sm overflow-x-auto">
          <thead>
            <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wider">
              <th className="px-6 py-3">S.No.</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Designation</th>
              <th className="px-6 py-3">Department</th>
              <th className="px-6 py-3">Qualification</th>
              <th className="px-6 py-3">Experience</th>
              <th className="px-6 py-3">Email</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800 ">
            {members.map((member, idx) => (
              <tr
                key={member.id}
                className={`${
                  idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200 transition-colors`}
              >
                <td className="px-6 py-4 font-medium text-[#0d173b]">
                  {idx + 1}
                </td>
                <td className="px-6 py-4">{member.name}</td>
                <td className="px-6 py-4">{member.designation}</td>
                <td className="px-6 py-4">{member.department}</td>
                <td className="px-6 py-4">{member.qualification}</td>
                <td className="px-6 py-4">{member.experience}</td>
                <td className="px-6 py-4">
                  <a href={`mailto:${member.email}`} className="text-indigo-600 hover:underline">{member.email}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScienceHumanitiesFaculty;