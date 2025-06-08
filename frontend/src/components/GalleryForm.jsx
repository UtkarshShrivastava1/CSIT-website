import React, { useState } from "react";
import api from "../../../services/api"; // ✅ use your Axios wrapper

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

    try {
      const response = await api.post("/gallery/multiple", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setSuccess(true);
        setSelectedFiles([]);
        document.getElementById("images").value = null; // ✅ clear input
      }
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        `Error (${error?.response?.status || 500}): ${error?.message}`;
      setError(msg);
      console.error("Upload error:", error);
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
