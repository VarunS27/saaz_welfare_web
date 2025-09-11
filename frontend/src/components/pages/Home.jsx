import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, Award, Globe, ArrowRight, Play } from 'lucide-react';
import care from './assets/care1.png';
import care1 from './assets/care2.png';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const statsRef = useRef(null);

  const carouselImages = [
    {
      src: care1,
      alt: 'Community Healthcare Initiative',
      title: 'Healthcare for All',
      description: 'Providing quality medical care to underserved communities'
    },
    {
      src: care,
      alt: 'Educational Programs',
      title: 'Education & Learning',
      description: 'Empowering minds through quality education and skill development'
    }
  ];

  const companyIntro = `Saaz Welfare Foundation is dedicated to creating positive change in communities through comprehensive welfare programs. We focus on education, healthcare, and social development initiatives that empower individuals and families.`;

  const stats = [
    { icon: Users, number: 10000, suffix: "+", label: "Lives Impacted", duration: 2000 },
    { icon: Heart, number: 500, suffix: "+", label: "Volunteers", duration: 1500 },
    { icon: Award, number: 25, suffix: "+", label: "Programs", duration: 1000 },
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
    }, 6000); // 6 seconds for better mobile experience
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

  return (
    <div className="relative z-20  min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-70"></div>
      

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative z-10">
        <div className="relative pt-20 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
              
              {/* Content Section - Mobile First */}
              <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2">
                
                {/* Main Title Card */}
                <div className=" backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/50 shadow-xl">
                  <div className="space-y-4 sm:space-y-6">                  
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 leading-tight">
                      Welcome to{' '}
                      <span className="relative inline-block">
                        <span className="text-green-800">Saaz Welfare</span>
                        {/* <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-[#228B22] rounded-full"></div> */}
                      </span>{' '}
                      <span className="text-[#c98d32]  px-2 py-1 rounded-lg inline-block mt-2 sm:mt-0"
                      style={{ animation: 'fade-in 2s infinite' }}
                      >Foundation</span>
                    </h1>
                    

                  </div>
                </div>
                
                {/* Description Card */}
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/30 shadow-lg">
                  <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
                    {companyIntro}
                  </p>
                </div>
                

              </div>

              {/* Enhanced Carousel Section */}
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
                        alt={image.alt}
                        className="w-full h-full "
                      />
                      
                      {/* Enhanced Caption */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6">
                        <div className="text-white">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{image.title}</h3>
                          <p className="text-sm sm:text-base text-white/90">{image.description}</p>
                        </div>
                      </div>


                    </div>
                  ))}
                  
                  {/* Navigation buttons - Hidden on very small screens */}
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
                
                {/* Enhanced Slide Indicators */}
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

      {/* Animated Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stats Header */}
<div className="text-center mb-8 sm:mb-12">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
    Our <span className="text-[#c6651a] " style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Impact</span> in Numbers
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
      `}</style>
    </div>
  );
};

export default Home;