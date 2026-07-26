import React from 'react';
import { Building, ListChecks, ShieldCheck, User } from 'lucide-react';

const EstateOffice = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><Building className="mr-3" />Estate Office</h1>
          <p className="text-base text-gray-200 mt-2">
            Managing and maintaining campus infrastructure
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
            The Estate Office manages the maintenance, development, and upkeep of the campus infrastructure. It ensures the proper functioning of buildings, utilities, roads, gardens, water supply, electrical systems, and other physical facilities.
          </p>
        </section>

        {/* Services */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />Services</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Campus maintenance and repair works.</li>
            <li>Electrical and plumbing maintenance.</li>
            <li>Water supply management.</li>
            <li>Housekeeping and sanitation supervision.</li>
            <li>Landscaping and gardening.</li>
            <li>Infrastructure development and renovation.</li>
          </ul>
        </section>

        {/* Rules & Regulations */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ShieldCheck className="mr-2" />Rules & Regulations</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
            <li>Requests for repairs should be submitted through the prescribed maintenance requisition form.</li>
            <li>Unauthorized modifications to institutional property are prohibited.</li>
            <li>Water and electricity should be used judiciously.</li>
            <li>Damage caused due to negligence may result in recovery of repair costs.</li>
            <li>Complaints regarding maintenance should be reported promptly.</li>
          </ol>
        </section>

        {/* Contact Us */}
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0d173b]">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><User className="mr-2" />Contact Us</h2>
          <div className="space-y-1 text-gray-800">
            <p><strong>Estate Office</strong></p>
            <p><strong>Location:</strong> Administrative Block</p>
            <p><strong>Office Hours:</strong> 9:30 AM – 5:00 PM (Working Days)</p>
            <p><strong>Phone:</strong> __________________</p>
            <p><strong>Email:</strong> __________________</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EstateOffice;