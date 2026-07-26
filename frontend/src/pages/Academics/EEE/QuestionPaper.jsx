import React from "react";

const QuestionPaper = () => {
  const papers = [
    { semester: "3rd", link: "https://drive.google.com/drive/folders/15eyrsZPTCKpeUlmn98TNxY_Lke49bqJz" },
    { semester: "4th", link: "https://drive.google.com/drive/folders/1LjQLcpJeSGuPY9gaYjoqsinrT4vLqSRS" },
    { semester: "5th", link: "https://drive.google.com/drive/folders/1fUd7nEi3NYAWAhVFwUtrt-LJk_FGGCLm" },
    { semester: "6th", link: "https://drive.google.com/drive/folders/1wkHbunYEeAFMle-tUAZKFwnebnp4a-fG" },
    { semester: "7th", link: "https://drive.google.com/drive/folders/1RwF1u-1rZJ-LQ0Di5WAChwq2CZbZxZgz" },
    { semester: "8th", link: "https://drive.google.com/drive/folders/1lS7cIfF82CpfBLT5LGpviJNEezoTX-52" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Question Papers
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | Question Papers</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      <div className="p-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0d173b] text-white">
              <th className="py-3 px-4 text-left font-medium">Semester</th>
              <th className="py-3 px-4 text-left font-medium">Question Paper Link</th>
            </tr>
          </thead>
          <tbody>
            {papers.map((paper, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-3 px-4 border-t border-gray-300 font-semibold">{paper.semester}</td>
                <td className="py-3 px-4 border-t border-gray-300">
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View Papers
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

export default QuestionPaper;