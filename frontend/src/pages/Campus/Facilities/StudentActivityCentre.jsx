import React from 'react';
import { Activity, ListChecks, FileText, ShieldCheck } from 'lucide-react';

export default function StudentActivityCenter() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header with decorative elements */}
      <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-r from-[#0d173b] to-[#1e305f] p-6">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">
            <Activity className="mr-3" size={28} />
            Student Activity Centre
          </h1>
          <p className="text-blue-100 text-sm md:text-base"> CSIT | Fostering holistic development</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
      </div>
      
      <div className="p-6 space-y-8">
        {/* Introduction */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            The Student Activity Centre serves as a hub for extracurricular, cultural, recreational, and personality development activities. It aims to foster creativity, teamwork, leadership, and holistic development among students.
          </p>
        </section>

        {/* Facilities */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Indoor games (Table Tennis, Chess, Carrom, etc.).</li>
            <li>Reading and discussion area.</li>
            <li>Cultural and music activity space.</li>
            <li>Seminar and workshop facilities.</li>
            <li>Fitness and recreation area (where available).</li>
            <li>Student club meeting rooms.</li>
            <li>Audio-visual equipment for events and presentations.</li>
          </ul>
        </section>

        {/* Requisition Procedure */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><FileText className="mr-2" />Requisition Procedure</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
            <li>Submit an Activity Centre Requisition Form to the Student Affairs Office.</li>
            <li>Mention the purpose, date, time, and expected number of participants.</li>
            <li>Obtain approval from the concerned authority.</li>
            <li>Follow the allotted schedule and facility guidelines.</li>
          </ol>
        </section>

        {/* Rules & Regulations */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ShieldCheck className="mr-2" />Rules & Regulations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>The Centre shall be used only for approved academic, cultural, or recreational activities.</li>
            <li>Students must maintain discipline and decorum.</li>
            <li>Equipment and facilities should be handled carefully.</li>
            <li>Any damage to property shall be recovered from the responsible individual/group.</li>
            <li>Activities should not disturb academic or hostel routines.</li>
            <li>The Centre shall remain open only during notified timings.</li>
            <li>Unauthorized gatherings and political activities are prohibited.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}