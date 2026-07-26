import React from 'react';
import { BedDouble, DollarSign, HeartPulse, ShieldCheck, Clock, Users, ListChecks } from 'lucide-react';

export default function HostelAndOthers() {
  const hostelFees = [
    { type: 'Triple Occupancy Room', fee: 'Rs.72,000/-' },
    { type: 'Double Occupancy Room', fee: 'Rs.84,000/-' },
    { type: 'Air-Conditioned (AC) Room', fee: 'Rs.1,12,000/-' },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="bg-[#0d173b] text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Hostel & Medical Facilities</h1>
        <p className="text-sm mt-1">CSIT | Student Welfare</p>
        <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
      </div>

      <div className="p-6 space-y-8">
        {/* Hostel Facilities */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><BedDouble className="mr-2" />Hostel Facilities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">The Institute provides safe, comfortable, and well-maintained hostel accommodation for students. The hostel aims to create a homely environment that supports academic excellence, personal growth, and overall well-being. Separate hostel facilities are available for boys and girls with adequate security and supervision.</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Specific Details</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Separate hostels for Boys and Girls.</li>
                <li>Spacious and well-ventilated rooms.</li>
                <li>Furnished accommodation with Cots, study tables, chairs, and storage facilities.</li>
                <li>24×7 water and electricity supply.</li>
                <li>Hygienic dining hall and mess facility.</li>
                <li>Common room with television and recreational facilities.</li>
                <li>Reading room and study area.</li>
                <li>Medical assistance and first-aid facility.</li>
                <li>Housekeeping and sanitation services.</li>
                <li>Power backup facility.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><Clock className="mr-2" />Hostel Entry and Exit Timings</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Hostel Gate Opening Time: 6:00 A.M.</li>
                <li>Hostel Gate Closing Time: 9:00 P.M.</li>
                <li>Study Hours: 7:00 P.M. to 10:00 P.M.</li>
                <li>Visitors' Timing: 4:00 P.M. to 6:00 P.M. (with prior permission)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><ShieldCheck className="mr-2" />Rules & Regulations</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                <li>Students must maintain discipline and decorum within the hostel premises.</li>
                <li>Ragging in any form is strictly prohibited and punishable as per Government regulations.</li>
                <li>Damage to hostel property will be recovered from the concerned student(s).</li>
                <li>Consumption of alcohol, tobacco, drugs, and other prohibited substances is strictly forbidden.</li>
                <li>Students must maintain cleanliness in their rooms and common areas.</li>
                <li>Loud music and activities causing disturbance are not permitted.</li>
                <li>Guests are not allowed to stay overnight without permission.</li>
                <li>Students must adhere to mess timings and hostel schedules.</li>
                <li>The decision of the Hostel Warden and Hostel Committee shall be final in all matters related to hostel administration.</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><Users className="mr-2" />Hostel Team Members</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Hostel Superintendent</li>
                <li>Boys Hostel Warden</li>
                <li>Girls Hostel Warden</li>
                <li>Security Personnel</li>
                <li>Housekeeping Staff</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2 flex items-center"><ListChecks className="mr-2" />Facilities Available</h4>
              <p className="text-sm text-gray-700">Safe and secure accommodation | Nutritious mess facility | Reading and study rooms | Indoor games and recreation area | Television room | RO drinking water | Medical assistance | Power backup | 24×7 security services</p>
            </div>
          </div>
        </section>

        {/* Hostel Fees & Admission */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><DollarSign className="mr-2" />Hostel Fees & Admission Process</h2>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="min-w-full border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Accommodation Type</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {hostelFees.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{item.type}</td>
                      <td className="px-4 py-2 text-sm font-medium">{item.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-600"><b>Note:</b> 1. Hostel fees are payable in advance. 2. Fees once paid are subject to the refund rules. 3. Room allocation is subject to availability.</p>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">Admission Process</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                <li>Students seeking hostel accommodation must submit the prescribed Hostel Admission Form.</li>
                <li>Admission is granted on a first-come, first-served basis, subject to availability.</li>
                <li>Required Documents: Copy of Admission Receipt, Passport Size Photographs, Photo ID Proof, Parent/Guardian Contact Details, and an Undertaking for Compliance with Hostel Rules.</li>
                <li>Room allotment will be made by the Hostel Warden/Administration.</li>
                <li>Students must complete all formalities before occupying the room.</li>
                <li>The Institute reserves the right to cancel admission for rule violations.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Medical Facilities */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><HeartPulse className="mr-2" />Medical Facilities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">The Institute provides basic medical facilities to ensure the health, safety, and well-being of all students. Immediate medical assistance is available for minor illnesses, injuries, and health emergencies.</p>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Facilities</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>First-aid facility available in the hostel.</li>
                <li>Tie-up with nearby hospitals and clinics for emergency medical treatment.</li>
                <li>Ambulance facility available in case of emergencies.</li>
                <li>Regular health check-up camps organized periodically.</li>
                <li>Medical consultation support through empanelled doctors.</li>
                <li>Emergency contact numbers displayed prominently in the hostel.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Rules & Regulations</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Students must report any serious illness or contagious disease to the Hostel Warden.</li>
                <li>Self-medication is discouraged.</li>
                <li>Medical expenses beyond the Institute's facilities shall be borne by the student/parent.</li>
                <li>Students must carry their Institute ID card during medical consultations.</li>
                <li>Misuse of medical facilities will invite disciplinary action.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}