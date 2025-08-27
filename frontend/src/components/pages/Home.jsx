import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, Award, Globe } from 'lucide-react';
import care from './assets/care1.png';
import care2 from './assets/care2.png';
// import grp from './assets/grp.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const statsRef = useRef(null);

  const carouselImages = [
    {
      src: care,
    },
    {
      src: care2,
    },
  ];

  const companyIntro = `
    Saaz Welfare is dedicated to creating positive change in communities through 
    comprehensive welfare programs. We focus on education, healthcare, and social 
    development initiatives that empower individuals and families. Our mission is 
    to bridge gaps in society by providing essential services and support to those 
    in need. Through collaborative efforts with local communities, we strive to 
    build a more equitable and sustainable future for all. Join us in making a 
    difference, one life at a time.
  `;

  const stats = [
    { icon: Users, number: 10000, suffix: "+", label: "Lives Impacted", duration: 2000 },
    { icon: Heart, number: 500, suffix: "+", label: "Volunteers", duration: 1500 },
    { icon: Award, number: 25, suffix: "+", label: "Programs", duration: 1000 },
    { icon: Globe, number: 15, suffix: "+", label: "Communities", duration: 800 }
  ];

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
      { threshold: 0.5 }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
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
    <>
      <div className="relative z-20">

        {/* Hero Section */}
        <section id="home" className="min-h-screen relative z-20">
          <div className="relative z-10 pt-32 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
                
                {/* Enhanced Carousel Section */}
                <div className="relative order-2 lg:order-1">
                  <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-white/90 backdrop-blur-sm border border-white/50">
                    
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 transform ${
                          index === currentSlide 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-96"
                        />
                        {/* Caption */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-blue-500 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/30">
                            <h3 className="text-lg font-bold text-white">{image.alt}</h3>
                            <p className="text-sm text-white/80 mt-1">Making a difference in our community</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Navigation buttons */}
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#6A0DAD] p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#6A0DAD] p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Enhanced slide indicators */}
                  <div className="flex justify-center mt-8 space-x-3">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 ${
                          index === currentSlide
                            ? 'w-8 h-3 bg-[#6A0DAD] rounded-full shadow-lg'
                            : 'w-3 h-3 bg-white/70 rounded-full hover:bg-[#6A0DAD] hover:bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="space-y-10 order-1 lg:order-2">
                  <div className=" backdrop-blur-sm p-8 rounded-3xl border border-white/100 shadow-xl">
                    <div className="space-y-6">                  
                      <h1 className="text-6xl font-bold text-slate-800 leading-tight">
                        Welcome to{' '}
                        <span className="relative">
                          <span className="text-[#6A0DAD]">Saaz Welfare</span>
                          <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#228B22] rounded-full"></div>
                        </span>{' '}
                        <span className="text-[#61da61] bg-blue-800">Foundation</span>
                      </h1>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-1 bg-[#228B22] rounded-full"></div>
                        <div className="w-8 h-1 bg-[#6A0DAD] rounded-full"></div>
                        <div className="w-4 h-1 bg-slate-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/30 shadow-lg">
                    <p className="text-slate-700 text-xl leading-relaxed font-medium">
                      {companyIntro}
                    </p>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group bg-[#6A0DAD]/90 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#5a0b96] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/20"
                    >
                      <span className="flex items-center">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>
                    
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="group border-2 border-[#228B22] bg-white/70 backdrop-blur-sm text-[#228B22] px-8 py-4 rounded-2xl font-semibold hover:bg-[#228B22] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                        Get Involved
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section ref={statsRef} className="py-20 relative z-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center group hover:scale-105 transition-all duration-500 ${
                      isStatsVisible ? 'animate-fadeInUp' : 'opacity-0'
                    }`}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-4 group-hover:bg-[#6A0DAD] group-hover:text-white transition-all duration-300">
                      <stat.icon className="w-8 h-8 text-[#6A0DAD] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-2 font-mono">
                      {formatNumber(animatedStats[index] || 0)}{stat.suffix}
                    </h3>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;