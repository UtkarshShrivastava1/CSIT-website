import React from "react";

const LaboratoriesContent = () => {
  const labs = [
    { id: 1, name: "Digital Electronics Lab" },
    { id: 2, name: "COA & Microprocessor Lab" },
    { id: 3, name: "Computer Networks Lab" },
    { id: 4, name: "Software Lab (Programming in JAVA)" },
    { id: 5, name: "Data Structures Lab" },
    { id: 6, name: "Database Management System Lab" },
    { id: 7, name: "Operating System (UNIX) Lab" },
    { id: 8, name: "Virtual Lab (IoT Lab)" },
    { id: 9, name: "Artificial Intelligence & Machine Learning Lab" },
    { id: 10, name: "Software Engineering & Project Management Lab" },
    { id: 11, name: "Principle of Communication System Lab" },
    { id: 12, name: "	Computer Graphics & Data Visualization Lab" },
    { id: 13, name: "	Mobile Application Development (Android) Lab" },
    { id: 14, name: "	Web Application Development Lab" },
    { id: 15, name: "	Cryptography & Network Security Lab" },
    { id: 16, name: "	Cloud Computing Lab" },
    { id: 17, name: "	Hadoop Lab" },
    { id: 18, name: "	Simulation Lab" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Laboratories
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | Laboratories</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      <div className="p-6 overflow-x-auto">
        <table className="w-full border-collapse  ">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-3 px-4 text-left font-medium bg-[#0d173b] text-white">
                S.No
              </th>
              <th className="py-3 px-4 text-left font-medium bg-[#0d173b] text-white">
                Name Of laboratory
              </th>
            </tr>
          </thead>
          <tbody>
            {labs.map((lab, index) => (
              <tr
                key={lab.id}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="py-3 px-4 border-t border-gray-300">{lab.id}</td>
                <td className="py-3 px-4 border-t border-gray-300">
                  {lab.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LaboratoriesContent;
