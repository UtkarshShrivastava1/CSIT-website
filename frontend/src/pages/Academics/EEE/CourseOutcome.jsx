

const EEECourseOutcomes = () => {
  // Data for semesters with syllabus paths
  const semesters = [
    { id: "sem3", name: "3rd Semester", link: "https://drive.google.com/drive/folders/168_hHN6gq3q2z1TLNpUceIcuGHOnqXC0?usp=drive_link" },
    { id: "sem4", name: "4th Semester", link: "https://drive.google.com/drive/folders/1peXSHI4rq631OolRuHpjQqurUz7En3vC?usp=drive_link" },
    { id: "sem5", name: "5th Semester", link: "https://drive.google.com/drive/folders/1eCM23AO4WbJfKIqxF0-Dn2SPY0IO448I?usp=drive_link" },
    { id: "sem6", name: "6th Semester", link: "https://drive.google.com/drive/folders/1H4_FXUAHGFyURzCHkr6aT_K2krZRDo1l?usp=drive_link" },
    { id: "sem7", name: "7th Semester", link: "https://drive.google.com/drive/folders/134M5B3Zom-96-Aw1rxaL2ZO5cFCH9dWz?usp=drive_link" },
    { id: "sem8", name: "8th Semester", link: "https://drive.google.com/drive/folders/1SXIGBYArtTQaBTZWFSsb9rSNipxZbzvu?usp=drive_link" }
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
            Course Outcomes
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | EEE Course Outcomes</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      <h1 className=" p-6 text-2xl font-bold mb-6 text-gray-800 border-b pb-2">EEE Question Papers</h1>
      
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
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
                    onClick={() => viewSyllabus(semester.link)}
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

export default EEECourseOutcomes;