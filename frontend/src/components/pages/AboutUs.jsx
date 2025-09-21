import React, { useState, useEffect, useRef } from 'react';
import { 
  Heart, 
  Users, 
  Target, 
  Globe, 
  CheckCircle,  
  Mail,
  Shield,
  Lightbulb,
  TrendingUp,
  Handshake,
  
  Building,

} from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const aboutRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateStats();
          }
        });
      },
      { threshold: 0.2 }
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

  const stats = [
    { number: 10000, label: "Lives Transformed", icon: Heart, suffix: "+" },
    { number: 25, label: "Active Programs", icon: Target, suffix: "+" },
    { number: 15, label: "Communities Served", icon: Globe, suffix: "+" },
    { number: 500, label: "Volunteers", icon: Users, suffix: "+" }
  ];

  const animateStats = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setAnimatedStats(prev => {
          const newStats = [...prev];
          newStats[index] = Math.floor(current);
          return newStats;
        });
      }, 50);
    });
  };



  const tabContent = {
    mission: {
      title: "Our Mission",
      icon: Target,
      content: "To uplift underserved communities by leveraging the healing power of music and providing education support that helps students adapt, grow, and succeed globally.",
      highlights: [
        "Music-driven mental health and wellness initiatives",
        "Academic mentorship for overseas students",
        "Sustainable development initiatives",
        "Sustainable programs that inspire dignity and growth"
      ]
    },
    vision: {
      title: "Our Vision",
      icon: Globe,
      content: "To build a world where mental well-being, education, and cultural arts empower individuals to live with dignity, resilience, and hope.",
      highlights: [
        "Promote mental health through music and compassion",
        "Foster inclusive and empowered communities",
        "Bridge culture, education, and humanity"
      ]
    },
    story: {
      title: "Our Story",
      icon: Building,
      content: "SAAZ Welfare Foundation was born from a passion for music and international management, blending compassion with cultural arts to drive social change. Since 2010, we have supported emotional healing and academic mentorship, creating opportunities for individuals to thrive.",
      highlights: [
        "Founded with a vision to unite culture and welfare",
        "Over a decade of student mentorship and support",
        "Empowering lives through music, education, and care",
        "Continuous expansion of impact areas"
      ]
    }
  };



  return (
    <section id="about" className="min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 opacity-70"></div>

      
      <div ref={aboutRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-slate-800">About </span>
              <span className=" text-[#c6651a]">
                Saaz Welfare
              </span>
              <br />
              <span className="text-slate-700 text-3xl sm:text-4xl lg:text-5xl">Foundation</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Empowering communities, transforming lives, and building a better tomorrow through 
              <span className="font-semibold text-[#c6651a]"> compassionate action</span> and 
              <span className="font-semibold text-[#a655ad]"> innovative solutions</span>.
            </p>


          </div>
        </div>


        {/* Mission, Vision, Story Tabs */}
        <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-purple-100 shadow-lg">
            {Object.entries(tabContent).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex-1 ${
                  activeTab === key
                    ? ' bg-[#c6651a] text-[#ffffff] shadow-lg transform scale-105'
                    : 'text-slate-600 hover:text-purplle-700 hover:bg-slate-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="p-8 lg:p-12">
              {(() => {
                const { icon: Icon, title, content, highlights } = tabContent[activeTab];
                return (
                  <>
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-[#c6651a] rounded-2xl flex items-center justify-center shadow-lg">
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">
                        {title}
                      </h3>
                    </div>

                    <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-4xl">
                      {content}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl border border-purple-100"
                        >
                          <div className="w-6 h-6 bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

        </div>

      


      </div>

    </section>
  );
};

export default AboutUs;