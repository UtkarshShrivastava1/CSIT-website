import React, { useState } from 'react'

const Achievement = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Create an array of image paths
  const imagePaths = Array.from({ length: 24 }, (_, i) => 
    `/src/assets/Achievement/${String(i + 1).padStart(2, '0')}.jpg`
  );

  const handleImageClick = (path) => {
    setSelectedImage(path);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Achievements</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {imagePaths.map((path, index) => (
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
  )
}

export default Achievement
