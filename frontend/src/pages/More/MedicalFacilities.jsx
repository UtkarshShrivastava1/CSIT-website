import React from 'react';
import { HeartPulse, ListChecks, ShieldCheck } from 'lucide-react';

const MedicalFacilities = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><HeartPulse className="mr-3" />Medical Facilities</h1>
          <p className="text-base text-gray-200 mt-2">
            Ensuring the health and well-being of our students
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Introduction */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            The Institute provides basic medical facilities to ensure the health, safety, and well-being of all students. Immediate medical assistance is available for minor illnesses, injuries, and health emergencies.
          </p>
        </section>

        {/* Facilities */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>First-aid facility available in the hostel.</li>
            <li>Tie-up with nearby hospitals and clinics for emergency medical treatment.</li>
            <li>Ambulance facility available in case of emergencies.</li>
            <li>Regular health check-up camps organized periodically.</li>
            <li>Medical consultation support through empanelled doctors.</li>
            <li>Emergency contact numbers displayed prominently in the hostel.</li>
          </ul>
        </section>

        {/* Rules & Regulations */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ShieldCheck className="mr-2" />Rules & Regulations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Students must report any serious illness or contagious disease to the Hostel Warden.</li>
            <li>Self-medication is discouraged.</li>
            <li>Medical expenses beyond the Institute's facilities shall be borne by the student/parent.</li>
            <li>Students must carry their Institute ID card during medical consultations.</li>
            <li>Misuse of medical facilities will invite disciplinary action.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default MedicalFacilities;