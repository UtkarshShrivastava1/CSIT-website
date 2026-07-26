import React from "react";

const Presence = () => {
  // Public Sector Data
  const publicSector = [
    { id: 1, name: "Rajeev Suktel", designation: "Ass. Engg., CSPGCL", branch: "MECH 2003 Batch" },
    { id: 2, name: "Kamlesh Sahu", designation: "Scientific Officer, DRDO", branch: "ETC 2006 Batch" },
    { id: 3, name: "Abhimanyu Patel", designation: "JTO, BSNL", branch: "ETC 2006 Batch" },
    { id: 4, name: "Neelam Kumar Sahu", designation: "Assistant Engineer, CSEB", branch: "ETC 2006 Batch" },
    { id: 5, name: "Durgesh Kumar Kashyap", designation: "Manager, GAIL", branch: "EEE 2006 Batch" },
    { id: 6, name: "Divyanshu Sinha", designation: "Labour Welfare Commissioner", branch: "ETC 2006 Batch" },
    { id: 7, name: "Tomesh Verma", designation: "Deputy Sub Inspector, CG Police", branch: "ETC 2007 Batch" },
    { id: 8, name: "Mukesh Vishwakarma", designation: "Manager, UCO Bank", branch: "ETC 2008 Batch" },
    { id: 9, name: "Prashant Verma", designation: "Asst. Engineer, CSPGCL", branch: "EEE 2008 Batch" },
    { id: 10, name: "Hemprakash Sahu", designation: "Dy. Manager, Indian Oil", branch: "MECH 2012 Batch" },
    { id: 11, name: "Ashutosh Sharma", designation: "Branch Manager, CGRGB", branch: "E&I 2013 Batch" },
    { id: 12, name: "Ajay Paikra", designation: "Sub Inspector, CG Police", branch: "ETC 2015 Batch" },
    { id: 13, name: "Tekendra Nureti", designation: "Nayab Tahsildar", branch: "MECH 2015 Batch" },
    { id: 14, name: "Praveen Dhruwe", designation: "Regional Transport Inspector, Jagdalpur", branch: "MECH 2015 Batch" },
    { id: 15, name: "Roshan Ahuja", designation: "Nayab Tahsildar, Bilaspur, Chhattisgarh", branch: "MECH 2015 Batch" },
    { id: 16, name: "Shilpa Sahu", designation: "Deputy Sub Inspector, CG Police", branch: "CSE 2021 Batch" },
  ];

  // Private Sector Data
  const privateSector = [
    { id: 1, name: "Dhiraj Kannoje", designation: "Director - CIT Group of Colleges & School, Linkearth Buildcon", branch: "ETC 2003 Batch" },
    { id: 2, name: "Nikhil Sethi", designation: "CEO - Xploreup & Unicorn and Director - SNV Services & Unicornseo", branch: "CSE 2004 Batch" },
    { id: 3, name: "Anurag Bilaiya", designation: "Director, Mekalsuta College, Dindori, Mekalsuta Arogya Gram Nature Care Pvt. Ltd. and Mount Litera Zee School", branch: "MECH 2004 Batch" },
    { id: 4, name: "Mahendra Thakre", designation: "Director - EnergyGreen TechnoPower Pvt. Ltd.", branch: "ETC 2005 Batch" },
    { id: 5, name: "Rahul Barchhiha", designation: "Director & Founder - Pylons Technology", branch: "ETC 2006 Batch" },
    { id: 6, name: "Shailendra Singh", designation: "Proprietor - Reckon Steels, Industrial Area", branch: "MECH 2006 Batch" },
    { id: 7, name: "Satya Prakash Tiwari", designation: "Director - Arunabh Technotronics LLP", branch: "ETC 2007 Batch" },
    { id: 8, name: "Karan Tiwari", designation: "Director - Rama Gases, Rama Industries, Rama Bharat Gas, Somni, Rajnandgaon, M/s Varsha Enterprises", branch: "MECH 2008 Batch" },
    { id: 9, name: "Shreyas S. Kumar", designation: "Director - 4D Education Hub, Bhilai, Fools Den (School Wing)", branch: "MECH 2010 Batch" },
    { id: 10, name: "Aashish Bafna", designation: "Managing Director - Audittech Industrial Services Private Limited", branch: "E&I 2011 Batch" },
    { id: 11, name: "Shubham Jain", designation: "Director - Siddhivinayak Associates", branch: "ETC 2012 Batch" },
    { id: 12, name: "Anurag Venkat", designation: "Founder - Vinion Consultancy", branch: "MECH 2013 Batch" },
    { id: 13, name: "Rupesh Gautam", designation: "Director - Uma Engineering", branch: "MECH 2013 Batch" },
    { id: 14, name: "Bhanu Pratap Bhaskar", designation: "Founder & CEO - Trived Group of Industries", branch: "CSE 2015 Batch" },
    { id: 15, name: "Ankesh Harmukh", designation: "Director - Tech36Garh", branch: "EEE 2017 Batch" },
  ];

  // International Data
  const international = [
    { id: 1, name: "Dr. Ing. Kaushal Nishad", designation: "Research Associate, Technische Universität Darmstadt, Germany", branch: "MECH 2003 Batch" },
    { id: 2, name: "Manosh Chanda", designation: "Sr. Technical Project Manager, Infosys, Madison, US", branch: "CSE 2003 Batch" },
    { id: 3, name: "Amit Mishra", designation: "Vice President, MUFG, New York", branch: "ETC 2003 Batch" },
    { id: 4, name: "Pradeep Sarkar", designation: "Engineer, AIR BUS, Bristol, England", branch: "MECH 2003 Batch" },
    { id: 5, name: "Adarsh Kumar Jha", designation: "Cut Over Manager, TCS, Dusseldorf, Germany", branch: "CSE 2003 Batch" },
    { id: 6, name: "Prabhat Thakur", designation: "Sr. Network Performance Engineer, VERIZON, California, US", branch: "CSE 2004 Batch" },
    { id: 7, name: "Vijay Deashore", designation: "Automation Specialist, New York Stock Exchange, New York", branch: "CSE 2004 Batch" },
    { id: 8, name: "Akhil Shukla", designation: "Sr. Project Manager, EMIDS, New York", branch: "ETC 2004 Batch" },
    { id: 9, name: "Amar Shirke", designation: "Project Lead, WIPRO, Michigan, US", branch: "CSE 2004 Batch" },
    { id: 10, name: "Tanu Agrawal", designation: "Project Definition Engineer, AMADEUS, London, UK", branch: "CSE 2004 Batch" },
    { id: 11, name: "Nishit Kumar", designation: "Technical Delivery Lead, HSBC, London, UK", branch: "CSE 2004 Batch" },
    { id: 12, name: "Aditi Dadariya", designation: "Senior Tester, Sainsbury's, London, UK", branch: "CSE 2004 Batch" },
    { id: 13, name: "Santosh Singh", designation: "Tech. Lead, Infosys, New York", branch: "ETC 2005 Batch" },
    { id: 14, name: "Rishi Raj Dubey", designation: "Project Lead, WIPRO, Missourie, US", branch: "CSE 2005 Batch" },
    { id: 15, name: "Nishta Agrawal", designation: "Product Manager, Lam Research Company, California", branch: "ETC 2008 Batch" },
  ];

  const getCategoryBadge = (category) => {
    const styles = {
      "Public Sector": "bg-blue-100 text-blue-700",
      "Private Sector": "bg-emerald-100 text-emerald-700",
      "International": "bg-amber-100 text-amber-700"
    };
    return styles[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Alumni Presence
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Our distinguished alumni making an impact worldwide
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6 overflow-x-auto">
        <div className="min-w-full space-y-8">
          
          {/* Public Sector */}
          <div>
            <h3 className="text-lg font-semibold text-[#0d173b] mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded"></span>
              Public Sector
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0d173b] text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-md">S. No</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Designation/Company</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold rounded-tr-md">Branch/Batch</th>
                </tr>
              </thead>
              <tbody>
                {publicSector.map((item, index) => (
                  <tr key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">{item.id}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm font-medium text-[#0d173b]">{item.name}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-700">{item.designation}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">{item.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Private Sector */}
          <div>
            <h3 className="text-lg font-semibold text-[#0d173b] mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-600 rounded"></span>
              Private Sector
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0d173b] text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-md">S. No</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Designation/Company</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold rounded-tr-md">Branch/Batch</th>
                </tr>
              </thead>
              <tbody>
                {privateSector.map((item, index) => (
                  <tr key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">{item.id}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm font-medium text-[#0d173b]">{item.name}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-700">{item.designation}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">{item.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* International */}
          <div>
            <h3 className="text-lg font-semibold text-[#0d173b] mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-amber-600 rounded"></span>
              International
            </h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0d173b] text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold rounded-tl-md">S. No</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Designation/Company</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold rounded-tr-md">Branch/Batch</th>
                </tr>
              </thead>
              <tbody>
                {international.map((item, index) => (
                  <tr key={item.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">{item.id}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm font-medium text-[#0d173b]">{item.name}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-700">{item.designation}</td>
                    <td className="px-4 py-3 border-b border-gray-200 text-sm text-gray-600">{item.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-6 text-sm text-gray-500 italic">
          * This list represents a selection of our distinguished alumni. Many
          more are making significant contributions across various fields.
        </div>
      </div>
    </div>
  );
};

export default Presence;