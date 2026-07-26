import React from "react";

const ExtracurricularActivities = () => {
  // Updated activities data with new content from document
  const activitiesData = [
    {
      month: "January 2026",
      events: [
        "National Youth Day Celebrated on 12th January 2026 By National Service Scheme",
        "Guest Visit: Mr and Mrs Trilok Bansal [IPS] Superintendent of Police, STF] Visited our Institute on 13th January 2026 at 11 AM - Institute Management",
        "Mega Health Camp organized at CSIT Durg in association with Employees State Insurance Services Durg, the NSS and Wellness Club on 16th January 2026 at 11 AM.",
        "Basant Panchami Celebrated with great Fervour in CSGI Durg on 23rd January 2026 at 11 AM Tagore Central Library in presence of Faculties, Staff and Students.",
        "Republic Day Celebrated on 26th January 2026.",
        "Three Days Regional Mentoring Session on Innovation for Teachers and Students of PM SHRI Schools from 28th - 30th January 2026",
        "Ms Swati Sahu D Pharma 2nd Year Participated in Viksit Bharat Young Leader Dialogue 2026 at New Delhi to Represent CSIP in National Level.",
      ],
    },
    {
      month: "February 2026",
      events: [
        "Our Faculties from Engineering and Pharmacy give a talk on Mathematics, Physics and Artificial Intelligence at Govt Adarsh Girls School Balod by Department of Education [Balod District] on 5th February 2026 at 11 AM",
        "Health Awareness Talk on Gum Health for faculties and students By Dr Anurag Bakshi, Dentist on 12th February 2026 at 03.30 PM Onwards By Wellness Club",
        "IQAC Organised one day workshop on Teaching Methodologies and OBE for Faculties from Engineering and Pharmacy by Ms Aastha Yadav, Ms Divya Tamrakar and Dr Chandra Shekhar Sharma on 13th March 2026 at 3 PM",
        "NSS Camp organized at Achhoti Village from 13th to 19th February 2026 by Students and Faculties to awareness creation in villagers.",
        "Celebrated Maha Shivratri on 15th February 2026 with the sacred mantras and hymns at Shri Chandramaulaeshwar Temple at CSGI Campus.",
        "Celebrate Birth Anniversary of Maratha Warrior Chhatrapati Shivaji Maharaj on 19th February 2026 at 1 PM College Premises.",
        "Celebration of Holi Milan 'Rangostav' [Dance, Masti and Fun with Faculties, Staff and Students of Engineering & Pharmacy] on 23rd March 2026 at 10.30 AM Onwards - Cultural Club.",
      ],
    },
    {
      month: "March 2026",
      events: [
        "Mr Subham Chandrakar has been honored with the NPTEL STAR AWARD Ceremony at Bidhannagar Kolkata [WB] on 8th March 2026 by Prof Jagadish K Patnaik VC Nagaland University.",
        "Students and Faculties from PM SHRI SAGES Kondagaon, Baster visited CSGI Durg for an Educational Tour on 11th March 2026 at 1 PM",
        "International Women's Day Celebration, Chief Guest Mrs. Shivani Varshney Consultant Wadhwani Foundation & Entrepreneur: Blissful Space; Gardening & Beyond on 12th March 2026 from 02:00 PM Onwards By SWAR",
        "The students of CSIT participated in the Lokarpan a folk festival organised by the CSVTU Bhilai on 12th and 13th March 2026.",
        "Shaheed Diwas 23rd March 2026 By NSS",
      ],
    },
    {
      month: "April 2026",
      events: [
        "Sports Activities: Volleyball Tournament for Students of Engineering | Pharmacy on 1st - 3rd April 2026 at 2.30 PM Onwards - Sports Club.",
        "Sports Activities: Kho Kho Tournament for Students of Engineering | Pharmacy on 2nd - 3rd April 2026 at 2.30 PM Onwards - Sports Club.",
        "Sports Activities: Kabaddi Tournament for Students of Engineering | Pharmacy on 2nd - 3rd April 2026 at 2.30 PM Onwards - Sports Club.",
        "Sports Activities: Free Fire Tournament for Students of Engineering | Pharmacy on 2nd - 3rd April 2026 at 2.30 PM Onwards - Sports Club.",
        "One Days CSIT Innovex'26 A Technical Project Model Intra College Competition - Tech Manthan [Innovate Create Demonstrate] on 4th April 2026 at 11 AM Onwards - IIC & R&D Cell.",
        "One Days CSIT Innovex'26 A Technical Power Point Presentation Intra College Competition - Tech Vichar [Think Present Inspire] on 4th April 2026 at 11 AM Onwards - IIC & R&D Cell.",
        "Dept of AI&DS Organised a Three Days Workshop for Campus Placement Preparation for final year all branches on 4th to 8th April 2026 from 10 AM to 5 PM by Ashok Kumar Soni Sir",
        "Art Fun Fest Competition 'From Art Craft' to create some Model to display in Campus for Students of Engineering and Pharmacy By Arts Club, CSGI Durg on 6th - 7th April 2026.",
        "Sports Activities: CSGI Sports Carnival'26 CSGI Cricket Premier League - 7th to 10th April 2026 at 2.30 PM Onwards - Sports Club",
        "Guest Lecture Topic: Understanding Current Industry Trends and Marketing Strategies By Hardik Chavda, Lead Product Developer, BMC Software Pune on 8th April 2026 at 10:30 AM - Skill Development Cell with Alumni Cell",
        "Pulse 2026 DJ Night: Unleashing the rhythm for Staff and Students of Institute to explore the floor on 11th April 2026 at 6 PM - Cultural Club",
        "Award Ceremony Organised by College Management to Facilitated Best Students from Each Department of Final Year [Passing Out 2026 Batch] on 11th April 2026.",
        "Prize Distribution for CSGI Sports Carnival Events [Individual | Team] to Winner and Runner Up Teams on 11th April 2026.",
        "Dept of CSE Organised three day workshop on Flutter for the students of 1st to 2nd Year all branches by Students of 3rd Year CSE from 13th to 15th April 2026 from 10 AM to 5 PM",
        "Farewell Celebration: 3rd Year Students to 4th Year Students of Engineering on 17th April 2026 at 11 AM Onwards - Cultural Club",
        "Photography Contest: Celebration Through The Lens on 25th April 2026 - By Photography Club with Social Media Club.",
        "Slogan Contest: Why CSIT | CSIP on 25th April 2026 - By Photography Club with Social Media Club.",
      ],
    },
    {
      month: "May 2026",
      events: [
        "Webinar Under Alumni Talk Series on Java is Easy, Engineering is Hard Reimagine with AI for 2nd Year B Tech Students by Mr Rahul Singhai, Principal - Product Development, BMC Software Pune and Alumni ETC 2004 Batch on 6th May 2026 at 12.30 PM",
        "Off Campus Placement Drive for Company: Verbly AI for All Branches Students of B Tech Final Year 2026 on 11th May 2026 by Training and Placement Cell.",
        "Webinar Under Alumni Talk Series on The Future is Encrypted: Cryptography Meets Networking for B Tech Students by Mr Mrinal Madaria, System Engineer, TCS Pune and Alumni CSE 2024 Batch on 13th May 2026 at 2.00 PM",
        "International Students Conference on Next-Gen Computing: Application of AI, Big Data, Quantum Computing, Signal Processing and Cloud Innovation [ICNGC'26] Dated 15th - 16th May 2026 in association with ISTE New Delhi by CSE & EEE Department",
        "Organised Rojgar Mela in association with District Employment Exchange Durg on 22nd May 2026 by Training and Placement Cell",
      ],
    },
    {
      month: "June 2026",
      events: [
        "Nishkarsh Verma 3rd Year CSE Selected in Summer Internship 2026 from Indian Institute of Technology, Kharagpur Under the Mentorship of Prof Sudip Misra for 3 Months",
        "Celebrated World Environment Day on June 5th, 2026 where Plantation Drive Inside the Campus Organised by NSS Club",
        "Industrial Visit Organised for B Pharma Students at Sarda Dairy [Vachan Dairy] Kharora, Raipur on 11th June 2026.",
      ],
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
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
              Extracurricular Activities
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Academic Session January - June 2026
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          Extracurricular activities at CSIT play a vital role in the holistic development of students. From cultural events to sports competitions, these activities help students discover their talents, build confidence, and develop essential life skills.
        </p>

        {activitiesData.map((monthData, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-base font-semibold text-[#0d173b] mb-3 bg-gray-100 p-2 rounded-lg border-l-4 border-[#0d173b]">
              {monthData.month}
            </h3>
            <ul className="space-y-2">
              {monthData.events.map((event, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#0d173b] font-bold mt-0.5">•</span>
                  <span>{event}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularActivities;