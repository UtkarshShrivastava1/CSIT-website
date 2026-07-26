import React from "react";

const AdmissionProcess = () => {
  const documentsList = [
    { name: "10th Marksheet", category: "Academic" },
    { name: "12th Marksheet", category: "Academic" },
    { name: "PET/JEE Score card", category: "Exam" },
    { name: "Diploma Marksheet (For Lateral entry)", category: "Academic" },
    { name: "Domicile certificate", category: "Identity" },
    { name: "Transfer & Character certificate", category: "Identity" },
    { name: "Gap certificate (if required)", category: "Identity" },
    { name: "5 Passport size photos", category: "Identity" },
    { name: "Caste certificate (if required)", category: "Identity" },
    { name: "Migration Certificate", category: "Identity" },
    { name: "Aadhar Card", category: "Identity" },
  ];

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
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

      {/* Content */}
      <div className="p-6 md:p-8 space-y-6 bg-gradient-to-b from-white to-gray-50">
        {/* Admission Procedure B.Tech */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0d173b]">
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center gap-2 mb-3">
            <span className="text-2xl">📋</span>
            Admission Procedure B.Tech
          </h3>
          <div className="h-0.5 w-12 bg-[#0d173b] opacity-40 mb-4"></div>

          <div className="space-y-4">
            {/* Entrance Examination */}
            <div>
              <h4 className="font-semibold text-[#1e305f]">A. Entrance Examination</h4>
              <p className="text-sm text-gray-700 mt-1">
                You must qualify in one of the accepted entrance exams:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-medium">CG-PET:</span> The state level
                  Pre-Engineering Test conducted by the CG VYAPAM (Old name).
                </li>
                <li>
                  <span className="font-medium">JEE Mains:</span> Accepted across
                  major institutions in Chhattisgarh.
                </li>
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div>
              <h4 className="font-semibold text-[#1e305f]">B. Eligibility Criteria</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Education Qualification:</span> Pass
                  Class 12th with Physics, Chemistry & Mathematics.
                </li>
                <li>
                  <span className="font-medium">Minimum Marks:</span> General
                  candidates require <strong>45%</strong> or above, while reserved
                  categories (SC/ST/OBC/PWD) require <strong>40%</strong> or more in
                  aggregate in PCM subjects.
                </li>
              </ul>
            </div>

            {/* State Centralized Counselling */}
            <div>
              <h4 className="font-semibold text-[#1e305f]">
                C. State Centralized Counselling (CGDTE)
              </h4>
              <p className="text-sm text-gray-700 mt-1">
                Admissions are administrated through central online counselling
                managed by the Directorate of Technical Education (CG DTE).
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Registration:</span> Register on the
                  official CG DTE counselling portal using your exam roll number.
                </li>
                <li>
                  <span className="font-medium">Choice Filling:</span> Select your
                  preferred engineering college and branches based on your merit
                  rank.
                </li>
                <li>
                  <span className="font-medium">Seat Allotment:</span> Seats are
                  allotted through consecutive rounds.
                </li>
                <li>
                  <span className="font-medium">Document Verification:</span> If a
                  seat is allotted, you must verify the required documents
                  (original and copy both) and pay the semester fees to freeze your
                  seat.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Admission Procedure B.Tech Lateral Entry */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#1e305f]">
          <h3 className="text-xl font-semibold text-[#1e305f] flex items-center gap-2 mb-3">
            <span className="text-2xl">↗️</span>
            Admission Procedure B.Tech (Lateral Entry)
          </h3>
          <div className="h-0.5 w-12 bg-[#1e305f] opacity-40 mb-4"></div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#0d173b]">A. Entrance Examination</h4>
              <p className="text-sm text-gray-700 mt-1">
                No entrance exam is compulsory for B.Tech lateral entry.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#0d173b]">B. Eligibility Criteria</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Education Qualification:</span> Should
                  have completed Diploma of Engineering.
                </li>
                <li>
                  <span className="font-medium">BSc graduates</span> are also eligible
                  but with PCM in 12th boards.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#0d173b]">
                C. State Centralized Counselling (CGDTE)
              </h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Registration:</span> Register on the
                  official CG DTE counselling portal.
                </li>
                <li>
                  <span className="font-medium">Choice Filling:</span> Select your
                  preferred college and branches.
                </li>
                <li>
                  <span className="font-medium">Seat Allotment:</span> Seats are
                  allotted through consecutive rounds.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#0d173b]">D. Document Verification</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                <li>Verify the required documents (original and copy both).</li>
                <li>Pay the remaining fees to freeze your seat.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ✅ Documents Required Section - NEW */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-600">
          <h3 className="text-xl font-semibold text-[#0d173b] flex items-center gap-2 mb-3">
            <span className="text-2xl">📄</span>
            List of Required Documents
          </h3>
          <div className="h-0.5 w-12 bg-[#0d173b] opacity-40 mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {documentsList.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#0d173b] transition-colors"
              >
                <div className="h-6 w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-[#0d173b]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-sm text-gray-700">{doc.name}</span>
                {doc.category === "Academic" && (
                  <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    Academic
                  </span>
                )}
                {doc.category === "Identity" && (
                  <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                    Identity
                  </span>
                )}
                {doc.category === "Exam" && (
                  <span className="ml-auto text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    Exam
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] p-6 rounded-lg text-center">
          <p className="text-white text-lg font-medium">
            Haven't appeared in any entrance exam and wants to pursue B.Tech?
          </p>
          <p className="text-white text-2xl font-bold mt-2">📞 8966000102</p>
        </div>

        {/* Helpdesk Note */}
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-[#0d173b]">Note:</span> For complete
            counseling details visit:{" "}
            <a
              href="https://www.cgdteraipur.cgstate.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.cgdteraipur.cgstate.gov.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionProcess;