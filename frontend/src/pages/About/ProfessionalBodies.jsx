import React from "react";

const ProfessionalBodies = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
  {/* Header */}
  <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Professional Bodies
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Collaborations & Memberships
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

  <div className="p-6">
    <div className="prose max-w-none text-gray-700">
      {/* Institution of Engineers (India) */}
      <div className="mb-8 border-l-4 border-[#0d173b] pl-4 py-1 hover:shadow-md transition-shadow duration-300 rounded-r-md">
        <h3 className="inline-block bg-gradient-to-r from-blue-50 to-gray-50 text-[#0d173b] font-semibold text-lg px-4 py-1 rounded-full shadow-sm">
          🏛️ Institution of Engineers (India)
        </h3>
        <p className="mt-3">
          Chhatrapati Shivaji Institute of Technology got a Lifetime Institutional Membership of IE(I) in the year 2012. The Institution of Engineers (India) [IEI] is a statutory body to promote and advance the engineering and technology. It is the largest multi-disciplinary professional body of engineers encompassing 15 (fifteen) engineering disciplines with a membership of more than 820 thousand. For more information about IE (I), please click <a href="https://www.ieindia.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.ieindia.org</a>
        </p>
      </div>

      {/* QCFI */}
      <div className="mb-8 border-l-4 border-[#0d173b] pl-4 py-1 hover:shadow-md transition-shadow duration-300 rounded-r-md">
        <h3 className="inline-block bg-gradient-to-r from-blue-50 to-gray-50 text-[#0d173b] font-semibold text-lg px-4 py-1 rounded-full shadow-sm">
          ⭐ Quality Circle Forum of India
        </h3>
        <p className="mt-3">
          CSIT became Institutional Member of QCFI in 2015. CSIT has privilege of hosting the 8th Chapter Convention on Quality Concepts in 2017. QCFI is recognized as the institution representing The Quality Circle Movement In India and has represented the country in several international forums. The organization has successfully implemented Quality concepts. QCFI represents India in the 13 nation International Committee that has been set up for organizing International conventions on Quality Concept Circle, annually. More details about QCFI are at <a href="https://www.qcfi.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.qcfi.in</a>
        </p>
      </div>

      {/* ISTE */}
      <div className="mb-8 border-l-4 border-[#0d173b] pl-4 py-1 hover:shadow-md transition-shadow duration-300 rounded-r-md">
        <h3 className="inline-block bg-gradient-to-r from-blue-50 to-gray-50 text-[#0d173b] font-semibold text-lg px-4 py-1 rounded-full shadow-sm">
          🎓 Indian Society of Technical Education
        </h3>
        <p className="mt-3">
          CSIT became Institutional Member of ISTE, the most reputed body of Engineers, in 2004. CSIT has coordinated various activities under the ISTE. The Indian Society for Technical Education (ISTE) is the leading National Professional non-profit making Society for the Technical Education System in India. It coordinates different activities for Career Development of Teachers and Knowledge enhancement of students in member institutes. More details on ISTE are at: <a href="https://www.isteonline.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.isteonline.in</a>
        </p>
      </div>

      {/* IETE */}
      <div className="mb-8 border-l-4 border-[#0d173b] pl-4 py-1 hover:shadow-md transition-shadow duration-300 rounded-r-md">
        <h3 className="inline-block bg-gradient-to-r from-blue-50 to-gray-50 text-[#0d173b] font-semibold text-lg px-4 py-1 rounded-full shadow-sm">
          📡 The Institute of Electronics & Telecommunication Engineers
        </h3>
        <p className="mt-3">
          CSIT became Life Organisational Member of IETE in the year 2012 with an aim to get connected to the experts and professionals in the field of electronics and Telecommunication. Founded in 1953, the IETE is the National Apex Professional body of Electronics and Telecommunication, Computer Science and IT Professionals. It serves more than 1,25,000 members. Government of India has recognised IETE as a Scientific and Industrial Research Organization (SIRO). For further information on IETE logon <a href="https://www.iete.org" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.iete.org</a>
        </p>
      </div>

      {/* Instrument Society of India */}
      <div className="border-l-4 border-[#0d173b] pl-4 py-1 hover:shadow-md transition-shadow duration-300 rounded-r-md">
        <h3 className="inline-block bg-gradient-to-r from-blue-50 to-gray-50 text-[#0d173b] font-semibold text-lg px-4 py-1 rounded-full shadow-sm">
          🔧 Instrument Society of India
        </h3>
        <p className="mt-3">
          Chhatrapati Shivaji Institute of Technology became Life Institutional Membership of this Society in the year 2011 with a vision to expose our students and faculty members to the contemporary developments in Instrumentation. The Society is well known among the Instrumentation Engineers. It facilitates academic and research activities to its member-colleges and organizations. For more information about The Instrument Society of India, explore <a href="https://isu.iisc.ernet.in" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">www.isu.iisc.ernet.in</a>
        </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProfessionalBodies;
