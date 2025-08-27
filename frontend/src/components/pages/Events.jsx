import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const Events = () => {
  const [currentEventSet, setCurrentEventSet] = useState(0);
  const [hoveredEvent, setHoveredEvent] = useState(null);

  // Mock events data - this will be replaced with backend data later
  const eventsData = [
    {
      id: 1,
      title: "Community Health Camp",
      date: "2025-01-15",
      time: "09:00 AM",
      location: "Mumbai Community Center",
      description: "Free health checkups and medical consultations for the community. Our team of qualified doctors will provide basic health screenings, blood pressure checks, and general health advice.",
      participants: 150,
      image: "/event1.jpg",
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Educational Workshop",
      date: "2025-01-20",
      time: "10:00 AM",
      location: "Local School",
      description: "Interactive educational sessions for children focusing on basic literacy, numeracy, and life skills. We'll provide learning materials and refreshments for all participants.",
      participants: 80,
      image: "/event2.jpg",
      category: "Education"
    },
    {
      id: 3,
      title: "Food Distribution Drive",
      date: "2025-01-25",
      time: "08:00 AM",
      location: "City Center",
      description: "Monthly food distribution program providing nutritious meals and essential food items to families in need. Join us as a volunteer or beneficiary.",
      participants: 200,
      image: "/event3.jpg",
      category: "Community Service"
    },
    {
      id: 4,
      title: "Senior Citizens Care Program",
      date: "2025-02-01",
      time: "11:00 AM",
      location: "Old Age Home",
      description: "Spending quality time with elderly residents, organizing recreational activities, health checkups, and providing companionship to brighten their day.",
      participants: 60,
      image: "/event4.jpg",
      category: "Elder Care"
    },
    {
      id: 5,
      title: "Environmental Cleanup",
      date: "2025-02-05",
      time: "07:00 AM",
      location: "Local Park",
      description: "Community-driven environmental initiative focusing on cleaning local parks, planting trees, and raising awareness about environmental conservation.",
      participants: 100,
      image: "/event5.jpg",
      category: "Environment"
    },
    {
      id: 6,
      title: "Skills Development Training",
      date: "2025-02-10",
      time: "02:00 PM",
      location: "Training Center",
      description: "Vocational training program offering skills in tailoring, computer basics, and small business management to help community members become self-reliant.",
      participants: 40,
      image: "/event6.jpg",
      category: "Skill Development"
    },
    {
      id: 7,
      title: "Children's Sports Day",
      date: "2025-02-15",
      time: "04:00 PM",
      location: "Sports Ground",
      description: "Fun-filled sports activities for children including games, competitions, and prizes. Promoting physical fitness and team spirit among young participants.",
      participants: 120,
      image: "/event7.jpg",
      category: "Sports & Recreation"
    },
    {
      id: 8,
      title: "Women Empowerment Seminar",
      date: "2025-02-20",
      time: "10:30 AM",
      location: "Community Hall",
      description: "Educational seminar focusing on women's rights, financial literacy, and career development opportunities. Expert speakers will share insights on personal and professional growth.",
      participants: 75,
      image: "/event8.jpg",
      category: "Women Empowerment"
    },
    {
      id: 9,
      title: "Medical Equipment Donation",
      date: "2025-02-25",
      time: "11:00 AM",
      location: "District Hospital",
      description: "Donation of essential medical equipment to local healthcare facilities. Supporting healthcare infrastructure to improve medical services for the community.",
      participants: 30,
      image: "/event9.jpg",
      category: "Healthcare"
    }
  ];

  // Group events into sets of 5 for display
  const eventsPerSet = 5;
  const totalSets = Math.ceil(eventsData.length / eventsPerSet);
  
  const getCurrentEvents = () => {
    const startIndex = currentEventSet * eventsPerSet;
    return eventsData.slice(startIndex, startIndex + eventsPerSet);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventSet(prev => (prev + 1) % totalSets);
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  const nextSet = () => {
    setCurrentEventSet(prev => (prev + 1) % totalSets);
  };

  const prevSet = () => {
    setCurrentEventSet(prev => (prev - 1 + totalSets) % totalSets);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Healthcare': 'from-red-400 to-red-600',
      'Education': 'from-blue-400 to-blue-600',
      'Community Service': 'from-green-400 to-green-600',
      'Elder Care': 'from-purple-400 to-purple-600',
      'Environment': 'from-emerald-400 to-emerald-600',
      'Skill Development': 'from-orange-400 to-orange-600',
      'Sports & Recreation': 'from-yellow-400 to-yellow-600',
      'Women Empowerment': 'from-pink-400 to-pink-600'
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <section id="events" className="min-h-screen py-20 px-8 relative overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div> */}
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#6A0DAD] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#228B22] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-white bg-[#c98d32] p-1">Events</span> & Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#228B22] to-[#6A0DAD] rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us in our community initiatives and be part of the positive change we're creating together.
          </p>
        </div>

        {/* Events Grid Container */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-xl">
          
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-slate-800">Current Events</h3>
              <div className="flex gap-2">
                {Array.from({ length: totalSets }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEventSet(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentEventSet 
                        ? 'bg-[#6A0DAD] scale-125' 
                        : 'bg-slate-300 hover:bg-[#6A0DAD]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevSet}
                className="p-2 rounded-xl bg-slate-100 hover:bg-[#6A0DAD] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSet}
                className="p-2 rounded-xl bg-slate-100 hover:bg-[#6A0DAD] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentEvents().map((event, index) => (
              <div
                key={event.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200"
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23F8F8F8'/%3E%3Ccircle cx='200' cy='120' r='30' fill='%236A0DAD' opacity='0.3'/%3E%3Crect x='170' y='160' width='60' height='40' fill='%23228B22' opacity='0.3' rx='5'/%3E%3Ctext x='200' y='240' text-anchor='middle' fill='%236A0DAD' font-size='14' font-weight='bold'%3E${event.title}%3C/text%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%23666' font-size='12'%3E${event.category}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Event Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#6A0DAD] transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#6A0DAD]" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#228B22]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span>{event.participants} Expected Participants</span>
                    </div>
                  </div>
                </div>

                {/* Hover Description Overlay */}
                {hoveredEvent === event.id && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 flex flex-col justify-center transition-all duration-300 animate-fadeIn">
                    <h3 className="text-lg font-bold text-[#6A0DAD] mb-3">{event.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <div className="flex justify-between items-center text-xs text-slate-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {event.participants} people
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auto-slide Progress Bar */}
          <div className="mt-8 flex justify-center">
            <div className="w-64 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#6A0DAD] to-[#228B22] rounded-full transition-all duration-300"
                style={{ 
                  width: `${((currentEventSet + 1) / totalSets) * 100}%`,
                  animation: 'slideProgress 10s linear infinite'
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Want to <span className="text-[#6A0DAD]">Volunteer</span> or <span className="text-[#228B22]">Participate</span>?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Join our community of changemakers and be part of meaningful initiatives that create lasting impact.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#228B22] to-[#6A0DAD] text-white px-8 py-4 rounded-2xl font-semibold hover:from-[#6A0DAD] hover:to-[#228B22] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Involved Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Events;