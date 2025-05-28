import React from 'react'

const PlacementStatistics = () => {
  // Array of placement stat images
  const placementStats = [
    '2cbe62f3d0cfefe68682aad885328333.png',
    '17f67d7bc7e082b1726272c79be1f81f.png',
    '7e8db1cd1f11459d7b12476619ee10e1.png',
    '68e9286296d993dfaff288384eba11a0.png',
    '4ef34b7b0f878fa546519f66d22d18cc.png',
    'a12351bb7b7cefd401ae8c896c41b8e6.png',
    '384047705f214ab08897029dda081802.png',
    '1386f051819972d621fae85e36d7cd74.png',
    '145d10a4004256950b80f3446b751a8a.png',
    '0ff8ec95625eb33d9d2c4a195034533f.png',
    '37911982fcd96ba511df822586f2de66.png',
    'e6a54e4d663073894bbbda8afc147f83.png',
    '14aedb54d9666134d5daa9378df9433a.png',
    '8933c54e4ef338575ba95ed82b81166c.png',
    'fec660423a008e32a298b6cd2e4c2f0e.png',
    'e8b7a44f1a417b4ba1a33a44c64fd21e.png',
    'e07c3aadbd19f043322e0b5a9d1ad9a1.png',
    '19d9786b0399f0086ed71d84215a7583.png',
    '93fd59e2c80feb273b37ae0e3130f130.png',
    '7c38b1daeb2ea443220d37bf0d333bed.png',
    'd88c67f226e4364287cc70a5df584380.png',
    '7b4b84acd1ab452836c1f30fd2c52914.png'
  ];

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      {/* Header */}
      <div className="h-32 sm:h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full transform rotate-12 scale-150 translate-y-10">
            <div className="w-20 h-60 bg-white/10 rounded-full blur-xl absolute -left-10"></div>
            <div className="w-20 h-40 bg-white/10 rounded-full blur-xl absolute right-20 top-10"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Placement Statistics
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2">
              CSIT | Placement Records
            </p>
            <div className="h-0.5 w-8 sm:w-12 bg-white mt-2 sm:mt-3"></div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="prose max-w-none text-gray-700">
          {/* Introduction */}
          <div className="mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Our placement statistics showcase the consistent success of our students in securing excellent career opportunities. The following data represents our placement records across different years and departments.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {placementStats.map((image, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img 
                  src={`/src/assets/placementStat/${image}`}
                  alt={`Placement Statistics ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementStatistics
