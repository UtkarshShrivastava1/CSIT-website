import React from "react";

const LaboratoriesContent = () => {
  const labDetails = [
    { id: 1, name: "Concrete Lab", description: "The Concrete Lab, situated on the ground floor of the Department of Civil Engineering, offers various facilities for testing building materials such as cement, concrete, coarse and fine aggregates, bricks, blocks, tiles, and stones. The lab is equipped with a Compression Testing Machine allowing for precise and accurate testing. This equipment is an essential tool for determining the strength and durability of construction materials. Students in civil engineering department can benefit from the lab's resources to test and analyze the properties of building materials and develop new techniques for improving construction." },
    { id: 2, name: "Geotechnical Lab", description: "The Geotechnical Lab, located on the ground floor of the Department of Civil Engineering, is a facility built for testing the engineering qualities of soils. Major tools like the Triaxial Test, Consolidation Test, Swell Pressure Apparatus, Plate Load Test, and SPT are available in the lab. These instruments are used to assess a soil's stability, compressibility, and load-bearing capability. For researchers, civil engineers, and construction workers looking to do thorough geotechnical investigations on soil samples to guarantee secure and long-lasting infrastructure development, the Geotechnical Lab is a vital resource." },
    { id: 3, name: "Environmental Lab", description: "The Environmental Engineering lab Situated on the first floor of the Department of Civil Engineering, the Environmental Engineering lab provides a variety of tools and facilities for collecting and analyzing soil, water, and air samples. The lab provides a variety of important equipment, including air samplers, auto exhaust samplers, and stack sampling assemblies, with an emphasis on pollutant monitoring. For students and researchers interested in environmental monitoring and evaluation, the Environmental Engineering lab is an invaluable resource thanks to these facilities and tools." },
    { id: 4, name: "Transportation Lab", description: "The Transportation lab Situated on the ground floor of the Department of Civil Engineering, which has several facilities for testing highway materials. Major tools like Los Angeles, Devels, Impact, and Ductility Test Machines, which are crucial for evaluating the robustness and longevity of materials used in highway construction, are well-stocked in the lab. By using these tools, researchers and students can conduct a variety of tests and experiments to evaluate the performance and quality of highway materials, helping to create roads that are safer and more resilient." },
    { id: 5, name: "Surveying Lab", description: "Surveying facilities are available at the Survey Lab, which is situated on the ground floor of the Department of Civil Engineering. The lab's main tools, including T2 theodolites, Auto Levels, and Total Stations, allow for precise and effective land and building surveying. Surveyors can use these instruments to measure elevations, angles, and distances in order to produce accurate plans and maps for building and land development. The lab's cutting-edge resources and technology give researchers and students the chance to hone their surveying abilities and have practical experience with cutting-edge machinery." },
    { id: 6, name: "Geology Lab", description: "The Geology lab Situated on the first floor of the Department of Civil Engineering, which has several facilities for study Earth materials, structures, and surface processes.It bridges theoretical concepts in physical geology, mineralogy, and geophysics with practical, visual analyses of rocks, minerals, and fossils to understand our planet’s history and natural hazards." },
    { id: 7, name: "Fluid Mechanics Lab", description: "The Fluid Mechanics lab Situated on the ground floor of the Department of Civil Engineering. Pipes, spillways, pumps, and turbines can all be calibrated in the lab. The lab's purpose is to give students practical experience researching fluid and hydraulic system behavior. Students can examine the performance of hydraulic components including pumps and turbines, build hydraulic systems, and test fluid parameters. With the help of these resources, students can acquire useful knowledge and abilities that will help them in their future employment in civil engineering." },
    { id: 8, name: "Computer Centre", description: "The Computer Center, located on the first floor of the Department of Civil Engineering, provides students with state-of-the-art computing facilities for analysis, simulation, and design. The lab is equipped with 30 computers with a local area network (LAN) and various software, including Auto-CAD and Staad-PRO. These resources provide students with the tools necessary to gain hands-on experience with industry-standard software and improve their technical skills in the field of civil engineering. Whether students need to create complex designs or perform complex simulations, the Computer Center is an essential resource for civil engineering students." }
  ];

  const labSummary = [
    { name: "Concrete Lab", facilities: "Testing of cement, concrete, coarse and fine aggregates, bricks, blocks, tiles, stones and other building material", equipment: "Universal Testing Machine" },
    { name: "Geotechnical Lab", facilities: "Testing of properties of Soil.", equipment: "Plate Load test, Triaxial Test, Consolidation Test, Swell Pressure Apparatus" },
    { name: "Environmental Lab", facilities: "Testing and Sampling of quality of water and air", equipment: "Stack sampling assembly, Instruments for measurement of various parameters of water quality, UV-Vis Spectrophotometer,ovens, incubators etc." },
    { name: "Transportation Lab", facilities: "Testing of highway materials.", equipment: "Los Angles, Devels, Impact, Ductility Test Machines" },
    { name: "Surveying Lab", facilities: "Conduction of survey", equipment: "Total station, Auto Levels,Theodolite etc." },
    { name: "Geology Lab", facilities: "Study of stones", equipment: "Stones" },
    { name: "Fluid Mechanics Lab", facilities: "Calibration facilities of pipes, spillways and pumps & Turbines", equipment: "Plate Load test, Triaxial Test, Consolidation Test, Swell Pressure Apparatus" },
    { name: "Computer Centre", facilities: "Computing facilities for analysis, simulation and design of structures.", equipment: "Computers with LAN, Software like Auto-CAD, Staad - PRO etc." }
  ];

  return (
    <div className="w-full">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Laboratories
            </h2>
            <p className="text-gray-500 text-sm mt-2">CSIT | Laboratories</p>
            <div className="h-0.5 w-14 bg-[#0d173b] mt-3 rounded"></div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="space-y-8">
          {labDetails.map((lab) => (
            <div key={lab.id} className="border-b pb-8">
              <h3 className="text-xl font-semibold text-[#0d173b] mb-2">{lab.id}. {lab.name}</h3>
              <p className="text-gray-700">{lab.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto">
          <h3 className="text-2xl font-bold text-[#0d173b] mb-4">Laboratories Summary</h3>
          <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0d173b] text-white">
              <th className="py-3 px-4 text-left font-medium">
                Name of Lab
              </th>
              <th className="py-3 px-4 text-left font-medium">
                Facilities
              </th>
              <th className="py-3 px-4 text-left font-medium">
                Major Equipment Available
              </th>
            </tr>
          </thead>
          <tbody>
            {labSummary.map((lab, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="py-3 px-4 border-t border-gray-300 font-semibold">
                  {lab.name}
                </td>
                <td className="py-3 px-4 border-t border-gray-300">
                  {lab.facilities}
                </td>
                <td className="py-3 px-4 border-t border-gray-300">
                  {lab.equipment}
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

export default LaboratoriesContent;
