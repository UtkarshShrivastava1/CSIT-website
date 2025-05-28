import React from "react";

const ConferenceWorkshop = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Header */}
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
              Conference/Workshop
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Faculty participation records
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-6 md:p-8 overflow-x-auto bg-gradient-to-b from-white to-gray-50">
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#0d173b] text-white text-left text-sm uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">S.No</th>
                <th className="px-6 py-4 font-semibold">Faculty Name</th>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Conference Details</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {[
                {
                  sno: "1",
                  name: "Mr. Prabhas Kumar Gupta",
                  title: "Smart irrigation system using internet of thing",
                  details:
                    "National conference on recent innovation in blockchain technology and cyber security 04 March 2023. G H Raisoni Institute of Engineering and Business Management Jalgaon",
                },
                {
                  sno: "2",
                  name: "Mr. Prabhas Kumar Gupta",
                  title:
                    "Undercovering of online review using text classification of machine learning",
                  details:
                    "National conference on recent innovation in blockchain technology and cyber security 04 March 2023. G H Raisoni Institute of Engineering and Business Management Jalgaon",
                },
                {
                  sno: "3",
                  name: "Mr. Richa Sahu",
                  title:
                    "A review on leaf disease detection using image processing and machine learning",
                  details:
                    "National conference on recent innovation in blockchain technology and cyber security 04 March 2023. G H Raisoni Institute of Engineering and Business Management Jalgaon",
                },
                {
                  sno: "4",
                  name: "Mr. Prabhas Kumar Gupta",
                  title:
                    "A review on leaf disease detection using image processing and machine learning",
                  details:
                    "National conference on recent innovation in blockchain technology and cyber security 04 March 2023.G H Raisoni Institute of engineering and business management Jalgaon",
                },
                {
                  sno: "5",
                  name: "Mr. Pradeep Agrawal",
                  title: "An introduction to automation studio 7.1",
                  details:
                    "Workshop organized by Famic Technology a solution to hydraulic and pneumatic technology",
                },
                {
                  sno: "6",
                  name: "Mr. Rajnikant Patel",
                  title:
                    "Impact of Digital Twins, Modelling, and Predictive Simulation on Business Process Analysis",
                  details:
                    "A webinar organized by Nivid Informatics Private Limited",
                },
                {
                  sno: "7",
                  name: "Mr. Ashraf Jafri",
                  title:
                    "Recent Advancements in Machine Learning and Artificial Intelligence",
                  details:
                    "AICTE-CSVTU MoU One Week Joint Teachers Training Program (TTP-2021)",
                },
                {
                  sno: "8",
                  name: "Dr. Padmini Sharma",
                  title: "Industry 4.0 and Sustainability",
                  details:
                    "Technical Webinar organized by The Institution of Engineers, Bhilai Local Center, CHHATTISGARH, INDIA",
                },
                {
                  sno: "9",
                  name: "Dr. Padmini Sharma",
                  title:
                    "Intelligence and Machine Learning using MATLAB for Renewable Energy Applications",
                  details: "Faculty Development Programme, UPES, Dehradun",
                },
                {
                  sno: "10",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title:
                    "Carbon Footprints Initiatives to Indoor Air Quality in India",
                  details:
                    "Paper Presented on Technologia – 12 –National Conference, March 2012, M.P.C.C.E.T., Bhilai.",
                },
                {
                  sno: "11",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title:
                    "Characterization of Carbonaceous aerosols in particulate matter in different environment in India",
                  details:
                    "Paper Presented on National Conference on Innovation and Advancement in Chemical Science & Technology, Feb. 2015, ST. Thomas College, Bhilai.",
                },
                {
                  sno: "12",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title:
                    "Exposure of PM2.5 related Carbonaceous Particulates in Residential areas of Durg region in India",
                  details:
                    "Poster Presented on UGC – SAP (DRS – II) National Conference on Advances in Environmental & Chemical Science, March 17, SOS in Chemistry, Pt. RSU, Raipur.",
                },
                {
                  sno: "13",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title:
                    "Study of Carbonaceous particulates in PM2.5 fractions along road side in Durg regionof India",
                  details:
                    "Poster Presented on 22nd CRSI National Symposium in Chemistry, Feb. 2018, Pt. RSU, Raipur",
                },
                {
                  sno: "14",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title: "Recent Trends in Analytical Techniques",
                  details:
                    "National Workshop organized by DDU College, New Delhi in Feb. 2007",
                },
                {
                  sno: "15",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title: "Need of Value Education in Engineering",
                  details:
                    "National Conference organized by SRI-Tech. Raipur in Feb.2009",
                },
                {
                  sno: "16",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title: "New Trends & Techniques in Environmental Protection",
                  details:
                    "National Workshop organized by R.C.E.T., Bhilai in Dec.2009.",
                },
                {
                  sno: "17",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title: "Recent Trends in Chemical Research: Challenges Ahead",
                  details:
                    "National Seminar organized by GGU, Bilaspur in March 2012",
                },
                {
                  sno: "18",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title:
                    "Novel Approaches to Air Quality Management and Improvement in India",
                  details:
                    "International Symposium organized by Pt. R.S.U, Raipur in Association with Desert Research Institute, U.S.A. Sept .2011.",
                },
                {
                  sno: "19",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title:
                    "Innovative Techniques Towards Environmental Protection",
                  details:
                    "National Conference organized by RCET, Bhilai in March 2014",
                },
                {
                  sno: "20",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title:
                    "Acquaintance of Protocols and Handling Techniques of Advanced Spectroscopic Analysis",
                  details:
                    "National Workshop organized by SOS in Chemistry, Pt. RSU, Raipur in Dec. 2014",
                },
                {
                  sno: "21",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title: "7th National Research Methodology Workshop",
                  details:
                    "National Workshop organized by Prestige Institute of Management, Gwalior in Aug. 2015",
                },
                {
                  sno: "22",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title: "Scientific Paper Writing",
                  details:
                    "National Workshop organized by BIT Durg in Oct 2016",
                },
                {
                  sno: "23",
                  name: "Dr. Shailendra Kumar Kushawaha",
                  title: "Introduction Training Program for Mentors",
                  details:
                    "National Workshop organized by CSVTU, Bhilai under TEQIP-III in June 2019.",
                },
                {
                  sno: "24",
                  name: "Mr. V. Hemant kumar",
                  title: "Power Electronics and its Application using OPAL-RT",
                  details:
                    "International Five Days Online Workshop organized by OP Jindal University, Raigarh by Dept. of Electrical Engineering from 20th - 24th Feb., 2023.",
                },
                {
                  sno: "25",
                  name: "Mr. V. Hemant kumar",
                  title:
                    "A High Gain Z-Source Converter with Reduced Device Count for Distributed PV System",
                  details:
                    "PIICON'22 10th IEEE Power India International Conference Nov., 25 – 27, 2022 at NIT Delhi, India",
                },
                {
                  sno: "26",
                  name: "Mr. Kranti Kumar Jain",
                  title:
                    "Development and Application of Renewable Energy Source in Power System",
                  details: "AICTE-IETS Orientation/Refresher Program",
                },
                {
                  sno: "27",
                  name: "Mr. Deepak Kumar Yadav",
                  title:
                    "Development and Application of Renewable Energy Source in Power System",
                  details: "AICTE-IETS Orientation/Refresher Program",
                },
                {
                  sno: "28",
                  name: "Mrs. Saumya Priyadarshani",
                  title:
                    "Recent Advancements in Machine Learning and Artificial Intelligence",
                  details:
                    "AICTE-CSVTU MoU One Week Joint Teachers Training Program (TTP-2021)",
                },
                {
                  sno: "29",
                  name: "Ms. Tanushri Chandraker",
                  title:
                    "Recent Advancements in Machine Learning and Artificial Intelligence",
                  details:
                    "AICTE-CSVTU MoU One Week Joint Teachers Training Program (TTP-2021)",
                },
                {
                  sno: "30",
                  name: "Mrs. Nidhi Sindhu",
                  title:
                    "Recent Advancements in Machine Learning and Artificial Intelligence",
                  details:
                    "AICTE-CSVTU MoU One Week Joint Teachers Training Program (TTP-2021)",
                },
                {
                  sno: "31",
                  name: "Mr. Kranti Kumar Jain",
                  title:
                    "Recent Advancements in Machine Learning and Artificial Intelligence",
                  details:
                    "AICTE-CSVTU MoU One Week Joint Teachers Training Program (TTP-2021)",
                },
                {
                  sno: "32",
                  name: "Mr. Deepak Kumar Yadav",
                  title:
                    "Recent Advancements in Machine Learning and Artificial Intelligence",
                  details:
                    "AICTE-CSVTU MoU One Week Joint Teachers Training Program (TTP-2021)",
                },
                {
                  sno: "33",
                  name: "Er. Pradeep Kumar Agrawal",
                  title: "Virtual Lab",
                  details: "IIT, Bhilai",
                },
                {
                  sno: "34",
                  name: "Mr. Ashraf Jafri",
                  title:
                    "Fault detection and classification during power swing using S- transform and Support vector Machine",
                  details: "International Conference BIT, Raipur",
                },
                {
                  sno: "35",
                  name: "Dr. Padmini Sharma",
                  title:
                    "Discriminating Significant Attributes of PhotoplethysmogramSignal for Cuffless Blood Pressure Measurement",
                  details: "National Conference BIT, Durg",
                },
                {
                  sno: "36",
                  name: "Dr. Padmini Sharma",
                  title: "IOT Based Smart Vechical Parking System Using Rf id.",
                  details:
                    "International Conference, Coumibator SRI Shakti, Inst. of Engg and Techn.",
                },
                {
                  sno: "37",
                  name: "Dr. Abhijeet Ganguly",
                  title: "Virtual Labs",
                  details: "IIT-Bhilai",
                },
                {
                  sno: "38",
                  name: "Prof. G. S. Vij",
                  title: "Road traffic noise & its prevailing models",
                  details: "National conference, BIT, Durg, 15-16 March 2013",
                },
                {
                  sno: "39",
                  name: "Prof. G. S. Vij",
                  title:
                    "Assessment of traffic noise and Transferability Analysis of FHWA model for National Highway-43",
                  details: "International Conference, Raipur, 22-23 March 2017",
                },
              ].map((item, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="px-6 py-4 font-medium text-[#0d173b] border-b border-gray-100">
                    {item.sno}
                  </td>
                  <td className="px-6 py-4 font-medium text-[#0d173b] border-b border-gray-100 flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-[#1e305f]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.76 6.879 2.053M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {item.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {item.title}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {item.details}
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

export default ConferenceWorkshop;
