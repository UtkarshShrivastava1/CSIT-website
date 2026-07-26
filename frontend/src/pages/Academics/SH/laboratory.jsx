import React from "react";

const LaboratoriesContent = () => {
  const labDetails = [
    { id: 1, name: "Communication Skills Lab", description: "The Communication Skills Lab is a state-of-the-art facility designed to enhance students' proficiency in English. It is well-equipped with advanced language learning software and a rich set of academic resources. The lab provides an interactive and immersive environment for students to practice listening, speaking, reading, and writing skills, preparing them for professional communication and campus placements." },
    // Add other labs here if descriptions become available
  ]; 

  return (
    <div className="w-full overflow-x-auto">
      <div className="h-40 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d173b]">
              Laboratories
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Science & Humanities | Laboratories
            </p>
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
              <p className="text-sm text-gray-500 mt-4 italic">[Photographs of the lab will be added here.]</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaboratoriesContent;