import { Calendar, UserPlus, Heart, BookOpen, Award, Activity, Users, Droplet, Sunrise } from 'lucide-react';

export default function SocialResponsibilityInitiatives() {
  const initiatives = [
    {
      id: 1,
      title: "Career Guidance Programs",
      description: "Conducted various career guidance program for the students of 12th standard at different places.",
      icon: <BookOpen className="text-blue-600" />,
      category: "Education"
    },
    {
      id: 2,
      title: "E-TAP (Technical Education Awareness Program)",
      description: "Organized yearly to create awareness among students to choose their branch wisely.",
      icon: <Award className="text-green-600" />,
      category: "Education"
    },
    {
      id: 3,
      title: "Contributions to Old Age Home",
      description: "Students visit old age homes and perform various acts and distribute gifts to the elder ones, bringing smiles to their faces every year on 15th Aug.",
      icon: <Heart className="text-red-600" />,
      category: "Community Service"
    },
    {
      id: 4,
      title: "Contributions to Orphanage",
      description: "Students visit orphanages and perform various activities and distribute gifts every year on 15th Aug.",
      icon: <UserPlus className="text-purple-600" />,
      category: "Community Service"
    },
    {
      id: 5,
      title: "Support for Mentally Challenged Children",
      description: "Students visit the home for mentally challenged children and spend time with them, giving away gifts every year on 26th Jan.",
      icon: <Heart className="text-pink-600" />,
      category: "Community Service"
    },
    {
      id: 6,
      title: "Road Safety Awareness",
      description: "Organized rally to create awareness among people regarding safety measures while driving two-wheelers and helmet awareness program.",
      icon: <Activity className="text-yellow-600" />,
      category: "Public Safety"
    },
    {
      id: 7,
      title: "Education for Underprivileged",
      description: "Providing classes to the school students of weaker section of society throughout the year by faculty members.",
      icon: <Users className="text-indigo-600" />,
      category: "Education"
    },
    {
      id: 8,
      title: "Blood Donation Camp",
      description: "Organized by Departmental Student Association with Institute of Engineers [India] Bhilai Local Center.",
      icon: <Droplet className="text-red-600" />,
      category: "Healthcare"
    },
    {
      id: 9,
      title: "Matdata Jagrukta Abhiyaan",
      description: "Manav Srinkhla will be organized at college campus on 2nd October, Birth Anniversary of Mahatma Gandhi.",
      icon: <Users className="text-orange-600" />,
      category: "Civic Engagement"
    },
    {
      id: 10,
      title: "International Yoga Day",
      description: "Celebrated on 21st June at College campus where all the staff and students participate.",
      icon: <Sunrise className="text-teal-600" />,
      category: "Wellness"
    }
  ];

  // Group initiatives by category
  const groupedInitiatives = initiatives.reduce((acc, initiative) => {
    if (!acc[initiative.category]) {
      acc[initiative.category] = [];
    }
    acc[initiative.category].push(initiative);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
     
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Social Responsibility</h1>
          <p className="text-sm md:text-base mt-1">CSIT |  Corporate Social Responsibility has always been an integral part of the institute vision. The management has undertaken several initiatives to benefit society at large.</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
        </div>

      <div className="p-6">
        {Object.entries(groupedInitiatives).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map(initiative => (
                <div 
                  key={initiative.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4"
                >
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-blue-50 mr-4 mt-1">
                      {initiative.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{initiative.title}</h3>
                      <p className="mt-2 text-gray-600">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      
    </div>
  );
}