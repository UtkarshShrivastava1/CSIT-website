import React, { useState, useEffect } from 'react';
import { 
  Edit, 
  Trash2, 
  PlusCircle, 
  X, 
  ImagePlus, 
  CheckCircle2, 
  Eye, 
  Loader2, 
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Info,
  Upload
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../services/api';

const GalleryDashboard = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  
  const [editFormData, setEditFormData] = useState({
    title: '',
    content: '',
    image: null,
    existingImage: null,
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  useEffect(() => {
    if (images.length === 0 && !loading) {
      setShowEmptyState(true);
    } else {
      setShowEmptyState(false);
      filterImages();
    }
  }, [images, loading, searchQuery]);

  const filterImages = () => {
    if (!searchQuery.trim()) {
      setFilteredImages(images);
      return;
    }

    const filtered = images.filter(image => 
      image.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
      image.content?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredImages(filtered);
  };

  const fetchGalleryImages = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        setError('Unauthorized! Please login first.');
        return;
      }

      setLoading(true);

      const response = await api.get("/gallery",{
        headers:{
          Authorization: `Bearee ${token}`
        },
      });



      // if (!response.ok) {
      //   throw new Error('Failed to fetch gallery images');
      // }

      // const data = await response.json();

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

      // Process image URLs
      imagesData = imagesData.map(image => {
        let imageUrl = '';
        if (image.image && image.image.url) {
          // If URL is already a full URL
          if (image.image.url.startsWith('http')) {
            imageUrl = image.image.url;
          } else {
            // If URL is a path, prepend the server URL
            // imageUrl = `http://localhost:5000${image.image.url}`;
            imageUrl = `${api}${image.image.url}`;
          }
        } else if (image.image && image.image.filename) {
          // If we have a filename, construct the URL
          // imageUrl = `http://localhost:5000/uploads/${image.image.filename}`;
          imageUrl = `${api}${image.image.filename}`;
        } else if (image.image && image.image.path) {
          // If we have a path, construct the URL
          // imageUrl = `http://localhost:5000${image.image.path}`;
          imageUrl = `${api}${image.image.path}`;
        }

        return {
          ...image,
          url: imageUrl
        };
      });

      setImages(imagesData);
      setFilteredImages(imagesData);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(error.message);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message, type = 'success') => {
    // Create notification container if it doesn't exist
    let notificationContainer = document.getElementById('notification-container');
    if (!notificationContainer) {
      notificationContainer = document.createElement('div');
      notificationContainer.id = 'notification-container';
      notificationContainer.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2';
      document.body.appendChild(notificationContainer);
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `
      px-6 py-4 rounded-lg shadow-lg 
      ${type === 'success' 
        ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
        : 'bg-gradient-to-r from-rose-500 to-red-500'} 
      text-white flex items-center gap-3 
      transform transition-all duration-500 ease-out
      translate-x-0 opacity-100 min-w-[300px]
    `;
    
    notification.innerHTML = `
      <div class="flex-shrink-0">
        ${type === 'success' 
          ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' 
          : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>'}
      </div>
      <div class="flex-1">
        <p class="font-medium">${message}</p>
      </div>
      <button class="flex-shrink-0 hover:opacity-70 transition-opacity">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    `;
    
    // Add close button functionality
    notification.querySelector('button').addEventListener('click', () => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        notificationContainer.removeChild(notification);
      }, 500);
    });
    
    // Add to container
    notificationContainer.appendChild(notification);
    
    // Auto remove after delay
    setTimeout(() => {
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => {
        if (notification.parentNode === notificationContainer) {
          notificationContainer.removeChild(notification);
        }
      }, 500);
    }, 5000);
  };

  const handleDelete = (imageId) => {
    setImageToDelete(imageId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      // const response = await fetch(`http://localhost:5000/api/gallery/${imageToDelete}`, {
      //   method: 'DELETE',
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      
      const response = await api.delete(`/gallery/${imageToDelete}`,{
        // method:"DELETE",
        headers:{
          Authorization: `Bearer ${token}`,   
        },
      })


      // if (!response.ok) {
      //   throw new Error('Failed to delete image');
      // }

      // Update the images state by filtering out the deleted image
      setImages(prevImages => prevImages.filter(img => img._id !== imageToDelete));
      setFilteredImages(prevImages => prevImages.filter(img => img._id !== imageToDelete));
      
      showNotification('Image deleted successfully!');
    } catch (error) {
      console.error('Error deleting image:', error);
      showNotification(error.message, 'error');
    } finally {
      setIsDeleteModalOpen(false);
      setImageToDelete(null);
    }
  };

  const handleEdit = (image) => {
    setSelectedImage(image);
    setEditFormData({
      title: image.title || '',
      content: image.content || '',
      image: null,
      existingImage: image.url,
    });
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('adminToken');
      const formData = new FormData();
      formData.append('title', editFormData.title);
      formData.append('content', editFormData.content);
      
      // Only append image if a new one is selected
      if (editFormData.image) {
        formData.append('image', editFormData.image);
      }

      // const response = await fetch(`http://localhost:5000/api/gallery/${selectedImage._id}`, {
      //   method: 'PUT',
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: formData,
      // });


      const response = await api.put(`/gallery/${selectedImage._id}`,{
        headers:{
          Authorization: `Bearer ${token}`,
        },
        body:formData,
      })

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to update image');
      }

      // Get the updated data
      const updatedImage = data.data || {
        ...selectedImage,
        title: editFormData.title,
        content: editFormData.content,
        // Keep URL if no new image was uploaded
        url: editFormData.image ? URL.createObjectURL(editFormData.image) : selectedImage.url
      };

      // Update the image in the list
      setImages(prevImages => 
        prevImages.map(image => image._id === selectedImage._id ? updatedImage : image)
      );
      setFilteredImages(prevImages => 
        prevImages.map(image => image._id === selectedImage._id ? updatedImage : image)
      );

      showNotification('Image updated successfully!');
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating image:', error);
      showNotification(error.message, 'error');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL for the new image
      const previewUrl = URL.createObjectURL(file);
      setEditFormData(prev => ({
        ...prev,
        image: file,
        existingImage: previewUrl,
      }));
    }
  };

  const handleRemoveImage = () => {
    setEditFormData(prev => ({
      ...prev,
      image: null,
      existingImage: null,
    }));
  };

  const handleViewImage = (image) => {
    setSelectedImage(image);
    setIsViewModalOpen(true);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleUpload = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      setError('Unauthorized! Please login first.');
      return;
    }
    navigate('/admin/gallery/upload');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d173b] to-[#1a2b5f] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="text-white animate-spin" />
          <p className="text-white text-lg">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white py-4 px-4 md:px-8 shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <ImagePlus className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold">Gallery Management</h1>
              <p className="text-sm text-gray-300">Manage and organize your gallery images</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </button>
            <button
              onClick={handleUpload}
              className="flex items-center gap-2 bg-yellow-400 text-[#0d173b] px-6 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <Upload className="w-5 h-5" />
              Upload New Image
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Enhanced Stats Card */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Total Images Card */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 transform transition-all duration-300 hover:scale-[1.02] shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Images</p>
                <p className="text-4xl font-bold text-[#0d173b] mt-2">{images.length}</p>
                <p className="text-gray-400 text-sm mt-1">in your gallery</p>
              </div>
              <div className="bg-gradient-to-r from-[#0d173b]/10 to-[#1a2b5f]/10 p-4 rounded-xl backdrop-blur-sm">
                <ImagePlus className="w-8 h-8 text-[#0d173b]" />
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        {!Array.isArray(images) || images.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center transform transition-all duration-300 hover:scale-[1.02] shadow-lg border border-gray-100">
            <div className="bg-gradient-to-r from-[#0d173b]/10 to-[#1a2b5f]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <ImagePlus size={48} className="text-[#0d173b]" />
            </div>
            <p className="text-gray-600 text-lg mb-4">No images found in the gallery</p>
            <button
              onClick={handleUpload}
              className="inline-block bg-gradient-to-r from-[#0d173b] to-[#1a2b5f] text-white px-6 py-3 rounded-lg hover:from-[#1a2b5f] hover:to-[#0d173b] transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Upload Your First Image
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {images.map((image) => (
              <div key={image._id} className="group relative">
                <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-md border border-gray-100">
                  <div className="relative aspect-square">
                    <img
                      src={image.url}
                      alt="Gallery"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <div className="flex justify-end gap-3 mb-2">
                        <button
                          onClick={() => handleViewImage(image)}
                          className="bg-white/20 text-white p-1.5 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(image._id)}
                          className="bg-white/20 text-white p-1.5 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-white text-xs bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                        Uploaded on {new Date(image.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image View Modal */}
      {isViewModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full relative shadow-2xl">
            <button
              onClick={() => setIsViewModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors bg-white/80 backdrop-blur-sm p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <div className="p-8">
              <img
                src={selectedImage.url}
                alt="Gallery"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl shadow-lg"
              />
              <div className="mt-6 text-center text-gray-600 bg-gray-50 p-4 rounded-lg">
                Uploaded on {new Date(selectedImage.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-[#0d173b] mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this image? This action cannot be undone.</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-xl"
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