import React from 'react';
import { Dumbbell } from 'lucide-react';

const Gymnasium = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><Dumbbell className="mr-3" />Gymnasium</h1>
          <p className="text-base text-gray-200 mt-2">
            A space for health, fitness, and well-being
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">“A healthy lifestyle not only transforms your body but also enhances your mind and attitude.” At CSIT Campus, students can enjoy access to a well-equipped fitness facility featuring rows of treadmills and elliptical machines, advanced weight-training equipment, dedicated spaces for low-impact cardio and aerobic sessions, and a comprehensive free-weights section. With these facilities available right on campus, CSIT encourages students to maintain an active, healthy, and balanced lifestyle.</p>
        </div>
      </div>
    </div>
  );
};

export default Gymnasium;