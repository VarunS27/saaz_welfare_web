import React, { useState, useEffect, useRef } from 'react';
import { Camera, Heart, Users, Eye, Play, Pause, Grid, List, Search, Filter, X, ArrowLeft, ArrowRight, Star, MapPin } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [filter, setFilter] = useState('all');
  const [isPlaying, setIsPlaying] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const galleryRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying && selectedImage) {
      const interval = setInterval(() => {
        handleNextImage();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, selectedImage, currentImageIndex]);

  // Gallery data with categories
  const galleryData = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      height: 'h-64'
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=600&fit=crop",
      height: 'h-80'
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      height: 'h-48'
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=600&h=500&fit=crop",
      height: 'h-72'
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
      height: 'h-64'
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=350&fit=crop",
      height: 'h-56'
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=450&fit=crop",
      height: 'h-68'
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=550&fit=crop",
      height: 'h-76'
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop",
      height: 'h-64'
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=300&fit=crop",
      height: 'h-48'
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=500&fit=crop",
      height: 'h-72'
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop",
      height: 'h-64'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', color: 'from-slate-500 to-slate-600' },
    { id: 'healthcare', name: 'Healthcare', color: 'from-red-500 to-red-600' },
    { id: 'education', name: 'Education', color: 'from-blue-500 to-blue-600' },
    { id: 'environment', name: 'Environment', color: 'from-green-500 to-green-600' },
    { id: 'empowerment', name: 'Empowerment', color: 'from-[#c98d32] to-orange-600' },
    { id: 'community', name: 'Community', color: 'from-purple-500 to-purple-600' }
  ];

  // Filter images based on category and search
  const filteredImages = galleryData.filter(image => {
    const matchesCategory = filter === 'all';
    const matchesSearch = true;
    return matchesCategory && matchesSearch;
  });

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsPlaying(false);
    document.body.style.overflow = 'unset';
  };

  const handlePrevImage = () => {
    const newIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex === filteredImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Background with brand colors */}
      <div className="absolute opacity-70 inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#c98d32] opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-500 opacity-3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div ref={galleryRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">

          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#c98d32] via-purple-600 to-green-600 bg-clip-text text-transparent">
              Stories of Change
            </span>
            <br />
            <span className="text-slate-800 text-4xl sm:text-5xl lg:text-6xl">Through Pictures</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Every image captures a moment of transformation, hope, and community impact. 
            Explore our journey of creating positive change across communities.
          </p>

          {/* <div className="w-24 h-1 bg-gradient-to-r from-[#c98d32] via-purple-600 to-green-600 rounded-full mx-auto"></div> */}
        </div>

      

        {/* Gallery Grid */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'columns-1 md:columns-2 lg:columns-3 space-y-6'
          }`}>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
                }`}
                onClick={() => openModal(image, index)}
              >
                <div className={`relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  viewMode === 'grid' ? image.height : 'h-auto'
                }`}>
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-end">
                        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Eye className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {(searchTerm || filter !== 'all') && (
          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Showing <span className="font-semibold text-[#c98d32]">{filteredImages.length}</span> of {galleryData.length} projects
              {searchTerm && (
                <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
              )}
            </p>
          </div>
        )}


      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-96 bg-white rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
            >
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 left-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            <div className="grid lg:grid-cols-1 max-h-full">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={selectedImage.src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              
 
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;