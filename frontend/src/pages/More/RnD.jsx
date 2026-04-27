import React from "react";
import IPRFilled from "../../assets/R&D/IPR_final.pdf";
import PaperCivil from "../../assets/R&D/PAPER PUBLICATION CIVIL.pdf";
import PaperEEE from "../../assets/R&D/PAPER PUBLICATION EEE.pdf";
import PaperME from "../../assets/R&D/PAPER PUBLICATION ME.pdf";
import ProjectGrants from "../../assets/R&D/PROJECT GRANTS.pdf";

const RnD = () => {
  const documents = [
    { title: "IPR FILLED", pdf: IPRFilled },
    { title: "PAPER PUBLICATION CIVIL", pdf: PaperCivil },
    { title: "PAPER PUBLICATION EEE", pdf: PaperEEE },
    { title: "PAPER PUBLICATION ME", pdf: PaperME },
    { title: "PROJECT GRANTS", pdf: ProjectGrants },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Research & Development
        </h1>
        <div className="bg-white shadow rounded-lg">
          <ul className="divide-y divide-gray-200">
            {documents.map((doc, index) => (
              <li key={index}>
                <a
                  href={doc.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-50 transition duration-150"
                >
                  <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-indigo-600">
                        {doc.title}
                      </p>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RnD;
