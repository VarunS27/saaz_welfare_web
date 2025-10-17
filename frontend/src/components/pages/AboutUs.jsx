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
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [expandedContent, setExpandedContent] = useState({});
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

  // Reset expanded content when tab changes
  useEffect(() => {
    setExpandedContent({});
  }, [activeTab]);

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

  const toggleExpanded = (tabKey) => {
    setExpandedContent(prev => ({
      ...prev,
      [tabKey]: !prev[tabKey]
    }));
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const tabContent = {
    mission: {
      title: "Our Mission",
      icon: Target,
      content: `At SAAZ Welfare Foundation, we are resolute in addressing the pressing injustices faced by some of the most marginalized groups in our society. Our abandoned elderly, confined to old age homes, the orphans yearning for a semblance of family, and tribal children dwelling in the remotest corners of villages, these individuals deserve more than society's perfunctory provision of food, shelter, and clothing.

We affirm that mere survival is not enough; life must be enriched with love, dignity, and emotional fulfillment. While the privileged enjoy limitless avenues for entertainment, leisure, and personal growth, these communities are bereft of even the simplest joys of life, hence we declare "Enough is Enough".

To bridge this chasm, SAAZ Welfare Foundation has committed itself to offering enduring support to 700+ old age homes through the transcendent power of music, specifically classical compositions and the therapeutic essence of Raags, which are proven to alleviate mental stress and foster emotional healing.

We humbly invite you to join us in this transformative journey. With your heartfelt support, be it financial contributions or acts of kindness, we can elevate this initiative to unprecedented heights, ensuring that every soul we touch feels valued and loved. Together let us illuminate lives with hope, harmony, and humanity.`
    },
    vision: {
      title: "Our Vision",
      icon: Globe,
      content: `To envision a world where every individual, regardless of age, origin, or circumstance, experiences holistic well-being through the sublime power of music, emotional connection, and compassionate care, fostering a society grounded in equality, empathy, and enrichment.`
    },
    story: {
      title: "Our Story",
      icon: Building,
      content: `At SAAZ Welfare Foundation, we stand as an unwavering beacon of hope and compassion, dedicated to uplifting the most vulnerable and underserved segments of society. Our mission transcends the mere provision of basic necessities; we strive to rekindle the spirit and emotional well-being of those who have been marginalized, forgotten, or left behind.

Guided by a profound commitment to humanity, we believe in the transformative power of music as a universal language that heals, inspires, and unites. Through our carefully curated initiatives, we aim to address not only the material deprivation faced by our beneficiaries but also their emotional and psychological needs, fostering a sense of belonging and dignity.

With a Master's in Business Administration from Cardiff Metropolitan University, my journey has led me to the SAAZ Welfare Foundation, where my passion for music intertwines with my expertise in international management. At SAAZ, we leverage the universal language of music, specifically Bollywood and classical genres, to drive our charitable initiatives forward. My education in international management has been instrumental in strategizing and executing programs that resonate with diverse audiences, demonstrating how cultural arts can be a powerful catalyst for change.`
    }
  };

  const renderContent = (content) => {
    const paragraphs = content.split('\n\n');
    const isExpanded = expandedContent[activeTab]; // Use activeTab as key instead of paragraph index
    
    // Show only first paragraph initially
    const firstParagraph = paragraphs[0];
    const remainingParagraphs = paragraphs.slice(1);
    const hasMoreContent = remainingParagraphs.length > 0;

    return (
      <div>
        {/* First paragraph - always visible */}
        <div className="mb-6">
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed text-center">
            {firstParagraph}
          </p>
        </div>

        {/* Remaining paragraphs - shown only when expanded */}
        {isExpanded && remainingParagraphs.map((paragraph, index) => (
          <div key={index + 1} className="mb-6">
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed text-center">
              {paragraph}
            </p>
          </div>
        ))}

        {/* Read More/Less button - only show if there's more content */}
        {hasMoreContent && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => toggleExpanded(activeTab)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#c6651a] to-[#a655ad] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <span className="text-sm">
                {isExpanded ? 'Read Less' : 'Read More'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 group-hover:animate-bounce" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
              )}
            </button>
          </div>
        )}
      </div>
    );
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
          <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-purple-100 shadow-lg justify-center">
            {Object.entries(tabContent).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex-1 max-w-xs ${
                  activeTab === key
                    ? ' bg-[#c6651a] text-[#ffffff] shadow-lg transform scale-105'
                    : 'text-slate-600 hover:text-purple-700 hover:bg-slate-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            <div className="p-8 lg:p-12 text-center">
              {(() => {
                const { icon: Icon, title, content } = tabContent[activeTab];
                return (
                  <>
                    <div className="flex flex-col items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-[#c6651a] rounded-2xl flex items-center justify-center shadow-lg">
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800">
                        {title}
                      </h3>
                    </div>

                    <div className="max-w-5xl mx-auto">
                      {renderContent(content)}
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