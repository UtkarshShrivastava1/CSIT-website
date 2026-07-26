import React from "react";

const publications = [
  {
    sno: 1,
    name: "Dr. Padmini Sharma",
    details:
      "Multilevel PFC Converters for Efficient EV Battery Chargers, 2025 IEEE International Transportation Electrification Conference (ITEC-India), Pune, India, 2025.",
    type: "Conference Proceeding",
  },
  {
    sno: 2,
    name: "Sanjay Kumar Singh",
    details:
      "Fabrication and Characterization of Aluminum-Silicon Carbide Metal Matrix Composites, AIP Conference Proceedings, 2026.",
    type: "Conference",
  },
  {
    sno: 3,
    name: "Dr. Padmini Sharma",
    details:
      "Real-time Fault Diagnosis in Induction Motors Using DSP for Enhanced Monitoring, Mineral Metal Energy Oil Gas and Aggregate, 2026.",
    type: "Journal Article",
  },
  {
    sno: 4,
    name: "Dr. Santosh Kumar Sharma",
    details:
      "Performance Comparison of Inclined Solar Chimney with and without a Perforated Plate for Natural Ventilation Using Computational Fluid Dynamics, AIP Conference Proceedings, 2026.",
    type: "Conference",
  },
  {
    sno: 5,
    name: "Sanjay Kumar Singh",
    details:
      "Investigating the Behaviour of Hybrid Aluminium Composites with Alumina and Silicon Carbide Reinforcement, AIP Conference Proceedings, 2026.",
    type: "Conference",
  },
  {
    sno: 6,
    name: "Dr. Santosh Kumar Sharma",
    details:
      "A Detailed Work on the Method of Making Composites by Mixing PLA Polymer with Natural Bamboo Fiber, Springer, 2026.",
    type: "Book Chapter",
  },
  {
    sno: 7,
    name: "Heera Ram",
    details:
      "Simulations of the Best Thickness and Temperature for Perovskite CH3NH3SnI3-Based Solar Cells with Absorber Layers, Russian Physics Journal, 2025.",
    type: "Journal Article",
  },
  {
    sno: 8,
    name: "Sanjay Kumar Singh",
    details:
      "Simulations of the Best Thickness and Temperature for Perovskite CH3NH3SnI3-Based Solar Cells with Absorber Layers, Russian Physics Journal, 2025.",
    type: "Journal Article",
  },
  {
    sno: 9,
    name: "Dr. Padmini Sharma",
    details:
      "Detection of Voice and Lung Pathological Signal Using Acoustic Spectrogram Transformers, Journal of Innovative Image Processing, 2025.",
    type: "Journal Article",
  },
  {
    sno: 10,
    name: "Dr. Santosh Kumar Sharma",
    details:
      "Design and Finite Element Analysis of the Natural Fiber Reinforced Polymer Hybrid Composite Automotive Fuel Tank, AIP Conference Proceedings, 2025.",
    type: "Conference",
  },
  {
    sno: 11,
    name: "Sanjay Kumar Singh",
    details:
      "Exact Thermo-Mechanical Response of Functionally Graded Cylinders under Combined Loading, Advances in Computational Design, 2025.",
    type: "Journal Article",
  },
  {
    sno: 12,
    name: "Dr. Padmini Sharma",
    details:
      "Harnessing AI to Identify and Combat Fake News, Advancements in Multi-Agent Large Language Model Systems for Next-Generation AI.",
    type: "Book Chapter",
  },
];

const FacultyPublications = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] px-6 py-8">
        <h2 className="text-3xl font-bold text-white">
          Faculty Publications
        </h2>
        <p className="text-gray-200 mt-2 text-sm">
          Research Publications by CSIT Faculty Members
        </p>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#0d173b] text-white">
                <th className="border px-4 py-3 text-center">S.No</th>
                <th className="border px-4 py-3 text-left">
                  Name
                </th>
                <th className="border px-4 py-3 text-left">
                  Publication Details
                </th>
                <th className="border px-4 py-3 text-center">
                  Publication Type
                </th>
              </tr>
            </thead>

            <tbody>
              {publications.map((item) => (
                <tr
                  key={item.sno}
                  className="hover:bg-gray-50 even:bg-gray-100"
                >
                  <td className="border px-4 py-3 text-center">
                    {item.sno}
                  </td>

                  <td className="border px-4 py-3 font-medium">
                    {item.name}
                  </td>

                  <td className="border px-4 py-3">
                    {item.details}
                  </td>

                  <td className="border px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === "Journal Article"
                          ? "bg-green-100 text-green-700"
                          : item.type === "Conference"
                          ? "bg-blue-100 text-blue-700"
                          : item.type === "Conference Proceeding"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {item.type}
                    </span>
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

export default FacultyPublications;

