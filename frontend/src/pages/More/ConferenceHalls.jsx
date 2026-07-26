import React from 'react';
import { Mic, Presentation, Wifi, ShieldCheck, FileText, User } from 'lucide-react';

export default function SeminarHall() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="bg-[#0d173b] text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Conference & Seminar Halls</h1>
        <p className="text-sm mt-1">CSIT | Spaces for Learning & Collaboration</p>
        <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
      </div>

      <div className="p-6 space-y-8">
        {/* Introduction Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            The institution provides well-equipped Conference and Seminar Halls for conducting academic, administrative, cultural, and professional activities. These facilities are designed to support seminars, workshops, conferences, guest lectures, training programs, presentations, meetings, placement activities, and student development programs.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            The halls are equipped with modern audio-visual facilities and comfortable seating arrangements to ensure a professional and conducive environment for learning and interaction.
          </p>
        </section>

        {/* Facilities Available Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">2. Facilities Available</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center"><Presentation className="mr-2" />Conference Hall</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Air-conditioned environment</li>
                <li>Comfortable seating arrangement</li>
                <li>LCD Projector</li>
                <li>Audio System with Wireless Microphones</li>
                <li>Internet Connectivity</li>
                <li>Podium and Presentation Facilities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3 flex items-center"><Mic className="mr-2" />Seminar Hall</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>Seating capacity for students and guests</li>
                <li>Multimedia Projector</li>
                <li>Public Address System</li>
                <li>Wireless and Collar Microphones</li>
                <li>Smart Presentation Facilities</li>
                <li>Wi-Fi Connectivity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Requisition Form Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><FileText className="mr-2" />3. Requisition Form</h2>
          <p className="text-gray-700">Can be received from Faculty In-charge.</p>
        </section>

        {/* Rules & Regulations Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ShieldCheck className="mr-2" />4. Rules & Regulations</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-sm">
            <li>The Conference and Seminar Halls shall be used only for approved academic, administrative, and institutional activities.</li>
            <li>Prior approval from the competent authority is mandatory before using the facility.</li>
            <li>Requisition forms must be submitted at least three working days in advance.</li>
            <li>Users shall adhere to the allotted date and time schedule.</li>
            <li>All audio-visual equipment must be handled carefully and only by authorized personnel.</li>
            <li>Any damage to furniture, fixtures, or equipment shall be the responsibility of the organizing department/user.</li>
            <li>Users must maintain cleanliness and decorum within the premises.</li>
            <li>Posters, banners, and decorations may be displayed only with prior approval and must not damage walls or furniture.</li>
            <li>The facility should be vacated promptly after completion of the event.</li>
            <li>Violation of rules may result in suspension of hall usage privileges.</li>
          </ol>
        </section>

        {/* Contact Section */}
        <section className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0d173b]">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><User className="mr-2" />Facility In-charge Contact</h2>
          <div className="space-y-1 text-gray-800">
            <p><strong>Conference & Seminar Hall Coordinator:</strong> ____________________</p>
            <p><strong>Mobile:</strong> ____________________</p>
            <p><strong>Email:</strong> _____________________</p>
            <p><strong>Office Timing:</strong> 9:30 AM to 5:00 PM (Working Days)</p>
          </div>
        </section>
      </div>
    </div>
  );
}