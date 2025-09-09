// GalleryDashboard.jsx (defensive + fixed for /api/gallery mount)
import React, { useState, useEffect } from "react";
import {
  X,
  ImagePlus,
  Eye,
  Loader2,
  ArrowLeft,
  Upload,
  Trash2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services/api"; // your axios instance

const GalleryDashboard = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  const navigate = useNavigate();

  // Helper to get base (safe string)
  const getApiBase = () =>
    api && api.defaults && api.defaults.baseURL
      ? String(api.defaults.baseURL).replace(/\/+$/, "")
      : "";

  // Build path for gallery endpoints in a robust way:
  // - If axios baseURL already contains '/gallery' -> return absolute `${base}/${id?}`
  // - Else return relative `/gallery` or `/gallery/:id` so axios will prepend baseURL (e.g. '/api')
  const buildGalleryEndpoint = (id = "") => {
    const base = getApiBase();
    // detect presence of '/gallery' in base (either '/gallery' or '/api/gallery')
    if (base && /\/gallery$/i.test(base)) {
      const full = id ? `${base}/${id}` : `${base}/`;
      // debug:
      // eslint-disable-next-line no-console
      console.debug("[Gallery] Using absolute endpoint:", full);
      return full; // absolute - axios won't prepend baseURL
    } else {
      const rel = id ? `/${id}` : `/gallery`;
      // eslint-disable-next-line no-console
      console.debug(
        "[Gallery] Using relative endpoint:",
        rel,
        "(axios.baseURL:",
        base || "(none)",
        ")"
      );
      return rel; // relative - axios will prepend baseURL if present
    }
  };

  useEffect(() => {
    fetchGalleryImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // basic search/filter
    const q = (searchQuery || "").trim().toLowerCase();
    if (!q) {
      setFilteredImages(images);
      return;
    }
    setFilteredImages(
      images.filter(
        (img) =>
          (img.title || "").toLowerCase().includes(q) ||
          (img.content || "").toLowerCase().includes(q)
      )
    );
  }, [searchQuery, images]);

  const showNotification = (message, type = "success") => {
    let container = document.getElementById("notification-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "notification-container";
      container.className = "fixed bottom-4 right-4 z-50 flex flex-col gap-2";
      document.body.appendChild(container);
    }
    const el = document.createElement("div");
    el.className = `
      px-6 py-4 rounded-lg shadow-lg
      ${
        type === "success"
          ? "bg-gradient-to-r from-emerald-500 to-teal-500"
          : "bg-gradient-to-r from-rose-500 to-red-500"
      }
      text-white flex items-center gap-3 transform transition-all duration-500
    `;
    el.innerHTML = `<div class="flex-1"><p class="font-medium">${message}</p></div><button class="ml-2">✕</button>`;
    el.querySelector("button").addEventListener("click", () => {
      el.remove();
    });
    container.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  };

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setError("Unauthorized! Please login first.");
        setLoading(false);
        return;
      }

      const endpoint = buildGalleryEndpoint(); // will be '/gallery' or absolute
      const res = await api.get(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = res?.data ?? null;

      // Resolve array in various shapes
      let imagesData = [];
      if (Array.isArray(data)) imagesData = data;
      else if (Array.isArray(data.images)) imagesData = data.images;
      else if (Array.isArray(data.data)) imagesData = data.data;
      else if (Array.isArray(data.resources)) imagesData = data.resources;
      else if (Array.isArray(data.gallery)) imagesData = data.gallery;

      // base fallback
      const base = getApiBase() || process.env.REACT_APP_API_BASE || "";

      const normalized = imagesData.map((img) => {
        const url =
          img.url ||
          img.secure_url ||
          (img.image && (img.image.url || img.image.secure_url)) ||
          (img.image && img.image.path) ||
          "";

        const finalUrl =
          url &&
          (/^https?:\/\//i.test(url)
            ? url
            : base
            ? `${base}${url.startsWith("/") ? "" : "/"}${url}`
            : url);

        const id =
          img._id ||
          img.id ||
          img.public_id ||
          img.publicId ||
          (img.image && (img.image.public_id || img.image.publicId)) ||
          finalUrl ||
          Math.random().toString(36).slice(2, 9);

        const createdAt =
          img.createdAt || img.created_at || new Date().toISOString();

        return {
          ...img,
          _id: id,
          title: img.title || img.caption || img.name || "",
          content: img.content || img.description || "",
          url: finalUrl,
          createdAt,
        };
      });

      setImages(normalized);
      setFilteredImages(normalized);
      setError(null);
    } catch (err) {
      console.error("Error fetching gallery images:", err);
      setError(
        err?.response?.data?.message || err.message || "Failed to fetch images"
      );
      setImages([]);
      setFilteredImages([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    setImageToDelete(id);
    setIsDeleteModalOpen(true);
  };

  // --- Replace confirmDelete only if you previously had other versions; this one is robust
  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        showNotification("Unauthorized! Please login first.", "error");
        setIsDeleteModalOpen(false);
        return;
      }

      // Build endpoint safely
      const endpoint = buildGalleryEndpoint(imageToDelete); // either '/gallery/:id' or absolute full URL
      // debug
      // eslint-disable-next-line no-console
      console.debug(
        "[Gallery] DELETE ->",
        endpoint,
        " axios.baseURL:",
        getApiBase()
      );

      const resp = await api.delete(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const respData = resp?.data ?? null;
      if (respData && respData.success === false) {
        throw new Error(respData.message || "Failed to delete image");
      }

      // Remove from UI
      setImages((prev) => prev.filter((img) => img._id !== imageToDelete));
      setFilteredImages((prev) =>
        prev.filter((img) => img._id !== imageToDelete)
      );

      showNotification("Image deleted successfully!");
    } catch (err) {
      console.error("Error deleting image:", err);
      showNotification(
        err?.response?.data?.message || err.message || "Delete failed",
        "error"
      );
    } finally {
      setIsDeleteModalOpen(false);
      setImageToDelete(null);
    }
  };

  const handleViewImage = (img) => {
    setSelectedImage(img);
    setIsViewModalOpen(true);
  };

  const formatDate = (d) => {
    try {
      return new Date(d).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return d;
    }
  };

  const handleUpload = () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setError("Unauthorized! Please login first.");
      return;
    }
    navigate("/admin/gallery/upload");
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d173b] to-[#1a2b5f] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="text-white animate-spin" />
          <p className="text-white text-lg">Loading gallery...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d173b] to-[#1a2b5f] flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center max-w-md">
          <div className="text-red-400 text-xl mb-4">{error}</div>
          <Link
            to="/admin/login"
            className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-4 px-4 md:px-8 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <ImagePlus className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">
                Gallery Management
              </h1>
              <p className="text-sm text-gray-300">
                Manage and organize your gallery images
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Dashboard
            </button>
            <button
              onClick={handleUpload}
              className="flex items-center gap-2 bg-yellow-400 text-[#0d173b] px-6 py-2 rounded-lg hover:bg-yellow-500"
            >
              <Upload className="w-5 h-5" /> Upload New Image
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Total Images
                </p>
                <p className="text-4xl font-bold text-[#0d173b] mt-2">
                  {images.length}
                </p>
                <p className="text-gray-400 text-sm mt-1">in your gallery</p>
              </div>
              <div className="bg-gradient-to-r from-[#0d173b]/10 to-[#1a2b5f]/10 p-4 rounded-xl">
                <ImagePlus className="w-8 h-8 text-[#0d173b]" />
              </div>
            </div>
          </div>
        </div>

        {images.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gray-100">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ImagePlus size={48} className="text-[#0d173b]" />
            </div>
            <p className="text-gray-600 text-lg mb-4">
              No images found in the gallery
            </p>
            <button
              onClick={handleUpload}
              className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white px-6 py-3 rounded-lg"
            >
              Upload Your First Image
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredImages.map((img) => (
              <div key={img._id} className="group relative">
                <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform shadow-md border border-gray-100">
                  <div className="relative aspect-square">
                    <img
                      src={img.url || "https://via.placeholder.com/300"}
                      alt={img.title}
                      className="w-full h-full object-cover"
                      onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/300")
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                      <div className="flex justify-end gap-3 mb-2">
                        <button
                          onClick={() => handleViewImage(img)}
                          className="bg-white/20 p-1.5 rounded-full"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(img._id)}
                          className="bg-white/20 p-1.5 rounded-full"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-white text-xs bg-black/20 px-3 py-2 rounded-lg">
                        Uploaded on {formatDate(img.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* view modal */}
      {isViewModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full relative shadow-2xl">
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="mt-6 text-center text-gray-600 bg-gray-50 p-4 rounded-lg">
                Uploaded on {formatDate(selectedImage.createdAt)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* delete modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-[#0d173b] mb-4">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this image? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryDashboard;
