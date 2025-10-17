import React, { useState, useEffect } from 'react';
import { X, Heart, Users, BookOpen, Stethoscope, Leaf, Gift, Download, Sparkles } from 'lucide-react';
import { IMAGES } from '../../constants/images';
import { getCloudinaryUrl } from '../../config/cloudinary';

const Donate = ({ isOpen, onClose }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleThankYou = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      onClose();
    }, 2000);
  };

  // QR code with responsive sizing
  const qrCodeUrl = getCloudinaryUrl(IMAGES.qrCode, 'w_600,h_600,c_fill,q_auto,f_auto');

  // Download QR code function
  const downloadQR = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'saaz-welfare-donation-qr.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading QR code:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
      {/* Reduced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14]/15 via-[#00FF41]/8 to-[#39FF14]/15"></div>
      
      <div className="relative bg-gradient-to-br from-[#39FF14] via-[#00FF41] to-[#32CD32] rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto max-h-[95vh] overflow-y-auto border-2 sm:border-4 border-white/30 backdrop-blur-lg">
        
        {/* Subtle animated border - no rotation */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#39FF14] via-white to-[#39FF14] p-0.5 sm:p-1 -z-10 opacity-30"></div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-200 z-10 shadow-lg hover:shadow-xl transform hover:scale-110"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700 hover:text-red-600" />
        </button>

        {/* Header */}
        <div className="px-3 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 text-center border-b border-white/30 relative">
          
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
            💚 Support Our Mission
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-medium drop-shadow-md">Every donation creates miracles ✨</p>
        </div>

        {!showThankYou ? (
          <div className="p-3 sm:p-6 relative">
            {/* Reduced particles effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-8 left-8 w-1 h-1 sm:w-2 sm:h-2 bg-white/40 rounded-full animate-pulse"></div>
              <div className="absolute top-16 right-12 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-300/60 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-24 left-16 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/30 rounded-full animate-pulse delay-700"></div>
            </div>

            {/* Responsive QR Code Section */}
            <div className="text-center mb-4 sm:mb-6 relative z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-3 sm:p-6 mb-3 sm:mb-4 border-1 sm:border-2 border-white/50 shadow-2xl">
                
                {/* QR Code with responsive sizing */}
                <div className="relative">
                  <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto bg-white rounded-xl sm:rounded-2xl border-2 sm:border-4 border-[#39FF14]/30 flex items-center justify-center p-2 sm:p-4 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
                    
                    <img
                      src={qrCodeUrl}
                      alt="Donation QR Code - Scan to donate"
                      className="w-full h-full object-contain rounded-lg sm:rounded-xl relative z-10"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                    
                    {/* Corner decorations - responsive */}
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-2 h-2 sm:w-4 sm:h-4 border-l-1 border-t-1 sm:border-l-2 sm:border-t-2 border-[#39FF14]"></div>
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-4 sm:h-4 border-r-1 border-t-1 sm:border-r-2 sm:border-t-2 border-[#39FF14]"></div>
                    <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-2 h-2 sm:w-4 sm:h-4 border-l-1 border-b-1 sm:border-l-2 sm:border-b-2 border-[#39FF14]"></div>
                    <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-2 h-2 sm:w-4 sm:h-4 border-r-1 border-b-1 sm:border-r-2 sm:border-b-2 border-[#39FF14]"></div>
                  </div>
                </div>
                
                {/* Download QR Button - responsive */}
                <button
                  onClick={downloadQR}
                  className="mt-3 sm:mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 mx-auto shadow-xl hover:shadow-2xl transform hover:scale-110 border-1 sm:border-2 border-white/20 text-xs sm:text-sm"
                >
                  <Download className="w-3 h-3 sm:w-5 sm:h-5" />
                  📱 Download QR
                </button>
              </div>
              
              {/* UPI ID Display - responsive */}
              <div className="bg-gradient-to-r from-black/20 via-black/10 to-black/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 mb-3 sm:mb-4 border-1 sm:border-2 border-white/30 shadow-xl">
                <div className="flex items-center justify-center mb-3 sm:mb-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg">
                    <p className="text-sm sm:text-lg font-bold text-gray-800">💳 UPI Payment</p>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4 border border-white/50 shadow-lg">
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 font-medium">🔗 UPI ID:</p>
                  <div className="bg-gradient-to-r from-[#39FF14]/10 to-green-100 rounded-lg p-2 sm:p-3 border-1 sm:border-2 border-[#39FF14]/30">
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 tracking-wide font-mono break-all">
                      7666884823@okbizaxis
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('7666884823@okbizaxis');
                      const button = event.target;
                      const originalText = button.textContent;
                      button.textContent = '✅ Copied!';
                      setTimeout(() => {
                        button.textContent = originalText;
                      }, 2000);
                    }}
                    className="mt-2 sm:mt-3 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    📋 Copy UPI ID
                  </button>
                </div>
                
                {/* Enhanced Instructions - responsive */}
                <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/30 shadow-lg">
                  <div className="text-gray-800 space-y-1.5 sm:space-y-2">
                    <p className="font-bold text-center mb-2 sm:mb-3 text-sm sm:text-base">🚀 Quick Steps:</p>
                    <div className="grid grid-cols-1 gap-1.5 sm:gap-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <span className="bg-blue-600 text-white w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                        <span>Open UPI app</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg">
                        <span className="bg-green-600 text-white w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                        <span>Scan QR or enter UPI</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                        <span className="bg-orange-600 text-white w-4 h-4 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                        <span>Complete payment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Message - responsive */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-6 bg-gradient-to-r from-white/20 via-white/10 to-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-1 sm:border-2 border-white/30 shadow-xl">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white animate-pulse" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-lg drop-shadow-md">Your donation creates miracles!</h3>
                  <p className="text-white/90 leading-relaxed font-medium drop-shadow-sm text-xs sm:text-sm">
                    Every rupee transforms lives through healthcare, education, and community programs. Be the change! 🌟
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Icons - responsive */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8">
              {[
                { icon: Stethoscope, label: 'Healthcare', color: 'from-red-500 to-pink-500' },
                { icon: BookOpen, label: 'Education', color: 'from-blue-500 to-indigo-500' },
                { icon: Leaf, label: 'Environment', color: 'from-green-500 to-emerald-500' },
                { icon: Users, label: 'Community', color: 'from-purple-500 to-violet-500' }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 border-1 sm:border-2 border-white/50`}>
                    <div className={`w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center`}>
                      <item.icon className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-xs text-white font-bold drop-shadow-md">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Smaller Thank You Button - responsive */}
            <button
              onClick={handleThankYou}
              className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 border-2 sm:border-4 border-white/30 relative overflow-hidden text-sm sm:text-base"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              <span>✨ I've Donated ✨</span>
            </button>

            {/* Security Note - responsive */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/30 shadow-lg">
              <p className="text-center text-xs sm:text-sm text-white font-medium drop-shadow-sm">
                🔒 <span className="font-bold">100% Secure</span> | Supporting India
              </p>
            </div>
          </div>
        ) : (
          /* Thank You Screen - responsive */
          <div className="p-6 sm:p-10 text-center relative">
            {/* Reduced celebration particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-yellow-300 rounded-full animate-ping`}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-2xl animate-bounce">
                <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-white animate-pulse" />
              </div>
              
              <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                🎉 Thank You! 🎉
              </h3>
              
              <p className="text-lg sm:text-xl text-white/90 mb-4 sm:mb-6 font-medium drop-shadow-md leading-relaxed">
                Your kindness creates miracles! ✨<br />
                Building a better tomorrow! 🌟
              </p>
              
              <div className="flex justify-center items-center gap-2">
                <div className="w-12 h-1.5 sm:w-16 sm:h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-pulse"></div>
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-red-400 animate-bounce" />
                <div className="w-12 h-1.5 sm:w-16 sm:h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Hook component to use the donate modal with auto-popup
export const useDonateModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const openDonate = () => setIsOpen(true);
  const closeDonate = () => setIsOpen(false);

  // Auto-open modal after 10 seconds on page load
  useEffect(() => {
    const hasShownModal = sessionStorage.getItem('donateModalShown');
    
    if (!hasShownModal && !hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
        sessionStorage.setItem('donateModalShown', 'true');
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('donateModalShown');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const DonateModal = () => (
    <Donate isOpen={isOpen} onClose={closeDonate} />
  );

  return { openDonate, closeDonate, DonateModal };
};

export default Donate;
