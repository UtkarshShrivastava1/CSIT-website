import React from 'react';

export default function SimpleFacilitiesTable() {
  const facilities = [
    {
      id: 1,
      title: "Gymnasium",
      description: "As the lithe body moved in perfect coordination with the others, I marveled at this beautiful form. In a world of cars and electronic media, where hardly anyone has to move to get anything done, its important to give ourselves an excuse to move and get necessary exercise. There are negative effects that can results from lack of exercise."
    },
    {
      id: 2,
      title: "Temple",
      description: "Along with our daily schedule, we also need positivity and blessings of the Almighty to keep ourselves pious and tranquil. To fulfil this, We also have Shri Sharada Chandramoulishwaray [LORD SHIVA] Temple inside the campus, whose blessings are always showered on each and every person here."
    },
    {
      id: 3,
      title: "Security",
      description: "The College has a well-defined organisational security framework. The security of students and staff at campus is our top priority. A well trained fleet of Security Guards are at deployed for security services at all the required points in the campus. Security services at the hostel are very precise so as to ensure security and maintain discipline."
    },
    {
      id: 4,
      title: "Transport",
      description: "The Institute offers bus facility to students coming from distant places in Durg City. Buses with the capacity of 50 seats pass through the different routes so as to cover major areas and colonies of Durg. These buses are also used for Industrial Visits and Short Distance Trips Students and Faculties can avail the Bus Facility by paying the requisite fees. With notable subsidized fares even in the skyrocketing prices of petrol, college provides transport facilities for students and teachers as well."
    },
    {
      id: 5,
      title: "Bank & ATM Facility",
      description: "The college has an on-campus Bank Facility. Chhattisgarh Rajya Grahmin [CRGB] bank. For the convenience of the Students and Staff and to save their valuable time, the college provides ATM facilities. The college has State Bank of India ATM CENTRE on campus, providing services to the people from adjoining villages."
    },
    {
      id: 6,
      title: "Hostel",
      description: "We understand that most of our students are moving away from home for the first time, so we strive to make the transition as smooth as possible by offering comfortable and safe hostels with a homely atmosphere. The college offers two separate hostels for boys and two hostels for girls with a capacity of 150 students each, with a hostel warden or manager in each hostel to supervise day-to-day management; in addition to this, round-the-clock security is provided at the hostels. All the rooms have been designed and furnished to provide adequate moving space with ample air and light.",
      hasAmenities: true,
      amenities: [
        "AMENITIES AND FACILITIES",
        "Students will get all the basic amenities like a bed, table, chair, and electrical fittings.",
        "Spacious recreation room.",
        "Round-the-clock electricity supply with high end generator back-up.",
        "Several Newspapers as well as Magazines are subscribed, and TV is also provided to get them relaxed during leisure time and also to keep them updated.",
        "The Computer Centre and Library are kept open for residents of the hostel."
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      {/* Header section with more spacing */}
      <div className="bg-[#0d173b] text-white p-8 rounded-t-lg shadow-md mb-6">
        <h1 className="text-4xl font-bold mb-3">Hostel And Other Facilities</h1>
        <p className="text-lg mt-4 opacity-90">CSIT | Information Dashboard</p>
        <hr className="w-32 border-t-2 border-white mt-6 mb-2" />
      </div>
     
      <div className="overflow-x-auto bg-white rounded-b-lg shadow-inner">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#0d173b] text-white border-b border-blue-700">
              <th className="py-4 px-6 text-left w-16 rounded-tl-lg">S.No</th>
              <th className="py-4 px-6 text-left w-40">Title</th>
              <th className="py-4 px-6 text-left rounded-tr-lg">Description</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((facility, index) => (
              <tr 
                key={facility.id} 
                className={index % 2 === 0 ? 'bg-blue-50 hover:bg-blue-100' : 'bg-white hover:bg-blue-50'}
              >
                <td className="py-5 px-6 border-t border-gray-300 font-medium">{facility.id}</td>
                <td className="py-5 px-6 border-t border-gray-300 font-semibold text-blue-800">{facility.title}</td>
                <td className="py-5 px-6 border-t border-gray-300 text-gray-700">
                  <div className="leading-relaxed">{facility.description}</div>
                  
                  {/* Enhanced spacing for amenities section */}
                  {facility.hasAmenities && (
                    <div className="mt-8 mb-4 bg-blue-50 p-6 rounded-lg border-l-4 border-[#0d173b]">
                      <p className="font-bold text-[#0d173b] text-xl mb-4">{facility.amenities[0]}</p>
                      <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-700">
                        {facility.amenities.slice(1).map((amenity, idx) => (
                          <li key={idx} className="py-2">{amenity}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>
  );
}