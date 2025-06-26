import React from "react";

const Celebration = () => {
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
              Celebration
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | Cherishing Moments
            </p>
            <div className="h-0.5 w-12 bg-white mt-3"></div>
          </div>
        </div>
      </div>

      {/* Celebration Content */}
      <div className="p-6 space-y-6 bg-gray-50">
        {[
          {
            title: "Teacher's Day",
            icon: "🎓",
            content:
              "Teachers day is celebrated all across India every year on 5th of September to pay tribute to the teachers for their precious contributions in study as well as towards society and the country. For all students of CSIT, Teachers Day is like an occasion and opportunity to pay tribute and show gratitude to their teachers for their continuous, selfless and precious efforts in shaping their future. A huge amount of preparation is done by the students to honour their teachers. On September 5, the students organised a grand function for their teachers with speeches and cultural programmes.",
          },
          {
            title: "Republic Day",
            icon: "🇮🇳",
            content:
              "Indian Republic Day commemorates the date on which the The Constitution of India came into force and it became a fully sovereign nation. The day began with flag hoisting and speech given by Chairman, Director and Principal followed by various cultural programs such as dance, patriotic songs, drama and poem.",
          },
          {
            title: "LaQshya",
            icon: "🌟",
            content:
              "LAQSHYA, Bringing with it an experience of novelty, antagonism and continuous learning that have become its traits over the years. Since its origin in 2009, the festival has constantly scaled new heights. Its a National Level Techno Management Fest, which has earned a glorious reputation in the Central India region as students from various prestigious Colleges from across the nation participate in it. More than 1000 students participate in this mega event every year. The 3-day-long festival LAQSHYA, organised under the Sponsorship of numerous industry giants each year. Moreover the galactic events are consistently addressed by the top celebrities of our country.",
          },
          {
            title: "Induction Program",
            icon: "🔄",
            content:
              "An induction programme is the process used within many organisations to welcome new members to the Institute and prepare them for their new role. It helps in the integration of students into the organisation. The Induction programme is organised for the first-year students of all branches to give an orientation about the college, its staff members, and the CSIT culture.",
          },
          {
            title: "Independence Day",
            icon: "🏁",
            content:
              "The Independence Day is celebrated on August 15 every year to commemorate the freedom and sacrifices of India from British rule in 1947. CSIT took the initiative to pay Homages to the needy, along with celebrating with flag hosting and cultural devote ourselves to our freedom fighters.",
          },
          {
            title: "Fresher's Day",
            icon: "🎭",
            content:
              "Fresher's party is a gracious and cordial welcome by the second-year students to the first-year students. It is an event where freshers are not only given a chance, to exhibit their talents but also feel comfortable and adapt to the new surroundings. CSIT students take the virtual route to host and enjoy Fresher's Fest on campus. Numerous events and Programmes are conducted, which are mainly divided into four categories: cultural, photography, gaming and informatics. The prize holders are fascinated with surprises and gifts.",
          },
          {
            title: "Foundation Day",
            icon: "🏫",
            content:
              "CSIT has completed its two decades of glorious history and celebrates its Foundation Day in an ostentatious way. A day when memoirs, experiences, ecstasy, and enthusiasm all got entangled with each other. On this auspicious occasion, various prizes are distributed to students for their excellent academic performances. The Parents of University toppers and semester toppers of all branches receive the Certificate award. Certificates and rewards are given to the students association, position holders and students with more than 95% attendance. On this occasion, a felicitation program of the faculties, where Certificates of Appreciation are distributed to the faculties, who had achieved the land marks. The first among them are appreciation for their contribution to Institute.",
          },
          {
            title: "Engineer's Day",
            icon: "⚙️",
            content:
              "Every year on September 15, India, Sri Lanka, and Tanzania celebrate National Engineer's Day to recognise and honour the achievements of the great engineer Mokshagundam Visvesvaraya. The day is observed to commemorate the great work of engineers and to encourage their improvement and innovation. CSIT also celebrates Engineers Day, marking the importance of Engineers in Society. The event is celebrated, and the celebration aims to bring out and enhance the potential and engineering skills of every student. The dignitaries show the importance of engineers to the Students by putting their views and ideas in front of them.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-[#0d173b] p-6 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-start">
              <div className="bg-blue-50 rounded-full h-12 w-12 flex items-center justify-center mr-4 shadow-sm">
                <span className="text-2xl" role="img" aria-label={item.title}>
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0d173b] mb-2 flex items-center">
                  {item.title}
                </h3>
                <div className="w-8 h-0.5 bg-[#0d173b] opacity-50 mb-3"></div>
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Celebration;
