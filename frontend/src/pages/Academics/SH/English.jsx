import React from "react";

const EnglishContent = () => {
  const faculty = [
    {
      id: 1,
      name: "Dr. Chandra Shekhar Sharma",
      designation: "Associate Professor and Head",
      department: "Department of English",
      qualification:
        "M.A.(English), M.A. (Sociology), B.Ed., Diploma in University Teaching (New Brunswick) and PhD [English Literature]",
      experience: "26 Years",
      email: "chandrashekhar@csitdurg.in",
    },
  ];

  const courses = [
    {
      title: "Professional Communication Skills",
      code: "3000A06DT046",
      objectives: [
        "To enable students to communicate effectively to meet workplace challenges and exchange information beneficially in various professional contexts.",
        "To make the students proficient in language and to use different communication skills and principles to function effectively in a professional setting.",
      ],
      outcomes: [
        "CO1: Demonstrate a better understanding of the communication process by identifying, explaining, and applying current communication theories",
        "CO2: Develop clear and error-free language proficiency to communicate fluently in English",
        "CO3: Listen, read and comprehend and synthesize information from different sources and respond appropriately.",
        "CO4: Learn the various oral communication situations to elicit desired results.",
        "CO5: Understand and appropriately apply modes of expression in written communication and develop the fundamental skills and techniques in drafting effective business documents and research papers.",
      ],
      syllabus:
        "https://csvtu.ac.in/ew/download/semester-1-computer-science-engineering/?wpdmdl=21237&refresh=6a3e222794b051782456871",
    },
    {
      title: "Foundation Course on Ancient Indian Knowledge Systems",
      code: "3000A07ET046",
      objectives: [
        "To briefly introduce different areas of science and technology of Indian Knowledge System and Indian perspective of modern scientific view.",
        "To give a brief overview of selected areas of IKS, ancient mathematics, astronomy, literature and arts.",
        "To give foundation knowledge on work done by Indian Mathematicians in the fields such as Astronomy, Astrology, Geometry, Algebra, and Arithmetic etc",
      ],
      outcomes: [
        "CO1: Student understand the various Pramana’s used in the Indian Knowledge System.",
        "CO2: Study of Indian Mathematics will reveal to students how it is embedded in Indian art, architecture, music, and religious practices, fostering a deeper understanding and appreciation of Indian culture.",
        "CO3: They have been introduced to some fields of IKS used in present Science and Technology.",
        "CO4: They have been introduced to some fields of IKS like Ayurved and Yoga.",
      ],
      syllabus:
        "https://csvtu.ac.in/ew/download/semester-1-computer-science-engineering/?wpdmdl=21237&refresh=6a3e222794b051782456871",
    },
    {
      title: "Indian Culture and Constitution",
      code: "3000B05ET046",
      objectives: [
        "The Constitution is the supreme law and it helps to maintain Integrity in the society and to promote unity among the citizens to build a great nation. The main objective of the Indian Constitution is to promote harmony throughout the nation.",
      ],
      outcomes: [
        "To understand Meaning and concepts of Traditional and Modern of Culture",
        "To understand Sources of the Study of Indian Culture",
        "To Enable the student to understand the history and importance of constitution",
        "To understand philosophy of fundamental rights and duties",
        "To understand the powers and functions of executive, legislature and judiciary",
        "To understand the powers and functions of state government",
        "To understand the recent trends in Indian Constitutional and election commission of India",
        "To understand the centrall and sate relation, financial and administrative",
      ],
      syllabus:
        "https://csvtu.ac.in/ew/download/semester-2-computer-science-engineering/?wpdmdl=21236&refresh=6a3e22278fa351782456871",
    },
  ];

  const labObjectives = [
    "To enhance students' communication skills in English, with emphasis on listening, speaking, reading, and writing (LSRW)",
    "Develop effective listening comprehension skills to understand spoken English in academic and real-life contexts through structured audio-based activities",
    "Learn accurate pronunciation, intonation, stress, and rhythm to enhance clarity and fluency in spoken English.",
    "Apply appropriate speaking and conversational skills in everyday situations through dialogues and interactive communication tasks.",
    "Enrich vocabulary and grammatical accuracy through technology-assisted language learning.",
    "Develop Writing Skills required in professional settings.",
    "Exhibit professional communication skills in workplace interactions and interviews using appropriate language and etiquette.",
    "Deliver effective presentations with clarity and confidence.",
  ];

  return (
    <div className="prose max-w-none text-gray-700">
      <h3 className="text-xl font-medium text-[#0d173b] mb-2">
        About Department
      </h3>
      <p>
        The Department of English aims to facilitate the students to acquire
        English Language Skills and Professional Skills so to tread
        successfully on their career path. The department just not dedicates
        in teaching the students about English language rather it dedicates in
        providing a free and fair language learning environment through vivid
        pedagogical methods and resources so that the learners become
        industry-ready and professionally strong. The Department has a Language
        Lab and good stock of text, reference and self-help books.
      </p>
      <p>
        The Department offers modules and training on Professional
        Communication Skills, Organizational Ethics, Soft Skills, and
        Personality Development that aim to build confidence, leadership, and
        workplace readiness. The Department also houses a language lab with
        latest computer systems and a language Learning Software which offers
        immersive, interesting, natural and interactive-learning experiences.
      </p>
      <p>
        The department also engages in teaching modules on Indian Knowledge
        System, Value Education and Indian Culture and Constitution to make
        learners aware of their socio-cultural roots.
      </p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Vision</h3>
      <p>
        To help students acquire skills in English Language to communicate
        effectively in all aspects so as to achieve academic excellence and
        professional distinctions.
      </p>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">Mission</h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          Facilitate the student-fraternity with quality education and strong
          language-learning environment resulting in affection and a deep
          understanding about English Language.
        </li>
        <li>
          To inculcate professionally suitable personality traits in the
          students thereby imbibing ethical, professional and leadership
          qualities.
        </li>
      </ul>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">
        Strengths
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Large set of academic resources</li>
        <li>Well-equipped language laboratory</li>
        <li>Advanced language learning soft-wares</li>
        <li>Special support classes for weaker students</li>
        <li>Guidance facilities for aspiring candidates appearing in campus drives</li>
      </ul>

      <h3 className="text-xl font-medium text-[#0d173b] mt-8 mb-2">
        Faculty
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qualification</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {faculty.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.designation}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.qualification}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{member.experience}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <a href={`mailto:${member.email}`} className="text-indigo-600 hover:underline">{member.email}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-2xl font-bold text-[#0d173b] mt-12 mb-6 border-b-2 pb-2">
        Courses Offered
      </h3>
      <div className="space-y-8">
        {courses.map((course, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h4 className="text-xl font-semibold">
              {course.title}{" "}
              <span className="text-base font-normal text-gray-600">
                ({course.code})
              </span>
            </h4>
            <div className="mt-4">
              <h5 className="font-semibold">Course Objectives:</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {course.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold">Course Outcomes:</h5>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                {course.outcomes.map((out, i) => (
                  <li key={i}>{out}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <a
                href={course.syllabus}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                View Syllabus
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-[#0d173b] mt-12 mb-6 border-b-2 pb-2">
        Language Lab
      </h3>
      <p>
        The Language Laboratory of the Department of English helps to learn
        English language with modern technology. It provides technology
        assisted natural language learning atmosphere. The Language Lab is
        designed to enhance students' communication and language proficiencies
        in English. The Lab is equipped with advanced audio-visual resources,
        language learning software, that provide an vibrant environment for
        developing listening, speaking, pronunciation, reading, and
        presentation skills. It also serves as a space for students to build
        confidence in professional and academic communication.
      </p>
      <div className="mt-4">
        <h5 className="font-semibold">Objectives:</h5>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          {labObjectives.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EnglishContent;
