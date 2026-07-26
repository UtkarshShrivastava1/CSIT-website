import React from 'react';
import { Wrench, Settings, Zap, Hammer, Layers, Flame, User, ListChecks } from 'lucide-react';

export default function CentralWorkshop() {
  const teamMembers = [
    { name: 'Mr. Pradeep Kumar Agrawal', designation: 'Superintendent' },
    { name: 'Mr. L P Rana', designation: 'Teaching Assistant' },
    { name: 'Mr. Devendra Vishwakarma', designation: 'Sr. Instructor' },
    { name: 'Mr. Ashok Kumar Sinha', designation: 'Instructor' },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header Banner - Deep Navy Blue Background */}
      <div className="bg-[#0d173b] text-white p-6 rounded-t-lg">
        <h1 className="text-3xl font-bold">Central Workshop</h1>
        <p className="text-sm mt-1">CSIT | Engineering Excellence</p>
        <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
      </div>
      
      <div className="p-6 space-y-8">
        {/* Introduction Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            The Central Workshop is an essential facility in an engineering institution that provides practical training and hands-on experience to students in various manufacturing and fabrication processes. It serves as a foundation for developing technical skills, workmanship, safety awareness, and knowledge of engineering tools and machines. Central workshop at CSIT is constantly engaged in providing feasible solution to complex Engineering problems, which may include in-house design and development. It also supports researchers in making their experimental setups and modifications if required in existing ones. The Central Workshop is spread in 588.30 Sq. Mtr. area and comprises of Machine shop, Welding Shop, Fitting Shop, Foundry Shop, Carpentry Shop, and Black Smithy Shop. Central workshop is following the 5S standard practice for proper workplace management. Trained and experienced staffs are the assets of this Central facility.
          </p>
        </section>

        {/* Specific Details Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Workshop Sections</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center"><Wrench className="mr-2" />Fitting Shop</h3>
              <p className="text-sm text-gray-600 mb-2">Bench work, filing, drilling, tapping, and assembly operations.</p>
              <p className="text-sm"><b>Tools:</b> Bench vice, hacksaw, files, vernier caliper, drill machine.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center"><Settings className="mr-2" />Machine Shop</h3>
              <p className="text-sm text-gray-600 mb-2">Machining operations such as turning, facing, drilling, threading, and milling.</p>
              <p className="text-sm"><b>Machines:</b> Lathe, Milling Machine, Drilling Machine, Shaper, Grinding Machine.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center"><Zap className="mr-2" />Welding Shop</h3>
              <p className="text-sm text-gray-600 mb-2">Arc welding, gas welding, spot welding.</p>
              <p className="text-sm"><b>Equipment:</b> Welding transformers, gas welding sets, Rectifier machine safety accessories.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center"><Hammer className="mr-2" />Carpentry Shop</h3>
              <p className="text-sm text-gray-600 mb-2">Woodworking operations including marking, cutting, planning, and joining.</p>
              <p className="text-sm"><b>Tools:</b> Wood working lathe, Fret saw machine, Saws, planes, vise, chisels, marking gauges.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center"><Layers className="mr-2" />Sheet Metal Shop</h3>
              <p className="text-sm text-gray-600">Fabrication of sheet metal components using bending, cutting, folding, and riveting operations.</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 flex items-center"><Flame className="mr-2" />Foundry Shop</h3>
              <p className="text-sm text-gray-600">Pattern making, mould preparation, and casting operations.</p>
            </div>
          </div>
        </section>

        {/* Rules & Regulations Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Rules & Regulations</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">General Rules</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                <li>Entry to the workshop is permitted only during scheduled practical hours.</li>
                <li>Students must follow the instructions of the workshop instructor and technician.</li>
                <li>Attendance is mandatory before commencing practical work.</li>
                <li>Unauthorized operation of any machine or equipment is strictly prohibited.</li>
                <li>Maintain discipline and silence in the workshop.</li>
                <li>Running, horseplay, and practical jokes are strictly prohibited.</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Dress Code and Personal Safety</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                <li>Wear workshop uniform/apron and safety shoes at all times.</li>
                <li>Closed-toe footwear is mandatory; slippers and sandals are not allowed.</li>
                <li>Loose clothing, ties, scarves, and jewelry must not be worn.</li>
                <li>Long hair must be properly tied back.</li>
                <li>Safety goggles, gloves, face shields, ear protection, and other PPE must be used wherever required.</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Machine Safety Rules</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                <li>Operate machines only after receiving proper training and authorization.</li>
                <li>Ensure all machine guards and safety devices are in place before operation.</li>
                <li>Never touch moving parts of machines.</li>
                <li>Stop the machine immediately if any abnormal noise or malfunction is observed.</li>
                <li>Never leave a machine running unattended.</li>
                <li>Keep hands away from rotating tools and cutting edges.</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Tool Handling Rules</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                <li>Use the correct tool for the intended job.</li>
                <li>Inspect tools before use and report damaged tools immediately.</li>
                <li>Return all tools to their designated locations after use.</li>
                <li>Do not remove tools or equipment from the workshop without permission.</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Electrical and Fire Safety</h4>
              <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                <li>Do not touch electrical equipment with wet hands.</li>
                <li>Report exposed wires or faulty electrical equipment immediately.</li>
                <li>Know the location of fire extinguishers, emergency exits, and first-aid kits.</li>
                <li>In case of fire, switch off the power supply and inform the instructor immediately.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Team Members & Facilities */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><User className="mr-2" />Team Members</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">S/N</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2 text-sm">{index + 1}</td>
                      <td className="px-4 py-2 text-sm">{member.name}</td>
                      <td className="px-4 py-2 text-sm">{member.designation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><ListChecks className="mr-2" />Facilities Available</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Conventional machine tools.</li>
              <li>Welding and fabrication equipment.</li>
              <li>Measuring and inspection instruments.</li>
              <li>Workbenches and hand tools.</li>
              <li>Safety equipment and first-aid facilities.</li>
              <li>Storage and maintenance area for tools and consumables.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}