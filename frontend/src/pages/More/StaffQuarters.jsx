import React from 'react';
import { Home, ListChecks, ShieldCheck, FileText, User } from 'lucide-react';

const StaffQuarters = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><Home className="mr-3" />Staff Quarters</h1>
          <p className="text-base text-gray-200 mt-2">
            On-campus residential facilities for faculty and staff
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
            The Staff Quarters are provided to eligible faculty and staff members to facilitate convenient residential accommodation within the campus premises. The accommodation is allotted as per institutional rules and availability.
          </p>
        </section>

        {/* Facilities */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Residential accommodation.</li>
            <li>Water and electricity supply.</li>
            <li>Security services.</li>
            <li>Road and parking facilities.</li>
            <li>Green and peaceful campus environment.</li>
          </ul>
        </section>

        {/* Rules & Regulations */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ShieldCheck className="mr-2" />Rules & Regulations</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
            <li>Quarters shall be occupied only by the allotted employee and authorized family members.</li>
            <li>Subletting or sharing accommodation with unauthorized persons is strictly prohibited.</li>
            <li>Residents must maintain cleanliness and proper upkeep of the allotted premises.</li>
            <li>Structural alterations without prior approval are not permitted.</li>
            <li>Residents shall pay applicable utility charges as prescribed.</li>
            <li>Noise pollution and activities causing inconvenience to neighbors should be avoided.</li>
            <li>Quarters must be vacated immediately upon cessation of employment or as directed by the management.</li>
          </ol>
        </section>

        {/* Allotment Procedure */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><FileText className="mr-2" />Allotment Procedure</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
            <li>Submit a Staff Quarter Application Form.</li>
            <li>Verification of eligibility and availability.</li>
            <li>Approval by the competent authority.</li>
            <li>Issuance of allotment order.</li>
            <li>Occupation and handover process.</li>
          </ol>
        </section>

        {/* Contact Us */}
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0d173b]">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><User className="mr-2" />Contact Us</h2>
          <div className="space-y-1 text-gray-800">
            <p><strong>Staff Quarter Administration</strong></p>
            <p><strong>Location:</strong> Estate Office / Administrative Block</p>
            <p><strong>Office Hours:</strong> 9:30 AM – 5:00 PM (Working Days)</p>
            <p><strong>Phone:</strong> __________________</p>
            <p><strong>Email:</strong> __________________</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StaffQuarters;