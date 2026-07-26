import React from "react";

const GoverningBody = () => {
const members = [
  {
    id: 1,
    name: "Dr. Ravi Mishra",
    designation: "Professor & Principal",
    email: "principal@csitdurg.in",
    qualification: "Ph.D., M.Tech., B.E.",
  },
  {
    id: 2,
    name: "Mr. Reetesh Kumar Sharma",
    designation: "Associate Professor",
    email: "reeteshsharma@csitdurg.in",
    qualification: "B.E., M.Tech.",
  },
  {
    id: 3,
    name: "Ms. Purnima",
    designation: "Assistant Professor",
    email: "monudutta91@gmail.com",
    qualification: "B.E., M.Tech.",
  },
  {
    id: 4,
    name: "Ms. Shruti Mehta",
    designation: "Assistant Professor",
    email: "shrutimehra0892@gmail.com",
    qualification: "B.E.",
  },
  {
    id: 5,
    name: "Mrs. Poonam Sharma",
    designation: "Assistant Professor",
    email: "psh518001@gmail.com",
    qualification: "BCA, MCA",
  },
  {
    id: 6,
    name: "Ms. Prachi Sharma",
    designation: "Assistant Professor",
    email: "ps199688@gmail.com",
    qualification: "BCA, MCA",
  },
  {
    id: 7,
    name: "Mrs. Neeku Sahu",
    designation: "Assistant Professor",
    email: "neekusahu@gmail.com",
    qualification: "BCA, MCA",
  },
  {
    id: 8,
    name: "Mrs. Panchkriti Bharti",
    designation: "Assistant Professor",
    email: "panchkirti@csitdurg.in",
    qualification: "Dip. in Comp., M.Sc. (IT), M.Phil",
  },
  {
    id: 9,
    name: "Mr. Harish Kumar",
    designation: "Assistant Professor",
    email: "gupta.harish328@gmail.com",
    qualification: "M.Tech (CS), B.Tech (ETC)",
  },
  {
    id: 10,
    name: "Mrs. Deepty Dubey",
    designation: "Associate Professor",
    email: "deepty_shukla@csitdurg.in",
    qualification: "B.E., M.Tech.",
  },
  {
    id: 11,
    name: "Dr. Monika Bhatnagar",
    designation: "Associate Professor",
    email: "monikabhatnagar12@gmail.com",
    qualification: "M.Tech., Ph.D.",
  },
  {
    id: 12,
    name: "Mrs. Aparna Soni",
    designation: "Assistant Professor",
    email: "aprna13788soni@gmail.com",
    qualification: "B.E., M.Tech.",
  },
  {
    id: 13,
    name: "Mr. Keshav Kori",
    designation: "Assistant Professor",
    email: "keshavsvnit@gmail.com",
    qualification: "B.E., M.Tech.",
  },
  {
    id: 14,
    name: "Ms. Ankita Durge",
    designation: "Assistant Professor",
    email: "ankitadurge1509@gmail.com",
    qualification: "B.E., M.Tech.",
  },
  {
    id: 15,
    name: "Dr. Suraj Sharma",
    designation: "Visiting Faculty",
    email: "surajsharma@csitdurg.in",
    qualification: "M.Tech., Ph.D.",
  },
  {
    id: 16,
    name: "Mr. Jayesh Dewangan",
    designation: "Assistant Professor",
    email: "jayeshdewangan@csitdurg.in",
    qualification: "B.E., M.Tech.",
  },
  {
    id: 17,
    name: "Mr. Sabyasachi Patra",
    designation: "Visiting Faculty",
    email: "sabyasachipatra@csitdurg.in",
    qualification: "M.Tech.",
  },
  {
    id: 18,
    name: "Ms. Kajal Verma",
    designation: "Assistant Professor",
    email: "kajalverma.csit@gmail.com",
    qualification: "B.E., M.Tech.",
  },
];
  return (
  <div className="bg-white rounded-md overflow-hidden">
  {/* Header */}
  <div className="h-40 bg-gray-100 relative">
    <div className="absolute inset-0 flex items-center px-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
          Our Faculty
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Department of Computer Science & Engineering
        </p>

        <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
      </div>
    </div>
  </div>

  {/* Introduction */}
  <div className="px-6 pt-6">
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
      <p className="text-gray-700 leading-relaxed">
        Our faculty members are highly qualified academicians and
        professionals committed to delivering quality education,
        research excellence, and holistic student development.
        Their expertise and dedication play a vital role in shaping
        future-ready engineers and technology professionals.
      </p>
    </div>
  </div>

  {/* Table Section */}
  <div className="p-6 overflow-x-auto">
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <thead>
        <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wide">
          <th className="px-6 py-3">S.No</th>
          <th className="px-6 py-3">Faculty Name</th>
          <th className="px-6 py-3">Designation</th>
          <th className="px-6 py-3">Mail ID</th>
          <th className="px-6 py-3">Qualification</th>
        </tr>
      </thead>

      <tbody className="text-sm text-gray-800">
        {members.map((member, idx) => (
          <tr
            key={member.id}
            className="border-b border-gray-100 hover:bg-gray-50 transition"
          >
            <td className="px-6 py-4 font-medium text-[#0d173b]">
              {idx + 1}
            </td>

            <td className="px-6 py-4 font-medium">
              {member.name}
            </td>

            <td className="px-6 py-4">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  member.designation.includes("Professor")
                    ? "bg-blue-100 text-blue-700"
                    : member.designation.includes("Visiting")
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {member.designation}
              </span>
            </td>

            <td className="px-6 py-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {member.email}
                </a>
              )}
            </td>
            <td className="px-6 py-4">
              {member.qualification}
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