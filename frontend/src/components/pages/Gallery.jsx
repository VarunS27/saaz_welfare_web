import React, { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { getCloudinaryUrl } from '../../config/cloudinary';
import { IMAGES, FALLBACK_IMAGES } from '../../constants/images';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
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

  // Gallery images
  const galleryImages = [
    {
      id: 1,
      src: IMAGES.gallery.image1,
      alt: 'Community gathering and cultural function'
    },
    {
      id: 2,
      src: IMAGES.gallery.image2,
      alt: 'Educational program and learning activities'
    },
    {
      id: 3,
      src: IMAGES.gallery.image3,
      alt: 'Team members collaborating on projects'
    },
    {
      id: 4,
      src: IMAGES.gallery.image4,
      alt: 'Community outreach and social work'
    },
    {
      id: 5,
      src: IMAGES.gallery.image5,
      alt: 'Healthcare and medical support programs'
    },
    {
      id: 6,
      src: IMAGES.gallery.image6,
      alt: 'Youth development and mentorship programs'
    },
    {
      id: 7,
      src: IMAGES.gallery.image7,
      alt: 'Women empowerment and skill development'
    },
    {
      id: 8,
      src: IMAGES.gallery.image8,
      alt: 'Environmental conservation activities'
    },
    {
      id: 9,
      src: IMAGES.gallery.image9,
      alt: 'Cultural heritage preservation activities'
    },
    {
      id: 10,
      src: IMAGES.gallery.image10,
      alt: 'Music therapy and healing programs'
    }
  ];

  // Get optimized image URL
  const getGalleryImageUrl = (publicId, size = 'medium') => {
    if (!publicId) return FALLBACK_IMAGES.defaultImage;
    
    const sizeConfig = {
      thumbnail: { width: 400, height: 300 },
      medium: { width: 800, height: 600 },
      large: { width: 1200, height: 900 }
    };
    
    return getCloudinaryUrl(publicId, { 
      resize: { ...sizeConfig[size], crop: 'fill' } 
    });
  };

  // Handle image click
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  const navigateImage = (direction) => {
    const maxIndex = galleryImages.length - 1;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentImageIndex >= maxIndex ? 0 : currentImageIndex + 1;
    } else {
      newIndex = currentImageIndex <= 0 ? maxIndex : currentImageIndex - 1;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="gallery" className="min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 opacity-70">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#c98d32] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div ref={galleryRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#c98d32] via-purple-600 to-green-600 bg-clip-text text-transparent">
              Our Beautiful Moments
            </span>
            <br />
            In Pictures
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Explore the beautiful moments that define our mission and celebrate our impact.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#c98d32] via-purple-600 to-green-600 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Gallery Grid */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {isLoading ? (
            // Loading Skeleton
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg animate-pulse h-64"
                >
                  <div className="w-full h-full bg-slate-200"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 animate-fadeInUp h-64"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openLightbox(image, index)}
                >
                  <div className="relative overflow-hidden w-full h-full">
                    <img
                      src={getGalleryImageUrl(image.src, 'medium')}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.log(`Gallery image ${image.id} failed to load, using fallback`);
                        e.target.src = FALLBACK_IMAGES.defaultImage;
                      }}
                    />
                    
                    {/* Simple hover overlay with zoom icon */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Clean Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <div className="w-6 h-6 border-l-2 border-t-2 border-white transform -rotate-45"></div>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300"
            >
              <div className="w-6 h-6 border-r-2 border-t-2 border-white transform rotate-45"></div>
            </button>

            {/* Full Size Image */}
            <img
              src={getGalleryImageUrl(selectedImage.src, 'large')}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Simple Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Gallery;