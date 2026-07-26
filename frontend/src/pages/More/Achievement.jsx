import React, { useState } from "react";

const Achievement = () => {
  const [activeTab, setActiveTab] = useState("Institute");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const achievements = {
    Institute: Array.from({ length: 8 }, (_, i) => `/assets/Achievement/institute_${i + 1}.webp`),
    Faculties: Array.from({ length: 8 }, (_, i) => `/assets/Achievement/faculty_${i + 1}.webp`),
    Students: Array.from({ length: 8 }, (_, i) => `/assets/Achievement/student_${i + 1}.webp`),
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (path) => {
    setSelectedImage(path);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="w-full">
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Achievements</h1>
          <p className="text-base text-gray-200 mt-2">Celebrating excellence across the institution.</p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center mb-8 border-b">
          {Object.keys(achievements).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`py-2 px-4 text-lg font-medium transition-colors duration-300 ${
                activeTab === tab
                  ? 'border-b-2 border-[#0d173b] text-[#0d173b]'
                  : 'text-gray-500 hover:text-[#0d173b]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {achievements[activeTab].map((path, index) => (
              <div
                key={index}
                className="flex items-center justify-center aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-gray-100 p-2 cursor-pointer"
                onClick={() => handleImageClick(path)}
              >
                <img
                  src={path}
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Achievement"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievement;
