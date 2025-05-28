import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, X, Eye } from 'lucide-react';
import api from '../../../services/api';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      // const response = await fetch('http://localhost:5000/api/gallery');
      const response = await api.get("/gallery");

      // if (!response.ok) {
      //   throw new Error('Failed to fetch gallery images');
      // }
      const data = await response.data;
      // Handle different response formats
      let imagesData = [];
      if (Array.isArray(data)) {
        imagesData = data;
      } else if (data.data && Array.isArray(data.data)) {
        imagesData = data.data;
      } else if (data.images && Array.isArray(data.images)) {
        imagesData = data.images;
      } else if (data.gallery && Array.isArray(data.gallery)) {
        imagesData = data.gallery;
      }
      setImages(imagesData);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="text-[#0d173b] animate-spin" />
          <p className="text-[#0d173b] text-lg">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center max-w-md">
          <div className="text-red-400 text-xl mb-4">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-8 mb-8 rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Photo Gallery</h1>
          <p className="text-base text-gray-200 mt-2">
            Capturing moments and memories at CSIT
          </p>
          <div className="h-0.5 w-12 bg-white mt-3"></div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No images available in the gallery yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => handleImageClick(image)}
              >
                <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md border border-gray-100">
                  <div className="aspect-square w-full">
                    <img
                      // src={image.url || image.image?.url || `http://localhost:5000${image.image?.path}`}
                      src={image.url || image.image?.url || `api${image.image?.path}`}
                      alt={image.title || 'Gallery image'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <div className="flex justify-end mb-2">
                      <div className="bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    {image.title && (
                      <h3 className="text-white text-sm font-medium mb-1 line-clamp-1">{image.title}</h3>
                    )}
                    {image.content && (
                      <p className="text-white/90 text-xs line-clamp-2">{image.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Image View Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full relative shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors bg-white/80 backdrop-blur-sm p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <img
                // src={selectedImage.url || selectedImage.image?.url || `http://localhost:5000${selectedImage.image?.path}`}
                src={selectedImage.url || selectedImage.image?.url || `api${selectedImage.image?.path}`}
                alt={selectedImage.title || 'Gallery image'}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-lg"
              />
              <div className="mt-6 space-y-4">
                {selectedImage.title && (
                  <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                )}
                {selectedImage.content && (
                  <p className="text-gray-600">{selectedImage.content}</p>
                )}
                <div className="text-sm text-gray-500">
                  Uploaded on {new Date(selectedImage.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 