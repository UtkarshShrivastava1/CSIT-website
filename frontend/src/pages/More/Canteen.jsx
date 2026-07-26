import React from "react";

export default function CanteenCafeInfo() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Canteen</h1>
          <p className="text-sm md:text-base mt-1">CSIT | Information Dashboard</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-4 md:p-6 lg:p-8">
            <div className="space-y-8 text-gray-700">
              <section>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Introduction</h3>
                <p>
                  The Campus Canteen provides hygienic, nutritious, and affordable food and refreshments to students, faculty, staff, and visitors. The canteen serves as a convenient dining facility within the campus.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Facilities</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Breakfast, lunch, snacks, and beverages.</li>
                  <li>Clean seating arrangements.</li>
                  <li>RO drinking water facility.</li>
                  <li>Affordable meal options.</li>
                  <li>Special arrangements during institutional events.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Rules & Regulations</h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Maintain cleanliness and hygiene within the canteen premises.</li>
                  <li>Food should not be wasted.</li>
                  <li>Queue discipline must be followed while placing orders.</li>
                  <li>Damage to furniture or canteen property is prohibited.</li>
                  <li>Canteen timings must be strictly followed.</li>
                </ol>
              </section>

              <section className="mt-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Contact Us</h3>
                <p>
                  <strong>Canteen Manager</strong>
                </p>
                <p>
                  <strong>Location:</strong> Campus Canteen Building
                </p>
                <p>
                  <strong>Phone:</strong> __________________
                </p>
                <p>
                  <strong>Email:</strong> __________________
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}