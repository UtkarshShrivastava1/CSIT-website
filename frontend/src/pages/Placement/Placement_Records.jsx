import React, { useState } from 'react';
import { placement2024Companies } from '../../data/placement2024'; // Assumed path
import { placement2025Companies } from '../../data/placement2025'; // Assumed path
import { placement2025BranchStats,placement2025Summary } from '../../data/placementStats'; // Assumed path
import { placementStatistics } from '../../data/placementStatistic';

// Mock data until actual files are created
// const placement2024 = [
//   { id: 1, name: 'Aarav Sharma', company: 'Tech Solutions Inc.', package: '12 LPA' },
//   { id: 2, name: 'Diya Patel', company: 'Innovate Corp', package: '15 LPA' },
//   { id: 3, name: 'Rohan Mehta', company: 'Data Analytics Co.', package: '10 LPA' },
// ];

// const placement2025 = [
//   { id: 1, name: 'Priya Singh', company: 'Future Systems', package: '14 LPA' },
//   { id: 2, name: 'Arjun Verma', company: 'AI Innovators', package: '18 LPA' },
// ];

// const summaryStats = [
//     { year: '2024', total: 150, highest: '25 LPA', average: '8 LPA' },
//     { year: '2025', total: 180, highest: '28 LPA', average: '9.5 LPA' },
// ];

const StatCard = ({ label, value }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-2xl font-bold text-[#0d173b]">{value}</p>
  </div>
);

const Placement_Records = () => {
  const [activeTab, setActiveTab] = useState('stats');

  const data = {
    stats: placement2025BranchStats,
    2024: placement2024Companies,
    2025: placement2025Companies,
  };
console.log(data.stats)
  const renderContent = () => {
    if (activeTab === 'stats') {
       return (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drives</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Placed</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.stats.map((stat) => (
                <tr key={stat.branch}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{stat.branch}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.students}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.drives}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.placed}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{stat.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

   const yearData = data[activeTab];
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mode</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Package</th>
           {activeTab === '2025' && <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {yearData.map((record) => (
              <tr key={record.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.mode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.package}</td>
                {activeTab === '2025' && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
       {/* Header */}
       <div className="h-32 sm:h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Placement Records
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              Academic Year Placement Matrix & Records
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Academic Year" value={placement2025Summary.academicYear} />
            <StatCard label="Total Students" value={placement2025Summary.totalStudents} />
            <StatCard label="Total Placed" value={placement2025Summary.totalPlaced} />
            <StatCard label="Overall Placement" value={`${placement2025Summary.overallPlacement}%`} />
        </div>


        <div className="mb-4 border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button onClick={() => setActiveTab('stats')} className={`${activeTab === 'stats' ? 'border-[#0d173b] text-[#0d173b]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
              Summary
            </button>
            <button onClick={() => setActiveTab('2025')} className={`${activeTab === '2025' ? 'border-[#0d173b] text-[#0d173b]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
              Placement 2025
            </button>
            <button onClick={() => setActiveTab('2024')} className={`${activeTab === '2024' ? 'border-[#0d173b] text-[#0d173b]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
              Placement 2024
            </button>
          </nav>
        </div>

        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Placement_Records;
