import React from "react";
import { Link } from "react-router-dom";

const activities = [
  {
    sno: 1,
    activity:
      'Workshop on "Responsible use of AI tool in Research Article Writing and Publication"',
    resourcePerson:
      "Dr. Anil Kumar Sahu, CEO of Inquista Online Pvt. Ltd.",
    date: "30 & 31 October 2025",
  },
  {
    sno: 2,
    activity:
      "Embarking on Research Alongside Academics: Aspirations, Need, Pitfalls and Opportunities",
    resourcePerson:
      "Dr. Shubhankar Bhowmick, Professor, Mechanical Engineering, NIT Raipur",
    date: "18 September 2025",
  },
  {
    sno: 3,
    activity:
      "Innovation Streamlined: How to Tune Up Your Innovation Engine in the Present IP Regime",
    resourcePerson:
      "Dr. Amit Dudey, Scientist-D, Incharge of CIL and IPR Cell, Chhattisgarh Council of Science and Technology, Raipur",
    date: "30 August 2025",
  },
  {
    sno: 4,
    activity:
      "Introduction to the Fundamentals of Patents and Patenting Process",
    resourcePerson:
      "Dr. Kavi Bhushan Singh Chauhan, Assistant Professor, CSIT Durg",
    date: "13 August 2025",
  },
];

const Activities = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] px-6 py-8">
        <h2 className="text-3xl font-bold text-white">
          Research & Development Activities
        </h2>

        <p className="text-gray-200 mt-2 text-sm">
          Workshops, Expert Lectures & Research Activities
        </p>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#0d173b] text-white">
                <th className="border px-4 py-3 text-center">S.No</th>
                <th className="border px-4 py-3 text-left">
                  Activity
                </th>
                <th className="border px-4 py-3 text-left">
                  Resource Person
                </th>
                <th className="border px-4 py-3 text-center">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {activities.map((item) => (
                <tr
                  key={item.sno}
                  className="even:bg-gray-100 hover:bg-gray-50"
                >
                  <td className="border px-4 py-3 text-center">
                    {item.sno}
                  </td>

                  <td className="border px-4 py-3">
                    {item.activity}
                  </td>

                  <td className="border px-4 py-3">
                    {item.resourcePerson}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Activities;