import React from 'react';
import { FileText } from 'lucide-react';
// Import all IQAC composition PDF files
import iqac2018_19 from '../../assets/IQAC_composition/IQAC_2018-19_composition.pdf';
import iqac2019_20 from '../../assets/IQAC_composition/IQAC_2019-20_Composition.pdf';
import iqac2020_21 from '../../assets/IQAC_composition/IQAC_2020-21_Composition.pdf';
import iqac2021_22 from '../../assets/IQAC_composition/IQAC_2021-22_Composition.pdf';
import iqac2022_23 from '../../assets/IQAC_composition/IQAC_2022-23_Composition.pdf';
import iqac2023_24 from '../../assets/IQAC_composition/IQAC_2023-24_Composition.pdf';
import iqac2024_25 from '../../assets/IQAC_composition/IQAC_2024-25_Composition.pdf';

// Import all IQAC Minutes of Meeting PDF files
import iqacMom2018_19 from '../../assets/IQAC_mom/IQAC 2018-19 Meeting 1, 2 ,3.pdf';
import iqacMom2019_20 from '../../assets/IQAC_mom/IQAC 2019-20 Minutes 1 2 3 4.pdf';
import iqacMom2020_21 from '../../assets/IQAC_mom/IQAC 2020-21 Meeting 1 2 3.pdf';
import iqacMom2021_22 from '../../assets/IQAC_mom/IQAC 2021-22 Meeting 1 ,2.pdf';
import iqacMom2022_23 from '../../assets/IQAC_mom/IQAC 2022-23 Meeting 1 ,2 ,3.pdf';
import iqacMom2023_24 from '../../assets/IQAC_mom/IQAC 2023-24 Meeting 1, 2, 3.pdf';


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

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Internal Quality Assurance Cell</h1>
          <p className="text-base text-gray-200 mt-2">
            Ensuring quality education through continuous monitoring and evaluation
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              In pursuance of its Action Plan for performance evaluation, assessment & accreditation & quality up-gradation of institutions of higher education, NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of the institution's system & work towards realization of the goals of quality enhancement & sustenance.
            </p>
          </div>

          {/* Objectives Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Objectives</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To develop a system for conscious, consistent & catalytic improvement in the overall academic and administrative performance of institution.</li>
              <li>Making efforts towards promoting student – centric atmosphere for holistic academic excellence.</li>
              <li>To enhance the quality of staff by promoting and encouraging overall faculty development.</li>
            </ul>
          </div>

          {/* Functions Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Functions of the IQAC</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution.</li>
              <li>Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.</li>
              <li>Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes.</li>
              <li>Dissemination of information on various quality parameters of higher education.</li>
              <li>Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.</li>
              <li>Documentation of the various programmes/activities leading to quality improvement.</li>
              <li>Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices.</li>
              <li>Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality.</li>
              <li>Development of Quality Culture in the institution.</li>
              <li>Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC.</li>
            </ul>
          </div>

          {/* IQAC Composition and Minutes of Meeting Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#0d173b] mb-4">IQAC Composition and Minutes of Meeting</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-[#0d173b] text-white">
                    <th className="py-3 px-4 text-left">Year</th>
                    <th className="py-3 px-4 text-center">Composition</th>
                    <th className="py-3 px-4 text-center">Minutes of Meeting</th>
                  </tr>
                </thead>
                <tbody>
                  {iqacData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 border-t border-gray-200 font-medium">{item.year}</td>
                      <td className="py-3 px-4 border-t border-gray-200 text-center">
                        <a 
                          href={item.composition.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
                        >
                          <FileText className="mr-1 h-4 w-4" />
                          {item.composition.text}
                        </a>
                      </td>
                      <td className="py-3 px-4 border-t border-gray-200 text-center">
                        <a 
                          href={item.mom.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-[#0d173b] text-white rounded-md hover:bg-[#1a2b5f] transition-colors duration-300"
                        >
                          <FileText className="mr-1 h-4 w-4" />
                          {item.mom.text}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default IQAC;
