import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getCloudinaryUrl } from '../../config/cloudinary';
import { IMAGES } from '../../constants/images';

const Events = () => {
  // 3 events with multiple images each
  const eventsData = [
    {
      id: 1,
      title: "Community Health & Wellness Initiative",
      images: [
        IMAGES.event1.event1, // grp_zlhdei
        IMAGES.event1.event2  // gro1_myqyq2
      ]
    },
    {
      id: 2,
      title: "Educational Support Program",
      images: [
        IMAGES.event2.event1, // event_n1_nsqq8s
        IMAGES.event2.event2, // event_n2_i2iano
        IMAGES.event2.event3  // event_n3_x9mgb9
      ]
    },
    {
      id: 3,
      title: "Community Service & Outreach",
      images: [
        IMAGES.event3.event1, // event_4_ev8qtd
        IMAGES.event3.event2, // event_5_uwv3bq
        IMAGES.event3.event3, // event_3_mabfwz
        IMAGES.event3.event4  // event_6_pftauv
      ]
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Initialize current image index for each event
  useEffect(() => {
    const initialIndex = {};
    eventsData.forEach(event => {
      initialIndex[event.id] = 0;
    });
    setCurrentImageIndex(initialIndex);
  }, []);

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const intervals = eventsData.map(event => {
      return setInterval(() => {
        setCurrentImageIndex(prev => ({
          ...prev,
          [event.id]: (prev[event.id] + 1) % event.images.length
        }));
      }, 3000);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const getEventImageUrl = (publicId) => {
    return getCloudinaryUrl(publicId, 'w_700,h_500,c_fill,q_auto,f_auto');
  };

  const nextImage = (eventId) => {
    const event = eventsData.find(e => e.id === eventId);
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventId]: (prev[eventId] + 1) % event.images.length
    }));
  };

  const prevImage = (eventId) => {
    const event = eventsData.find(e => e.id === eventId);
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventId]: (prev[eventId] - 1 + event.images.length) % event.images.length
    }));
  };

  const goToImage = (eventId, index) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [eventId]: index
    }));
  };

  return (
    <section id="events" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50 opacity-70"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#c98d32] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500 opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-500 opacity-3 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#c98d32]">
              Our Events
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the impact we're making through our community initiatives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#c98d32] via-purple-600 to-green-600 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Events Cards with Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {eventsData.map((event, eventIndex) => (
            <div
              key={event.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 border border-white/50"
              style={{ animationDelay: `${eventIndex * 200}ms` }}
            >
              {/* Image Carousel */}
              <div className="relative h-72 lg:h-80 overflow-hidden">
                {/* Main Image */}
                <div className="relative w-full h-full">
                  <img
                    src={getEventImageUrl(event.images[currentImageIndex[event.id] || 0])}
                    alt={`${event.title} - Image ${(currentImageIndex[event.id] || 0) + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                    onError={(e) => {
                      console.log(`Event image ${event.id} failed to load`);
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='700' height='500' viewBox='0 0 700 500'%3E%3Crect width='700' height='500' fill='%23F8F8F8'/%3E%3Ccircle cx='350' cy='200' r='50' fill='%23c98d32' opacity='0.3'/%3E%3Crect x='300' y='280' width='100' height='80' fill='%23228B22' opacity='0.3' rx='10'/%3E%3Ctext x='350' y='420' text-anchor='middle' fill='%23c98d32' font-size='24' font-weight='bold'%3E${event.title}%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Navigation Arrows */}
                {event.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(event.id);
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5 text-slate-700" />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(event.id);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5 text-slate-700" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {(currentImageIndex[event.id] || 0) + 1} / {event.images.length}
                </div>

                {/* Dots Indicator */}
                {event.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {event.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToImage(event.id, index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === (currentImageIndex[event.id] || 0)
                            ? 'bg-white scale-125 shadow-lg'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Event Title */}
              <div className="p-6 lg:p-8 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 group-hover:text-[#c98d32] transition-colors duration-300 leading-tight">
                  {event.title}
                </h3>
                
                {/* Decorative Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#c98d32] to-purple-500 rounded-full mx-auto mt-4 transform group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;