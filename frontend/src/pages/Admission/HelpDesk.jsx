import React from "react";

const HelpDesk = () => {
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
              Admission Helpline Desk
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              Contact our team for guidance
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6 md:p-8 overflow-x-auto bg-gradient-to-b from-white to-gray-50">
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Contact No.</th>
                <th className="px-6 py-4 font-semibold">Email ID</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {[
                {
                  name: "Admission Cell",
                  contact: "8966000102",
                  email: "admission@csitdurg.in",
                },
                {
                  name: "Mr. Rajesh Verma",
                  contact: "9826937473",
                  email: "registrar@csitdurg.in",
                },
                {
                  name: "Prof. H. R. Chandrakar",
                  contact: "8966000059",
                  email: "hrchandrakar@csitdurg.in",
                },
                {
                  name: "Mr. Rajeev Nair",
                  contact: "7697477777",
                  email: "crm@csitdurg.in",
                },
                {
                  name: "Mr. Kamlesh Upadhyay",
                  contact: "8966000055",
                  email: "kamlesh@csitdurg.in",
                },
                {
                  name: "Mr. Pukesh Deshmukh",
                  contact: "8966000090",
                  email: "pukesh_csit@rediffmail.com",
                },
              ].map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 font-medium text-[#0d173b] border-b border-gray-100 flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-[#1e305f]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.76 6.879 2.053M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {item.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {item.contact}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 text-blue-700 underline">
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note or Quick Facts */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-[#0d173b]">Note:</span> All
            faculty and staff listed above are available during working hours
            (10 AM – 5 PM, Mon–Sat).
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
