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

  const values = [
    {
      title: "Transparency",
      description: "Complete transparency in operations and fund utilization with regular impact reports.",
      icon: Shield,
      color: "from-[#6A0DAD] to-purple-700"
    },
    {
      title: "Innovation",
      description: "Innovative approaches to tackle social challenges with sustainable solutions.",
      icon: Lightbulb,
      color: "from-[#c6651a] to-orange-600"
    },
    {
      title: "Impact",
      description: "Measurable positive change that transforms communities and individual lives.",
      icon: TrendingUp,
      color: "from-purple-600 to-[#6A0DAD]"
    },
    {
      title: "Collaboration",
      description: "Building strong partnerships with communities, government, and other organizations.",
      icon: Handshake,
      color: "from-orange-500 to-[#c6651a]"
    }
  ];

  const tabContent = {
    mission: {
      title: "Our Mission",
      icon: Target,
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
      icon: Globe,
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
      icon: Building,
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