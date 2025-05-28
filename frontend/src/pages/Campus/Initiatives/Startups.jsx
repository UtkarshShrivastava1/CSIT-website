import { useState } from 'react';

export default function StartupPage() {
  const [activeTab, setActiveTab] = useState('introduction');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showContactSuccess, setShowContactSuccess] = useState(false);
  
  const startups = [
    {
      id: 'introduction',
      name: 'Introduction'
    },
    {
      id: 'pylons',
      name: 'Pylons Technology',
      location: 'Durg',
      description: 'It is a group of tech professionals from Chhattisgarh with a rich experience in developing and implementing IT solutions across domains and industries. The foundation of Pylons Technology was laid to offer IT solutions to industries & organizations in Chhattisgarh and provide ample opportunities to the aspiring IT talent of the state to grow.',
      strengths: [
        'The team at Pylons Technology have worked with IT giants dealing with customers across the globe.',
        ' Experience of delivering software solutions across domains in Industries like Healthcare, Aeronautics, FMCG Manufacturing and Automobile.',
        ' Lean and agile organization structure to adapt to the versatile demands of the customers and hence provide focused and cost effective solutions.'
      ],
      projects: [
        'Educational institute ERP/MIS System: A software to manage day to day activities on an educational institute',
        ' Tutorial Application: An online platform to take classes online for schools and coaching institutes.',
        ' Social Media Mobile application',
        'Legendry Bot',
        'CSIT, Durg',
        'Corefab Projects, Hathkoj, Durg (MIS System)',
        'CSVTU, Durg (Examination Control System)',
        'SIVA Coaching & Institutes (Online Tutorial)',
        'Surana Collage, Durg (MIS System)'
      ],
     
    },
    {
      id: 'auditech',
      name: 'AudiTech',
      location: '',
      description: 'We are pleased to introduce ourselves as team of highly qualified and experienced Technical Experts & Competent person.',
      strengths: [
        'Our Team consists of various experienced members who have strong portfolio and indepth knowledge of the Industry. Our Team consists of:',
        'Certified Energy Auditors/Managers',
        'Sector Experts',
        'Energy Engineers',
        'Accountants & Marketing Experts'
      ],
      services: [
        'Comprehensive Energy Audit & Services',
        'Mandatory Energy Audit (MEA) as per EC CT-2001',
        'Perform, Achieve & Trade (PAT) scheme Consultancy',
        'Monitoring & Verification Audit (M&V) as per PAT scheme',
        'Appointment of Designated Energy Manager, ISO 50001 Implementation & Consultancy',
        'Energy Management System Implementation',
        'Chartered Engineers Work, Lenders Engineers Work',
        'Valuation of Movable & Immovable Properties',
        'Other Technical & Energy Statutory Compliances.'
      ],
     
    },
    {
      id: 'tech36',
      name: 'Tech36Garh',
      location: 'Durg',
      description: 'We manufacture FDM based 3D printers and are looking forward to go into DLP and SLS technologies, but are limited with our resources. We assure to provide high quality products and our USP is our quality and the fact that our printer can print flexible filament along with all the other thermoplastics with 50 micron precision.',
      strengths: [
        'We manufacture 3D Printers, provide Prototyping Solutions, Designing Solutions and along with that we set up ATL labs. Till now we have sold 7 printers of our own and set up 1 ATL lab. We are very close to achieve our break even point.',
        
      ],
      projects: [
        '3D Printers',
        'ATL labs Setup',
        'Sanitizer Dispenser',
        'Mini CNC Machines'
      ],
    },
    {
      id: 'zager',
      name: 'Zager Digital Services',
      location: 'Durg',
      description: 'At Zager Digital Services, we believe that exceptional Digital Marketing and IT solutions stem from a core commitment to integrity, innovation, and excellence. Founded with the mission to empower businesses through cutting-edge technology and strategic marketing, we take pride in delivering tailored solutions that drive growth and success.',
      strengths: [
        'Full-stack development capabilities',
        'User-centered design approach',
        'Data-driven marketing strategies'
      ],
      services: [
        'Digital Marketing.',
        'Web Development.',
        'IT Solutions.',
        'Designing.',
        'Content Creation',
        'Media Production.',
        'Architecture.',
        'influencer marketing.'
      ],
      Website: 'https://www.zager.in/homepage',
      email: 'business@zagerdigital.com',
     
    },
   
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 font-sans">
      <div className="max-w-5xl mx-auto">
      <div className="bg-[#0d173b] text-white p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">Startups</h1>
          <p className="text-sm md:text-base mt-1">CSIT | Our Startups</p>
          <hr className="w-16 border-t-2 border-white mt-2 mb-0" />
        </div>
      </div>
     
        {/* Modern Tab Navigation */}
        <div className="flex justify-center mb-8 overflow-x-auto py-2">
          <div className="flex bg-white p-1 rounded-xl shadow-md">
            {startups.map((startup) => (
              <button
                key={startup.id}
                onClick={() => setActiveTab(startup.id)}
                className={`px-4 py-3 rounded-lg text-sm md:text-base font-medium transition-all duration-200 mx-1
                  ${activeTab === startup.id 
                    ? 'bg-[#0d173b] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-blue-50'}`}
              >
                {startup.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          
          {/* Introduction Tab */}
          {activeTab === 'introduction' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">What are Startups?</h2>
              
              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-6">
                <p className="text-blue-900">
                  The term startup refers to a company in the first stages of operations. Startups are founded by one or more entrepreneurs who want to develop a product or service for which they believe there is demand.
                </p>
              </div>
              
              <p className="text-gray-700 mb-6">
                These companies generally start with high costs and limited revenue, which is why they look for capital from a variety of sources such as venture capitalists.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Funding Sources</h3>
                  <p className="text-gray-700">
                    Many startups turn to others for more funding, including family, friends, and venture capitalists. Silicon Valley is known for its strong venture capitalist community and is a popular destination for startups, but is also widely considered the most demanding arena.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Business Development</h3>
                  <p className="text-gray-700">
                  Startups can use seed capital to invest in research and to develop their business plans. Market research helps determine the demand for a product or service, while a comprehensive business plan outlines the companies  mission statement, vision, and goals, as well as management and marketing strategies.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-400 mb-8">
                <p className="text-blue-900">
                CSIT is one of the most ancient institute in the region who has taken this initiative and proceeded with three new Start-ups viz. PYLONS ,ZAGER , AUDITECH and TECH36.
                </p>
              </div>
            </div>
          )}
        
          {/* Startup Tabs */}
          {activeTab !== 'introduction' && activeTab !== 'contact' && (
            <div className="animate-fadeIn">
              {startups.filter(s => s.id === activeTab).map(startup => (
                <div key={startup.id}>
                  <div className="border-b border-gray-200 pb-4 mb-6">
                    <h2 className="text-2xl font-bold text-[#0d173b]">{startup.name}</h2>
                    {startup.location && (
                      <p className="text-gray-500 mt-1">
                        <span className="inline-block mr-2">📍</span> 
                        {startup.location}
                      </p>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-5 mb-8">
                    <p className="text-gray-700">{startup.description}</p>
                  </div>
                  
                  {/* Strengths Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#0d173b] mb-4 pb-2 border-b border-gray-100">
                      Our Strengths
                    </h3>
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                      {startup.strengths.map((strength, idx) => (
                        <div 
                          key={idx} 
                          className={`p-4 ${idx !== startup.strengths.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-blue-50 transition-colors`}
                        >
                          <span className="text-blue-500 mr-3">•</span>
                          <span className="text-gray-700">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Projects or Services Section */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b border-gray-100">
                      {startup.services ? 'Our Services' : 'Our Projects'}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {startup.services
                        ? startup.services.map((service, idx) => (
                            <div 
                              key={idx} 
                              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))
                        : (startup.projects || []).map((project, idx) => (
                            <div 
                              key={idx} 
                              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow hover:border-blue-200 transition-all"
                            >
                              <span className="text-blue-500 mr-2">•</span>
                              <span className="text-gray-700">{project}</span>
                            </div>
                          ))
                      }
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}