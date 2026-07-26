import React from 'react';
import { Bed, ListChecks, FileText, ShieldCheck } from 'lucide-react';

const GuestRoom = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><Bed className="mr-3" />Guest Room</h1>
          <p className="text-base text-gray-200 mt-2">
            Comfortable accommodation for our visitors
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
            The Institute provides well-furnished Guest Rooms for parents, guardians, visiting faculty, and official guests on prior approval and subject to availability.
          </p>
        </section>

        {/* Facilities */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />Facilities</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Clean and comfortable accommodation.</li>
            <li>Attached bathroom facilities.</li>
            <li>Bed, mattress, pillow, and linen provided.</li>
            <li>Drinking water facility.</li>
            <li>Housekeeping services.</li>
          </ul>
        </section>

        {/* Requisition Procedure */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><FileText className="mr-2" />Requisition Procedure</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
            <li>Submit a Guest Room Requisition Form to the Office.</li>
            <li>Obtain approval from the authorities.</li>
            <li>Pay applicable charges before occupancy.</li>
            <li>Accommodation shall be allotted subject to room availability.</li>
          </ol>
        </section>

        {/* Rules & Regulations */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ShieldCheck className="mr-2" />Rules & Regulations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>Guest accommodation is available only with prior approval.</li>
            <li>Guests must carry valid photo identification.</li>
            <li>Check-in and check-out timings must be strictly followed.</li>
            <li>Smoking, alcohol consumption, and any unlawful activity are prohibited.</li>
            <li>The allottee shall be responsible for any damage to the property.</li>
            <li>Management reserves the right to cancel bookings in special circumstances.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GuestRoom;