import React, { useState, useEffect, useRef } from 'react';
import { Camera, Heart, Users, Eye } from 'lucide-react';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageRotation, setImageRotation] = useState(0);
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
      { threshold: 0.2 }
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

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageRotation(prev => (prev + 1) % galleryImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Extended gallery images data
  const galleryImages = [
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?w=400&h=400&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face"
  ];

  // Optimized positions to prevent overlapping - more spread out
  const imagePositions = [
    // Left side - top row
    { top: '8%', left: '5%', size: 'w-24 h-28', rotation: 'rotate-12', zIndex: 10 },
    { top: '5%', left: '20%', size: 'w-28 h-24', rotation: '-rotate-6', zIndex: 8 },
    { top: '12%', left: '35%', size: 'w-20 h-32', rotation: 'rotate-3', zIndex: 9 },
    
    // Left side - middle row
    { top: '35%', left: '3%', size: 'w-32 h-20', rotation: '-rotate-8', zIndex: 7 },
    { top: '40%', left: '18%', size: 'w-24 h-28', rotation: 'rotate-10', zIndex: 11 },
    { top: '32%', left: '32%', size: 'w-28 h-24', rotation: '-rotate-4', zIndex: 6 },
    
    // Left side - bottom row
    { bottom: '25%', left: '8%', size: 'w-20 h-24', rotation: 'rotate-6', zIndex: 12 },
    { bottom: '28%', left: '22%', size: 'w-24 h-32', rotation: '-rotate-9', zIndex: 5 },
    { bottom: '15%', left: '35%', size: 'w-28 h-20', rotation: 'rotate-7', zIndex: 13 },
    
    // Right side - top row
    { top: '10%', right: '8%', size: 'w-24 h-28', rotation: '-rotate-10', zIndex: 14 },
    { top: '6%', right: '22%', size: 'w-32 h-24', rotation: 'rotate-5', zIndex: 4 },
    { top: '18%', right: '35%', size: 'w-20 h-28', rotation: '-rotate-7', zIndex: 15 },
    
    // Right side - middle row
    { top: '38%', right: '5%', size: 'w-28 h-32', rotation: 'rotate-8', zIndex: 3 },
    { top: '42%', right: '20%', size: 'w-24 h-20', rotation: '-rotate-12', zIndex: 16 },
    { top: '35%', right: '33%', size: 'w-20 h-24', rotation: 'rotate-4', zIndex: 2 },
    
    // Right side - bottom row
    { bottom: '20%', right: '10%', size: 'w-32 h-28', rotation: '-rotate-5', zIndex: 17 },
    { bottom: '25%', right: '25%', size: 'w-24 h-24', rotation: 'rotate-11', zIndex: 1 },
    { bottom: '12%', right: '38%', size: 'w-28 h-20', rotation: '-rotate-3', zIndex: 18 }
  ];

  // Get current set of images to display
  const getCurrentImages = () => {
    const images = [];
    for (let i = 0; i < imagePositions.length; i++) {
      const imageIndex = (imageRotation + i) % galleryImages.length;
      images.push(galleryImages[imageIndex]);
    }
    return images;
  };

  return (
    <section id="gallery" className="min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50 opacity-70"></div>

      <div ref={galleryRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm mb-8">
            <Camera className="w-5 h-5 text-[#c98d32]" />
            <span className="text-sm font-medium text-gray-700">Gallery</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#c98d32] via-purple-600 to-green-600 bg-clip-text text-transparent">
              Our Impact
            </span>
            <br />
            <span className="text-gray-800 text-4xl sm:text-5xl lg:text-6xl">in Pictures</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the faces and moments that define our mission. Every image tells a story of 
            <span className="font-semibold text-[#c98d32]"> hope</span>, 
            <span className="font-semibold text-purple-600"> change</span>, and 
            <span className="font-semibold text-green-600"> community</span>.
          </p>
        </div>

        {/* Floating Images Gallery */}
        <div className="relative h-[800px] lg:h-[900px]">
          {getCurrentImages().map((imageSrc, index) => {
            const position = imagePositions[index];
            if (!position) return null;
            
            return (
              <div
                key={`${imageRotation}-${index}`}
                className={`absolute ${position.size} ${position.rotation} transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  ...position,
                  zIndex: position.zIndex,
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative w-full h-full group cursor-pointer">
                  <div className="w-full h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 p-2">
                    <img
                      src={imageSrc}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hover overlay */}
                  
                </div>
              </div>
            );
          })}
          
          {/* Central focal point */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <Users className="w-8 h-8 text-[#c98d32] mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-700">Community</div>
                <div className="text-xs text-gray-500">Gallery</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float:nth-child(even) {
          animation-delay: -3s;
        }

        /* Custom size classes */
        .w-22 { width: 5.5rem; }
        .h-22 { height: 5.5rem; }
        .w-26 { width: 6.5rem; }
        .h-26 { height: 6.5rem; }
      `}</style>
    </section>
  );
};

export default Gallery;