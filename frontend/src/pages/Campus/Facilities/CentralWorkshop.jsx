import React from 'react';

export default function CentralWorkshop() {
  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header Banner - Deep Navy Blue Background */}
      <div className="bg-[#0d173b] text-white p-6">
        <h1 className="text-3xl font-bold">Central Workshop</h1>
        <p className="text-sm mt-1">CSIT | Engineering Excellence</p>
        <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
      </div>
      
      {/* Introduction Card */}
      <div className="p-6 bg-white shadow-sm">
        <p className="text-sm leading-relaxed text-gray-700">
        Central Workshop is centralized facility of the Institute and it is one among those that serve, support and enhances the academic activities. Central workshop at CSIT is constantly engaged in providing feasible solution to complex Engineering problems, which may include in- house design and development. It also supports researchers in making their experimental set �ups and modifications if required in existing ones. The Central Workshop is spread in 588.30 Sq. Mtr. area and comprises of Machine shop, Welding Shop, Fitting Shop, Foundry Shop, Carpentry Shop, and Black Smithy Shop. Central workshop is following the 5S standard practice for proper workplace management. Trained and experienced staffs are the assets of this Central facility.
        </p>
      </div>
      
      {/* Workshop Sections */}
      <div className="p-4 grid grid-cols-1 gap-6">
        {/* Fitting Shop */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
          <div className="border-l-4 border-[#0d173b]"></div>
          <div className="flex items-start p-4 w-full">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Fitting Shop</h2>
              <p className="text-sm font-medium text-blue-600 mb-2">Details of equipments available in fitting shop:</p>
              <ul className="text-sm text-gray-700 pl-5 list-disc space-y-2">
                <li>Hydraulic Power Hacksaw</li>
                <li>Bench Vise (110 and 200 mm) � 72 Nos.</li>
                <li>Bench Drill Machine</li>
                <li>Tap and Die</li>
                <li>Try Square</li>
                <li>Hand Vice and Hand Files</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Welding Shop */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
          <div className="border-l-4 border-[#0d173b]"></div>
          <div className="flex items-start p-4 w-full">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Welding Shop</h2>
              <p className="text-sm font-medium text-blue-600 mb-2">Details of equipment available in welding shop:</p>
              <ul className="text-sm text-gray-700 pl-5 list-disc space-y-2">
                <li>Welding Machine (Electric Arc)</li>
                <li> Rectifier Machine</li>
                <li>Spot Welding Machine</li>
                <li>Transformer</li>
                <li>Gas Welding</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Black Smithy Shop */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
          <div className="border-l-4 border-[#0d173b]"></div>
          <div className="flex items-start p-4 w-full">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔨</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Black Smithy Shop</h2>
              <p className="text-sm font-medium text-blue-600 mb-2">Details of equipments available in black smithy shop:</p>
              <ul className="text-sm text-gray-700 pl-5 list-disc space-y-2">
                <li> Furnace</li>
                <li>Tong</li>
                <li>Anvil</li>
                <li>Swage Block</li>
                <li>Hammers</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Machine Shop */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
          <div className="border-l-4 border-[#0d173b]"></div>
          <div className="flex items-start p-4 w-full">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Machine Shop</h2>
              <p className="text-sm font-medium text-blue-600 mb-2">Details of equipment available in machine shop:</p>
              <ul className="text-sm text-gray-700 pl-5 list-disc space-y-2">
                <li> Lathe machine: - Centre Lathe and Turret Lathe</li>
                <li>Drill machine: - Impact Drill Machine, Radial Drill Machine and Hand Drill Machine</li>
                <li> Grinding Machine: - Bench Grinding Machine (1 H.P and 3 H.P.) and Hand</li>
                <li>Grinding Machine</li>
                <li>Shaper Machine</li>
                <li>Shearing Machine</li>
                <li>Milling Machine</li>
                <li>Power saw Machine</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Foundry Shop */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
          <div className="border-l-4 border-[#0d173b]"></div>
          <div className="flex items-start p-4 w-full">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔥</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Foundry Shop</h2>
              <p className="text-sm font-medium text-blue-600 mb-2">Details of equipments available in foundry shop:</p>
              <ul className="text-sm text-gray-700 pl-5 list-disc space-y-2">
                <li>Moulding Box and Tools</li>
                <li> Pit Furnace (10 10)</li>
                <li>Riddle</li>
                <li>Pit furnace</li>
                <li>Reamers</li>
                <li>Ceramic Crucibles</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Carpentry Shop */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex">
          <div className="border-l-4 border-[#0d173b]"></div>
          <div className="flex items-start p-4 w-full">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🪚</span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Carpentry Shop</h2>
              <p className="text-sm font-medium text-blue-600 mb-2">Numerous wood cutting machines and equipments are available</p>
              <ul className="text-sm text-gray-700 pl-5 list-disc space-y-2">
                <li> Wood Working Lathe Machine</li>
                <li>Fret Saw machine</li>
                <li>Jack Planer</li>
                <li>Pairing and Farmer Chisel</li>
                <li>Tenon Saw</li>
                <li>Rip Saw</li>
                <li>Carpentry Vise</li>
                <li>Rasp Files and Different Hand Files</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}