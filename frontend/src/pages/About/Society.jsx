import React from "react";

const Society = () => {
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
              About Society
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Shivnath Shikshan & Seva Samiti
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Top content section */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="mb-4">
                CSIT pushes the frontiers of Modern Science and Engineering
                through Teaching and Research. With this Perspective in Mind,
                Eminent Academicians, Educationalists, Administrators, &
                Enthusiastic people of Chhattisgarh have initiated the formation
                of a Society under the aegis of Shivnath Shikshan & Seva Samiti,
                registered under the Provision of statute 44 of M. P.
                Vishwavidhyalaya Adhiniyam 1973 & CSIT was thus Established at
                Durg with keeping in mind the overall development of students in
                the field of Science and Technology, Social, Economical and
                Educational Upgradation. We also focus on rural development with
                respect to their technological aims, infrastructure and
                environmental conservation and leadership Qualities.
              </p>
            </div>
            <div className="md:w-1/3 bg-gray-50 rounded-md border border-gray-200 flex-shrink-0">
              <div className="p-6 text-center h-full flex flex-col justify-center">
                <div className="text-4xl font-bold mb-2 text-[#0d173b]">
                  CSIT
                </div>
                <div className="h-0.5 w-12 bg-[#0d173b] mx-auto my-2"></div>
                <p className="text-gray-500 italic">Guiding Light</p>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div className="grid md:grid-cols-2 gap-4 my-8">
            {[
              {
                name: "Late D. K. Verma",
                role: "Ex-President",
                detail: "(Retd. Deputy Director Mining)",
              },
              {
                name: "Late R. N. Deshmukh",
                role: "Patron",
                detail: "(Ex. Member MPPSC, Retd. IFS)",
              },
              {
                name: "Mrs. S. Deshmukh",
                role: "President",
                detail: "(Social Worker)",
              },
              {
                name: "Mrs. S. Verma",
                role: "Executive Member",
                detail: "(Social Worker)",
              },
              {
                name: "Er. Ajay Prakash Verma",
                role: "Secretary",
                detail: "(Educationist)",
              },
              {
                name: "Mrs. N. Verma",
                role: "Treasurer",
                detail: "(Professional Artist, Painting)",
              },
              {
                name: "Mr. R. Deshmukh",
                role: "Executive Member",
                detail: "(Businessman)",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md p-4 shadow-sm hover:shadow transition-shadow duration-200 border-l-4"
                style={{ borderLeftColor: "#0d173b" }}
              >
                <h3 className="font-medium text-[#0d173b]">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Society;
