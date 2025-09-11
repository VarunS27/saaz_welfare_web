import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight, Heart, Info } from 'lucide-react';

const Events = () => {
  const [currentEventSet, setCurrentEventSet] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Responsive events per set based on screen size
  const getEventsPerSet = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 2; // Mobile: 2 events
      if (window.innerWidth < 1024) return 4; // Tablet: 4 events
      return 6; // Desktop: 6 events
    }
    return 6;
  };

  const [eventsPerSet, setEventsPerSet] = useState(getEventsPerSet());
  const totalSets = Math.ceil(eventsData.length / eventsPerSet);
  
  const getCurrentEvents = () => {
    const startIndex = currentEventSet * eventsPerSet;
    return eventsData.slice(startIndex, startIndex + eventsPerSet);
  };

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const newEventsPerSet = getEventsPerSet();
      setEventsPerSet(newEventsPerSet);
      setIsMobile(window.innerWidth < 768);
      // Reset to first set if current set would be out of bounds
      const newTotalSets = Math.ceil(eventsData.length / newEventsPerSet);
      if (currentEventSet >= newTotalSets) {
        setCurrentEventSet(0);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentEventSet, eventsData.length]);

  // Auto-slide functionality - exactly 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventSet(prev => (prev + 1) % totalSets);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  const nextSet = () => {
    setCurrentEventSet(prev => (prev + 1) % totalSets);
  };

  const prevSet = () => {
    setCurrentEventSet(prev => (prev - 1 + totalSets) % totalSets);
  };

  const toggleEventDetails = (eventId) => {
    if (isMobile) {
      setSelectedEvent(selectedEvent === eventId ? null : eventId);
    }
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
    <section id="events" className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-70"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 px-2">
            Our <span className="text-[#c98d32] p-1 rounded">Events</span> & Activities
          </h2>
           <p className="text-base sm:text-lg lg:text-xl text-black max-w-3xl mx-auto px-4">
            Join us in our community initiatives and be part of the positive change we're creating together.
          </p>
        </div>

        {/* Events Grid Container */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-slate-200 shadow-xl">
          
          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="flex gap-2">
                {Array.from({ length: totalSets }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentEventSet(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
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
                className="p-2 sm:p-3 rounded-xl bg-slate-100 hover:bg-[#6A0DAD] hover:text-white transition-all duration-300 transform hover:scale-110 touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSet}
                className="p-2 sm:p-3 rounded-xl bg-slate-100 hover:bg-[#6A0DAD] hover:text-white transition-all duration-300 transform hover:scale-110 touch-manipulation"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {getCurrentEvents().map((event, index) => (
              <div
                key={event.id}
                className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-slate-200 cursor-pointer"
                onClick={() => toggleEventDetails(event.id)}
              >
                {/* Event Image */}
                <div className="relative h-36 sm:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23F8F8F8'/%3E%3Ccircle cx='200' cy='120' r='30' fill='%236A0DAD' opacity='0.3'/%3E%3Crect x='170' y='160' width='60' height='40' fill='%23228B22' opacity='0.3' rx='5'/%3E%3Ctext x='200' y='240' text-anchor='middle' fill='%236A0DAD' font-size='14' font-weight='bold'%3E${event.title}%3C/text%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%23666' font-size='12'%3E${event.category}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(event.category)}`}>
                    {event.category}
                  </div>
                  
                  {/* Mobile Info Icon */}
                  {isMobile && (
                    <div className="absolute top-2 right-2 p-2 bg-white/90 rounded-full">
                      <Info className="w-4 h-4 text-[#6A0DAD]" />
                    </div>
                  )}
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Event Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-[#6A0DAD] transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-1.5 sm:space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6A0DAD] flex-shrink-0" />
                      <span className="truncate">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#228B22] flex-shrink-0" />
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{event.participants} Expected</span>
                    </div>
                  </div>

                  {/* Mobile: Show description when selected */}
                  {isMobile && selectedEvent === event.id && (
                    <div className="mt-4 p-3 bg-slate-50 rounded-xl border-l-4 border-[#6A0DAD]">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Desktop: Hover Description Overlay */}
                {!isMobile && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-4 sm:p-6 flex flex-col justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0">
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

          {/* Mobile Helper Text */}
          {isMobile && (
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-500">
                Tap on events to see more details
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .touch-manipulation {
          touch-action: manipulation;
        }

        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }

        @media (min-width: 640px) and (max-width: 1024px) {
          .sm\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Events;