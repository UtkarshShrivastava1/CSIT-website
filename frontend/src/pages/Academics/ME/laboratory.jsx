import React from "react";

const LaboratoriesContent = () => {
  const labs = [
    { id: 1, name: "Automobile Engineering Lab" },
    { id: 2, name: "CAD/CAM Lab" },
    { id: 3, name: "Dynamics of Machines Lab" },
    { id: 4, name: "Engineering Thermodynamics Lab" },
    { id: 5, name: "Finite Element Methods Lab" },
    { id: 6, name: "Fluid Machinery Lab" },
    { id: 7, name: "Fluid Mechanics Lab" },
    { id: 8, name: "Heat and Mass Transfer Lab" },
    { id: 9, name: "Internal Combustion Engine Lab" },
    { id: 10, name: "Industrial Engineering & Management Lab" },
    { id: 11, name: "Kinematics of Machines Lab" },
    { id: 12, name: "Machine Design Lab" },
    { id: 13, name: "Machine Drawing Lab" },
    { id: 14, name: "Material Testing Lab" },
    { id: 15, name: "Production Management Lab" },
    { id: 16, name: "	Mechanical Measurement and Metrology Lab" },
    { id: 17, name: "Refrigeration & Air-conditioning Lab" },
    { id: 18, name: "Robotics Lab" },
    { id: 19, name: "Central Workshop" },
    { id: 20, name: "Manufacturing Science Lab" },
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
