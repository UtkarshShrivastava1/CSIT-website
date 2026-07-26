import React from 'react';

const TrainingProgramme = () => {
  const trainingAndAssessmentData = [
    {
      id: 1,
      title: "CRT by S2P Edutech",
      description: "As part of our comprehensive campus recruitment training (CRT) initiative, we are proud to collaborate with Mr. Gandhar Patwardhan, a highly respected mentor in the field of aptitude training and personality development. S2P Edutech is the technology training partner of CSIT. The organization delivers industry-oriented training to enhance students' Technical Knowledge, Practical Skills, and Employability through hands-on Learning, Real-World Projects, and Placement-focused preparation aligned with current industry requirements.",
      modules: [
        "Programming with C, C++, Java, and Python",
        "Data Structures and Algorithms",
        "Web Development (HTML, CSS, JavaScript, React)",
        "Database Management Systems (SQL)",
        "Artificial Intelligence and Machine Learning Fundamentals",
        "Data Science and Data Analytics",
        "Cloud Computing and DevOps Basics",
        "Cyber Security Fundamentals",
        "Aptitude, Coding, and Technical Interview Preparation",
        "Live Projects, Hackathons, and Industry Case Studies"
      ]
    },
    {
      id: 2,
      title: "Superset Assessment Platform",
      description: "Superset is a leading digital campus recruitment and assessment platform that connects students with top recruiters through a seamless hiring ecosystem. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, Superset is used to conduct placement-oriented assessments, including aptitude tests, coding evaluations, technical assessments, and company-specific online recruitment processes. The platform offers a transparent and efficient recruitment experience by enabling online test administration, candidate shortlisting, interview scheduling, and real-time communication. Students receive timely notifications regarding assessments, results, interview schedules, and placement opportunities, ensuring they remain well-informed throughout the recruitment process.",
      features: [
        "Online aptitude, coding, and technical assessments",
        "Company-specific recruitment tests",
        "Automated candidate shortlisting",
        "Interview scheduling and communication",
        "Real-time placement notifications and updates",
        "Secure and transparent assessment process",
        "Centralized platform for campus recruitment activities"
      ]
    },
    {
      id: 3,
      title: "Pylons Technology",
      description: "Pylons Technologies is the technical training partner of CSIT, providing structured skill development programs through its initiative. The program focuses on strengthening students' programming, logical reasoning, and problem-solving abilities through hands-on learning. It prepares students for coding assessments, technical interviews, and competitive programming, helping them become industry-ready software professionals. This initiative forms a crucial part of our skill development efforts, ensuring students are technically sound and industry-ready.",
      modules: [
        "Programming Fundamentals (C, C++, Java, Python)",
        "Problem Solving and Logical Reasoning",
        "Data Structures and Algorithms (DSA)",
        "Object-Oriented Programming (OOP)",
        "Competitive Programming Techniques",
        "Coding Challenges and Practice Sessions",
        "Technical Aptitude and Coding Assessments",
        "Mock Coding Tests and Technical Interviews",
        "Real-World Programming Projects",
        "Placement-Oriented Coding and Interview Preparation"
      ]
    },
    {
      id: 4,
      title: "SHL AMCAT Assessment",
      description: "SHL AMCAT (Aspiring Minds Computer Adaptive Test) is a globally recognized employability assessment used to evaluate students' aptitude, technical proficiency, and workplace readiness. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, SHL AMCAT serves as a key assessment tool in the campus recruitment process, helping students benchmark their skills against industry standards. The assessment measures competencies across multiple domains, including Quantitative Aptitude, Logical Reasoning, Verbal Ability, Situational Judgment, and Domain-Specific Technical Skills. It enables students to identify their strengths and improvement areas while providing recruiters with reliable insights for candidate shortlisting.",
      features: [
        "Quantitative Aptitude Assessment",
        "Logical Reasoning Evaluation",
        "Verbal Ability Testing",
        "Situational Judgment Assessment",
        "Domain-Specific Technical Skills Assessment",
        "Detailed Skill Analysis and Performance Reports",
        "Industry Benchmarking for Employability",
        "Recruiter-Friendly Candidate Evaluation",
        "Placement-Oriented Assessment for Campus Recruitment"
      ]
    },
    {
      id: 5,
      title: "FNCODE & FNAT Assessments by FirstNaukri",
      description: "FNCODE and FNAT are placement-oriented assessments conducted through FirstNaukri, designed to evaluate students' technical, coding, and employability skills. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, these assessments support campus recruitment by helping students demonstrate their capabilities to leading employers. FNCODE assesses programming proficiency, algorithmic thinking, logical reasoning, and coding skills, making it ideal for students aspiring to software development and other technical roles. FNAT evaluates core employability skills, including quantitative aptitude, logical reasoning, and verbal ability, enabling recruiters to identify candidates with strong analytical and problem-solving abilities. These assessments enhance students' visibility on the FirstNaukri platform and improve their prospects for IT, product-based, analytics, and other technology-driven career opportunities.",
      features: [
        "Coding Skill Assessment (FNCODE)",
        "Programming and Algorithm Evaluation",
        "Quantitative Aptitude Assessment (FNAT)",
        "Logical Reasoning and Verbal Ability Testing",
        "Placement Readiness Evaluation",
        "Industry-Recognized Employability Benchmarking",
        "Recruiter Visibility through the FirstNaukri Platform",
        "Enhanced Shortlisting Opportunities for Campus Placements"
      ]
    },
    {
      id: 6,
      title: "CoCubes Assessment",
      description: "CoCubes is a leading employability assessment platform that helps evaluate students' job readiness through standardized online tests recognized by top recruiters across India. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, CoCubes is integrated into the campus recruitment process to assess students' aptitude, technical knowledge, coding proficiency, and overall employability. The assessment provides students with a comprehensive performance report and a standardized score accepted by numerous employers, enhancing their visibility and improving their chances of securing placement opportunities in IT, core engineering, analytics, and other professional domains.",
      features: [
        "Quantitative, Logical, and Verbal Aptitude Assessment",
        "Domain-Specific Technical Evaluation",
        "Coding and Programming Skill Assessment",
        "Personality and Behavioral Profiling",
        "Industry-Recognized Employability Score",
        "Detailed Performance Analytics and Feedback",
        "Recruiter Visibility and Candidate Shortlisting",
        "Placement Readiness Assessment for Campus Recruitment"
      ]
    },
    {
      id: 7,
      title: "Tech36garh – Industry Training Partner",
      description: "Tech36garh is the technology innovation and skill development partner of Chhatrapati Shivaji Institute of Technology (CSIT), Durg. As part of the institute's industry-integrated learning initiative, Tech36garh conducts structured semester-wise training programs in Robotics, 3D Printing, and Drone Technology. The training emphasizes experiential learning through hands-on laboratory sessions, design projects, prototyping, and industry-oriented applications, enabling students to develop technical competencies, innovation skills, and career readiness in emerging technologies.",
      modules: [
        "Introduction to Robotics and Industrial Automation",
        "Embedded Systems, Arduino, and Sensor Interfacing",
        "Robot Design, Programming, and Control Systems",
        "Computer-Aided Design (CAD) for Product Development",
        "3D Printing Technology and Additive Manufacturing",
        "3D Printer Assembly, Calibration, and Rapid Prototyping",
        "Fundamentals of Drone (UAV) Technology",
        "Drone Design, Assembly, Flight Operations, and Safety",
        "Drone Applications in Agriculture, Surveying, Mapping, and Inspection",
        "IoT Integration with Robotics and Drone Systems",
        "Capstone Projects, Product Development, and Innovation Challenges",
        "Industry Interaction, Technical Workshops, and Skill Assessment",
        "Introduction to CAD and AutoCAD Interface",
        "2D Drafting and Annotation Techniques",
        "3D Modeling and Visualization",
        "Layer Management, Dimensions, and Plotting",
        "Hands-on Practice with Industry-Based Projects"
      ]
    },
    {
      id: 8,
      title: "NCET by MyAnatomy",
      description: "NCET (National Corporate Employability Test) by MyAnatomy is a national-level employability assessment designed to evaluate students' aptitude, technical knowledge, coding skills, and overall job readiness. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, NCET is conducted as part of the placement preparation process to help students benchmark their skills against industry standards and connect with a broad network of recruiters. The assessment measures competencies in Quantitative Aptitude, Logical Reasoning, Verbal Ability, Technical/Domain-Specific Skills, and Coding (for Computer Science and IT students). The NCET scorecard is recognized by numerous hiring partners, enhancing students' visibility and improving their opportunities for campus placements across IT, product-based companies, BFSI, consulting, and core engineering sectors.",
      features: [
        "Quantitative Aptitude Assessment",
        "Logical Reasoning and Analytical Skills Evaluation",
        "Verbal Ability Assessment",
        "Domain-Specific Technical Skill Testing",
        "Coding Assessment for Computer Science and IT Students",
        "National-Level Employability Benchmarking",
        "Recruiter Visibility through the MyAnatomy Platform",
        "Placement Readiness Evaluation and Skill Analytics"
      ]
    },
    {
      id: 9,
      title: "Zegar Digital Services",
      description: "Zegar Digital Services is the digital technology and IT solutions training partner of CSIT, offering industry-oriented programs that equip students with practical skills in digital technologies, software development, and emerging IT domains. The training emphasizes hands-on learning, live projects, and industry best practices to prepare students for successful careers in the digital economy.",
      modules: [
        "Web Design and Full-Stack Web Development",
        "Digital Marketing and Search Engine Optimization (SEO)",
        "UI/UX Design Fundamentals",
        "Graphic Design and Content Creation",
        "E-Commerce and Website Management",
        "Social Media Marketing and Branding",
        "WordPress and CMS Development",
        "Mobile Application Development Basics",
        "Live Client Projects and Portfolio Development",
        "Professional Skills and Placement Readiness"
      ]
    },
    {
      id: 10,
      title: "Verbly AI",
      description: "Eduskill is a comprehensive digital learning and upskilling platform designed to empower students with industry-relevant skills and certifications. It offers a wide range of online courses, virtual labs, and certification programs in collaboration with top global tech partners. Verbly AI helps bridge the skill gap between academic learning and industry requirements, enhancing students' employability and making them job-ready for emerging technologies.",
      modules: [
        "Introduction to Artificial Intelligence",
        "Python Programming for AI & Data Science",
        "Data Analysis and Data Visualization",
        "Machine Learning Algorithms and Applications",
        "Deep Learning Fundamentals",
        "Natural Language Processing (NLP)",
        "Computer Vision Basics",
        "Generative AI and Large Language Models (LLMs)",
        "AI Model Development using Industry Tools",
        "Capstone Projects, Case Studies, and Placement Preparation"
      ]
    },
    {
      id: 11,
      title: "Industry Training Program by Tata Consultancy Services",
      description: "Tata Consultancy Services (TCS) is a global leader in IT services, consulting, and digital transformation. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, TCS collaborates to deliver industry-oriented training programs that enhance students' technical knowledge, professional skills, and employability. The program is designed to bridge the gap between academic learning and industry expectations through expert-led sessions and practical learning experiences.",
      modules: [
        "Core Programming and Software Development Fundamentals",
        "Quantitative Aptitude and Logical Reasoning",
        "Problem Solving and Computational Thinking",
        "Communication and Soft Skills Development",
        "Software Engineering Principles and Industry Best Practices",
        "Agile Methodologies and Project Management Basics",
        "Professional Ethics and Corporate Readiness",
        "Placement Preparation, Mock Assessments, and Interview Skills",
        "Industry Projects and Certification Support"
      ]
    },
    {
      id:12,
      title: "Campus Recruitment Training (CRT) by FACE",
      description: "FACE (Focus Academy for Career Enhancement) is one of India's leading placement training organizations, offering comprehensive Campus Recruitment Training (CRT) programs to enhance students' employability and placement readiness. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, FACE conducts structured training sessions that strengthen students' aptitude, communication, technical, and interview skills in line with current industry recruitment practices. The program is delivered by experienced trainers using industry-relevant methodologies, enabling students to develop the confidence and competencies required to succeed in campus recruitment drives conducted by leading organizations.",
      modules: [
        "Quantitative Aptitude and Logical Reasoning",
        "Verbal Ability and English Communication",
        "Technical Training for CS/IT and Core Engineering Branches",
        "Group Discussion and Personal Interview Skills",
        "Resume Building and Professional Profile Development",
        "Mock Tests and Mock Interview Sessions",
        "Soft Skills and Corporate Etiquette",
        "Placement Preparation and Recruitment Readiness"
      ]
    },
    {
      id: 13,
      title: "Design Edge Academy Training Program",
      description: "The Design Edge Academy Training Program is an industry-oriented skill development initiative that equips students with practical expertise in engineering design, drafting, structural analysis, Building Information Modelling (BIM), and project management. At Chhatrapati Shivaji Institute of Technology (CSIT), Durg, the program provides hands-on training using industry-standard software, enabling students to develop technical competencies aligned with current engineering and construction practices. The training emphasizes experiential learning through live projects, case studies, and practical assignments, preparing students for careers in construction, infrastructure, manufacturing, and engineering consultancy.",
      modules: [
        "AutoCAD for 2D & 3D Drafting and Engineering Design",
        "Revit for Building Information Modelling (BIM)",
        "STAAD.Pro for Structural Analysis and Design",
        "ETABS for Multi-Storey Building Analysis and Design",
        "Primavera P6 for Project Planning and Scheduling",
        "MIDAS for Advanced Structural and Bridge Engineering",
        "Engineering Drawing and Design Documentation",
        "Industry Case Studies and Live Design Projects",
        "Structural Modelling, Analysis, and Project Execution",
        "Professional Skills and Industry Readiness"
      ]
    }
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
              Training & Assessment
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              Empowering students with industry-aligned skills and recognized assessments for career success.
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-8">
          {trainingAndAssessmentData.map((item, index) => (
            <div key={item.id} className={`p-5 rounded-lg shadow-sm ${index % 2 === 0 ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-gray-50 border-l-4 border-gray-400'}`}>
              <h3 className="text-xl font-semibold text-[#0d173b] mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{item.description}</p>
              
              {(item.modules || item.features) && (
                <div>
                  <h4 className="text-sm font-semibold text-[#0d173b] mb-2">{item.modules ? 'Training Modules include:' : 'Key Features'}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {(item.modules || item.features).map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-[#0d173b] mr-2 mt-1"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingProgramme;