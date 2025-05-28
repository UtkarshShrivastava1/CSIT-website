import React from "react";

export default function CanteenCafeInfo() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Canteen & Cafe</h1>
          <p className="text-sm md:text-base mt-1">CSIT | Information Dashboard</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-4 md:p-6 bg-blue-50 border-b border-blue-100">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900">Canteen / Cafeteria</h2>
          </div>
          
          <div className="p-4 md:p-6 lg:p-8">
            <div className="mb-6 text-gray-700">
              <p className="mb-4">
                The college has a well-established canteen on campus. It forms the junction of the students from different streams/courses. It makes all edible items available to the students and faculty members as per their requirement. The environment in the canteen is clean & hygienic. The rates charged for various items of food are checked and approved by the college administration. Canteen is open on working days from 9.00am to 6.30pm.
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3">VISION</h3>
                <p className="mb-6 italic text-gray-700">
                  To facilitate hygienic and nutritious food at reasonably priced merchandise and services essential to their comfort and well-being.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Facilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span> Adequate & Well-furnished Canteen with proper Ventilation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span> Square and Rectangular Tables with 100+ seating capacity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span>Chillers & Freezer Facilities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span>CCTV Surveillance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span>Fire Extinguishers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span>Fully Wi-Fi Connected.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span>Laptop & Mobile Charging Point.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">◆</span>
                    <span>Juices & Beverages.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900 shadow-sm">
                <p className="text-sm text-blue-600 mb-1">Opening Hours</p>
                <p className="text-xl font-bold text-blue-900">9:00 AM - 6:30 PM</p>
                <p className="text-xs text-gray-500 mt-1">Working days only</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900 shadow-sm">
                <p className="text-sm text-blue-600 mb-1">Seating Capacity</p>
                <p className="text-xl font-bold text-blue-900">100+</p>
                <p className="text-xs text-gray-500 mt-1">Square & rectangular tables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}