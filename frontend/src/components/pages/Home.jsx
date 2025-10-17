import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, Award, Globe } from 'lucide-react';
import { getCloudinaryUrl } from '../../config/cloudinary';
import { IMAGES, FALLBACK_IMAGES, DIRECT_URLS } from '../../constants/images';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const statsRef = useRef(null);

  // Updated carousel images to use Cloudinary
  const carouselImages = [
    {
      src: getCloudinaryUrl(IMAGES.about.fn, { 
        resize: { width: 800, height: 500, crop: 'fill' } 
      }) || DIRECT_URLS.carouselFn,
      fallback: FALLBACK_IMAGES.fn,
    },
    {
      src: getCloudinaryUrl(IMAGES.about.fn2, { 
        resize: { width: 800, height: 500, crop: 'fill' } 
      }) || DIRECT_URLS.carouselFn2,
      fallback: FALLBACK_IMAGES.fn2,
    },
    {
      src: getCloudinaryUrl(IMAGES.about.fn3, { 
        resize: { width: 800, height: 500, crop: 'fill' } 
      }) || DIRECT_URLS.carouselFn3,
      fallback: FALLBACK_IMAGES.fn3,
    },
    {
      src: getCloudinaryUrl(IMAGES.about.fn4, { 
        resize: { width: 800, height: 500, crop: 'fill' } 
      }) || DIRECT_URLS.carouselFn4,
      fallback: FALLBACK_IMAGES.fn4,
    },
    {
      src: getCloudinaryUrl(IMAGES.about.fn5, { 
        resize: { width: 800, height: 500, crop: 'fill' } 
      }) || DIRECT_URLS.carouselFn5,
      fallback: FALLBACK_IMAGES.fn5,
    }

    
  ];

  const companyIntro = `SAAZ Welfare Foundation empowers underserved communities through mental health, music, and education. We use the healing power of music to inspire hope while mentoring students to succeed in global academics. Our mission blends compassion, culture, and knowledge for lasting impact.`;

  const stats = [
    { icon: Users, number: 1800, suffix: "+", label: "Lives Impacted", duration: 2000 },
    { icon: Heart, number: 240, suffix: "+", label: "Volunteers", duration: 1500 },
    { icon: Award, number: 22, suffix: "+", label: "Programs", duration: 1000 },
    { icon: Globe, number: 15, suffix: "+", label: "Communities", duration: 800 }
  ];

  // Check if mobile on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Counting animation function
  const animateCount = (target, duration, index) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setAnimatedStats(prev => ({
        ...prev,
        [index]: Math.floor(current)
      }));
    }, 16);
  };

  // Intersection Observer for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isStatsVisible) {
            setIsStatsVisible(true);
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateCount(stat.number, stat.duration, index);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isStatsVisible]);

  // Auto-carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Get Maa Saraswati image (circular)
  const maaSaraswatiSrc = getCloudinaryUrl(IMAGES.sacred.maaSaraswati, { 
    resize: { width: 200, height: 200, crop: 'fill' } 
  }) || DIRECT_URLS.maaSaraswati;

  return (
    <div className="relative z-20 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-70"></div>
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative z-10">
        <div className="relative pt-20 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
              
              {/* Content Section */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2">
                
                {/* Fixed Title Card with Better Layout */}
                <div className="backdrop-blur-sm bg-white/80 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-white/50 shadow-xl">
                  
                  {/* Mobile-first responsive layout */}
                  <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
                    
                    {/* Title Section */}
                    <div className="w-full">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight mb-4">
                        Welcome to{' '}
                        <span className="text-green-700 block sm:inline">
                          Saaz Welfare
                        </span>{' '}
                        <span className="text-[#c98d32] block sm:inline">
                          Foundation
                        </span>
                      </h1>
                    </div>

                    {/* Maa Saraswati Image Section - Fixed for iPad Pro */}
                    <div className="flex flex-col items-center">
                      <div className="relative group">
                        {/* Constrained image container */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300 bg-white border-2 border-orange-200">
                          <img
                            src={maaSaraswatiSrc}
                            alt="Maa Saraswati - Goddess of Knowledge"
                            className="w-full h-full object-cover object-center"
                            onError={(e) => {
                              console.log('Maa Saraswati image failed to load from Cloudinary, using fallback');
                              e.target.src = FALLBACK_IMAGES.maaSaraswati;
                            }}
                          />
                        </div>
                        
                        {/* Blessing text - constrained width */}
                        <div className="mt-3 max-w-[200px] mx-auto">
                          <p className="text-xs sm:text-sm text-orange-700 font-semibold whitespace-nowrap">
                            🙏 माँ सरस्वती की कृपा 🙏
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description Card */}
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/30 shadow-lg">
                  <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium text-center lg:text-left">
                    {companyIntro}
                  </p>
                </div>
              </div>

              {/* Carousel Section */}
              <div className="relative order-2 lg:order-1">
                <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50">
                  
                  {carouselImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 transform ${
                        index === currentSlide 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <img
                        src={image.src}
                        className="w-full h-full"
                        onError={(e) => {
                          console.log(`Carousel image ${index} failed to load from Cloudinary, using fallback`);
                          e.target.src = image.fallback;
                        }}
                      />
                      
                    </div>
                  ))}
                  
                  {/* Navigation buttons */}
                  {!isMobile && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#6A0DAD] p-2 sm:p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#6A0DAD] p-2 sm:p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2 sm:space-x-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-6 sm:w-8 h-2 sm:h-3 bg-[#6A0DAD] rounded-full shadow-lg'
                          : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/70 rounded-full hover:bg-[#6A0DAD] hover:bg-opacity-50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile Swipe Indicator */}
                {isMobile && (
                  <div className="text-center mt-3">
                    <p className="text-xs text-slate-500">Swipe left or right to navigate</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stats Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Our <span className="text-[#c6651a]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Impact</span> in Numbers
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#228B22] to-[#6A0DAD] rounded-full mx-auto"></div>
          </div>

          {/* Stats Grid */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/50 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center group hover:scale-105 transition-all duration-500 p-4 rounded-xl hover:bg-slate-50 ${
                    isStatsVisible ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:from-[#dd6f14] group-hover:to-[#d67403] group-hover:text-white transition-all duration-300 shadow-lg">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#c6651a] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-1 sm:mb-2 font-mono">
                    {formatNumber(animatedStats[index] || 0)}{stat.suffix}
                  </h3>
                  <p className="text-slate-600 font-medium text-sm sm:text-base">{stat.label}</p>
                  
                  {/* Progress Ring for Mobile */}
                  {isMobile && isStatsVisible && (
                    <div className="mt-3 w-full bg-slate-200 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#228B22] to-[#c6651a] rounded-full transition-all duration-1000"
                        style={{ width: `${(animatedStats[index] / stat.number) * 100}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        }

        /* Custom scrollbar for mobile */
        @media (max-width: 768px) {
          ::-webkit-scrollbar {
            width: 4px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f5f9;
          }
          ::-webkit-scrollbar-thumb {
            background: #6A0DAD;
            border-radius: 2px;
          }
        }

        /* Touch-friendly hover states for mobile */
        @media (max-width: 768px) {
          .group:hover {
            transform: none;
          }
          
          .group:active {
            transform: scale(0.98);
          }
        }

        /* iPad Pro specific fixes */
        @media screen and (min-width: 1024px) and (max-width: 1366px) {
          .lg\\:text-5xl {
            font-size: 2.5rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;