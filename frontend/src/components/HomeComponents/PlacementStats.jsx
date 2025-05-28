import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const PlacementStats = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#0d173b] to-[#1a2d5e] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Placement Highlights</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-4"></div>
          <p className="text-gray-200">
          Our students consistently achieve remarkable placement opportunities with leading companies worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard 
            title="Highest Package" 
            end={10} 
            suffix=" LPA" 
            icon={<PackageIcon />} 
            description="Top-performing students"
          />
          <StatCard 
            title="Average Package" 
            end={5.2} 
            suffix=" LPA" 
            decimals={1} 
            icon={<ChartIcon />}
            description="Consistent growth"
          />
          <StatCard 
            title="Companies" 
            end={100} 
            suffix="+" 
            icon={<CompanyIcon />}
            description="Leading organizations"
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, end, suffix, decimals = 0, icon, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div 
      ref={ref} 
      className="p-6 bg-white rounded-lg shadow-md text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0d173b]/10 rounded-full mb-4">
        <span className="text-[#0d173b] text-xl">{icon}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <div className="text-4xl font-bold text-[#0d173b] mb-2">
        {inView ? <CountUp start={0} end={end} duration={2.5} suffix={suffix} decimals={decimals} /> : "0"}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Icons (slightly smaller)
const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CompanyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default PlacementStats;