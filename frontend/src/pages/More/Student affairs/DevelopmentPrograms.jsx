import React from "react";

const DevelopmentPrograms = () => {
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
              Development Programs
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Seminars and training sessions to enhance student knowledge and skills
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
                  S.No
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold">
                  Date
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold">
                  Category
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold">
                  Sem/Branch
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold">
                  Resource
                </th>
                <th className="px-4 py-3 text-left bg-[#0d173b] text-white font-semibold rounded-tr-md">
                  Topic
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 1,
                  date: "2023-10-18",
                  category: "Seminar",
                  branch: "IT/CS/AI-DS",
                  resource: "Mr.Sreejit Panicker",
                  topic: "Future Prospects of a Career in Data Engineering",
                },
                {
                  id: 2,
                  date: "2022-03-25",
                  category: "Webinar",
                  branch: "All Students of Mech/Mex",
                  resource:
                    "Dr. Gaurav Gupta, Associate Professor , VIT Vellore",
                  topic:
                    "Polymers, Polymer Composites and Plasma Spray Coating",
                },
                {
                  id: 3,
                  date: "2022-12-03",
                  category: "Workshop",
                  branch: "CSE, IT & Others",
                  resource:
                    "Mr. Mahendra Datta, Ardent Computech Pvt. Ltd., Kolkata.",
                  topic:
                    "Artificial Intelligence Basic - Basics of NumPy and Pandas. Also covers Classification of AI Model and ML Techniques.",
                },
                {
                  id: 4,
                  date: "2022-11-26",
                  category: "Workshop",
                  branch: "CSE, IT & Others",
                  resource:
                    "Mr. Mahendra Datta, Ardent Computech Pvt. Ltd., Kolkata.",
                  topic:
                    "Android Basic - Overview of Android platform, the Android development environment, and the basics of Android app.",
                },
                {
                  id: 5,
                  date: "2022-10-17",
                  category: "Simulation",
                  branch: "7th/EEE",
                  resource: "Dr. Padmini sharma",
                  topic: "power system protection",
                },
                {
                  id: 6,
                  date: "2023-05-08",
                  category: "Software Training",
                  branch: "8th/Mechanical",
                  resource: "Mr. Abhishek Gupta & Mr. Revendra Deshmukh",
                  topic: "AutoCad 2D & 3D",
                },
                {
                  id: 7,
                  date: "2022-12-15",
                  category: "Software Training",
                  branch: "7th/Mechanical",
                  resource: "Mr. Abhishek Gupta & Mr. Rajnikant Patel",
                  topic: "Ansys",
                },
                {
                  id: 8,
                  date: "2023-02-06",
                  category: "Software Training",
                  branch: "8th Sem Civil Engg.",
                  resource: "Mr. Praveen Mahapatra",
                  topic: "Sketchup 3D",
                },
                {
                  id: 9,
                  date: "2022-04-08",
                  category: "Software Training",
                  branch: "3rd Sem Civil Engg",
                  resource: "Department of Civil Engg.",
                  topic: "Autocad 2D Workshop",
                },
                {
                  id: 10,
                  date: "2022-07-12",
                  category: "Software Training",
                  branch: "4th Sem Civil Engg.",
                  resource: "Department of Civil Engg.",
                  topic: "Autocad 2D Workshop",
                },
                {
                  id: 11,
                  date: "2021-03-08",
                  category: "Software Training",
                  branch: "8th Sem",
                  resource: "Dept. of Civil Engg.",
                  topic: "Autocad 2D Workshop",
                },
                {
                  id: 12,
                  date: "2019-09-19",
                  category: "Webinar",
                  branch: "IT",
                  resource:
                    "Mr. Shouvik Sarkar, Technical Trainee, Ardent Computer Pvt., Kolkata",
                  topic: "Cloud Computing",
                },
                {
                  id: 13,
                  date: "2019-03-28",
                  category: "Workshop",
                  branch: "EEE",
                  resource:
                    "Dr. S. Ghosh, Associate Professor, NIT Raipur Dr. Baidyanath Bag, Assistant Professor, NIT Raipur",
                  topic: "Workshop on Recent Development in Smart Grid",
                },
                {
                  id: 14,
                  date: "2020-10-07",
                  category: "Expert Talk",
                  branch: "EEE",
                  resource: "Dr. Nishant Kumar",
                  topic:
                    "A stealth cyber-attack detection strategy for microgrid",
                },
                {
                  id: 15,
                  date: "2020-10-06",
                  category: "Expert Talk",
                  branch: "EEE",
                  resource: "Dr. S. Ghosh",
                  topic: "Data attacks in smart grid: modeling and simulation",
                },
                {
                  id: 16,
                  date: "2020-10-05",
                  category: "Expert Talk",
                  branch: "EEE",
                  resource: "Dr. S. S. Dash",
                  topic: "Smart Grid opportunities issues and challenges",
                },
                {
                  id: 17,
                  date: "2020-08-15",
                  category: "Webinar",
                  branch: "Mech. / Mex.",
                  resource: "Dr. Vivek Bindra",
                  topic: "How to Start A Start-up for Solopreneurs & Students",
                },
                {
                  id: 18,
                  date: "2020-08-15",
                  category: "Webinar",
                  branch: "Mech. / Mex.",
                  resource: "Dr. Vivek Bindra",
                  topic: "How to Start A Start-up for Solopreneurs & Students",
                },
                {
                  id: 19,
                  date: "2020-07-17",
                  category: "Webinar",
                  branch: "Mech",
                  resource: "Mr. Ram Pande",
                  topic: "Study & Work Abroad",
                },
                {
                  id: 20,
                  date: "2020-07-07",
                  category: "Virtual Guest Lecture",
                  branch: "Mech. / Mex.",
                  resource: "Mr. Ashish Gakrey",
                  topic: "Recruitment Climate - It & Technology Sector",
                },
                {
                  id: 21,
                  date: "2019-08-07",
                  category: "Guest Lecture",
                  branch: "CSE",
                  resource: "Mr.Amey Joshi",
                  topic: "Analysis & Algorithm Design",
                },
                {
                  id: 22,
                  date: "2019-07-24",
                  category: "Workshop",
                  branch: "CSE",
                  resource: "Dr. Suraj Sharma",
                  topic: "Data Based Management System",
                },
                {
                  id: 23,
                  date: "2019-02-04",
                  category: "Workshop",
                  branch: "4,6 / CSE",
                  resource: "Mr. Ashish Singh",
                  topic: "C Prog. & Data Structure",
                },
                {
                  id: 24,
                  date: "2020-02-20",
                  category: "Seminar",
                  branch: "6th, 8th / Civil Engg.",
                  resource:
                    "Mr. N Saloman Raju (Technical consultant) and Mr. Vikas Kumar (Marketing officer)",
                  topic:
                    "Seminar on Fighting with Unemployment and Future Scope By Ultratech Cement",
                },
                {
                  id: 25,
                  date: "2020-07-07",
                  category: "Virtual Guest Lecture",
                  branch: "5th, 7th / Civil Engg.",
                  resource: "Mr. Ashish Gakrey Founder – HR Shapers",
                  topic: "Recruitment Climate - It & Technology Sector",
                },
                {
                  id: 26,
                  date: "2020-07-10",
                  category: "Virtual Guest Lecture",
                  branch: "5th, 7th / Civil Engg.",
                  resource:
                    "Mr. Shubham Tripathi, Genpact Motivational & Career Coach",
                  topic: "Career Prospective for Engineering Students",
                },
                {
                  id: 27,
                  date: "2020-07-17",
                  category: "Webinar",
                  branch: "5th, 7th / Civil Engg.",
                  resource: "Mr. Ram Pande, Director Interedwise",
                  topic: "Study & Work Abroad",
                },
                {
                  id: 28,
                  date: "2020-07-24",
                  category: "Webinar",
                  branch: "3rd, 5th, 7th / Civil Engg.",
                  resource: "Mr. Anurag Venkat, Founder Master Class Infinity",
                  topic: "Today's Youth, Tomorrow's Leaders",
                },
                {
                  id: 29,
                  date: "2020-08-08",
                  category: "Webinar",
                  branch: "3rd, 5th, 7th / Civil Engg.",
                  resource:
                    "Er. Ashutosh Jha, Product Category Manager Michelin India",
                  topic: "The Skill to Prepare & Prosper",
                },
                {
                  id: 30,
                  date: "2020-08-15",
                  category: "Webinar",
                  branch: "5th, 7th / Civil Engg.",
                  resource: "Dr. Vivek Bindra Founder – CEO – BADABusiness.com",
                  topic: "How to Start A Start-up for Solopreneurs & Students",
                },
                {
                  id: 31,
                  date: "2020-08-29",
                  category: "Webinar",
                  branch: "3rd, 5th / Civil Engg.",
                  resource: "Mr. Sijo Thomas, German Gulf Enterprises Ltd.",
                  topic: "How to Prepare Yourself for the Big Day",
                },
                {
                  id: 32,
                  date: "2021-05-21",
                  category: "Online Webinar",
                  branch: "6th, 8th / Civil Engg.",
                  resource:
                    "Prof. Anil D. Sahasrabudhe Chairman, AICTE, New Delhi",
                  topic:
                    "Youth Undertaking Visit For Acquiring Knowledge (YUVAK) – A Study Tour of Atal Tunnel, Himachal Pradesh",
                },
                {
                  id: 33,
                  date: "2021-07-18",
                  category: "Webinar",
                  branch: "5th, 7th / Civil Engg.",
                  resource:
                    "Dr. A.P. Singh Director, Explore Engineering Consultants, Noida",
                  topic:
                    "Uses and Miss uses of (SPT) Standard Penetration Test",
                },
                {
                  id: 34,
                  date: "2021-07-26",
                  category: "Webinar",
                  branch: "5th, 7th / Civil Engg.",
                  resource:
                    "Dr. V. Bala Kumar Senior Consultant Simplex Infrastructure LTD",
                  topic:
                    "Importance of Insitu Testing for the Design of Deep Foundation",
                },
              ].map((program, index) => {
                // Determine category color
                let categoryColor = "bg-gray-100 text-gray-800";
                if (program.category === "Seminar") {
                  categoryColor = "bg-indigo-50 text-indigo-700";
                } else if (
                  program.category === "Webinar" ||
                  program.category === "Online Webinar"
                ) {
                  categoryColor = "bg-blue-50 text-blue-700";
                } else if (program.category === "Workshop") {
                  categoryColor = "bg-emerald-50 text-emerald-700";
                } else if (program.category === "Software Training") {
                  categoryColor = "bg-purple-50 text-purple-700";
                } else if (
                  program.category === "Expert Talk" ||
                  program.category === "Guest Lecture" ||
                  program.category === "Virtual Guest Lecture"
                ) {
                  categoryColor = "bg-amber-50 text-amber-700";
                } else if (program.category === "Simulation") {
                  categoryColor = "bg-rose-50 text-rose-700";
                }

                // Format date to be more readable
                const formatDate = (dateStr) => {
                  const date = new Date(dateStr);
                  return date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  });
                };

                return (
                  <tr
                    key={program.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-colors duration-200`}
                  >
                    <td className="px-4 py-3 border-b border-gray-200 text-gray-600">
                      {program.id}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 whitespace-nowrap text-gray-700">
                      {formatDate(program.date)}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${categoryColor}`}
                      >
                        {program.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                      {program.branch}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 font-medium text-[#0d173b]">
                      {program.resource}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-200 text-gray-700">
                      {program.topic}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-sm text-gray-500 italic">
          * Programs are continuously organized to enhance student knowledge and
          exposure to industry trends.
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPrograms;
