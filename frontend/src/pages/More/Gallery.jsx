import React, { useEffect, useState } from "react";
import apiPublic from "../../../services/apiPublic"; // 🔓 token-free Axios

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchImages = async () => {
    try {
      const response = await apiPublic.get("/gallery");
      if (response.data.success) {
        setImages(response.data.images);
      } else {
        setError("Failed to fetch images");
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

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (loading)
    return <div className="text-center py-4">Loading gallery...</div>;
  if (error)
    return <div className="text-red-500 text-center py-4">{error}</div>;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
        {images.map((img, index) => (
          <div
            key={img.public_id}
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

      {isOpen && (
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

            {/* Prev/Next buttons */}
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
