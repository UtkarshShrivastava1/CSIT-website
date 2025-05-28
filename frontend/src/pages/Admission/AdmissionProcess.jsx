import React from "react";

const AdmissionProcess = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl overflow-hidden">
      {/* Header with animated gradient */}
      <div className="h-44 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Admission Process
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Join the Path to Excellence
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-10 space-y-10 text-gray-800 leading-relaxed bg-gradient-to-b from-white to-gray-50">
        {/* Admission Procedure */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0d173b]">
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-[#1e305f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Admission Procedure
          </h3>
          <div className="h-0.5 w-12 bg-[#0d173b] opacity-40 mb-2"></div>
          <p className="text-sm">
            Admission through{" "}
            <span className="font-medium text-[#1e305f]">
              Centralized Counseling
            </span>{" "}
            by DTE, CG, Raipur.
          </p>
          <p className="text-sm">
            For complete counseling details visit:{" "}
            <a
              href="https://www.cgdteraipur.cgstate.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-[#1e305f] transition-colors"
            >
              www.cgdteraipur.cgstate.gov.in
            </a>
          </p>
        </div>

        {/* Documents Required */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0d173b]">
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-[#1e305f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Documents Required
          </h3>
          <div className="h-0.5 w-12 bg-[#0d173b] opacity-40 mb-2"></div>
          <p className="text-sm">
            Please bring the following documents along with{" "}
            <span className="font-medium text-[#1e305f]">
              3 self-attested photocopies
            </span>{" "}
            and original copies for verification:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-2 text-sm text-gray-700">
              {[
                "Allotment Letter (DTE, Raipur)",
                "Entrance Exam Score Card – 2023",
                "6 Passport Size Photographs",
                "Class 10th Marksheet",
                "Class 12th Marksheet",
                "Diploma Marksheet (If Applicable)",
                "Domicile Certificate (Niwas Praman Patra)",
                "Transfer Certificate",
                "Character Certificate",
                "Migration Certificate (Except CG Board)",
                "Gap Certificate (If Applicable)",
                "Caste Certificate (If Applicable)",
                "Aadhar Card (Photocopy)",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-3 w-3 rounded-full text-white bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-2 mt-0.5">
                    <div className="h-1 w-1 rounded-full "></div>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bank Details */}
        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0d173b]">
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-[#1e305f]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Fee Payment Details
          </h3>
          <div className="h-0.5 w-12 bg-[#0d173b] opacity-40 mb-2"></div>
          <p className="text-sm">
            Fee can be deposited via Cheque / DD / Online Transfer using the
            following bank details:
          </p>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg shadow-inner border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-[#1e305f] block mb-1">
                    Account Name:
                  </span>
                  <span>
                    Director, Chhatrapati Shivaji Institute of Technology, Durg
                  </span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-[#1e305f] block mb-1">
                    Bank & Branch:
                  </span>
                  <span>Axis Bank, Chandkhuri, Durg</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-[#1e305f] block mb-1">
                    Account No.:
                  </span>
                  <span>590010100009676</span>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-3 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-[#1e305f] block mb-1">
                    IFS Code:
                  </span>
                  <span>UTIB0001666</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;
