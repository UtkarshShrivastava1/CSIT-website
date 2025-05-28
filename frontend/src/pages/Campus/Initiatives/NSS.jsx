export default function NssInitiativesList() {
  const initiativesData = [
    {
      id: 1,
      year: 2023,
      from: "23-Jan-2023",
      to: "23-Jan-2023",
      place: "Beacon Hs. School & Sarasvati Shisu Mandir, Korba",
      activity: "Awareness Programme on Internet Of Things (IOT) for the school students of Beacon Hs. School & Sarasvati Shisu Mandir, Korba",
      category: "Technology"
    },
    {
      id: 2,
      year: 2022,
      from: "22-Dec-2022",
      to: "22-Dec-2022",
      place: "Swami Atmanand H.S English & Hindi Medium School, Risali-Bhilai",
      activity: "One Day Yoga & Meditation Workshop for the students of Swami Atmanand H.S English & Hindi Medium School, Risali-Bhilai",
      category: "Health"
    },
    {
      id: 3,
      year: 2022,
      from: "20-Dec-2022",
      to: "20-Dec-2022",
      place: "Swami Atmanand H.S. English & Hindi Mediam School, Jamgaon",
      activity: "Awareness Programme on Internet Of Things (IOT) for the students of Swami Atmanand H.S. English & Hindi Mediam School, Jamgaon",
      category: "Technology"
    },
    {
      id: 4,
      year: 2022,
      from: "16 &17-Dec-2022",
      to: "16 &17-Dec-2022",
      place: "1) Indus Public School & Chhatisgarh Public School, Korba 2) Govt HSS",
      activity: "Awareness Programme on Internet Of Things (IOT) for the students Indus Public School & Chhatisgarh Public School, Korba and Govt HSS, Champa",
      category: "Technology"
    },
    {
      id: 5,
      year: 2022,
      from: "15-Dec-2022",
      to: "15-Dec-2022",
      place: "K.D Public School, Borsi Road, Durg",
      activity: "Road Safety and Helmet Awareness Programme for the students of K.D Public School, Borsi Road, Durg",
      category: "Safety"
    },
    {
      id: 6,
      year: 2022,
      from: "13-Dec-2022",
      to: "13-Dec-2022",
      place: "St.Xavier High School, Durg",
      activity: "Road Safety and Helmet Awareness Programme for the students of St.Xavier High School, Durg",
      category: "Safety"
    },
    {
      id: 7,
      year: 2022,
      from: "13-Dec-2022",
      to: "13-Dec-2022",
      place: "Senior Secondery School Sector 7 Bhilai",
      activity: "One Day Workshop on Python Programming for the students of Senior Secondery School Sector-7, Bhilai",
      category: "Technology"
    },
    {
      id: 8,
      year: 2022,
      from: "12-Oct-2022",
      to: "12-Oct-2022",
      place: "Government Higher Secondary School, Bemetara",
      activity: "One Day Career Guidance Workshop for the student of Government Higher Secondary School, Bemetara",
      category: "Career"
    },
    {
      id: 9,
      year: 2022,
      from: "09-Dec-2022",
      to: "09-Dec-2022",
      place: "Government Higher Secondary Lohara Balod",
      activity: "Road Safety and Helmet Awareness Programme for the students of Government Higher Secondary, Lohara Balod",
      category: "Safety"
    },
    {
      id: 10,
      year: 2022,
      from: "09-Dec-2022",
      to: "09-Dec-2022",
      place: "Pragai Highar Sec. School, Dondilohara",
      activity: "One Day Career Guidance Workshop for the students of Pragai Higher Sec. School, Dondilohara",
      category: "Career"
    },
    {
      id: 11,
      year: 2022,
      from: "09-Dec-2022",
      to: "09-Dec-2022",
      place: "S.A G.E.S , Dondilohara",
      activity: "One Day Career Guidance Workshop for the students of S.A G.E.S . Dondilohara",
      category: "Career"
    },
    {
      id: 12,
      year: 2022,
      from: "09-Dec-2022",
      to: "09-Dec-2022",
      place: "Vishwadeep Eng Medium School, Durg",
      activity: "Awareness Programme on Internet Of Things (IOT) for the students of Vishwadeep Eng Medium School, Durg",
      category: "Technology"
    },
    {
      id: 13,
      year: 2022,
      from: "08-Dec-2022",
      to: "08-Dec-2022",
      place: "Swami Atmanand H.S.English Mediam School, Risali",
      activity: "Awareness Programme on Internet Of Things (IOT) for the students of Swami Atmanand H.S English Mediam School, Risali",
      category: "Technology"
    },
    {
      id: 14,
      year: 2022,
      from: "07-Dec-2022",
      to: "07-Dec-2022",
      place: "Government Higher Secondary School, (Farad Fod) Balod",
      activity: "One Day Career Guidance Workshop for the students of Government Higher Secondary School, (Farad Fod) Balod",
      category: "Career"
    },
    {
      id: 15,
      year: 2022,
      from: "07-Dec-2022",
      to: "07-Dec-2022",
      place: "Government Higher Secondary School , Sanjari Balod",
      activity: "One Day Career Guidance Workshop for the students of Government Higher Secondary School , Sanjari Balod",
      category: "Career"
    },
    {
      id: 16,
      year: 2022,
      from: "07-Dec-2022",
      to: "07-Dec-2022",
      place: "Government Higher Secondary School, Ranakhuji Balod",
      activity: "One Day Career Guidance Workshop for the students of Government Higher Secondary School, Ranakhuji Balod",
      category: "Career"
    },
    {
      id: 17,
      year: 2022,
      from: "07-Dec-2022",
      to: "07-Dec-2022",
      place: "Government Higher Secondary School, Khuthabazar Balod",
      activity: "One Day Career Guidance Workshop for the students of Government Higher Secondary School, Khuthabazar Balod",
      category: "Career"
    },
    {
      id: 18,
      year: 2022,
      from: "05-Dec-2022",
      to: "05-Dec-2022",
      place: "Government Higher Secondary School, Malighur, Bhimkanhar, Ghina Balod",
      activity: "One Day Career Guidance Workshop for the students of Government Higher Secondary School, Malighur, Bhimkanhar, Ghina Balod",
      category: "Career"
    },
    {
      id: 19,
      year: 2022,
      from: "03-Dec-2022",
      to: "03-Dec-2022",
      place: "Govt. Adarsh Kanya H.S.S. Durg",
      activity: "Helmet Awareness Programme for the students of Govt. Adarsh Kanya H.S.S. Durg",
      category: "Safety"
    },
    {
      id: 20,
      year: 2022,
      from: "02-Dec-2022",
      to: "02-Dec-2022",
      place: "Vivekanand Vidyapeeth, Bhilai",
      activity: "Helmet Awareness Programme for the students of Vivekanand Vidyapeeth, Bhilai",
      category: "Safety"
    },
    {
      id: 21,
      year: 2022,
      from: "01-Dec-2022",
      to: "01-Dec-2022",
      place: "Government Higher Secondary School, Rasmada Durg",
      activity: "One Day Career Guidance Workshop for the students of Government Higher Secondary School, Rasmada Durg",
      category: "Career"
    },
    {
      id: 22,
      year: 2022,
      from: "01-Dec-2022",
      to: "01-Dec-2022",
      place: "Government Atmanand Higher Secondary School, Bori",
      activity: "One Day Career Guidance Workshop for the students of Government Atmanand Higher Secondary School, Bori",
      category: "Career"
    },
    {
      id: 23,
      year: 2022,
      from: "01-Dec-2022",
      to: "01-Dec-2022",
      place: "Government Higher Secondary School, Nagpura",
      activity: "One Day Career Guidance Workshop for the students of Government Higher Secondary School, Nagpura",
      category: "Career"
    },
    {
      id: 24,
      year: 2022,
      from: "30-Nov-2022",
      to: "30-Nov-2022",
      place: "DAV, HUDCO Bhilai",
      activity: "Helmet Awareness Programme for the students of DAV, HUDCO Bhilai",
      category: "Safety"
    },
    {
      id: 25,
      year: 2022,
      from: "29-Nov-2022",
      to: "29-Nov-2022",
      place: "Government Hr. Sec. School Kanharpuri, Rajnandgaon",
      activity: "Awareness Programme on Internet Of Things (IOT) for the students of Government Hr. Sec. School Kanharpuri, Rajnandgaon",
      category: "Technology"
    },
    {
      id: 26,
      year: 2022,
      from: "29-Nov-2022",
      to: "29-Nov-2022",
      place: "Sarweshweshwar Das School of Excellence, Ragnandgaon",
      activity: "Awareness Programme on Internet Of Things (IOT) for the students of Sarweshweshwar Das School of Excellence, Ragnandgaon",
      category: "Technology"
    },
    {
      id: 27,
      year: 2022,
      from: "29-Nov-2022",
      to: "29-Nov-2022",
      place: "Maharishi Dayanand School , Sec. 6 Bhilai",
      activity: "Helmet Awareness Programme for the students of Maharishi Dayanand School , Sec. 6 Bhilai",
      category: "Safety"
    },
    {
      id: 28,
      year: 2022,
      from: "28-Nov-2022",
      to: "28-Nov-2022",
      place: "Govt. H.S.S Ghumka",
      activity: "One Day Career Guidance Workshop for the students of Govt. H.S.S Ghumka",
      category: "Career"
    },
    {
      id: 29,
      year: 2022,
      from: "28-Nov-2022",
      to: "28-Nov-2022",
      place: "Govt. H.S.S. Patewa",
      activity: "One Day Career Guidance Workshop for the students of Govt. H.S.S. Patewa",
      category: "Career"
    },
    {
      id: 30,
      year: 2022,
      from: "28-Nov-2022",
      to: "28-Nov-2022",
      place: "Govt. H.S.S. Jalbanda",
      activity: "One Day Career Guidance Workshop for the students of Govt. H.S.S. Jalbanda",
      category: "Career"
    },
    {
      id: 31,
      year: 2022,
      from: "28-Nov-2022",
      to: "28-Nov-2022",
      place: "Weidner Memorial School, Rajnandgaon",
      activity: "Python Programming Workshop for the students of Weidner Memorial School, Rajnandgaon",
      category: "Technology"
    },
    {
      id: 32,
      year: 2022,
      from: "28-Nov-2022",
      to: "28-Nov-2022",
      place: "JLM Gayatri Vidyapeeth, Rajnandgaon",
      activity: "Python Programming Workshop for the students of JLM Gayatri Vidyapeeth, Rajnandgaon",
      category: "Technology"
    },
    {
      id: 33,
      year: 2022,
      from: "26-Nov-2022",
      to: "26-Nov-2022",
      place: "Vivekanand Vidyapeeth School Sec. 2 Bhilai",
      activity: "Helmet Awareness Programme for the students of Vivekanand Vidyapeeth School Sec. 2 Bhilai",
      category: "Safety"
    },
    {
      id: 34,
      year: 2022,
      from: "28-Nov-2022",
      to: "28-Nov-2022",
      place: "Indira Market Durg",
      activity: "Public Awareness on Road Safety and Helmet at Indira Market, Durg",
      category: "Safety"
    },
    {
      id: 35,
      year: 2022,
      from: "29-Nov-2022",
      to: "29-Nov-2022",
      place: "Indira Market Durg",
      activity: "Public Awareness on Road Safety and Helmet at Indira Market, Durg",
      category: "Safety"
    },
    {
      id: 36,
      year: 2022,
      from: "30-Nov-2022",
      to: "30-Nov-2022",
      place: "Jawahar Chowk Durg",
      activity: "Public Awareness on Road Safety and Helmet at Jawahar Chowk, Durg",
      category: "Safety"
    },
    {
      id: 37,
      year: 2022,
      from: "01-Dec-2022",
      to: "01-Dec-2022",
      place: "Sector-10 B Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector-10 B Market, Bhilai",
      category: "Safety"
    },
    {
      id: 38,
      year: 2022,
      from: "02-Dec-2022",
      to: "02-Dec-2022",
      place: "Sector-9 Hospital",
      activity: "Public Awareness on Road Safety and Helmet at Sector-9 Hospital, Bhilai",
      category: "Safety"
    },
    {
      id: 39,
      year: 2022,
      from: "05-Dec-2022",
      to: "05-Dec-2022",
      place: "Shri Ram Chowk, Hudco Market Bhilai",
      activity: "Public Awareness on Road Safety and Helmet at Shri Ram Chowk, Hudco Market, Bhilai",
      category: "Safety"
    },
    {
      id: 40,
      year: 2022,
      from: "06-Dec-2022",
      to: "06-Dec-2022",
      place: "Milan Chowk Hudco Market Bhilai",
      activity: "Public Awareness on Road Safety and Helmet at Milan Chowk Hudco Market, Bhilai",
      category: "Safety"
    },
    {
      id: 41,
      year: 2022,
      from: "07-Dec-2022",
      to: "07-Dec-2022",
      place: "Hospital Sector-9 Market",
      activity: "Public Awareness on Road Safety and Helmet at Hospital Sector-9 Market, Bhilai",
      category: "Safety"
    },
    {
      id: 42,
      year: 2022,
      from: "08-Dec-2022",
      to: "08-Dec-2022",
      place: "Sector-7 Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector-7 Market, Bhilai",
      category: "Safety"
    },
    {
      id: 43,
      year: 2022,
      from: "09-Dec-2022",
      to: "09-Dec-2022",
      place: "Sector-10 Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector-10 Market, Bhilai",
      category: "Safety"
    },
    {
      id: 44,
      year: 2022,
      from: "12-Dec-2022",
      to: "12-Dec-2022",
      place: "Sector 6 A Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector 6 A Market, Bhilai",
      category: "Safety"
    },
    {
      id: 45,
      year: 2022,
      from: "13-Dec-2022",
      to: "13-Dec-2022",
      place: "Sector 6 C Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector 6 C Market, Bhilai",
      category: "Safety"
    },
    {
      id: 46,
      year: 2022,
      from: "14-Dec-2022",
      to: "14-Dec-2022",
      place: "Sector 2 Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector 2 Market, Bhilai",
      category: "Safety"
    },
    {
      id: 47,
      year: 2022,
      from: "15-Dec-2022",
      to: "15-Dec-2022",
      place: "Sector-6 D & E Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector-6 D & E Market, Bhilai",
      category: "Safety"
    },
    {
      id: 48,
      year: 2022,
      from: "16-Dec-2022",
      to: "16-Dec-2022",
      place: "Sector 5 Market",
      activity: "Public Awareness on Road Safety and Helmet at Sector 5 Market, Bhilai",
      category: "Safety"
    },
    {
      id: 49,
      year: 2022,
      from: "19-Dec-2022",
      to: "19-Dec-2022",
      place: "Lakshmi Market Area 1",
      activity: "Public Awareness on Road Safety and Helmet at Lakshmi Market Area 1, Pulgaon",
      category: "Safety"
    },
    {
      id: 50,
      year: 2022,
      from: "20-Dec-2022",
      to: "20-Dec-2022",
      place: "Lakshmi Market Area 2",
      activity: "Public Awareness on Road Safety and Helmet at Lakshmi Market Area 2, Pulgaon",
      category: "Safety"
    },
    {
      id: 51,
      year: 2022,
      from: "21-Dec-2022",
      to: "21-Dec-2022",
      place: "Lakshmi Market Area 3",
      activity: "Public Awareness on Road Safety and Helmet at Lakshmi Market Area 3, Pulgaon",
      category: "Safety"
    },
    {
      id: 52,
      year: 2022,
      from: "22-Dec-2022",
      to: "22-Dec-2022",
      place: "Risali Market",
      activity: "Public Awareness on Road Safety and Helmet at Risali Market, Bhilai",
      category: "Safety"
    },
    {
      id: 53,
      year: 2022,
      from: "23-Dec-2022",
      to: "23-Dec-2022",
      place: "Jail chok",
      activity: "Public Awareness on Road Safety and Helmet at Jail Chowk, Durg",
      category: "Safety"
    },
    {
      id: 54,
      year: 2021,
      from: "07-Oct-2021",
      to: "07-Oct-2021",
      place: "ONLINE",
      activity: "Online COVID-19 Awareness camp",
      category: "Health"
    },
    {
      id: 55,
      year: 2021,
      from: "14-Sept-2021",
      to: "14-Sept-2021",
      place: "ONLINE",
      activity: "online session on safety and security precautions on COVID-19",
      category: "Health"
    },
    {
      id: 56,
      year: 2020,
      from: "09-Nov-2020",
      to: "09-Nov-2020",
      place: "ONLINE",
      activity: "Public Awareness activity 'Ballot Brilliance: Be Informed, Be Involved' under SVEEP for the Durg -Bhilai",
      category: "Civic"
    },
    {
      id: 57,
      year: 2020,
      from: "15-Sept-2020",
      to: "15-Sept-2020",
      place: "ONLINE",
      activity: "Online Yoga and Meditation Drive",
      category: "Health"
    },
    {
      id: 58,
      year: 2019,
      from: "31-Oct-2019",
      to: "31-Oct-2019",
      place: "CSIT DURG",
      activity: "Waste to Wow: Student Workshop on Creative Recycling",
      category: "Environment"
    },
    {
      id: 59,
      year: 2019,
      from: "19-Dec-2019",
      to: "19-Dec-2019",
      place: "CSIT DURG",
      activity: "Blood Donation Camp at CSIT Durg",
      category: "Health"
    },
    {
      id: 60,
      year: 2019,
      from: "19-Jan-2019",
      to: "19-Jan-2019",
      place: "DURG",
      activity: "Voters Awareness program (Rally) in Durg",
      category: "Civic"
    },
    {
      id: 61,
      year: 2018,
      from: "01-Oct-2018",
      to: "01-Oct-2018",
      place: "CSIT DURG",
      activity: "Blood Donation Camp CSIT Durg",
      category: "Health"
    },
    {
      id: 62,
      year: 2018,
      from: "13-Oct-2018",
      to: "13-Oct-2018",
      place: "THANUD VILLAGE",
      activity: "One day Health Checkup Camp at at Thanaud village Durg",
      category: "Health"
    },
    {
      id: 63,
      year: 2018,
      from: "12-Nov-2018",
      to: "12-Nov-2018",
      place: "ACHOTI VILLAGE DURG",
      activity: "Yoga Harmony: Cultivating Wellness in Achoti Village Youth",
      category: "Health"
    }
  ];

  // Function to get badge color based on category
  const getBadgeColor = (category) => {
    switch(category) {
      case 'Technology':
        return 'bg-indigo-100 text-indigo-800';
      case 'Health':
        return 'bg-green-100 text-green-800';
      case 'Safety':
        return 'bg-orange-100 text-orange-800';
      case 'Career':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-br from-white to-blue-50 shadow-xl  overflow-hidden my-4">
      
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">NSS</h1>
          <p className="text-sm md:text-base mt-1">CSIT | National Service Scheme</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
        </div>
      
      <div className="px-6 py-5 bg-white bg-opacity-90">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <div className="p-3 bg-blue-50 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
          </div>
          <p className="text-gray-700 text-sm md:text-base">
            The main theme of NSS is <span className="text-blue-700 font-semibold">Social service</span>. <span className="font-semibold">Enhancing performance and personality of students through Social activities</span> is the main Motto of NSS. Students come close to the society, study the problems prevailing in the society and find engineered solution to it.
          </p>
        </div>
      </div>

      {/* Mobile view - list layout */}
      <div className="md:hidden px-4 pb-6">
        <ul className="space-y-4">
          {initiativesData.map((item) => (
            <li key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={`${getBadgeColor(item.category)} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                    {item.category}
                  </span>
                  <span className="bg-blue-50 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.year}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mt-2 leading-tight">{item.activity}</h3>
                <div className="flex items-center mt-3 text-xs text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.from} {item.from !== item.to && `to ${item.to}`}
                </div>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.place}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop view - table layout */}
      <div className="hidden md:block overflow-x-auto p-6">
        <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-[#0d173b]">
            <tr>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">S.no.</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Year</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Category</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Activity</th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Place</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {initiativesData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{item.year}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.from === item.to ? item.from : `${item.from} to ${item.to}`}
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`${getBadgeColor(item.category)} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
                    {item.category}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">{item.activity}</td>
                <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">{item.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
     
    </div>
  );
}