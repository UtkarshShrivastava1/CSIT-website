import React from 'react';
import { Book, Clock, Users, Mail, Database, Tv, FileText, Printer, Disc } from 'lucide-react';

const Library = () => {
  const bookDistribution = [
    { semester: '1st to 4th Semester', books: '8', mode: '6 Books from Book Bank + 2 Books from Library' },
    { semester: '5th to 6th Semester', books: '9', mode: '6 Books from Book Bank + 3 Books from Library' },
    { semester: '7th to 8th Semester', books: '10', mode: '6 Books from Book Bank + 4 Books from Library' },
  ];

  const libraryResources = [
    { item: 'TOTAL NO. OF BOOKS ON DATE', value: '64757' },
    { item: 'TOTAL NO. OF TITLES ON DATE', value: '6990' },
    { item: 'TOTAL NO. OF JOURNALS: / ONLINE JOURNALS PACKAGES & PRINT JOURNALS', value: '911 DELNET (National & International )' },
    { item: 'TOTAL NO. OF MAGAZINES', value: '5' },
    { item: 'TOTAL NO. OF NEWSPAPERS 02 - ENGLISH & 02 - HINDI )', value: '4' },
    { item: 'BOOK BANK FACILITY AVAILABLE ( 06 BOOKS PER SEM.)', value: 'FOR EVERY STUDENT' },
    { item: 'NPTEL VIDEO LECTRUE AVAILABLE', value: '__' },
    { item: 'REPROGRAPHIC FACILITY AVAILABLE', value: '01 MACHINE' },
    { item: 'PRINT OUT & SCANNING FACILITY AVAILABLE', value: '__' },
    { item: 'CD LIBRARY: AVAILABLE', value: '2215' },
    { item: 'ISSUE OF BOOKS / MAGAZINES / QUESTION PAPERS / SYLLABUS / CDs', value: 'WEEKDAYS' },
    { item: 'NO. OF LIBRARY STAFF:', value: '4' },
  ];

  const teamMembers = [
    { name: 'Mrs. V. Annapurna', designation: 'Librarian', email: 'library@csitdurg.in' },
    { name: 'Guman Deshmukh', designation: 'Library Assistant', email: null },
    { name: 'Mahendra Sahu', designation: 'Book Lifter', email: null },
    { name: 'Hitesh Deshmukh', designation: 'Book Lifter', email: null },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="h-40 bg-gradient-to-r from-[#0d173b] to-[#1e305f] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center px-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Tagore Central Library
            </h2>
            <p className="text-gray-200 text-sm mt-2">
              CSIT | A Hub of Knowledge and Learning
            </p>
            <div className="h-0.5 w-20 bg-white mt-3 rounded"></div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-12">
        {/* Introduction */}
        <section>
          <h3 className="text-xl font-semibold text-[#0d173b] mb-3">Introduction to the Library</h3>
          <p className="text-gray-700 leading-relaxed">
            A library is a collection of resources, such as books, journals, magazines, digital materials, and other information sources, organized to support learning, research, and recreation. Libraries serve as centers of knowledge where people can access information, develop skills, and engage in lifelong learning.
          </p>
        </section>

        {/* Library Facilities */}
        <section>
          <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Library Facilities</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">For Books</h4>
              <div className="pl-4 border-l-2 border-gray-200 space-y-4">
                <p><b>1. "BOOK BANK":</b> This is a unique plan of issuing books under which every student is given a set of SIX TEXT BOOKS that covers maximum syllabus concerning to their respective semesters.</p>
                <div>
                  <p><b>2. BOOKS PROVIDED FROM BOOK BANK & LIBRARY:</b></p>
                  <div className="overflow-x-auto mt-2">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-left">To the Students of Different Semesters</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Books Provided</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Mode of Distribution</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookDistribution.map((item, index) => (
                          <tr key={index} className="bg-white">
                            <td className="border border-gray-300 px-4 py-2">{item.semester}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.books}</td>
                            <td className="border border-gray-300 px-4 py-2">{item.mode}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p><b>3. ISSUE SECTION:</b> Books will be issued on showing of the library card along with the ID card. The issued books shall be returned within 14 days only. Issued books may be reissued after 14 days if the book is available in the library and has not been reserved by another user.</p>
                <p><b>4. REFERENCE SECTION:</b> The Reference Section provides access to authoritative information sources like encyclopedias, dictionaries, yearbooks, and handbooks for in-library consultation.</p>
                <p><b>5. DIGITAL LIBRARY:</b> Provides online access to e-books, e-journals, and research papers. DELNET (Developing Library Network) is the main platform.</p>
                <p><b>6. NPTEL:</b> The National Programme on Technology Enhanced Learning offers free video lectures and open-access courses from premier institutes like IITs and IISc.</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">Working Hours</h4>
              <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                <p><b>Issue Section:</b><br/>• Monday to Friday: 9:30 am to 5:30 pm<br/>• Saturday: 9:30 am to 2:30 pm</p>
                <p><b>Reference Section:</b><br/>• Monday to Friday: 9:30 am to 6:30 pm (During Examination up to 10 PM)<br/>• Saturday: 9:30 am to 2:30 pm<br/>• Sundays: 9:00 am to 4:00 pm (During Examination Time)</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">Other Facilities</h4>
              <ul className="list-disc pl-8 space-y-1">
                <li>Issue of question papers of the last five years</li>
                <li>Issue of syllabus in each semester</li>
                <li>Issue of CD’s of books / magazines</li>
                <li>Photocopy machine under the Reprography Facility</li>
                <li>Self-learning initiatives through NPTEL, SWAYAM, and DELNET</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Library Rules & Regulations */}
        <section>
          <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Library Rules & Regulations for Students</h3>
          <div className="space-y-6 text-gray-700 leading-relaxed">

            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">General Rules</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li>Identity Card is compulsory for getting access to the library.</li>
                <li>All students are expected to co-operate for maintenance of Cleanliness, Silence, and Discipline in the Library.</li>
                <li>No discussion is permitted inside the library.</li>
                <li>Registration must be done to become a library member prior to using library resources.</li>
                <li>Personal belongings are not allowed inside the library.</li>
                <li>Textbooks, printed materials, and issued books are not allowed to be taken inside the library.</li>
                <li>Using mobile phones and audio instruments with speakers is strictly prohibited in the library premises.</li>
                <li>Enter your name and sign in the register kept at the entrance counter before entering the library.</li>
                <li>Show the books and other materials which are being taken out of the library to the staff at the entrance counter.</li>
                <li>All students are advised not to visit the library during class hours.</li>
                <li>In case of urgency, the Librarian may recall any book from any member at any time, and the member shall return the same immediately.</li>
                <li>Library Borrower Cards are not transferable. The borrower is responsible for the books borrowed on his/her card.</li>
                <li>Help to keep the books undamaged and clean.</li>
                <li>Refreshments of any kind shall not be taken anywhere in the library premises.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">Circulation & Issue System</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li>Books will be issued upon presentation of the library card along with the ID card. Students are instructed to check the books while borrowing and will be responsible for any damage noticed at the time of return.</li>
                <li><b>Book Requisition Slip:</b> All students are required to submit a request for library books on the "Book Requisition Slip" at least one day in advance.</li>
                <li>Books will be issued to students based on the requisition slip on a priority basis.</li>
                <li>A book will be issued only if it is available in the library.</li>
                <li>The books from the Book Bank will not be issued on the Library Card.</li>
                <li><b>Overdue Charges:</b> Materials borrowed should be returned on or before the due date. If returned late, an overdue fine of Rs. 5/- per day will be charged for the delayed period.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">Lost or Damaged Books</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li><b>Book Lost:</b> If an issued book is lost, the borrower must replace it with the same edition or the latest edition, or pay double the cost of the book after getting permission from the Librarian.</li>
                <li><b>Damage to Book:</b> Folding corners, marking pages, writing, tearing pages, or otherwise damaging a book will constitute an injury. The borrower will be held responsible and shall be liable to replace it with a new book of the latest edition or pay double the current cost within 10 days of the due date.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">Library Borrower Cards</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li>The library card is not transferable. The person named on the card is fully responsible for the books borrowed on it.</li>
                <li><b>Loss of Card:</b> The loss of a borrower card should be immediately reported to the librarian in writing. A duplicate card may be issued against a formal application and a fine of Rs. 50/- per card.</li>
                <li><b>Validity:</b> Library borrower cards are valid for the entire duration of the course. All cards must be returned to the library at the end of the course.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg text-[#0d173b] mb-2">Reference Section Rules</h4>
              <ul className="list-disc pl-8 space-y-2">
                <li>Reference books and journals will not be issued and are for reading in the Reference Section only.</li>
                <li>The latest edition of magazines will not be issued.</li>
                <li>All students must enter their name and time in the entry record register upon entry and exit.</li>
                <li>If required, material from the reference section can be photocopied using the facility available in the Central Library.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Highlights of Library Resources */}
        <section>
          <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Highlights of Library Resources</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Resource</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                {libraryResources.map((resource, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{resource.item}</td>
                    <td className="border border-gray-300 px-4 py-2">{resource.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* OPAC */}
        <section>
          <h3 className="text-xl font-semibold text-[#0d173b] mb-3">OPAC (Online Public Access Catalogue)</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            OPAC is a computerized catalog of a library that allows users to search and find information about books and other library resources. Users can search for:
          </p>
          <ul className="list-disc pl-8 space-y-1">
            <li>Books</li>
            <li>Journals</li>
            <li>Magazines</li>
            <li>E-books</li>
            <li>Theses and dissertations</li>
            <li>Audio-video materials</li>
            <li>Other library resources</li>
          </ul>
        </section>

        {/* Team Members */}
        <section>
          <h3 className="text-xl font-semibold text-[#0d173b] mb-4">Team Members</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{member.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-[#0d173b] mb-2">Contact Us</h3>
          <div className="flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2 text-gray-600" />
            <a href="mailto:library@csitdurg.in" className="text-indigo-600 hover:underline">
              library@csitdurg.in
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Library;