import React, { useState, useEffect } from "react";
import { ArrowLeft, Upload, Loader2, Save, AlertCircle } from "lucide-react";
import api from "../../services/api";

function MediaForm({ onBack, onSuccess, editData }) {
  const [formData, setFormData] = useState({ title: "", category: "", description: "", date: "" });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  
  // ✅ Notification jaisa similar confirmation state add kiya hai
  const [status, setStatus] = useState({ type: null, message: "" });

  useEffect(() => {
    if (editData) {
      setFormData({
        title: editData.title || "",
        category: editData.category || "",
        description: editData.description || "",
        date: editData.date || ""
      });
      if (editData.image?.url) {
        setPreviewUrl(editData.image.url);
      }
    }
  }, [editData]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });
    
    // Validation check
    if (!editData && !imageFile) {
      setStatus({ type: "error", message: "Please select an image file first." });
      return;
    }
    
    setLoading(true);
    const postPayload = new FormData();
    postPayload.append("title", formData.title);
    postPayload.append("category", formData.category);
    postPayload.append("description", formData.description);
    postPayload.append("date", formData.date);
    
    if (imageFile) {
      postPayload.append("image", imageFile);
    }

    try {
      const token = localStorage.getItem("adminToken");
      console.log("Submitting media form with payload:", {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        date: formData.date,
        imageFile: imageFile ? imageFile.name : "No new image",
        editMode: !!editData
      },token ? "with token" : "without token");
      let res;
      
      if (editData) {
        res = await api.put(`/media-coverage/${editData._id}`, postPayload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        });
      } else {
        res = await api.post("/media-coverage", postPayload, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          }
        });
      }

      if (res.data?.success) {
        // ✅ inline confirmation update
        setStatus({ 
          type: "success", 
          message: editData ? "Media records successfully updated on system grids." : "Media published successfully to live arrays!" 
        });
        setTimeout(() => onSuccess(), 1000);
      }
    } catch (err) {
      setStatus({ 
        type: "error", 
        message: err.response?.data?.message || "Something went wrong during cluster synchronisation." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button 
        onClick={onBack} 
        className="flex items-center gap-1 text-gray-500 hover:text-[#0d173b] transition-colors font-medium"
      >
        <ArrowLeft size={18} /> Cancel & Back
      </button>

      <form onSubmit={handleFormSubmit} className="bg-white border rounded-xl p-6 shadow-sm space-y-5">
        <h3 className="text-xl font-bold text-[#0d173b] border-b pb-2">
          {editData ? "Update Media Content" : "Generate New Media Entry"}
        </h3>
        
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Title <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            required 
            value={formData.title} 
            onChange={e => setFormData({...formData, title: e.target.value})} 
            className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#0d173b] outline-none text-black text-sm shadow-sm" 
            placeholder="Enter article title..." 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Category <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              value={formData.category} 
              onChange={e => setFormData({...formData, category: e.target.value})} 
              className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#0d173b] outline-none text-black text-sm shadow-sm" 
              placeholder="e.g., Faculty Recognition" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Date <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              required 
              value={formData.date} 
              onChange={e => setFormData({...formData, date: e.target.value})} 
              className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#0d173b] outline-none text-black text-sm shadow-sm" 
              placeholder="e.g., February 5, 2024" 
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea 
            rows={3} 
            required 
            value={formData.description} 
            onChange={e => setFormData({...formData, description: e.target.value})} 
            className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#0d173b] outline-none text-black text-sm resize-none shadow-sm" 
            placeholder="Write description..." 
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">
            Image {editData ? <span className="text-xs text-gray-400 font-normal">(Leave empty to keep existing)</span> : <span className="text-red-500">*</span>}
          </label>
          <div className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="absolute inset-0 opacity-0 cursor-pointer" 
            />
            {previewUrl ? (
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="mx-auto h-32 object-contain rounded-md" 
              />
            ) : (
              <div className="text-gray-400 space-y-1">
                <Upload className="mx-auto" size={28} />
                <p className="text-xs">Click to upload image</p>
                <p className="text-xs text-gray-300">PNG, JPG, WEBP accepted</p>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Status alert exactly like Notification form */}
        {status.message && (
          <div className={`p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-medium">{status.message}</p>
          </div>
        )}

        <button 
          type="submit" 
          disabled={loading} 
          className="w-full bg-[#0d173b] hover:bg-[#0d173b]/90 text-white p-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 text-sm shadow-md transform hover:-translate-y-0.5"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              <span>Updating Grid Clusters...</span>
            </>
          ) : (
            <>
              <Save size={18} />
              <span>{editData ? "Apply Structural Changes" : "Add  Media"}</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default MediaForm;