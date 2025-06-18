import React, { useEffect, useState } from "react";
import apiPublic from "../../../services/apiPublic";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "Institute",
    "Departments",
    "Initiatives",
    "T & P Cell",
    "Student Affairs",
    "Library",
    "Facilities",
    "Alumni",
    "Media Coverage",
  ];

  // Fetch all images
  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    setSelectedCategory(null);
    try {
      const response = await apiPublic.get("/gallery");
      if (response.data.success && response.data.images) {
        setImages(response.data.images);
      } else {
        setError("Failed to fetch images.");
        setImages([]);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch images by category
  const fetchImagesByCategory = async (category) => {
    setLoading(true);
    setError(null);
    setSelectedCategory(category);
    try {
      const response = await apiPublic.get("/gallery/category", {
        params: { category },
      });

      if (response.data.response) {
        const formattedImages = response.data.response.map((item) => ({
          ...item.image,
          _id: item._id,
          category: item.category,
        }));
        setImages(formattedImages);
      } else {
        setImages([]);
        setError("No images found for this category.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const showNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* Category Header */}
      <div className="h-[15vh] w-full bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white flex items-center justify-around px-4 overflow-x-auto">
        {categories.map((category) => (
          <span
            key={category}
            className={`text-md font-medium whitespace-nowrap cursor-pointer transition-all duration-300 ease-in-out hover:underline underline-offset-4 decoration-2 ${
              selectedCategory === category ? "underline text-yellow-300" : ""
            }`}
            onClick={() => fetchImagesByCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Loading/Error */}
      {loading && <div className="text-center py-4">Loading gallery...</div>}
      {error && !loading && (
        <div className="text-red-500 text-center py-4">{error}</div>
      )}

      {/* Image Grid */}
      {!loading && !error && images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {images.map((img, index) => (
            <div
              key={img.public_id || img._id || index}
              className="border rounded shadow cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={img.url}
                alt="Gallery"
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {!loading && !error && images.length === 0 && (
        <div className="text-center text-gray-500 py-4">
          No images available.
        </div>
      )}

      {/* Modal */}
      {isOpen && images.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-3xl px-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-white text-2xl"
            >
              ×
            </button>
            <img
              src={images[currentIndex].url}
              alt="Full View"
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <button
              onClick={showPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              ‹
            </button>
            <button
              onClick={showNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
