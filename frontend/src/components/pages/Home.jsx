import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, Award, Globe } from 'lucide-react';
import care from './assets/care1.png';
import care2 from './assets/care2.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const statsRef = useRef(null);

  // Mock images for demonstration
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
    const increment = target / (duration / 16); // 60fps
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
            // Start animations for all stats
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateCount(stat.number, stat.duration, index);
              }, index * 200); // Stagger the animations
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

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236A0DAD' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 pt-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
              
              {/* Enhanced Carousel Section */}
              <div className="relative order-2 lg:order-1">
                <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-white border border-slate-200">
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#6A0DAD] rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#228B22] rounded-full opacity-15 blur-xl"></div>
                  
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
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay */}
                      {/* <div className="absolute inset-0 bg-black bg-opacity-20"></div> */}
                      {/* Caption */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white bg-opacity-95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                          <h3 className="text-lg font-bold text-slate-800">{image.alt}</h3>
                          <p className="text-sm text-slate-600 mt-1">Making a difference in our community</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 backdrop-blur-sm text-[#6A0DAD] p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 backdrop-blur-sm text-[#6A0DAD] p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
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
                          ? 'w-8 h-3 bg-[#6A0DAD] rounded-full'
                          : 'w-3 h-3 bg-slate-300 rounded-full hover:bg-[#6A0DAD] hover:bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="space-y-10 order-1 lg:order-2">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-[#6A0DAD] bg-opacity-10 rounded-full">
                    <Heart className="w-4 h-4 text-[#6A0DAD] mr-2" />
                    <span className="text-sm font-semibold text-[#6A0DAD]">Making a Difference</span>
                  </div>
                  
                  <h1 className="text-6xl font-bold text-slate-800 leading-tight">
                    Welcome to{' '}
                    <span className="relative">
                      <span className="text-[#6A0DAD]">Saaz Welfare</span>
                      <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#228B22] rounded-full transform scale-x-0 animate-pulse"></div>
                    </span>{' '}
                    <span className="text-[#228B22]">Foundation</span>
                  </h1>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-[#228B22] rounded-full"></div>
                    <div className="w-8 h-1 bg-[#6A0DAD] rounded-full"></div>
                    <div className="w-4 h-1 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-slate-600 text-xl leading-relaxed font-medium max-w-2xl">
                  {companyIntro}
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group bg-[#6A0DAD] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#5a0b96] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group border-2 border-[#228B22] text-[#228B22] px-8 py-4 rounded-2xl font-semibold hover:bg-[#228B22] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
      <section ref={statsRef} className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-8">
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
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#228B22] bg-opacity-10 rounded-full mb-8">
            <Globe className="w-4 h-4 text-[#228B22] mr-2" />
            <span className="text-sm font-semibold text-[#228B22]">Our Mission</span>
          </div>
          
          <h2 className="text-4xl font-bold text-slate-800 mb-8">
            Building Stronger Communities Through 
            <span className="text-[#6A0DAD]"> Compassionate Action</span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            We believe that every individual deserves access to opportunities that enable them to thrive. 
            Through our comprehensive programs in education, healthcare, and community development, 
            we're creating lasting change that resonates across generations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#6A0DAD] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Community Focus</h3>
              <p className="text-slate-600 text-sm">Working directly with local communities to understand and address their unique needs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#228B22] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#228B22]" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Proven Impact</h3>
              <p className="text-slate-600 text-sm">Measurable results and transparent reporting on all our initiatives and programs.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#6A0DAD] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#6A0DAD]" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Sustainable Change</h3>
              <p className="text-slate-600 text-sm">Creating long-term solutions that empower communities to become self-sufficient.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;