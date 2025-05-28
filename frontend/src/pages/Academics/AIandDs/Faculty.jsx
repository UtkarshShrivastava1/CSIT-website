import React from "react";

const GoverningBody = () => {
  const members = [
    { id: 1, name: "Dr. Ravi Mishara", designation: "Head of Department" },
    { id: 2, name: "Mr. Shashikant Agrawal", designation: "Assistant Professor" },
    { id: 3, name: "Mrs. Deepty Dubey", designation: "Associate Professor" },
    { id: 4, name: "Mr. Kranti Kumar Jain", designation: "Assistant Professor" },
    { id: 5, name: "Ms. Tanushri Chandraker", designation: "Assistant Professor" },
    { id: 6, name: "Ms. Ayushi Pillay", designation: "Assistant Professor" },
    { id: 7, name: "Mrs. Panch Kirti Bharti", designation: "Assistant Professor" },
    { id: 8, name: "Mr. Shirish Sahu", designation: "Assistant Professor" },
    { id: 9, name: "Mr. Vishal Tamrakar", designation: "Assistant Professor" },
    { id: 10, name: "Mr. Nitin Kumar Vishwkarma", designation: "Assistant Professor" },
    { id: 11, name: "Ms. Jaya Dewangan", designation: "Assistant Professor" },
    { id: 12, name: "Ms. Tripti Gautam", designation: "Assistant Professor" },
    { id: 13, name: "Miss. Rashi Chandrakar", designation: "Assistant Professor" },
    { id: 14, name: "Miss. Nalesh", designation: "Assistant Professor" },
    { id: 15, name: "Mr. Nagarjuna E", designation: "Assistant Professor" },
    { id: 16, name: "Mr. Krishna", designation: "Assistant Professor" },
    { id: 17, name: "Dr. K. Venkata Ramana", designation: "Assistant Professor" },
    { id: 19, name: "Mr. M Rajesh Kumar", designation: "Assistant Professor" },
    { id: 20, name: "Mr. Praveen Kumar", designation: "Assistant Professor" },
    { id: 21, name: "Ms. Purnima Dutta", designation: "Assistant Professor" },
    { id: 22, name: "Mr. S.K. Moulali", designation: "Assistant Professor" },
    { id: 23, name: "Mrs. Mangala Devi Sao", designation: "Assistant Professor" },
    { id: 24, name: "Dr. Adarsh Ravi Mishra", designation: "Assistant Professor" },
    { id: 25, name: "Mr. Neeraj Kharya", designation: "Assistant Professor" },
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
