import React from "react";

export default function PublicationsTable() {
  // The primary color used throughout
  const primaryColor = "#0d173b";

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Header with solid background using the specified color */}
      <div className={`h-44 bg-[${primaryColor}] relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Publications
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Research Contributions
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
              <tr
                className={`bg-[${primaryColor}] text-white text-left text-sm uppercase tracking-wider`}
              >
                <th className="px-6 py-4 font-semibold">S.No</th>
                <th className="px-6 py-4 font-semibold">Faculty Name</th>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Journal Details</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-800">
              {[
                [
                  "1",
                  "Ms. Richa Sahu",
                  "A review on grape leaf disease detection using image processing",
                  "International Journal of Scientific Research in Engineering and Management Vol:07 Issue; 01| January - 2023",
                ],
                [
                  "2",
                  "Mrs. Simpal Kawade",
                  "Grape Leaf Disease Identification using Machine Learning Technique",
                  "GIS SCIENCE JOURNAL ISSN NO : 1869-9391 VOLUME 10,ISSUE 4, 2023",
                ],
                [
                  "3",
                  "Mrs. Nidhi Sindhu",
                  "DNN Based Object Recognition system in Vehicle Using Image Processing",
                  "International Journal of Scientific Research in Engineering and Management Vol:07 Issue; 03| March - 2023",
                ],
                [
                  "4",
                  "Ms. Richa Sahu",
                  "Grape Leaf Disease Identification using Machine Learning Technique",
                  "GIS SCIENCE JOURNAL ISSN NO : 1869-9391 VOLUME 10,ISSUE 4, 2023",
                ],
                [
                  "5",
                  "Mrs. Simpal Kawade",
                  "A review on grape leaf disease detection using image processing",
                  "International Journal of Scientific Research in Engineering and Management Vol:07 Issue; 01| January - 2023",
                ],
                [
                  "6",
                  "Dr. Padmini Sharma",
                  "Recent Advancements in Machine Learning and Artificial Intelligence",
                  "AICTE-CSVTU MoU One Week Joint Teachers Training Program (TTP-2021)",
                ],
                [
                  "7",
                  "Dr. Padmini Sharma",
                  "Discriminating Significant Morphological Attributes of Photoplethysmograph Signal for Cuffless Blood Pressure Measurement",
                  "Book name- Computational Intelligence and Applications for Pandemics and healthcare",
                ],
                [
                  "8",
                  "Dr. Shailendra Kumar Kushawaha",
                  "Status of Atmospheric Carbonaceous Matter in various location of India",
                  "Asian Journal of Chemistry,Vol. 28 (No. 6 (2016))",
                ],
                [
                  "9",
                  "Dr. Shailendra Kumar Kushawaha",
                  "Health Effects of PM2.5 Particulates: A brief season wise study in Durg residential areas",
                  "Research Journal of chemical Science, 8 (8) 2018, ISSN No.: 2231-606X",
                ],
                [
                  "10",
                  "Dr. Shailendra Kumar Kushawaha",
                  "Seasonal Trends of PM2.5 in heavy traffic zones in Durg Bhilai region of Chhattisgarh",
                  "International Journal of Advance in Management, Technology and Engineering Science, 8 (3) 2018, ISSN No: 2249-7455",
                ],
                [
                  "11",
                  "Dr. Shailendra Kumar Kushawaha",
                  "Seasonal variation of carbonaceous matter in urban residential areas of Bhilai Durg region in Chhattisgarh, India",
                  "International Journal of Management, Technology and Engineering, 9 (3) 2019",
                ],
                [
                  "12",
                  "Dr. Shailendra Kumar Kushawaha",
                  "Exposure of PM2.5 and Carbonaceous Matter Amongst Rural Inhabitants in and Around Durg District of Chhattisgarh, India",
                  "Transaction in Civil and Environmental Engineering, Springer, Singapore. 2020.",
                ],
                [
                  "13",
                  "Mr. Kranti Jain",
                  "Comparision analysis implementation of prediction of Heart Analysis",
                  "JTES Dec 2020 I ISSN- O975-5829",
                ],
                [
                  "14",
                  "Mr. Prabhas Gupta",
                  "Regulation water supply & water cutbacks in irrigation using IoT based smart irrigation system",
                  "Information Technology in Industry Feb 2021 Vol. 09",
                ],
                [
                  "15",
                  "Dr. Padmini Sharma",
                  "Fault Location Estimation in Bipolar HVDC Transmission employing Bayesian Regularized ANN (BRANN)",
                  "International Journal of Contemporary Technology and Management (IJCTM) May 2018 Volume 7, Issue 5 ISSN NO:2278-8034",
                ],
                [
                  "16",
                  "Dr. Padmini Sharma",
                  "Estimating Fault Location in Bipolar HVDC Transmission Lines using Levenberg- Marquardt Back Propagation",
                  "International Journal of Contemporary Technology and Management (IJCTM) May 2018 Volume 7, Issue 5 ISSN NO:2278-8034",
                ],
                [
                  "17",
                  "Mr. Ashraf Jafri",
                  "Performance analysis of automatic voltage regulator using genetic algorithm optimization technique for various time integral performance criteria",
                  "International Journal for Scientific Research &Development (IJSRD) May 2018 Volume 6, Issue 3 ISSN: 2321-0613",
                ],
                [
                  "18",
                  "Mr. V. Hemant kumar",
                  "Comparison of Dynamic performance of Solar PV fed BLDC motor drive with P&O and IC - MPPT algorithm",
                  "HELIX : The Scientific Explorer December, 2019 Vol. 9 5889- 5894 E-ISSN: 2319-5592; P-ISSN: 2277-3495",
                ],
                [
                  "19",
                  "Mr. Vivek Bargate",
                  "Review on Power Transformer Protection Scheme with Non-Linear Load",
                  "Iconic Research And Engineering Journals, April-2019 Volume 2, Issue 10 ISSN 2456-8880",
                ],
                [
                  "20",
                  "Mr. Vivek Bargate",
                  "Review on Directional Protection for Long Transmission Line",
                  "Iconic Research and Engineering Journal May 2021 Volume 4, Issue 11 PP 01-14 ISSN: 2456-8880",
                ],
                [
                  "21",
                  "Mr. Vivek bargate and Mr. V. Hemant kumar",
                  "Machine Intelligent Directional Protection of Transmission Line Based on Ensemble Decision Tree",
                  "Design Engineering Journal",
                ],
                [
                  "22",
                  "Mr. V. Hemant kumar",
                  "Reduced Switch Topology for Multilevel Inverter in Solar PV Systems",
                  "IEEE Xplore Digital Library May, 2021",
                ],
                [
                  "23",
                  "Er. Pradeep Kumar Agrawal",
                  "Analysis of Overall Equipment Effectiveness of Steel Melting Shop for Productive Improvement",
                  "International Journal of Engineering Research and Sports,Volume 1 12 ISSN2348-1404",
                ],
                [
                  "24",
                  "Dr. Rajesh Kumar",
                  "Assessment of the Methods for the Implementation of Green Supply Chain Management in Industries",
                  "International Journal of Advanced Scientific Research and Management,ISSN -2455-6378 (UGC Approved)",
                ],
                [
                  "25",
                  "Dr. Rajesh Kumar",
                  "Evaluation Of Suppliers For The Establishment Of Green Supply Chain Management In Steel Industries Using AHP - TOPSIS Method",
                  "i-manager",
                ],
                [
                  "26",
                  "Dr. Rajesh Kumar",
                  "Establishment of Green Supply Chain Management in Steel Industries Using Interpretive Structural Modeling",
                  "SCOPUS Indexed,ISSN -1569-1500",
                ],
                [
                  "27",
                  "Dr. Rajesh Kumar",
                  "ISM – MICMAC Analysis For The Implementation of Green Supply Chain Management",
                  "International Journal of Research and Analytical Reviews, ISSN- 2349-5138 (UGC Approved)",
                ],
                [
                  "28",
                  "Dr K. Sridhar",
                  "Quality Management in Automotive Manufacturing and Service Sector",
                  "International Journal of Innovative Technology and Exploring Engineering (IJITEE)",
                ],
                [
                  "29",
                  "Dr K. Sridhar",
                  "Evaluating the performance of plant by overall equipment effectiveness & overall resource effectiveness: a case study",
                  "International research journal of Engineering and Technology (IRJET)",
                ],
                [
                  "30",
                  "Dr K. Sridhar",
                  "Identification of barriers for Quality management implementation in automotive sector",
                  "Journal of Adv Research in Dynamical & Control Systems",
                ],
                [
                  "31",
                  "Dr Sourabh Kumar Soni",
                  "Fabrication and machinability analysis of squeeze cast Al7075/h-BN/graphene hybrid nanocomposite.",
                  "Engineering Research Express",
                ],
                [
                  "32",
                  "Dr Sourabh Kumar Soni",
                  "Microstructure, mechanical properties and machinability studies of Al7075/SiC/h-BN hybrid nanocomposite fabricated via ultrasonic-assisted squeeze casting.",
                  "FME Transactions",
                ],
                [
                  "33",
                  "Dr Sourabh Kumar Soni",
                  "Influence of TiO2 and MWCNT nanoparticles dispersion on microstructure and mechanical properties of Al6061 matrix hybrid nanocomposites.",
                  "Materials Research Express",
                ],
                [
                  "34",
                  "Dr Sourabh Kumar Soni",
                  "Influence of CNTs grading and reinforcement on dynamic characteristics of composite Plates in thermal environment",
                  "IOP Conference Series: Materials Science and Engineering",
                ],
                [
                  "35",
                  "Dr Sourabh Kumar Soni",
                  "Influence of dispersion technique/time on dispersion stability, aspect ratio and morphology of multi-walled carbon nanotubes",
                  "International Journal of Nanotechnology",
                ],
                [
                  "36",
                  "Dr. Abhijeet Ganguly",
                  "Parameter optimization of friction stir welding for Aluminium alloy",
                  "IOSR Journal of Mechanical and Civil Engineering (IOSR-JMCE)",
                ],
                [
                  "37",
                  "Dr. Abhijeet Ganguly",
                  "Fuzzy multi-objective economic-statistical design of X-bar control chart",
                  "International Journal of Productivity and Quality Management",
                ],
                [
                  "38",
                  "Dr. Abhijeet Ganguly",
                  "Non-traditional optimization approaches for economic design of control chart",
                  "International Journal of Productivity and Quality Management",
                ],
              ].map(([no, name, title, journal], idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td
                    className={`px-6 py-4 font-medium text-[${primaryColor}] border-b border-gray-100 align-top`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`h-6 w-6 rounded-full bg-[${primaryColor}] flex items-center justify-center mr-2`}
                      >
                        <span className="text-xs font-bold text-white">
                          {no}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">{name}</td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {title}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    {journal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
