import React from "react";

const Projects = () => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Header with gradient background */}
      <div className="h-44 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Student Projects
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Academic Research & Development
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="p-6 md:p-8 overflow-x-auto bg-gradient-to-b from-white to-gray-50">
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#0d173b00] text-white text-left text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">S.No</th>
                <th className="px-6 py-4 font-semibold">Student's Name</th>
                <th className="px-6 py-4 font-semibold">Supervisor</th>
                <th className="px-6 py-4 font-semibold">Project Title</th>
                <th className="px-6 py-4 font-semibold">Technology</th>
                <th className="px-6 py-4 font-semibold">Session</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {[
                [
                  "1",
                  "DANI RAM SAHU, HOSHANG KUMAR SAHU, SANKALP SHARMA",
                  "Mrs. Nidhi Sindhu",
                  "Movie Recommendation System",
                  "AI",
                  "2022-23",
                ],
                [
                  "2",
                  "KAVITA Sahu, HITESH Verma, AKASH AGRAWAL, VEENA SA",
                  "Ms. Tanushri Chandraker",
                  "Crico-Scorer",
                  "Android App",
                  "2022-23",
                ],
                [
                  "3",
                  "SHRIYA THAKUR, R TUSHAR",
                  "Mr. Deepak Yadav",
                  "Progress Report Generator using Data Analytics",
                  "Data Analytics",
                  "2022-23",
                ],
                [
                  "4",
                  "ABDUL RAHMAN, KEHKASA ANJUM, HARSH KUMAR DESHMUKH",
                  "Mr. Deepak Sharma",
                  "Blogging Web with AI Powered Image Generator",
                  "AI",
                  "2022-23",
                ],
                [
                  "5",
                  "GAGAN SHUKTEL, ABHISHEK RAI, AYUSH YADAV, D KRISHA",
                  "Mr. Prabhas Gupta",
                  "CSGI Discorso (Educational based Q&A App",
                  "IOT",
                  "2022-23",
                ],
                [
                  "6",
                  "Sannidhi Pushpay",
                  "Mr. Pradeep Agrawal, Mr. Jayant Rajpurohit",
                  "Re-engineering applications to analyze the length or distance of an object using image processing by python",
                  "Artificial Intelligence",
                  "2022-23",
                ],
                [
                  "7",
                  "Dristy Pal, Eshita Godsore",
                  "Mr. Leman Dewangan",
                  "Sound detection system through alert vibrations",
                  "Automation",
                  "2022-23",
                ],
                [
                  "8",
                  "Dalliychand, Dupesh Kumar Dewangan, Rahul Kumar, Y",
                  "Mr. Revendra Deshmukh",
                  "Anti Sleep Alarm for Driver",
                  "Design and Automation",
                  "2022-23",
                ],
                [
                  "9",
                  "Pranjal Pandey, Pranesh Kumar Sahu, L Deepak Nar",
                  "Mr Abhishek Gupta",
                  "Electric Power Generation from Industrial Waste",
                  "Design and Automation",
                  "2022-23",
                ],
                [
                  "10",
                  "Kaushal Dewangan, Kunal Dewangan, Utkarsh Deshmukh",
                  "Mr Rajnikant Patel",
                  "Dual Axis Solar Tracker",
                  "Design and Automation",
                  "2022-23",
                ],
                [
                  "11",
                  "P.Yamini",
                  "Mr. A.V .Bakshi",
                  "Solar power multilevel inverter with AC output",
                  "Fabrication and Analysis",
                  "2022-23",
                ],
                [
                  "12",
                  "Dharmendra kumar, Jai deshmukh, Shubham singh",
                  "Mr. V.Hemant",
                  "IOT and aurdino based voltage sensor less battery management system Based",
                  "Fabrication and Analysis",
                  "2022-23",
                ],
                [
                  "13",
                  "Chandrika, Maitree , Deepika",
                  "Dr. Padmini sharma",
                  "Automatic street light glow on detecting vehicle movement using aruindo and solar",
                  "Fabrication and Analysis",
                  "2022-23",
                ],
                [
                  "14",
                  "Ajeet Verma, Maneesh kewat, Sagar Jaiswal, Vinay K",
                  "Mr. A. Jafri",
                  "Solar and IOT based cattle feeder",
                  "Fabrication and Analysis",
                  "2022-23",
                ],
                [
                  "15",
                  "Khilendra verma,Avinash Markam,Shweta Dongre",
                  "Mr. Praveen Mahapatra",
                  "Utilization of Fly ash and Cowdung ash as partial replacement of cement concrete",
                  "Concrete Technology",
                  "2022-2023",
                ],
                [
                  "16",
                  "Rishabh Manikpuri,Saurabh Balekar,Rishabh Deshmukh",
                  "Mr. Shubham Chandrakar",
                  "Brick Manufacturing from Water Treatment Sludge and Rice Husk Ash",
                  "Building Materials",
                  "2022-2023",
                ],
                [
                  "17",
                  "Jafar Khan, Bhisham Ratre, Md.Hasnain, Mayank Soni",
                  "Ms. Divya Tamrakar",
                  "Wind load Analysis of a High rise building using STAAD PRO",
                  "Structural Engineering",
                  "2022-2023",
                ],
                [
                  "18",
                  "Dharmendra Chandrakar, Yeshpal Gangeshwar,Yugal Ki",
                  "Mr. Anmol bhardwaj",
                  "Design of semi- flexible pavement for heavy traffic load",
                  "Transportation Engineering",
                  "2022-2023",
                ],
                [
                  "19",
                  "Atul Yadav",
                  "Nidhi Sindhu",
                  "Attendance Management System",
                  "",
                  "2020-21",
                ],
                [
                  "20",
                  "DeevishSonkar",
                  "Mr. Kranti Kumar Jain",
                  "HYBRID ENCRYPTION",
                  "",
                  "2020 – 2021",
                ],
                [
                  "21",
                  "Vipul kumarJaltare Shayma Qureshi",
                  "Mr. V Bargate",
                  "Implementation of sign language by using machine learning",
                  "Simulation and Modeling",
                  "2019-20",
                ],
                [
                  "22",
                  "Aditya Prakash Sahu Piyush Thakur Saurabh Kumar Sa",
                  "Mr. Vivek Bargate",
                  "Fabrication and Design of e bicycle",
                  "Fabrication and Analysis",
                  "2020-21",
                ],
                [
                  "23",
                  "GopikaSahu Riteshkumar Sunita Baghel Abhishek kash",
                  "Mr. Nirmal Pandey",
                  "Design and implementation of wireless charger",
                  "Fabrication and Analysis",
                  "2020-21",
                ],
                [
                  "24",
                  "ChitralekhaSahu TriptiSahu Yamini Sahu",
                  "Mr. A. Jafri",
                  "Load shedding time management",
                  "Fabrication and Analysis",
                  "2020-21",
                ],
                [
                  "25",
                  "Abhishek Kumar Ajay Kumar Sahu Bhupendar Kumar Yas",
                  "Dr. Santosh Kr. Sharma",
                  "Design and fabrication of gyroscopic self-balanced two-wheeler.",
                  "Fabricated Model",
                  "2019-20",
                ],
                [
                  "26",
                  "Achinto Kumar Banerjee Narendra Kumar Rahul Dewang",
                  "Mr. Revendra Deshmukh",
                  "Design & Calculation 0f Automatic Braking System Using Ultrasonic Sensor",
                  "Analysis",
                  "2020-21",
                ],
                [
                  "27",
                  "Ashish Kujur Avinash Bharti Bhanupratap Hankara Sa",
                  "Dr. Abhijeet Ganguly",
                  "Hybrid Solar Dryer",
                  "Fabricated Model",
                  "2020-21",
                ],
                [
                  "28",
                  "Abhishek Purabiya Swaraj Agrawal Tushar Kuldeep",
                  "Mr. Sourabh Soni",
                  "Performance Evaluation of IC Engine with Biodiesel",
                  "Analysis",
                  "2020-21",
                ],
                [
                  "29",
                  "Onkar Prashad, Rahul Sahu, Saket Kumar, Sanjay Kum",
                  "Er. Pradeep Agrawal",
                  "Design and Fabrication of 3D Printer",
                  "Fabricated Model",
                  "2018-19",
                ],
                [
                  "30",
                  "Nishant Yadav, Nohar Kumar, Omprakash Gupta, Rohit",
                  "Dr. Rajesh Kumar",
                  "Design and fabrication of multipurpose wall climbing robot",
                  "Fabricated Model",
                  "2018-2019",
                ],
                [
                  "31",
                  "Priyam Kumar, AkashBehra, Aadrash Pandey, AashishC",
                  "Er. Kawal Lal Kurrey",
                  "Design and fabrication of automatic road cleaning vehicle",
                  "Automation",
                  "2019-20",
                ],
                [
                  "32",
                  "AshishKushawaha, SaurabhSahu, MoneshChurendra, D.N",
                  "Er. Pradeep Kumar Agrawal",
                  "Facial expression detection using raspberry pi",
                  "Automation",
                  "2019-20",
                ],
                [
                  "33",
                  "Harish Mishra, Aditya Sahu, Jitesh Kumar, Satish K",
                  "Dr. Rajesh Kumar",
                  "Object sorting machine based on iot",
                  "Automation",
                  "2019-20",
                ],
                [
                  "34",
                  "Rima Banchhor",
                  "Mr. Leelkanth Dewangan",
                  "IOT Based Smart Interactive System for Disable Persons",
                  "IOT",
                  "2018-2019",
                ],
                [
                  "35",
                  "Prince Gupta, Rishabh Dewangan, Somesh Nayak, Sand",
                  "Mr. Bhaskar Pandey, Mr. Shubham Chandrakar",
                  "Before & After Impact of Lockdown Amid Covid-19 on Water Pollution",
                  "Environmental Engineering",
                  "2020 – 2021",
                ],
                [
                  "36",
                  "Prachi Badge, Rupali Thakur, Sakshi Hirdani, Saksh",
                  "Prof. G.S. Vij",
                  "Solid Waste Management in Durg Region",
                  "Environmental Engineering",
                  "2020 – 2021",
                ],
                [
                  "37",
                  "Aman Sahu, Garima Janghel, Kewalraj Poudel, Kunika",
                  "Ms. Anuradha",
                  "High Performance Hybrid Green Composite Material",
                  "Building Construction",
                  "2021 – 2022",
                ],
                [
                  "38",
                  "Tamradhwaj Sirmaur, Rishabh Kesharwani, Abhishek",
                  "Mr. Anmol Bhardwaj",
                  "Use Of Plastic In The Construction of Bituminous Pavement",
                  "Transportation Engg.",
                  "2021 – 2022",
                ],
                [
                  "39",
                  "Megha Markam, Annu Kashyap, Simran Bhardiya, V Suh",
                  "Mr. Shubham Chandrakar",
                  "Water Quality Analysis and Treatment of Water of Various Lacalties of Durg",
                  "Environmental Engg.",
                  "2021 – 2022",
                ],
                [
                  "40",
                  "Jayprakash, Jayesh Pawar, Mohit Kumar, Mohit Kumar",
                  "Mr. Ritesh Kamble",
                  "Use of Rice Husk Ash as Partial Replacement For Cement Concrete",
                  "Concrete Technology",
                  "2021 – 2022",
                ],
                [
                  "41",
                  "Khushboo, Roshani Sahu, Sanjay Singh Rajput, Avina",
                  "Prof. Gs Vij",
                  "Solid Waste Collection Disposal Upgradation Techniques Adopted By Durg Municipal Corporation During The Period 2018-21",
                  "Environmental Engg.",
                  "2021 – 2022",
                ],
              ].map(([no, name, supervisor, title, tech, session], idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 font-medium text-[#0d173b] border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-[#0d173b] bg-opacity-10 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-[#0d173b]">
                          {no}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">{name}</td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {supervisor}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {title}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">{tech}</td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {session}
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

export default Projects;
