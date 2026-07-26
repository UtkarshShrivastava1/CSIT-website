import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NaacCycle2 = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubSections, setExpandedSubSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleSubSection = (sectionIndex, itemIndex) => {
    setExpandedSubSections((prev) => ({
      ...prev,
      [`${sectionIndex}-${itemIndex}`]: !prev[`${sectionIndex}-${itemIndex}`],
    }));
  };

  // Updated function to handle both PDFs and links
  const handleItemClick = (item) => {
    try {
      if (item.pdf) {
        // Handle PDF files
        window.open(item.pdf, "_blank", "noopener,noreferrer");
      } else if (item.link) {
        // Handle page navigation using React Router
        navigate(item.link);
      }
    } catch (error) {
      console.error("Error handling item:", error);
      alert("Unable to open the requested item. Please try again.");
    }
  };

  // Keep the old function for backward compatibility with existing PDF calls
  const handleViewPdf = (pdfPath) => {
    try {
      if (typeof pdfPath === "string") {
        window.open(pdfPath, "_blank", "noopener,noreferrer");
      } else {
        window.open(pdfPath, "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("Error handling PDF:", error);
      alert("Unable to open PDF. Please try again.");
    }
  };

  // Add a helper function to check if a section is Criteria 1
  const isCriteria1 = (title) => {
    return title.startsWith("1.") || title.includes("Curriculum");
  };

  // Update the paths in criteriaData to use absolute paths
  const criteriaData = [
    {
      title: "Extended Profile",
      items: [
        {
          title:
            "Extended 1.1 - Number of students year wise during the last five years",
          pdf: "https://drive.google.com/file/d/1AVmgxcmnzD7XbbhKGPgxJfYN_rMhx3Qy/view?usp=sharing",
        },
        {
          title:
            "Extended 2.1 - Number of Full time teachers during the last five years",
          pdf: "https://drive.google.com/file/d/1oHuJv453tak6qRKsgc9MTFvOCWOmZ8ji/view?usp=sharing",
        },
        {
          title:
            "Extended 2.2 NUMBER OF TEACHING STAFF / FULL TIME TEACHERS YEAR WISE DURING THE LAST FIVE YEARS",
          pdf: "https://drive.google.com/file/d/1uQ_9BhprW8ifE6cCrRXK-4ZGgpynn0_T/view?usp=sharing",
        },
        {
          title:
            "Extended 3.1 EXPENDITURE EXCLUDING SALARY COMPONENT YEAR WISE DURING THE LAST FIVE YEARS",
          pdf: "https://drive.google.com/file/d/1Vkki8Ea7b3GqCMlbNfEf6gIzjL-X2EAR/view?usp=sharing",
        },
      ],
    },
    {
      title: "Criteria 1 - Curricular Aspects",
      items: [
        {
          title: "1.1 – Curriculum Design and Developments",
          pdf: "https://drive.google.com/file/d/1fg8XzJ19CJdCXiuQ0rKLYa7C8VoBRh7m/view?usp=sharing",
          subItems: [
            {
              title:
                "1.1.1 The Institution ensures effective curriculum planning and delivery...",
              pdf: "https://drive.google.com/file/d/1fg8XzJ19CJdCXiuQ0rKLYa7C8VoBRh7m/view?usp=sharing",
            },
          ],
        },
        {
          title: "1.2 - Academic Flexibility",
          pdf: "https://drive.google.com/file/d/1RY32zFOfJrgRgdX2D6-qox97JOH1mvFs/view?usp=sharing",
          subItems: [
            {
              title:
                "1.2.1 Number of Add on/Certificate/Value added programs...",
              pdf: "https://drive.google.com/file/d/1RY32zFOfJrgRgdX2D6-qox97JOH1mvFs/view?usp=sharing",
              yearWiseData: [
                {
                  year: "2018-19",
                  pdf: "https://drive.google.com/file/d/1j9L-qrj6fj1RzTc0ZyxB8Jp4Fgh-u0KS/view?usp=sharing",
                },
                {
                  year: "2019-20",
                  pdf: "https://drive.google.com/file/d/1tJ78nWl-ih01VYTqgQ9-ds9eaxCeDWki/view?usp=sharing",
                },
                {
                  year: "2020-21",
                  pdf: "https://drive.google.com/file/d/1n4ediLW4x9YE7CGplTQl4BYd3x1IYLnu/view?usp=sharing",
                },
                {
                  year: "2021-22",
                  pdf: "https://drive.google.com/file/d/1uupbXwUQMd36hru96ThulHXBPrqR_kUn/view?usp=sharing",
                },
                {
                  year: "2022-23",
                  pdf: "https://drive.google.com/file/d/1skxiYE7zm_hznQIL5xJO5sDCQVWvHxae/view?usp=sharing",
                },
                {
                  title: "Certificate",
                  pdf: "https://drive.google.com/file/d/1J1-qF8NDCEIqFFNGbc9xCl845pEkcORz/view?usp=sharing",
                },
              ],
            },
            {
              title:
                "1.2.2 Percentage of students enrolled in Certificate/Add-on programs...",
              pdf: "https://drive.google.com/file/d/1cMfgaBC6c0grZk3LKy7Tkk-N0EKb2Omp/view?usp=sharing",
              yearWiseData: [
                {
                  year: "2018-19",
                  pdf: "https://drive.google.com/file/d/1_YTRhnTEfmiQZ4yKsCw5Urr1zE-lFTLB/view?usp=sharing",
                },
                {
                  year: "2019-20",
                  pdf: "https://drive.google.com/file/d/16Ui5e-gxWWLqY-Fv5DIFEF0lMiCAsDnw/view?usp=sharing",
                },
                {
                  year: "2020-21",
                  pdf: "https://drive.google.com/file/d/1zfZe7PB3B8ehH5rzPomEh8P2C9JZXQSs/view?usp=sharing",
                },
                {
                  year: "2021-22",
                  pdf: "https://drive.google.com/file/d/1VYD35HvZNwDeBcXCTop0WNCIn-ebEn7r/view?usp=sharing",
                },
                {
                  year: "2022-23",
                  pdf: "https://drive.google.com/file/d/1qdRw8BwlRcym0o3DD83lE1MQmjSEmlZV/view?usp=sharing",
                },
                {
                  title: "Certificate",
                  pdf: "https://drive.google.com/file/d/1LmItjJLvdUrFZtx5JSnytwVYdUJuVcQ0/view?usp=sharing",
                },
              ],
            },
          ],
        },
        {
          title: "1.3 – Curriculum Enrichment",
          pdf: "https://drive.google.com/file/d/1RBI6D6o0Tw3Eism4-tSUT2cCxkxIbgtN/view?usp=sharing",
          subItems: [
            {
              title: "1.3.1 Institution integrates crosscutting issues...",
              pdf: "https://drive.google.com/file/d/1RBI6D6o0Tw3Eism4-tSUT2cCxkxIbgtN/view?usp=sharing",
            },
            {
              title: "1.3.2 Percentage of students undertaking project work...",
              pdf: "https://drive.google.com/file/d/1dxuDjTUq1ek9uSb5HMymgcQaqUafb-6i/view?usp=sharing",
            },
          ],
        },
        {
          title: "1.4 – Feedback System",
          pdf: "https://drive.google.com/file/d/1bVpH6AMrc1RmEDQDwhiWjSfEFWF1zlLU/view?usp=sharing",
          subItems: [
            {
              title:
                "1.4.1 Institution obtains feedback on the academic performance...",
              pdf: "https://drive.google.com/file/d/1bVpH6AMrc1RmEDQDwhiWjSfEFWF1zlLU/view?usp=sharing",
            },
          ],
        },
      ],
    },
    {
      title: "Criteria 2 - Teaching - Learning and Evaluation",
      items: [
        {
          title: "2.1.1 Enrolment percentage",
          pdf: "https://drive.google.com/file/d/1SFAopNmG_Rp6w302rpsXimqWzEwBcinD/view?usp=sharing",
        },
        {
          title:
            "2.1.2 Percentage of seats filled against seats reserved for various categories...",
          pdf: "https://drive.google.com/file/d/1mFAw-6_3nYoaUKfia8iml54FIXXH0ei-/view?usp=sharing",
        },
        {
          title: "2.2.1 Student–Full time Teacher Ratio",
          pdf: "https://drive.google.com/file/d/1T4RNEbzD6ROwKfGtNlS9o_Z4SKf9ld0F/view?usp=sharing",
        },
        {
          title:
            "2.3.1 Student centric methods, such as experiential learning...",
          pdf: "https://drive.google.com/file/d/1Fb0pRUzwq5hudUKuuxVxDTssWrCiabAF/view?usp=sharing",
        },
        {
          title:
            "2.4.1 Percentage of full-time teachers against sanctioned posts...",
          pdf: "https://drive.google.com/file/d/1TCAd8bv_jMcPlqZGKKykXU0wSrW2Oyd_/view?usp=sharing",
        },
        {
          title:
            "2.4.2 Percentage of full time teachers with NET/SET/SLET/Ph.D...",
          pdf: "https://drive.google.com/file/d/1swCJHO1TnzW_VuweQxGRdf5KffiU4SQe/view?usp=sharing",
        },
        {
          title: "2.5.1 Mechanism of internal/external assessment...",
          pdf: "https://drive.google.com/file/d/1y-mRsGpKXDQJGu8X9TTbc3JyFQneHaWV/view?usp=sharing",
        },
        {
          title: "2.6.1 Programme Outcomes (POs) and Course Outcomes (COs)...",
          pdf: "https://drive.google.com/file/d/1mMQJdsm2UrHcA2of9oA4PAzz3rmb5w_i/view?usp=sharing",
        },
        {
          title: "2.6.2 Attainment of POs and COs are evaluated",
          pdf: "https://drive.google.com/file/d/1HqVX8U-aOm7xOgBH20fXl72QqsBJX4g6/view?usp=sharing",
        },
        {
          title: "2.6.3 Pass percentage of Students during last five years",
          pdf: "https://drive.google.com/file/d/1kveSNswIW4P0EUGuQrhLf2rxioOP_UCX/view?usp=sharing",
        },
        {
          title:
            "2.7.1 Online student satisfaction survey regarding to teaching learning process. (Online survey to be conducted)",
          link: "/naac-cycle/naac-cycle-2", // Add leading slash, remove trailing slash
        },
      ],
    },
    {
      title: "Criteria 3 - Research, Innovations and Extension",
      items: [
        {
          title:
            "3.1.1 Grants received from Government and non-governmental agencies...",
          pdf: "https://drive.google.com/file/d/1V7FFzQBAkLGtXwLdqMHm9L76LEyhAEUL/view?usp=sharing",
        },
        {
          title:
            "3.2.1 Institution has created an ecosystem for innovations...",
          pdf: "https://drive.google.com/file/d/12vp5tRNnGMp3mlImE4gx8dmEfmXfoFWl/view?usp=sharing",
        },
        {
          title: "3.2.2 Number of workshops/seminars/conferences...",
          pdf: "https://drive.google.com/file/d/1__gYvCT8ltmpDxl9RTraXoeGCEaWKWj6/view?usp=sharing",
        },
        {
          title: "3.3.1 Number of research papers published per teacher...",
          pdf: "https://drive.google.com/file/d/1kg5zbALn3WOpBkHt-8bP30y4U7kkXD-B/view?usp=sharing",
        },
        {
          title:
            "3.3.2 Number of books and chapters in edited volumes/books...",
          pdf: "https://drive.google.com/file/d/1dYAUG_jBcRVWZTXCmSRLs_o_aDBYv3lo/view?usp=sharing",
        },
        {
          title:
            "3.4.1 Extension activities are carried out in the neighborhood community...",
          pdf: "https://drive.google.com/file/d/1vG8qWAvntrdWhcJsuBq6vFoBxlgHDW3-/view?usp=sharing",
        },
        {
          title:
            "3.4.2 Awards and recognitions received for extension activities...",
          pdf: "https://drive.google.com/file/d/1KSKJsZoAjZ7SlUylSEc-MTnvYHWphY2J/view?usp=sharing",
        },
        {
          title: "3.4.3 Number of extension and outreach programs...",
          pdf: "https://drive.google.com/file/d/1nWlJlsKDozgWLfPHA-z9CIQoiEIQVHkv/view?usp=sharing",
        },
        {
          title: "3.5.1 Number of MoUs, collaborations/linkages...",
          pdf: "https://drive.google.com/file/d/1Ep4vq8Df_mWBr1nwLTjJO6_DltSiD3Jv/view?usp=sharing",
        },
      ],
    },
    {
      title: "Criteria 4 - Infrastructure and Learning Resources",
      items: [
        {
          title: "4.1 Physical Facilities",
          subItems: [
            {
              title:
                "4.1.1 Availability of adequate infrastructure and physical facilities...",
              pdf: "https://drive.google.com/file/d/1O-usrgNPVNxuH1aYLruRKwgEPQ3SrJUU/view?usp=sharing",
            },
            {
              title:
                "4.1.2 Percentage of expenditure, excluding salary for infrastructure...",
              pdf: "https://drive.google.com/file/d/1Icjz_agcukUjDndgCTzkdhsXU4sIM4Ff/view?usp=sharing",
            },
          ],
        },
        {
          title: "4.2 Library as a learning Resource",
          subItems: [
            {
              title:
                "4.2.1 Library is automated using Integrated Library Management System...",
              pdf: "https://drive.google.com/file/d/1TZgOnxHTDocnNnJN80oIqDVqDEvJeNU_/view?usp=sharing",
            },
          ],
        },
        {
          title: "4.3 IT Infrastructure",
          subItems: [
            {
              title:
                "4.3.1 Institution frequently updates its IT facilities...",
              pdf: "https://drive.google.com/file/d/1YuwMYAva_2kHou8Dz9hIqLGDQNgPuvyh/view?usp=sharing",
            },
            {
              title: "4.3.2 Student–Computer ratio",
              pdf: "https://drive.google.com/file/d/1n7IEj5ljVah_QnNBeRUFqiiqOc76L8Yd/view?usp=sharing",
            },
          ],
        },
        {
          title: "4.4 Maintenance of Campus Infrastructure",
          subItems: [
            {
              title:
                "4.4.1 Percentage of expenditure incurred on maintenance of infrastructure...",
              pdf: "https://drive.google.com/file/d/1x0qGWR5Yz3KCUtico_yfeizK6BBahuX5/view?usp=sharing",
            },
          ],
        },
      ],
    },
    {
      title: "Criteria 5 - Student Support and Progression",
      items: [
        {
          title: "5.1.1 Percentage of students benefited by scholarships...",
          pdf: "https://drive.google.com/file/d/1DglmxTijezNkZYrKTAmdaHSMk-3pDPnz/view?usp=sharing",
        },
        {
          title:
            "5.1.2 Capacity building and skills enhancement initiatives...",
          pdf: "https://drive.google.com/file/d/1cZcVTYnKP6uIn91AwpgfrfmiETVN5SWy/view?usp=sharing",
        },
        {
          title: "5.1.3 Percentage of students benefitted by guidance...",
          pdf: "https://drive.google.com/file/d/1IjdmaAeNGhi-JeiDePrpjQcL8PkwD4IK/view?usp=sharing",
        },
        {
          title: "5.1.4 The Institution has a transparent mechanism...",
          pdf: "https://drive.google.com/file/d/19t8Y_bh0or4METa_uu5z8mU5LlpXORHB/view?usp=sharing",
        },
        {
          title: "5.2.1 Percentage of placement of outgoing students...",
          pdf: "https://drive.google.com/file/d/18R_MxJH6m6f970qaqZbo0M-4E4bgyWPF/view?usp=sharing",
        },
        {
          title: "5.2.2 Percentage of students qualifying in state/national...",
          pdf: "https://drive.google.com/file/d/1OrP0g3mTG8_AWStSteR38J7hXDupE2f9/view?usp=sharing",
        },
        {
          title: "5.3.1 Number of awards/medals for outstanding performance...",
          pdf: "https://drive.google.com/file/d/13BZLsqsBSW_7Mq9XP-G7GAl4aiKQTQuF/view?usp=sharing",
        },
        {
          title: "5.3.2 Average number of sports and cultural programs...",
          pdf: "https://drive.google.com/file/d/1CAPXXWvcKX9ArB0uoRzZMev_i8b71V3E/view?usp=sharing",
        },
        {
          title: "5.4.1 There is a registered Alumni Association...",
          pdf: "https://drive.google.com/file/d/1dsGiCHPIl34vBUBCbqnnX4C7UI8CfG36/view?usp=sharing",
        },
      ],
    },
    {
      title: "Criteria 6 - Governance, Leadership and Management",
      items: [
        {
          title:
            "6.1.1 The governance and leadership is in accordance with vision...",
          pdf: "https://drive.google.com/file/d/1Up6MFZLtOJ-4bJQ9oWA3YbDr9wj0cKpD/view?usp=sharing",
        },
        {
          title:
            "6.2.1 The functioning of the institutional bodies is effective...",
          pdf: "https://drive.google.com/file/d/1rAeS3owp7PnPM2oFeoZ7xgOe6Ngd6DIB/view?usp=sharing",
        },
        {
          title: "6.2.2 Implementation of e-governance in areas of operation",
          pdf: "https://drive.google.com/file/d/1At4Sc0UuqrFXVnFgeLugBIW1l4rcwEBD/view?usp=sharing",
        },
        {
          title: "6.3.1 The institution has effective welfare measures...",
          pdf: "https://drive.google.com/file/d/1CWh6OrjwlnX3nyLw8W9svKXocx1LwhDb/view?usp=sharing",
        },
        {
          title:
            "6.3.2 Percentage of teachers provided with financial support...",
          pdf: "https://drive.google.com/file/d/1OlRvm51cO5m1ILAHpTCMPMY8ZX1cR3G6/view?usp=sharing",
        },
        {
          title:
            "6.3.3 Percentage of teaching and non-teaching staff participating...",
          pdf: "https://drive.google.com/file/d/1iTD1mGvyr1P3zWnFeBf7bFDSBYYrXDDi/view?usp=sharing",
        },
        {
          title: "6.4.1 Institution has strategies for mobilization...",
          pdf: "https://drive.google.com/file/d/1sHgkyhtITFC6ognuVYQLf5z_zs8YAChT/view?usp=sharing",
        },
        {
          title: "6.5.1 Internal Quality Assurance Cell (IQAC)...",
          link: "/more/iqac", // Add leading slash, remove trailing slash
        },
        {
          title: "6.5.2 Quality assurance initiatives of the institution",
          pdf: "https://drive.google.com/file/d/1HqDb9oVWhaITx9NOqwxCSUjT8eCHrBCu/view?usp=sharing",
        },
      ],
    },
    {
      title: "Criteria 7 – Institutional Values and Best Practices",
      items: [
        {
          title:
            "7.1.1 Measures initiated by the Institution for the promotion of gender equity...",
          pdf: "https://drive.google.com/file/d/11m--BIntVyg2doRudyntpoXXctTZu_1r/view?usp=sharing",
        },
        {
          title: "7.1.2 The Institution has facilities and initiatives for...",
          pdf: "https://drive.google.com/file/d/1uzvwU01zFTQC5Xkmm1SSIdT8xGkAgtVv/view?usp=sharing",
        },
        {
          title: "7.1.3 Quality audits on environment and energy...",
          pdf: "https://drive.google.com/file/d/1Xyxaif8zHm2fOlxKu1DLr_ZnVIoXQzhR/view?usp=sharing",
        },
        {
          title: "7.1.4 Describe the Institutional efforts/initiatives...",
          pdf: "https://drive.google.com/file/d/1KZdr0oaVF4imDJJEkiS3Au3PUuzbzoJm/view?usp=sharing",
        },
        {
          title:
            "7.2.1 Describe two best practices successfully implemented...",
          pdf: "https://drive.google.com/file/d/1-WWmqGgjf_FkXyTpFfpAGy5SfJ-gpSwA/view?usp=sharing",
        },
        {
          title: "7.3.1 Portray the performance of the Institution...",
          pdf: "https://drive.google.com/file/d/1mVFAJ7GGwENBuqfMj4h65UsmpImIFDM1/view?usp=sharing",
        },
      ],
    },
    {
      title: "SSR (Self Study Report)",
      pdf: "https://drive.google.com/file/d/1yjhRna4-Ku1tgP1bp4GyNJy63vxVSkgI/view?usp=sharing",
      directLink: true,
    },
    // Update the DVV Clarification object in criteriaData
    {
      title: "DVV Clarification",
      link: "/naac-cycle/dvv-details", // Match the route path exactly
      directLink: true,
    },
  ];

  // Update the styles object
  const styles = {
    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "90%",
    },
    mainSection: {
      background: "linear-gradient(135deg, #0d173b 0%, #1e305f 100%)",
    },
    specialSection: {
      background: "linear-gradient(135deg, #1e305f 0%, #2a4484 100%)",
    },
    criteria1Section: {
      background: "linear-gradient(135deg, #1a5f3c 0%, #2a8459 100%)",
    },
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 w-full overflow-x-hidden">
      {/* Header */}
      <div
        className="w-full rounded-t-lg p-6 text-white mb-6"
        style={styles.mainSection}
      >
        <h1 className="text-2xl md:text-3xl font-bold">NAAC Cycle 2</h1>
        <p className="text-blue-100 mt-2">
          CSIT | View and manage all NAAC cycle related documents
        </p>
        <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
      </div>

      {/* Documents Container */}
      <div className="space-y-4 w-full">
        {criteriaData.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full"
          >
            {section.directLink ? (
              // Special sections (SSR and DVV)
              <div className="relative">
                <button
                  onClick={() =>
                    section.pdf
                      ? handleViewPdf(section.pdf)
                      : handleItemClick(section)
                  }
                  className="w-full text-left p-4 text-white transition-colors flex justify-between items-center cursor-pointer hover:opacity-90"
                  style={styles.specialSection}
                >
                  <span className="font-medium pr-2" title={section.title}>
                    {section.title}
                  </span>

                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="w-full">
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="w-full text-left p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer hover:bg-gray-100 group"
                  style={
                    isCriteria1(section.title) ? styles.criteria1Section : {}
                  }
                >
                  <h3
                    className={`font-semibold ${
                      isCriteria1(section.title)
                        ? "text-white"
                        : "text-gray-800"
                    } pr-2 whitespace-normal break-words min-w-0`}
                  >
                    {section.title}
                  </h3>

                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      expandedSections[sectionIndex] ? "rotate-180" : ""
                    } ${
                      isCriteria1(section.title)
                        ? "stroke-white"
                        : "stroke-current"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedSections[sectionIndex] && (
                  <div className="divide-y divide-gray-200">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <div className="flex flex-col">
                          <button
                            onClick={
                              () =>
                                item.subItems
                                  ? toggleSubSection(sectionIndex, itemIndex)
                                  : handleItemClick(item) // Changed from handleViewPdf to handleItemClick
                            }
                            className="w-full text-left p-4 hover:bg-blue-50 transition-colors flex justify-between items-center cursor-pointer group"
                          >
                            <div className="flex items-center space-x-2 relative group">
                              <span className="text-gray-700 whitespace-normal break-words">
                                {item.title}
                              </span>

                              <div className="invisible group-hover:visible absolute left-0 -top-2 transform -translate-y-full z-50 p-2 bg-gray-800 text-white text-sm rounded whitespace-normal max-w-[500px] pointer-events-none shadow-lg">
                                {item.title}
                              </div>
                            </div>
                            {item.subItems ? (
                              <svg
                                className={`w-5 h-5 transform transition-transform ${
                                  expandedSubSections[
                                    `${sectionIndex}-${itemIndex}`
                                  ]
                                    ? "rotate-180"
                                    : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="w-5 h-5 flex-shrink-0 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            )}
                          </button>

                          {item.subItems &&
                            expandedSubSections[
                              `${sectionIndex}-${itemIndex}`
                            ] && (
                              <div className="bg-blue-50/50">
                                {item.subItems.map((subItem, subIndex) => (
                                  <div key={subIndex} className="relative">
                                    <button
                                      onClick={() => handleViewPdf(subItem.pdf)}
                                      className="w-full text-left p-3 pl-8 hover:bg-blue-100 transition-colors flex justify-between items-center cursor-pointer group"
                                    >
                                      <div className="flex items-center space-x-2 relative group">
                                        <span className="text-gray-600 whitespace-normal break-words">
                                          {subItem.title}
                                        </span>

                                        <div className="invisible group-hover:visible absolute left-0 -top-2 transform -translate-y-full z-50 p-2 bg-gray-800 text-white text-sm rounded whitespace-normal max-w-[500px] pointer-events-none shadow-lg">
                                          {subItem.title}
                                        </div>
                                      </div>
                                      <svg
                                        className="w-5 h-5 flex-shrink-0 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NaacCycle2;
