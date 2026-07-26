import React from "react";

const designPatents = [
  {
    sno: 1,
    title: "Machine Learning–Based Driver Drowsiness Detection Device",
    inventors:
      "Dr. Ravi Mishra, Mr. Reetesh Kumar Sharma, Dr. Padmini Sharma, Mrs. P.K. Bharti, Mr. Rohit Kumar Oberoy, Mr. Shirish Kumar Sahu, Ms. Nalesh Banjare, Ms. Purnima Dutta",
    designNo: "478999-001",
    registrationDate: "04/11/2025",
    issueDate: "01/04/2026",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 2,
    title: "River Water Flow Monitoring Device",
    inventors:
      "Mr. Ritesh Kumar Kamble, Mr. Shubham Chandrakar, Ms. Divya Tamrakar, Ms. Aastha Yadav, Mr. Rohit Kr. Oberoy, Mr. Vishal Tamrakar",
    designNo: "477634-001",
    registrationDate: "21/10/2025",
    issueDate: "28/01/2026",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 3,
    title: "Waste Sorting Smart Bin",
    inventors:
      "Mr. Kranti Kumar Jain, Mr. Jayant Rajpurohit, Ms. Nisha Gautam, Mr. Priyanshu Mahobiia, Mr. Himanshu Mandavi, Mr. Aditya Singh, Mr. Harsh Dewangan",
    designNo: "480663-001",
    registrationDate: "18/11/2025",
    issueDate: "15/01/2026",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 4,
    title: "Soil and Crop Monitoring Drone Device",
    inventors:
      "Mr. Jayant Rajpurohit, Dr. Santosh Kumar Sharma, Mr. Ritesh Sharma, Mr. Reetesh Sharma, Mr. Anmol Bhardwaj, Mr. Shubham Chandrakar",
    designNo: "474109-001",
    registrationDate: "19/09/2025",
    issueDate: "18/12/2025",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 5,
    title: "Non-Invasive Diabetes and Stress Monitoring Device",
    inventors: "Mr. Jayant Rajpurohit",
    designNo: "471255-001",
    registrationDate: "26/08/2025",
    issueDate: "17/12/2025",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 6,
    title: "Artificial Intelligence Based Secure Delivery Robot Device",
    inventors:
      "Mr. Jayant Rajpurohit, Dr. Santosh Kumar Sharma, Mr. Deepak Sharma, Mr. Pradeep Kumar Agrawal, Mr. Kranti Kumar Jain, Mr. Revendra Kumar Deshmukh",
    designNo: "4713590-001",
    registrationDate: "27/08/2025",
    issueDate: "11/12/2025",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 7,
    title: "Social Media Impact Analyzing Device for Students",
    inventors: "Mr. Jayant Rajpurohit",
    designNo: "469513-001",
    registrationDate: "12/08/2025",
    issueDate: "11/12/2025",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 8,
    title: "Cloud Based Water Usage Monitoring and Control Device",
    inventors: "Dr. Ravi Mishra, Mr. Kranti Kumar Jain",
    designNo: "456977-001",
    registrationDate: "28/04/2025",
    issueDate: "30/07/2025",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 9,
    title: "AI Based Quantum Computing Data Processing Device",
    inventors:
      "Dr. Ravi Mishra, Mr. Kranti Kumar Jain, Ms. Tanushri Chandrakar, Ms. Ayushi Pillay, Mr. Vishal Tamrakar, Mr. Shirish Kumar Sahu, Ms. Nalesh Banjare, Ms. Purnima Dutta",
    designNo: "6437309",
    registrationDate: "12/04/2025",
    issueDate: "22/04/2025",
    status: "Design Certification Awarded",
    authority: "The Patent Office, UK",
  },
  {
    sno: 10,
    title: "Smart Electric Wheelchair With Safety Controls",
    inventors:
      "Mr. Jayant Rajpurohit, Mr. Deepak Sharma, Mr. Suraj Harmukh, Mr. Ishwar Sahu",
    designNo: "443593-001",
    registrationDate: "09/01/2025",
    issueDate: "07/05/2025",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 11,
    title:
      "Flexible Boundary Condition Setup for Vibration of Rectangular Plates",
    inventors: "Mr. Sanjay Kumar Singh",
    designNo: "397540-001",
    registrationDate: "13/01/2023",
    issueDate: "04/01/2024",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 12,
    title:
      "Apparatus to Measure Variable Speed-Induced Strains in Rotating Structures",
    inventors: "Mr. Sanjay Kumar Singh",
    designNo: "362648-001",
    registrationDate: "31/03/2023",
    issueDate: "26/10/2023",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
  {
    sno: 13,
    title: "Stirrer for Casting of Composite Materials",
    inventors: "Mr. Sanjay Kumar Singh",
    designNo: "377279-001",
    registrationDate: "12/01/2023",
    issueDate: "15/03/2023",
    status: "Design Certification Awarded",
    authority: "The Patent Office, India",
  },
];

const IPR = () => {
 return (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    {/* Header */}
    <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] px-6 py-8">
      <h2 className="text-3xl font-bold text-white">
        Design Patents Registered
      </h2>
      <p className="text-gray-200 mt-2 text-sm">
        Intellectual Property Rights (IPR) - Design Patents
      </p>
    </div>

    <div className="p-6">
      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-[#0d173b] text-white">
              <th className="border px-4 py-3">S.No</th>
              <th className="border px-4 py-3 text-left">Title</th>
              <th className="border px-4 py-3 text-left">Inventors</th>
              <th className="border px-4 py-3">Design No.</th>
              <th className="border px-4 py-3">Registration Date</th>
              <th className="border px-4 py-3">Issue Date</th>
              <th className="border px-4 py-3">Status</th>
              <th className="border px-4 py-3">Issuing Authority</th>
            </tr>
          </thead>

          <tbody>
            {designPatents.map((item) => (
              <tr
                key={item.sno}
                className="hover:bg-gray-50 even:bg-gray-100"
              >
                <td className="border px-4 py-3 text-center">
                  {item.sno}
                </td>

                <td className="border px-4 py-3">
                  {item.title}
                </td>

                <td className="border px-4 py-3">
                  {item.inventors}
                </td>

                <td className="border px-4 py-3 text-center">
                  {item.designNo}
                </td>

                <td className="border px-4 py-3 text-center">
                  {item.registrationDate}
                </td>

                <td className="border px-4 py-3 text-center">
                  {item.issueDate}
                </td>

                <td className="border px-4 py-3 text-center">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.status}
                  </span>
                </td>

                <td className="border px-4 py-3">
                  {item.authority}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
};

export default IPR;
