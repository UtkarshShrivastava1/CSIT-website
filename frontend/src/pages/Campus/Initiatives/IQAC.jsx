import React from 'react';
import { FileText } from 'lucide-react';
// IQAC composition
const iqac2018_19 = 'https://drive.google.com/file/d/1F4GWD3Xt8LJapFvkLUGUhMfbMYU-oTXZ/view?usp=sharing';
const iqac2019_20 = 'https://drive.google.com/file/d/1oWqRBvWusgVpliI35WW9MsAUIi91T8yq/view?usp=sharing'; 
const iqac2020_21 = 'https://drive.google.com/file/d/1wEiaOF-YNiFNTxsWPTqdobNfZDwSj05M/view?usp=sharing'; 
const iqac2021_22 = 'https://drive.google.com/file/d/1LpGlxiMF_66T47KUdN1a3WYboKgubIE8/view?usp=sharing'; 
const iqac2022_23 = 'https://drive.google.com/file/d/1CLth1Ueeh_oGk9zdGwhleLJzRD3bxRtI/view?usp=sharing'; 
const iqac2023_24 = 'https://drive.google.com/file/d/1FnALJtFEk6eEkoRG7OGNufwW6aXvnsNe/view?usp=sharing'; 
const iqac2024_25 = 'https://drive.google.com/file/d/10aLSKSmo45kHi0sZVjH_ZljY8H5gZfRb/view?usp=sharing';


// IQAC MOM
const iqacMom2018_19 = 'https://drive.google.com/file/d/1IhxBvNJQowQasy480LMIm59azHMPgNjc/view?usp=sharing'; 
const iqacMom2019_20 = 'https://drive.google.com/file/d/16gvkmen7P7MM7k3fsnZfMUY09ipqBUNi/view?usp=sharing'; 
const iqacMom2020_21 = 'https://drive.google.com/file/d/1ZzP2GqD4-ikHWWZEgUY5IuBxLSEiflke/view?usp=sharing'; 
const iqacMom2021_22 = 'https://drive.google.com/file/d/1QAp_nyYZV-B-onz6CQde_sad1prfV98o/view?usp=sharing'; 
const iqacMom2022_23 = 'https://drive.google.com/file/d/1dlFcvL0XmDPKDytpOM9RXHQg0ahPKPdp/view?usp=sharing'; 
const iqacMom2023_24 = 'https://drive.google.com/file/d/1attXI47EEj2mlQfiQI1n7D9qAikQayqM/view?usp=sharing';

