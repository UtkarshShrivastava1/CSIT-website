import React, { useState } from "react";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const dvvData = [
  {
    title: "Extended Profile",
    items: [
      {
        title:
          "Extended 1.1 - Number of students year wise during the last five years",
        pdf: "/csit-accrediation/DVV/EP 1.1.pdf",
      },
      {
        title:
          "Extended 2.1 - Number of Full time teachers during the last five years",
        pdf: "/csit-accrediation/DVV/EP 2.1.pdf",
      },
      {
        title:
          "Extended 2.2 - Number of full time teachers year wise during the last five years",
        pdf: "/csit-accrediation/DVV/EP 2.2.pdf",
      },
      {
        title:
          "Extended 3.1 - Expenditure Excluding salary component year wise during the last five years",
        pdf: "/csit-accrediation/DVV/EP 3.1.pdf",
      },
    ],
  },
  {
    title: "Criteria 1 - Curricular Aspects",
    items: [
      {
        title: "1.1 – Curriculum Design and Developments",
        subItems: [
          {
            title:
              "1.1.1 The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment",
            description: "Write description in a maximum of 500 words",
            subItems: [{ title: "No files available (folder empty)", pdf: "" }],
          },
        ],
      },
      {
        title: "1.2 - Academic Flexibility",
        subItems: [
          {
            title:
              "1.2.1 Number of Add on/Certificate/Value added programs offered during the last five years",
            pdf: "/csit-accrediation/DVV/1.2.1.pdf",
          },
          {
            title:
              "1.2.2 Percentage of students enrolled in Certificate/Add-on/Value added programs as against the total number of students during the last five years",
            pdf: "/csit-accrediation/DVV/1.2.2.pdf",
          },
        ],
      },
      {
        title: "1.3 – Curriculum Enrichment",
        subItems: [
          {
            title:
              "1.3.1 Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human values, Environment and Sustainability into the Curriculum",
            subItems: [{ title: "No files available (folder empty)", pdf: "" }],
          },
          {
            title:
              "1.3.2 Percentage of students undertaking project work/field work/internships (Data for the latest completed academic year)",
            pdf: "/csit-accrediation/DVV/1.3.2.pdf",
          },
        ],
      },
      {
        title: "1.4 – Feedback System",
        subItems: [
          {
            title:
              "1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website",
            pdf: "/csit-accrediation/DVV/1.4.1.pdf",
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
        pdf: "/csit-accrediation/DVV/2.1.1.pdf",
      },
      {
        title: "2.1.2 Percentage of seats filled against seats reserved...",
        pdf: "/csit-accrediation/DVV/2.1.2.pdf",
      },
      {
        title: "2.2.1 Student–Full time Teacher Ratio",
        pdf: "/csit-accrediation/DVV/2.2.1.pdf",
      },
      {
        title:
          "2.4.1 Percentage of full-time teachers against sanctioned posts...",
        pdf: "/csit-accrediation/DVV/2.4.1.pdf",
      },
      {
        title:
          "2.4.2 Percentage of full time teachers with NET/SET/SLET/Ph.D...",
        pdf: "/csit-accrediation/DVV/2.4.2.pdf",
      },
      {
        title: "2.5.1 Mechanism of internal/external assessment...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title: "2.6.1 Programme Outcomes (POs) and Course Outcomes (COs)...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title: "2.6.2 Pass percentage of Students during last five years",
        pdf: "/csit-accrediation/DVV/2.6.2.pdf",
      },
      {
        title: "2.7.1 Online student satisfaction survey...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
    ],
  },

  {
    title: "Criteria 3 - Research, Innovations and Extension",
    items: [
      {
        title:
          "3.1.1 Grants received from Government and non-governmental agencies...",
        pdf: "/csit-accrediation/DVV/3.1.1.pdf",
      },
      {
        title: "3.2.1 Institution has created an ecosystem for innovations...",
        subItems: [{ title: "Not found (folder empty)", pdf: "" }],
      },
      {
        title: "3.2.2 Number of workshops/seminars/conferences...",
        pdf: "/csit-accrediation/DVV/3.2.2.pdf",
      },
      {
        title: "3.3.1 Number of research papers published per teacher...",
        pdf: "/csit-accrediation/DVV/3.3.1.pdf",
      },
      {
        title: "3.3.2 Number of books and chapters in edited volumes/books...",
        pdf: "/csit-accrediation/DVV/3.3.2.pdf",
      },
      {
        title:
          "3.4.1 Extension activities are carried out in the neighborhood community...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title:
          "3.4.2 Awards and recognitions received for extension activities...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title: "3.4.3 Number of extension and outreach programs...",
        pdf: "/csit-accrediation/DVV/3.4.3.pdf",
      },
      {
        title: "3.5.1 Number of MoUs, collaborations/linkages...",
        pdf: "/csit-accrediation/DVV/3.5.1.pdf",
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
              "4.1.1 Availability of adequate infrastructure and physical facilities viz., classrooms, laboratories, ICT facilities, cultural activities, gymnasium, yoga centre etc. in the institution",
            subItems: [{ title: "No files available (folder empty)", pdf: "" }],
          },
          {
            title:
              "4.1.2 Percentage of expenditure, excluding salary for infrastructure augmentation during last five years (INR in Lakhs)",
            pdf: "/csit-accrediation/DVV/4.1.2.pdf",
          },
        ],
      },
      {
        title: "4.2 Library as a learning Resource",
        subItems: [
          {
            title:
              "4.2.1 Library is automated using Integrated Library Management System (ILMS), subscription to e-resources, amount spent on purchase of books, journals and per day usage of library",
            subItems: [{ title: "No files available (folder empty)", pdf: "" }],
          },
        ],
      },
      {
        title: "4.3 IT Infrastructure",
        subItems: [
          {
            title:
              "4.3.1 Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection",
            subItems: [{ title: "No files available (folder empty)", pdf: "" }],
          },
          {
            title:
              "4.3.2 Student–Computer ratio (Data for the latest completed academic year)",
            pdf: "/csit-accrediation/DVV/4.3.2.pdf",
          },
        ],
      },
      {
        title: "4.4 Maintenance of Campus Infrastructure",
        subItems: [
          {
            title:
              "4.4.1 Percentage of expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component",
            pdf: "/csit-accrediation/DVV/4.4.1.pdf",
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
        pdf: "/csit-accrediation/DVV/5.1.1.pdf",
      },
      {
        title: "5.1.2 Capacity building and skills enhancement initiatives...",
        pdf: "/csit-accrediation/DVV/5.1.2.pdf",
      },
      {
        title: "5.1.3 Percentage of students benefitted by guidance...",
        pdf: "/csit-accrediation/DVV/5.1.3.pdf",
      },
      {
        title: "5.1.4 The Institution has a transparent mechanism...",
        pdf: "/csit-accrediation/DVV/5.1.4.pdf",
      },
      {
        title: "5.2.1 Percentage of placement of outgoing students...",
        pdf: "/csit-accrediation/DVV/5.2.1.pdf",
      },
      {
        title: "5.2.2 Percentage of students qualifying in state/national...",
        pdf: "/csit-accrediation/DVV/5.2.2.pdf",
      },
      {
        title: "5.3.1 Number of awards/medals for outstanding performance...",
        pdf: "/csit-accrediation/DVV/5.3.1.pdf",
      },
      {
        title: "5.3.2 Average number of sports and cultural programs...",
        pdf: "/csit-accrediation/DVV/5.3.2.pdf",
      },
      {
        title: "5.4.1 There is a registered Alumni Association...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
    ],
  },

  {
    title: "Criteria 6 - Governance, Leadership and Management",
    items: [
      {
        title:
          "6.1.1 The governance and leadership is in accordance with vision...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title:
          "6.2.1 The functioning of the institutional bodies is effective...",
        subItems: [{ title: "Not found (folder empty)", pdf: "" }],
      },
      {
        title: "6.2.2 Implementation of e-governance in areas of operation",
        pdf: "/csit-accrediation/DVV/6.2.2.pdf",
      },
      {
        title: "6.3.1 The institution has effective welfare measures...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title:
          "6.3.2 Percentage of teachers provided with financial support...",
        pdf: "/csit-accrediation/DVV/6.3.2.pdf",
      },
      {
        title:
          "6.3.3 Percentage of teaching and non-teaching staff participating...",
        pdf: "/csit-accrediation/DVV/6.3.3.pdf",
      },
      {
        title:
          "6.4.1 Institution has strategies for mobilization and optimal utilization of resources...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title: "6.5.1 Internal Quality Assurance Cell (IQAC)...",
        subItems: [{ title: "No files available (folder empty)", pdf: "" }],
      },
      {
        title: "6.5.2 Quality assurance initiatives of the institution",
        pdf: "/csit-accrediation/DVV/6.5.2.pdf",
      },
    ],
  },

  {
    title: "Criteria 7 – Institutional Values and Best Practices",
    items: [
      {
        title:
          "7.1.1 Measures initiated by the Institution for the promotion of gender equity...",
        pdf: "/csit-accrediation/DVV/7.1.1.pdf",
      },
      {
        title: "7.1.2 The Institution has facilities and initiatives for...",
        pdf: "/csit-accrediation/DVV/7.1.2.pdf",
      },
      {
        title: "7.1.3 Quality audits on environment and energy...",
        pdf: "/csit-accrediation/DVV/7.1.3.pdf",
      },
      {
        title: "7.1.4 Describe the Institutional efforts/initiatives...",
        pdf: "/csit-accrediation/DVV/7.1.4.pdf",
      },
      {
        title: "7.2.1 Describe two best practices successfully implemented...",
        pdf: "/csit-accrediation/DVV/7.2.1.pdf",
      },
      {
        title: "7.3.1 Portray the performance of the Institution...",
        pdf: "/csit-accrediation/DVV/7.3.1.pdf",
      },
    ],
  },
];

const NaacCycle2DVV = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubSections, setExpandedSubSections] = useState({});

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleSubSection = (sectionIndex, itemIndex) => {
    setExpandedSubSections((prev) => ({
      ...prev,
      [`${sectionIndex}-${itemIndex}`]: !prev[`${sectionIndex}-${itemIndex}`],
    }));
  };

  const openPdf = (pdfPath) => {
    if (pdfPath && typeof pdfPath === "string" && pdfPath.trim().length > 0) {
      window.open(pdfPath, "_blank", "noopener,noreferrer");
    }
  };

  const styles = {
    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "90%",
    },
  };

  return (
    <>
      <Header />
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>

      <div className="min-h-screen bg-white p-4 md:p-8 w-full overflow-x-hidden">
        {/* Header */}
        <div className="w-full rounded-t-lg p-6 text-white mb-6 bg-gradient-to-br from-[#0d173b] to-[#1e305f]">
          <h1 className="text-2xl md:text-3xl font-bold">
            NAAC Cycle 2 — DVV Clarification
          </h1>
          <p className="text-blue-100 mt-2">CSIT | DVV Details</p>
          <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
        </div>

        {/* Sections */}
        <div className="space-y-4 w-full">
          {dvvData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full"
            >
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full text-left p-4 bg-gray-50 border-b flex justify-between items-center cursor-pointer hover:bg-gray-100 group"
              >
                <h3 className="font-semibold text-gray-800 pr-2 whitespace-normal break-words min-w-0">
                  {section.title}
                </h3>

                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    expandedSections[sectionIndex] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                  {section.items.map((item, itemIndex) => {
                    const hasSub =
                      Array.isArray(item.subItems) && item.subItems.length > 0;
                    return (
                      <div key={itemIndex} className="flex flex-col">
                        <button
                          onClick={() =>
                            hasSub
                              ? toggleSubSection(sectionIndex, itemIndex)
                              : openPdf(item.pdf)
                          }
                          className="w-full text-left p-4 hover:bg-blue-50 transition-colors flex justify-between items-center cursor-pointer group"
                        >
                          <span
                            style={styles.truncate}
                            className="text-gray-700"
                          >
                            {item.title}
                          </span>
                          {hasSub ? (
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
                              className="w-5 h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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

                        {hasSub &&
                          expandedSubSections[
                            `${sectionIndex}-${itemIndex}`
                          ] && (
                            <div className="bg-blue-50/50">
                              {item.subItems.map((subItem, subIndex) => {
                                const disabled =
                                  !subItem.pdf ||
                                  subItem.pdf.trim().length === 0;
                                return (
                                  <button
                                    key={subIndex}
                                    onClick={() =>
                                      !disabled ? openPdf(subItem.pdf) : null
                                    }
                                    className={`w-full text-left p-3 pl-8 transition-colors flex justify-between items-center ${
                                      disabled
                                        ? "cursor-not-allowed text-gray-400"
                                        : "hover:bg-blue-100"
                                    }`}
                                    disabled={disabled}
                                  >
                                    <span
                                      className={
                                        disabled
                                          ? "text-gray-400"
                                          : "text-gray-600"
                                      }
                                    >
                                      {subItem.title}
                                    </span>
                                    {!disabled && (
                                      <svg
                                        className="w-5 h-5 text-blue-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
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
                                );
                              })}
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NaacCycle2DVV;
