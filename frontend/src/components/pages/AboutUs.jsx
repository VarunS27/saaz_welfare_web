import React, { useState, useEffect, useRef } from 'react';
import { Heart, Users, Target, Globe, Award, ArrowRight, CheckCircle, Sparkles, Phone, Mail } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const achievements = [
    { number: "10,000+", label: "Lives Transformed", icon: Heart },
    { number: "25+", label: "Active Programs", icon: Target },
    { number: "15+", label: "Communities Served", icon: Globe },
    { number: "500+", label: "Volunteers", icon: Users }
  ];

  const values = [
    {
      title: "Transparency",
      description: "We maintain complete transparency in our operations and fund utilization.",
      icon: CheckCircle,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Compassion",
      description: "Every action we take is driven by genuine care and empathy for those in need.",
      icon: Heart,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Empowerment",
      description: "We focus on building capabilities rather than creating dependencies.",
      icon: Sparkles,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Sustainability",
      description: "Our programs are designed for long-term impact and community ownership.",
      icon: Globe,
      color: "from-green-500 to-green-600"
    }
  ];

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "To empower communities through comprehensive welfare programs that focus on education, healthcare, and social development. We strive to create sustainable solutions that address root causes of social issues while fostering self-reliance and building capacity within communities.",
      highlights: [
        "Comprehensive community welfare programs",
        "Focus on education and healthcare access",
        "Sustainable development initiatives",
        "Building community capacity and self-reliance"
      ]
    },
    vision: {
      title: "Our Vision",
      content: "We envision a world where every individual has equal opportunities to thrive and succeed. Our vision is to build resilient communities that can sustain themselves and support their members effectively, minimizing social inequalities.",
      highlights: [
        "Equal opportunities for all individuals",
        "Building resilient, self-sustaining communities",
        "Minimizing social inequalities",
        "Creating lasting positive change"
      ]
    },
    story: {
      title: "Our Story",
      content: "Founded with a simple yet powerful belief that collective action can create extraordinary change, Saaz Welfare has grown from a small community initiative to a comprehensive welfare organization serving multiple communities across regions.",
      highlights: [
        "Started as a grassroots community initiative",
        "Grown to serve 15+ communities",
        "Passionate team of dedicated professionals",
        "Continuous expansion of impact areas"
      ]
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 px-8 relative overflow-hidden">
      {/* Background - Same as Gallery */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#6A0DAD] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#228B22] opacity-5 rounded-full blur-3xl"></div>

      <div ref={aboutRef} className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-[#6A0DAD]/10 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[#6A0DAD] mr-2" />
              <span className="text-sm font-semibold text-[#6A0DAD]">Learn About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 sm:mb-6">
              About <span className="relative">
                <span className="text-[#6A0DAD]">Saaz Welfare</span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#228B22] to-[#6A0DAD] rounded-full"></div>
              </span> Foundation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#228B22] to-[#6A0DAD] rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to creating positive change through comprehensive welfare programs that empower communities and transform lives.
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20">
          
          {/* Left Column - Organization Image & Quick Donate */}
          <div className={`lg:col-span-1 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Organization Image */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#6A0DAD] to-[#228B22] rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-slate-200">
                <div className="aspect-square w-full">
                  <img
                    src="/logo.jpg"
                    alt="Saaz Welfare Foundation"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f8fafc'/%3E%3Ccircle cx='200' cy='140' r='50' fill='%236A0DAD' opacity='0.2'/%3E%3Crect x='150' y='200' width='100' height='80' fill='%23228B22' opacity='0.2' rx='10'/%3E%3Ctext x='200' y='320' text-anchor='middle' fill='%236A0DAD' font-size='24' font-weight='bold'%3ESaaz Welfare%3C/text%3E%3Ctext x='200' y='345' text-anchor='middle' fill='%236A0DAD' font-size='18'%3EFoundation%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Quick Donate Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-slate-800">Support Our Cause</h3>
                
                {/* QR Code */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 bg-white rounded-xl shadow-md mx-auto border border-slate-200 flex items-center justify-center">
                  <img
                    src="/qr-code.png"
                    alt="Donation QR Code"
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='white' stroke='%23228B22' stroke-width='2' rx='8'/%3E%3Crect x='10' y='10' width='20' height='20' fill='%23228B22'/%3E%3Crect x='10' y='40' width='20' height='20' fill='%23228B22'/%3E%3Crect x='40' y='10' width='20' height='20' fill='%23228B22'/%3E%3Crect x='98' y='10' width='20' height='20' fill='%23228B22'/%3E%3Crect x='98' y='40' width='20' height='20' fill='%23228B22'/%3E%3Crect x='10' y='98' width='20' height='20' fill='%23228B22'/%3E%3Crect x='40' y='98' width='20' height='20' fill='%23228B22'/%3E%3Crect x='98' y='98' width='20' height='20' fill='%23228B22'/%3E%3Ctext x='64' y='70' text-anchor='middle' fill='%23228B22' font-size='12' font-weight='bold'%3EQR%3C/text%3E%3Ctext x='64' y='84' text-anchor='middle' fill='%23228B22' font-size='10'%3EPay%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                <p className="text-sm text-slate-600">Scan to make a quick donation</p>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-[#228B22] to-[#1e7a1e] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#1e7a1e] hover:to-[#228B22] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Donate Now
                </button>

                {/* Contact Info */}
                <div className="pt-4 border-t border-slate-200 space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Mail className="w-4 h-4" />
                    <span>contact@saazwelfare.org</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mission, Vision, Story Tabs */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 bg-white/80 backdrop-blur-sm p-2 rounded-2xl border border-slate-200 shadow-lg">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-0 px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#6A0DAD] to-[#5a0b96] text-white shadow-lg transform scale-105'
                      : 'text-slate-600 hover:text-[#6A0DAD] hover:bg-slate-50'
                  }`}
                >
                  {tab === 'story' ? 'Our Story' : tabContent[tab].title.replace('Our ', '')}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 min-h-[400px]">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    activeTab === 'mission' ? 'bg-gradient-to-br from-[#228B22] to-[#1e7a1e]' :
                    activeTab === 'vision' ? 'bg-gradient-to-br from-[#6A0DAD] to-[#5a0b96]' :
                    'bg-gradient-to-br from-[#228B22] to-[#6A0DAD]'
                  }`}>
                    {activeTab === 'mission' && <Target className="w-6 h-6 text-white" />}
                    {activeTab === 'vision' && <Globe className="w-6 h-6 text-white" />}
                    {activeTab === 'story' && <Users className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
                    {tabContent[activeTab].title}
                  </h3>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {tabContent[activeTab].content}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {tabContent[activeTab].highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-[#228B22] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;