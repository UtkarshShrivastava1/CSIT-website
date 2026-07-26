import React from 'react';
import { Shield, ListChecks, ShieldCheck, User } from 'lucide-react';

const SecurityServices = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><Shield className="mr-3" />Security Services</h1>
          <p className="text-base text-gray-200 mt-2">
            Ensuring a safe and secure campus environment
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
            The Security Department is responsible for maintaining a safe, secure, and disciplined environment within the campus. Security personnel are deployed round the clock to ensure the safety of students, staff, visitors, institutional property, and hostel premises.
          </p>
        </section>

        {/* Services & Responsibilities */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />Services & Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>24×7 campus security surveillance.</li>
            <li>Entry and exit monitoring of vehicles and visitors.</li>
            <li>Security checks at gates and important locations.</li>
            <li>Assistance during emergencies and special events.</li>
            <li>Lost and found assistance.</li>
            <li>Monitoring of hostel and academic blocks.</li>
          </ul>
        </section>

        {/* Rules & Regulations */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ShieldCheck className="mr-2" />Rules & Regulations</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
            <li>All students, staff, and visitors must carry valid identity cards.</li>
            <li>Visitors must register at the security gate before entering the campus.</li>
            <li>Entry of unauthorized persons is strictly prohibited.</li>
            <li>Damage to campus property will attract disciplinary action.</li>
            <li>Students must comply with security instructions at all times.</li>
            <li>Vehicles must be parked only in designated parking areas.</li>
            <li>Any suspicious activity should be reported immediately to the Security Office.</li>
            <li>Helmet wearing is compulsory while riding or driving a two-wheeler within and outside the campus.</li>
          </ol>
        </section>

        {/* Contact Us */}
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0d173b]">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><User className="mr-2" />Contact Us</h2>
          <div className="space-y-1 text-gray-800">
            <p><strong>Security Office</strong></p>
            <p><strong>Location:</strong> Main Gate Campus</p>
            <p><strong>Timing:</strong> 24×7 Service</p>
            <p><strong>Phone:</strong> __________________</p>
            <p><strong>Email:</strong> __________________</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecurityServices;