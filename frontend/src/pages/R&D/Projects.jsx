import React from "react";

const researchProjects = [
  {
    sno: 1,
    project:
      "Development and Deployment of Smart Controller for Solar Pumps to Drive Agricultural and Domestic Equipment",
    investigator: "Mr. V. Hemant (PI)",
    department: "Electrical & Electronics Engineering",
    year: "2021",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 2,
    project:
      "Online Question Bank Gathering System According to the Subject for University Students",
    investigator:
      "Mr. Keshav Kori (PI), Mr. Dheeraj Kumar Ghaghre (Co-PI)",
    department: "Computer Science & Engineering",
    year: "2020",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 3,
    project:
      "Cost Effective Exam Paper Generation & Digital Distribution using Artificial Intelligence",
    investigator:
      "Mr. Dheeraj Kumar Ghaghre (PI), Mr. Keshav Kori (Co-PI)",
    department: "Computer Science & Engineering",
    year: "2020",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 4,
    project:
      "Green Synthesis & Characterization of Metallic Nanoparticles for Biomedical & Environmental Applications",
    investigator: "Dr. Sumita Sengupta (Co-PI)",
    department: "Physics",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 5,
    project: "A Novel High Entropy Alloys with Composite Microstructure",
    investigator: "Mr. Rajesh Kumar (Co-PI)",
    department: "Mechatronics Engineering",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 6,
    project: "Smart Irrigation System Using IoT",
    investigator: "Mr. Prabhas Gupta (PI)",
    department: "Computer Science & Engineering",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 7,
    project: "Nanotechnology for Sustainable Development",
    investigator: "Dr. Sumita Sengupta (Co-PI)",
    department: "Physics",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 8,
    project:
      "Fabrication of Safe Low Pressure Acetylene Generator for Gas Welders",
    investigator: "Mr. H. R. Chandrakar (Co-PI)",
    department: "Mechanical Engineering",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 9,
    project: "Management & Monitoring System for BIO-GAS",
    investigator: "Mr. Prabhas Gupta (PI)",
    department: "Computer Science & Engineering",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 10,
    project: "Synthesis & Characterization of High Entropy Alloys",
    investigator: "Prof. Sanjay Kumar Singh (Co-PI)",
    department: "Mechanical Engineering",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
  {
    sno: 11,
    project:
      "Development of Functionally Graded Material & Mechanical Object Disk & Plate",
    investigator: "Prof. Sanjay Kumar Singh (PI)",
    department: "Mechanical Engineering",
    year: "2019",
    agency: "CRP under TEQIP-III, CSVTU Durg",
    type: "Government",
  },
];

const ResearchProjects = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] px-6 py-8">
        <h2 className="text-3xl font-bold text-white">
          Research Projects
        </h2>
        <p className="text-gray-200 mt-2 text-sm">
          Sponsored Research Projects Undertaken by CSIT Faculty Members
        </p>
      </div>


      <div className="p-6">
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#0d173b] text-white">
                <th className="border px-4 py-3 text-left">S.No</th>
                <th className="border px-4 py-3 text-left">
                  Research Project
                </th>
                <th className="border px-4 py-3 text-left">
                  Principal Investigator
                </th>
                <th className="border px-4 py-3 text-left">
                  Department
                </th>
                <th className="border px-4 py-3 text-center">Year</th>
                <th className="border px-4 py-3 text-left">
                  Funding Agency
                </th>
                <th className="border px-4 py-3 text-center">Type</th>
              </tr>
            </thead>

            <tbody>
              {researchProjects.map((item) => (
                <tr
                  key={item.sno}
                  className="hover:bg-gray-50 even:bg-gray-100"
                >
                  <td className="border px-4 py-3">{item.sno}</td>
                  <td className="border px-4 py-3">{item.project}</td>
                  <td className="border px-4 py-3">{item.investigator}</td>
                  <td className="border px-4 py-3">{item.department}</td>
                  <td className="border px-4 py-3 text-center">
                    {item.year}
                  </td>
                  <td className="border px-4 py-3">{item.agency}</td>
                  <td className="border px-4 py-3 text-center">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResearchProjects;