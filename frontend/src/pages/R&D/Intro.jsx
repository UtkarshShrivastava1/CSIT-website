import React from "react";

const ResearchDevelopment = () => {
  const members = [
    {
      name: "Dr. Santosh Kumar Sharma",
      designation: "Dean (Research Development & IIPC)",
    },
    {
      name: "Dr. Chandra Shekhar Sharma",
      designation: "Head & Associate Professor - English",
    },
    {
      name: "Dr. Anand Kumbhare",
      designation:
        "Associate Professor (Mechanical Engineering), Head - Mechanical, CSE & IT Department",
    },
    {
      name: "Dr. Padmini Sharma",
      designation: "Head & Associate Professor - EEE Department",
    },
  ];

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
              Research & Development
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Promoting Innovation, Research & Intellectual Growth
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* About */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-[#0d173b] mb-3">
            About
          </h3>

          <div className="space-y-3">
            <p className="text-gray-700 text-sm leading-relaxed">
              • CSIT has a dedicated <strong>Research & Development Cell</strong>{" "}
              that fosters innovation and develops a strong research culture
              among students and faculty members.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              • Research activities promote collaborations and facilitate the
              dissemination of knowledge across various domains, enhancing both
              learning and teaching while encouraging innovation.
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              • The institute encourages innovation and patent development by
              providing all possible technical and administrative support. It
              facilitates the creation of patentable Intellectual Property (IP),
              prototype development, and proof-of-concept models.
            </p>
          </div>
        </div>

        {/* R&D Cell */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-[#0d173b] mb-4">
            Research & Development Cell
          </h3>

          <div className="space-y-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="border-l-4 border-[#0d173b] pl-4 py-2 bg-gray-50 rounded-r-md"
              >
                <h4 className="font-semibold text-[#0d173b] text-sm">
                  {member.name}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  {member.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 rounded-lg text-center">
          <p className="text-xl font-bold">
            Innovate. Research. Create.
          </p>
          <p className="text-sm text-gray-200 mt-2 leading-relaxed">
            The Research & Development Cell at CSIT encourages students and
            faculty to explore innovative ideas, undertake quality research,
            develop intellectual property, and contribute towards technological
            advancement through collaborative learning and creative problem
            solving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchDevelopment;