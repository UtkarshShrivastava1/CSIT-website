import React, { useState } from "react";
import axios from "axios";

const GalleryForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!selectedFiles.length) {
      setError("Please select at least one image");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    const token = localStorage.getItem("adminToken"); // ✅ grab token here

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/gallery/multiple`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, // ✅ critical part!
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setSuccess(true);
        setSelectedFiles([]);
        e.target.reset();
      }
    } catch (error) {
      console.error("Full error:", error);
      setError(
        error.response?.data?.message ||
          `Error (${error.response?.status}): ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        {selectedFiles.length > 0 && (
          <div className="text-sm text-gray-600">
            {selectedFiles.length} file(s) selected
          </div>
        )}

        {error && <div className="text-red-500 text-sm">{error}</div>}

        {success && (
          <div className="text-green-500 text-sm">
            Images uploaded successfully!
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !selectedFiles.length}
          className={`w-full py-2 px-4 rounded-md text-white font-medium
            ${
              loading || !selectedFiles.length
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Uploading..." : "Upload Images"}
        </button>
      </form>
    </div>
  );
};

export default GalleryForm;
