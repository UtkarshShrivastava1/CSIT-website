import React from "react";

const Presence = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Enhanced Header with subtle pattern */}
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
        <div className="min-w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold rounded-tl-md">
                  #
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold">
                  Category
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold">
                  Name
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold">
                  Designation/Company
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold rounded-tr-md">
                  Branch/Batch
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                // State & Central Government Services
                {
                  id: 1,
                  category: "State & Central Government Services",
                  name: "Rajeev Suktel",
                  designation: "Asst. Engineer, CSPGCL",
                  branch: "MECH, 2003 Batch",
                },
                {
                  id: 2,
                  category: "State & Central Government Services",
                  name: "Abhishek Dubey",
                  designation: "Project Head & Admin. Officer, Balco Hospital",
                  branch: "ETC, 2004 Batch",
                },
                {
                  id: 3,
                  category: "State & Central Government Services",
                  name: "Kamlesh Sahu",
                  designation: "Scientific Officer, DRDO",
                  branch: "ETC, 2006 Batch",
                },
                {
                  id: 4,
                  category: "State & Central Government Services",
                  name: "Abhimanyu Patel",
                  designation: "JTO, BSNL",
                  branch: "ETC, 2006 Batch",
                },
                {
                  id: 5,
                  category: "State & Central Government Services",
                  name: "Neelam Kumar Sahu",
                  designation: "Assistant Engineer, CSEB",
                  branch: "ETC, 2006 Batch",
                },
                {
                  id: 6,
                  category: "State & Central Government Services",
                  name: "Durgesh Kumar Kashyap",
                  designation: "Manager, GAIL",
                  branch: "EEE, 2006 Batch",
                },
                {
                  id: 7,
                  category: "State & Central Government Services",
                  name: "Divyanshu Sinha",
                  designation: "Labour Welfare Commissioner",
                  branch: "ETC, 2006 Batch",
                },
                {
                  id: 8,
                  category: "State & Central Government Services",
                  name: "Tomesh Verma",
                  designation: "Deputy Sub Inspector, CG Police",
                  branch: "ETC, 2007 Batch",
                },
                {
                  id: 9,
                  category: "State & Central Government Services",
                  name: "Mukesh Vishwakarma",
                  designation: "Manager, UCO Bank",
                  branch: "ETC, 2008 Batch",
                },
                {
                  id: 10,
                  category: "State & Central Government Services",
                  name: "Prashant Verma",
                  designation: "Asst. Engineer, CSPGCL",
                  branch: "EEE, 2008 Batch",
                },
                {
                  id: 11,
                  category: "State & Central Government Services",
                  name: "Hemprakash Sahu",
                  designation: "Dy. Manager, Indian Oil",
                  branch: "MECH, 2012 Batch",
                },
                {
                  id: 12,
                  category: "State & Central Government Services",
                  name: "Shilpa Sahu",
                  designation: "Deputy Sub Inspector, CG Police",
                  branch: "CSE, 2021 Batch",
                },
                {
                  id: 13,
                  category: "State & Central Government Services",
                  name: "Ashutosh Sharma",
                  designation: "Branch Manager, CGRGB",
                  branch: "E&I, 2013 Batch",
                },
                {
                  id: 14,
                  category: "State & Central Government Services",
                  name: "Ajay Paikra",
                  designation: "Sub Inspector, CG Police",
                  branch: "ETC, 2015 Batch",
                },
                {
                  id: 15,
                  category: "State & Central Government Services",
                  name: "Tekendra Nureti",
                  designation: "Nayab Tahsildar",
                  branch: "MECH, 2015 Batch",
                },
                // Entrepreneurs
                {
                  id: 16,
                  category: "Entrepreneur",
                  name: "Dhiraj Kannoje",
                  designation:
                    "Director - CIT Group of Colleges & School, Linkearth Buildcon",
                  branch: "ETC, 2003 Batch",
                },
                {
                  id: 17,
                  category: "Entrepreneur",
                  name: "Nikhil Sethi",
                  designation:
                    "CEO - Xploreup & Unicorn and Director - SNV Services & Unicornseo",
                  branch: "CSE, 2004 Batch",
                },
                {
                  id: 18,
                  category: "Entrepreneur",
                  name: "Anurag Bilaiya",
                  designation:
                    "Director, Mekalsuta College, Dindori, Mekalsuta Arogya Gram Nature Care Pvt. Ltd. and Mount Litera Zee School",
                  branch: "MECH, 2004 Batch",
                },
                {
                  id: 19,
                  category: "Entrepreneur",
                  name: "Mahendra Thakre",
                  designation: "Director - EnergyGreen TechnoPower Pvt. Ltd.",
                  branch: "ETC, 2005 Batch",
                },
                {
                  id: 20,
                  category: "Entrepreneur",
                  name: "Rahul Barchhiha",
                  designation: "Director & Founder - Pylons Technology",
                  branch: "ETC, 2006 Batch",
                },
                {
                  id: 21,
                  category: "Entrepreneur",
                  name: "Shailendra Singh",
                  designation: "Proprietor - Reckon Steels, Industrial Area",
                  branch: "MECH, 2006 Batch",
                },
                {
                  id: 22,
                  category: "Entrepreneur",
                  name: "Satya Prakash Tiwari",
                  designation: "Director - Arunabh Technotronics LLP",
                  branch: "ETC, 2007 Batch",
                },
                {
                  id: 23,
                  category: "Entrepreneur",
                  name: "Karan Tiwari",
                  designation:
                    "Director - Rama Gases, Rama Industries, Rama Bharat Gas, Somni, Rajnandgaon, M/s Varsha Enterprises",
                  branch: "MECH, 2008 Batch",
                },
                {
                  id: 24,
                  category: "Entrepreneur",
                  name: "Shreyas S. Kumar",
                  designation:
                    "Director - 4D Education Hub, Bhilai, Fools Den (School Wing)",
                  branch: "MECH, 2010 Batch",
                },
                {
                  id: 25,
                  category: "Entrepreneur",
                  name: "Aashish Bafna",
                  designation:
                    "Managing Director - Audittech Industrial Services Private Limited",
                  branch: "E&I, 2011 Batch",
                },
                {
                  id: 26,
                  category: "Entrepreneur",
                  name: "Shubham Jain",
                  designation: "Director - Siddhivinayak Associates",
                  branch: "ETC, 2012 Batch",
                },
                {
                  id: 27,
                  category: "Entrepreneur",
                  name: "Anurag Venkat",
                  designation: "Founder - Vinion Consultancy",
                  branch: "MECH, 2013 Batch",
                },
                {
                  id: 28,
                  category: "Entrepreneur",
                  name: "Rupesh Gautam",
                  designation: "Director - Uma Engineering",
                  branch: "MECH, 2013 Batch",
                },
                {
                  id: 29,
                  category: "Entrepreneur",
                  name: "Bhanu Pratap Bhaskar",
                  designation: "Founder & CEO - Trived Group of Industries",
                  branch: "CSE, 2015 Batch",
                },
                {
                  id: 30,
                  category: "Entrepreneur",
                  name: "Ankesh Harmukh",
                  designation: "Director - Tech36Garh",
                  branch: "EEE, 2017 Batch",
                },
                // International Presence
                {
                  id: 31,
                  category: "International Presence",
                  name: "Dr. Ing. Kaushal Nishad",
                  designation:
                    "Research Associate, Technische Universität Darmstadt, Germany",
                  branch: "MECH, 2003 Batch",
                },
                {
                  id: 32,
                  category: "International Presence",
                  name: "Manosh Chanda",
                  designation:
                    "Sr. Technical Project Manager, Infosys, Madison, US",
                  branch: "CSE, 2003 Batch",
                },
                {
                  id: 33,
                  category: "International Presence",
                  name: "Amit Mishra",
                  designation: "Vice President, MUFG, New York",
                  branch: "ETC, 2003 Batch",
                },
                {
                  id: 34,
                  category: "International Presence",
                  name: "Pradeep Sarkar",
                  designation: "Engineer, AIR BUS, Bristol, England",
                  branch: "MECH, 2003 Batch",
                },
                {
                  id: 35,
                  category: "International Presence",
                  name: "Adarsh Kumar Jha",
                  designation: "Cut Over Manager, TCS, Dusseldorf, Germany",
                  branch: "CSE, 2003 Batch",
                },
                {
                  id: 36,
                  category: "International Presence",
                  name: "Prabhat Thakur",
                  designation:
                    "Sr. Network Performance Engineer, VERIZON, California, US",
                  branch: "CSE, 2004 Batch",
                },
                {
                  id: 37,
                  category: "International Presence",
                  name: "Vijay Deashore",
                  designation:
                    "Automation Specialist, New York Stock Exchange, New York",
                  branch: "CSE, 2004 Batch",
                },
                {
                  id: 38,
                  category: "International Presence",
                  name: "Akhil Shukla",
                  designation: "Sr. Project Manager, EMIDS, New York",
                  branch: "ETC, 2004 Batch",
                },
                {
                  id: 39,
                  category: "International Presence",
                  name: "Amar Shirke",
                  designation: "Project Lead, WIPRO, Michigan, US",
                  branch: "CSE, 2004 Batch",
                },
                {
                  id: 40,
                  category: "International Presence",
                  name: "Tanu Agrawal",
                  designation:
                    "Project Definition Engineer, AMADEUS, London, UK",
                  branch: "CSE, 2004 Batch",
                },
                {
                  id: 41,
                  category: "International Presence",
                  name: "Nishit Kumar",
                  designation: "Technical Delivery Lead, HSBC, London, UK",
                  branch: "CSE, 2004 Batch",
                },
                {
                  id: 42,
                  category: "International Presence",
                  name: "Aditi Dadariya",
                  designation: "Senior Tester, Sainsbury's, London, UK",
                  branch: "CSE, 2004 Batch",
                },
                {
                  id: 43,
                  category: "International Presence",
                  name: "Santosh Singh",
                  designation: "Tech. Lead, Infosys, New York",
                  branch: "ETC, 2005 Batch",
                },
                {
                  id: 44,
                  category: "International Presence",
                  name: "Rishi Raj Dubey",
                  designation: "Project Lead, WIPRO, Missourie, US",
                  branch: "CSE, 2005 Batch",
                },
                {
                  id: 45,
                  category: "International Presence",
                  name: "Nishta Agrawal",
                  designation:
                    "Product Manager, Lam Research Company, California",
                  branch: "ETC, 2008 Batch",
                },
                // Additional entries
                {
                  id: 46,
                  category: "State & Central Government Services",
                  name: "Praveen Dhruwe",
                  designation: "Regional Transport Inspector, Jagdalpur",
                  branch: "MECH, 2015 Batch",
                },
                {
                  id: 47,
                  category: "State & Central Government Services",
                  name: "Roshan Ahuja",
                  designation: "Nayab Tahsildar, Bilaspur, Chhattisgarh",
                  branch: "EEE, 2016 Batch",
                },
              ].map((alumni, index) => {
                // Determine category color
                let categoryColor = "bg-gray-100 text-gray-800";
                if (alumni.category === "State & Central Government Services") {
                  categoryColor = "bg-indigo-50 text-indigo-700";
                } else if (alumni.category === "Entrepreneur") {
                  categoryColor = "bg-emerald-50 text-emerald-700";
                } else if (alumni.category === "International Presence") {
                  categoryColor = "bg-amber-50 text-amber-700";
                }

                return (
                  <tr
                    key={alumni.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <td className="px-4 py-3 border-b border-gray-200 text-gray-600">
                      {alumni.id}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${categoryColor}`}
                      >
                        {alumni.category ===
                        "State & Central Government Services"
                          ? "Government"
                          : alumni.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 font-medium text-[#0d173b]">
                      {alumni.name}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                      {alumni.designation}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                          {alumni.branch.split(",")[0]}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {alumni.branch.split(",")[1]}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