const IQAC = () => {
  // Data for the composition and minutes of meeting table with actual PDF links
  const iqacData = [
    { 
      year: '2018-2019', 
      composition: { text: 'View', link: iqac2018_19 }, 
      mom: { text: 'View', link: iqacMom2018_19 } 
    },
    { 
      year: '2019-2020', 
      composition: { text: 'View', link: iqac2019_20 }, 
      mom: { text: 'View', link: iqacMom2019_20 } 
    },
    { 
      year: '2020-2021', 
      composition: { text: 'View', link: iqac2020_21 }, 
      mom: { text: 'View', link: iqacMom2020_21 } 
    },
    { 
      year: '2021-2022', 
      composition: { text: 'View', link: iqac2021_22 }, 
      mom: { text: 'View', link: iqacMom2021_22 } 
    },
    { 
      year: '2022-2023', 
      composition: { text: 'View', link: iqac2022_23 }, 
      mom: { text: 'View', link: iqacMom2022_23 } 
    },
    { 
      year: '2023-2024', 
      composition: { text: 'View', link: iqac2023_24 }, 
      mom: { text: 'View', link: iqacMom2023_24 } 
    },
    { 
      year: '2024-2025', 
      composition: { text: 'View', link: iqac2024_25 }, 
      mom: { text: 'Not Available', link: null } 
    },
  ];

  // Objectives data
  const objectives = [
    "To create a student - centric learning atmosphere.",
    "To work for Academic Excellence at the CSIT.",
    "To promote research activities at the CSIT.",
    "To promote Interdisciplinary research.",
    "To attain internal quality assurance system for academic and administrative purposes.",
    "To develop stronger Industry - Academia relation to benefit the staff and students of CSIT.",
    "To enhance the Teaching-Learning quality and skills of staff and students by organizing programmes.",
    "To develop a system for conscious, consistent & catalytic improvement in the overall academic and administrative performance of institution."
  ];

  // Quality Assurance Strategies
  const qaStrategies = [
    "To create a consistent and dynamic quality improvement system.",
    "To encourage innovative methods for enhancing teaching-learning processes.",
    "To provide a learner-centered environment laced with the latest techniques for education, research, and skills."
  ];

  // Quality Assurance Processes
  const qaProcesses = [
    "At the beginning of every year an academic calendar is prepared and shared with all the stake holders.",
    "Orientation programmes are organized every year for the fresher's.",
    "Academic and Administrative audits are conducted by the IQAC.",
    "Organize and present Feedback analysis for further improvements.",
    "Organizing coaching classes for competitive exams and Skill enhancement.",
    "Regular meeting of Internal Quality Assurance Cell (IQAC); quality improvement initiatives identified and implemented.",
    "Academic and Administrative Audit (AAA) and follow-up action taken.",
    "Collaborative quality initiatives with other institutions.",
    "Participation in NIRF and other recognized rankings and other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA etc."
  ];

  // Functions data
  const functions = [
    "Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution.",
    "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.",
    "Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes.",
    "Dissemination of information on various quality parameters of higher education.",
    "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.",
    "Documentation of the various programmes/activities leading to quality improvement.",
    "Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices.",
    "Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality.",
    "Development of Quality Culture in the institution.",
    "Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC."
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Internal Quality Assurance Cell</h1>
          <p className="text-sm md:text-base mt-1 text-blue-100">
            CSIT | IQAC
          </p>
          <p className="text-sm md:text-base text-blue-200 mt-2">
            Ensuring quality education through continuous monitoring and evaluation
          </p>
          <hr className="w-16 border-t-2 border-white mt-3 mb-0" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 md:p-6">
        {/* Introduction */}
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-3">Introduction</h3>
          <p className="text-gray-700 text-sm md:text-base">
            The CSIT has established an Internal Quality Assurance Cell (IQAC) for incessant monitoring of existing quality initiatives and implementation of innovative pedagogical measures which can create a stimulating learning environment. The IQAC Comprises of a strong team containing representatives from each group of stakeholder- Management, Parents, Industrialists, Administration, Teaching fraternity, Alumni and students. The team is revised every year to incorporate innovative ideas. Presently the IQAC is lead by <strong>Prof (Dr.) Chandra Shekhar Sharma</strong>.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Our Vision</h4>
            <p className="text-sm text-blue-100">
              To facilitate an ever stimulating academic environment that shall enhance quality in teaching, learning and research
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#1e305f] to-[#0d173b] text-white p-5 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Our Mission</h4>
            <p className="text-sm text-blue-100">
              To lay thrust on the quality measures in teaching, learning, collaboration and research by providing facilities and organizing periodic assessments and audits that can contribute in the overall development of the students in particular and the CSIT on the whole.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Objectives</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-[#0d173b] bg-opacity-10 text-[#0d173b] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-sm">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quality Assurance Strategies */}
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Quality Assurance Strategies</h3>
          <ul className="space-y-3">
            {qaStrategies.map((strategy, index) => (
              <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span className="text-[#0d173b] text-lg mr-3">✦</span>
                <span className="text-sm text-gray-700">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quality Assurance Processes */}
        <div className="bg-gray-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Quality Assurance Processes</h3>
          <ul className="space-y-2">
            {qaProcesses.map((process, index) => (
              <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span className="text-[#0d173b] text-lg mr-3">•</span>
                <span className="text-sm text-gray-700">{process}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Functions */}
        <div className="bg-blue-50 p-5 md:p-6 rounded-lg shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Functions</h3>
          <ul className="space-y-2">
            {functions.map((func, index) => (
              <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <span className="text-[#0d173b] text-lg mr-3">✦</span>
                <span className="text-sm text-gray-700">{func}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IQAC Composition and Minutes of Meeting Section */}
        <div>
          <h3 className="text-lg font-semibold text-[#0d173b] mb-4">Composition</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-[#0d173b] text-white">
                  <th className="py-3 px-4 text-left text-sm font-medium">Year</th>
                  <th className="py-3 px-4 text-center text-sm font-medium">Composition</th>
                  <th className="py-3 px-4 text-center text-sm font-medium">Minutes of Meeting</th>
                </tr>
              </thead>
              <tbody>
                {iqacData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-t border-gray-200 font-medium text-sm">{item.year}</td>
                    <td className="py-3 px-4 border-t border-gray-200 text-center">
                      <a 
                        href={item.composition.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300 text-sm"
                      >
                        <FileText className="mr-1 h-4 w-4" />
                        {item.composition.text}
                      </a>
                    </td>
                    <td className="py-3 px-4 border-t border-gray-200 text-center">
                      {item.mom.link ? (
                        <a 
                          href={item.mom.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300 text-sm"
                        >
                          <FileText className="mr-1 h-4 w-4" />
                          {item.mom.text}
                        </a>
                      ) : (
                        <span className="text-gray-400 text-sm">{item.mom.text}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IQAC;