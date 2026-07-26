import React from 'react';
import { Trophy, Shield, Users, Medal } from 'lucide-react';

const Sports = () => {
  const teamMembers = [
    { name: 'Mr. Shubham Chandrakar', designation: 'Prof. I/C Games & Sports' },
    { name: 'Mr. K.P. Yadav', designation: 'Sports Officer' },
  ];

  const achievements = {
    totalEvents: 16,
    participated: 15,
    podiumFinishes: 10,
    winners: 6,
    runnersUp: 2,
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center"><Trophy className="mr-3" />Sports Facilities and Achievements</h1>
          <p className="text-base text-gray-200 mt-2">
            Fostering physical fitness, teamwork, and leadership at CSIT
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-6 space-y-8">
        {/* Team Members */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><Users className="mr-2" />Sports Committee</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#0d173b]">
                <p className="font-bold text-lg text-[#0d173b]">{member.name}</p>
                <p className="text-sm text-gray-600">{member.designation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Sports at CSIT</h2>
          <p className="text-gray-700 leading-relaxed">
            CSIT is committed to fostering the overall development of its students by providing excellent sports and recreational facilities throughout the year. The institute believes that sports play a vital role in shaping future engineers, entrepreneurs, administrators, and leaders by promoting physical fitness, teamwork, discipline, and leadership skills.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            To ensure a balanced blend of academic excellence and extracurricular engagement, CSIT offers a comprehensive range of indoor and outdoor sports facilities within its campus. The state-of-the-art sports complex, equipped with modern infrastructure and floodlit outdoor arenas, serves as a hub for sporting activities and student recreation.
          </p>
        </section>

        {/* Facilities */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Facilities</h2>
          <p className="text-gray-700 leading-relaxed">
            The institute provides facilities for a variety of games and sports, including a well-equipped multi-station gymnasium, indoor and outdoor badminton courts, table tennis arena, cricket practice nets with artificial turf pitch for all-season training, football ground, volleyball courts, basketball court, handball court, and other recreational activities. Qualified sports personnel and coaches guide students in developing their skills and encourage active participation in various sporting disciplines.
          </p>
        </section>

        {/* Achievements */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4 flex items-center"><Medal className="mr-2" />Achievements (2025–26)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CSIT students have consistently demonstrated outstanding performance in inter-college sports competitions. During the academic session 2025–26, the institute actively participated in numerous inter-college sporting events and achieved remarkable success across various disciplines.
          </p>
          <h3 className="font-semibold text-lg text-gray-800 mb-3">Performance Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">{achievements.totalEvents}</p>
              <p className="text-sm text-[#0d173b]">Total Events Held</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">{achievements.participated}</p>
              <p className="text-sm text-[#0d173b]">Events Participated</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">{achievements.podiumFinishes}</p>
              <p className="text-sm text-[#0d173b]">Podium Finishes</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">{achievements.winners}</p>
              <p className="text-sm text-[#0d173b]">Championship Titles</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-3xl font-bold text-blue-900">{achievements.runnersUp}</p>
              <p className="text-sm text-[#0d173b]">Runner-Up Positions</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            These achievements reflect the institute’s strong sporting culture, dedicated coaching support, and the determination of its students to excel both on and off the field.
          </p>
        </section>

        {/* Events and Recognition */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#0d173b] mb-4">Events and Recognition</h2>
          <p className="text-gray-700 leading-relaxed">
            To maximize student participation, the institute regularly organizes sporting events at multiple levels, including Freshers’ Sports Meet, Inter-Branch Competitions, Intra-Hostel Tournaments, and separate events for boys and girls. To recognize and celebrate sporting excellence, winners and runners-up are awarded trophies, medals, and certificates, while all participants receive e-certificates for their enthusiastic involvement.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Sports;