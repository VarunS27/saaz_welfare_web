import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Mail, Phone, Linkedin, Twitter, MapPin, Calendar, Star, Heart } from 'lucide-react';
import { getCloudinaryUrl } from '../../config/cloudinary';
import { IMAGES, FALLBACK_IMAGES } from '../../constants/images';
import { name } from '@cloudinary/url-gen/actions/namedTransformation';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const teamRef = useRef(null);

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

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  // Team data - Update with actual information
  const teamMembers = [
    {
      id: 1,
      name: "Shri Pradeep Madhav Chitnis", // Replace with actual name
      position: "Founder/Director",
      image: IMAGES.team.member1,
    },
    {
      id: 2,
      name: "Mr. Vijay Ramsudh Trivedi  ", // Replace with actual name
      position: "Founder - Member ",
      image: IMAGES.team.member2,
    },
    {
      id: 3,
      name: "Mrs. Shubhangi Awasthi", // Replace with actual name
      position: "Secretary - Core committee",
      image: IMAGES.team.member3,
    },
    {
      id: 4,
      name: "Mr. Jagdish Tonde", // Replace with actual name
      position: "Coordinator - Core Committee",
      image: IMAGES.team.member4,
    },
    {
      id: 5,
      name: "Mr. Dhiraj Nanda", // Replace with actual name
      position: "Operations Executive",
      image: IMAGES.team.member5,

    }
    ,{
      id: 6,
      name: "Dipti Nanda", // Replace with actual name
      position: "President",
      image: IMAGES.team.member6,
    },
    {
      id: 7,
      name: "Mr. Ashok Shinde",
      position: "Head operations",
      image: IMAGES.team.member7,
    },
    {
      id: 8,
      name: "Ms. Saee Pradeep Chitnis",
      position: "Committee member",
      image: IMAGES.team.member8,
    }
  ];

  const getTeamMemberImage = (member) => {
    if (member.image) {
      return getCloudinaryUrl(member.image, { 
        resize: { width: 400, height: 500, crop: 'fill' } 
      });
    }
    return FALLBACK_IMAGES.teamMember;
  };

  return (
    <section id="team" className="min-h-screen py-16 lg:py-24 relative overflow-hidden">
      {/* Background with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 opacity-70">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-500 opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#c98d32] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500 opacity-3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div ref={teamRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#c98d32]">
              The Changemakers
            </span>
            <br />
            <span className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl">Behind Our Mission</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Meet the passionate individuals who dedicate their expertise and hearts 
            to creating lasting positive change in communities across India.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-[#c98d32] via-purple-600 to-green-600 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Team Grid - 2 on top, 3 below */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* First Row - 2 Members (Centered) */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl">
              {teamMembers.slice(0, 2).map((member, index) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  index={index}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  getTeamMemberImage={getTeamMemberImage}
                />
              ))}
            </div>
          </div>

          {/* Second Row - 3 Members (Centered) */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl">
              {teamMembers.slice(2, 8).map((member, index) => (
                <TeamCard 
                  key={member.id} 
                  member={member} 
                  index={index + 2}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  getTeamMemberImage={getTeamMemberImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Card Component
const TeamCard = ({ member, index, hoveredCard, setHoveredCard, getTeamMemberImage }) => {
  return (
    <div
      className={`group relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 animate-fadeInUp`}
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setHoveredCard(member.id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl ${
        index % 3 === 0 ? 'from-[#c98d32] to-orange-500' :
        index % 3 === 1 ? 'from-purple-500 to-pink-500' :
        'from-green-500 to-emerald-500'
      }`}></div>

      {/* Member Image */}
      <div className="relative mb-6">
        <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
          <img
            src={getTeamMemberImage(member)}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              console.log(`Team member ${member.id} image failed to load, using fallback`);
              e.target.src = FALLBACK_IMAGES.teamMember;
            }}
          />
        </div>
        
        {/* Status Indicator */}
        
      </div>

      {/* Member Info */}
      <div className="text-center relative z-10">
        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-2 group-hover:text-[#c98d32] transition-colors duration-300">
          {member.name}
        </h3>
        
        <p className="text-lg font-semibold text-purple-600 mb-2">
          {member.position}
        </p>
      </div>
    </div>
  );
};

export default Team;

// Add these styles to your CSS file or styled-components
const styles = `
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
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}
`;