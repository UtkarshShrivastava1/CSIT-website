import { useState } from "react";
import thred   from "../../../assets/IT/IT3rdsem.pdf";
import fourth  from "../../../assets/IT/IT4thsem.pdf";
import fifth   from "../../../assets/IT/IT5thsem.pdf";
import sixth   from "../../../assets/IT/IT6thsem.pdf";
import seventh from "../../../assets/IT/IT7thsem.pdf";
import eighth  from "../../../assets/IT/IT8thsem.pdf";

const CSECourseOutcomes = () => {
  // Data for semesters with syllabus paths
  const semesters = [
    { id: "sem3", name: "3rd Semester", syllabus: thred },
    { id: "sem4", name: "4th Semester", syllabus: fourth },
    { id: "sem5", name: "5th Semester", syllabus: fifth },
    { id: "sem6", name: "6th Semester", syllabus: sixth },
    { id: "sem7", name: "7th Semester", syllabus: seventh },
    { id: "sem8", name: "8th Semester", syllabus: eighth }
  ];

  // Function to open the syllabus PDF
  const viewSyllabus = (pdfPath) => {
    if (pdfPath) {
      window.open(pdfPath, "_blank"); // Opens the PDF in a new tab
    } else {
      console.error("PDF path is undefined");
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg  bg-white shadow-sm">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
            CourseOutcomes
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | CSECourseOutcomes</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      <h1 className=" p-6 text-2xl font-bold mb-6 text-gray-800 border-b pb-2">CSE COURSE OUTCOMES</h1>
      
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/2">Semester</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700 w-1/2">Action</th>
            </tr>
          </thead>
          <tbody>
            {semesters.map((semester, index) => (
              <tr key={semester.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-3 px-4 text-gray-800">{semester.name}</td>
                <td className="py-3 px-4">
                  <button 
                    onClick={() => viewSyllabus(semester.syllabus)}
                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-12 rounded w-full"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CSECourseOutcomes;