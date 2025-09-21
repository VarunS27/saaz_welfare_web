import React, { useState, useEffect } from 'react';
import { X, Heart, Users, BookOpen, Stethoscope, Leaf, Gift } from 'lucide-react';

const Donate = ({ isOpen, onClose }) => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleThankYou = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 text-center border-b border-gray-100">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#c98d32] rounded-full mb-3">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Support Our Mission</h2>
        </div>

        {!showThankYou ? (
          <div className="p-6">
            {/* QR Code Section */}
            <div className="text-center mb-6">
              <div className="bg-gray-50 rounded-xl p-4 mb-4 border-2 border-dashed border-gray-200">
                {/* Placeholder for QR Code - Replace with your actual QR code image */}
                <div className="w-40 h-40 mx-auto bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Gift className="w-8 h-8 text-[#c98d32] mx-auto mb-2" />
                    <p className="text-sm text-gray-500">QR Code</p>
                    <p className="text-xs text-gray-400">Scan to donate</p>
                  </div>
                  {/* Uncomment and replace with your QR code image */}
                  {/* <img 
                    src="/path-to-your-qr-code.png" 
                    alt="Donation QR Code" 
                    className="w-full h-full object-contain"
                  /> */}
                </div>
              </div>
              <p className="text-sm text-gray-500">Scan with any UPI app to donate</p>
            </div>

            {/* Impact Message */}
            <div className="mb-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#c98d32] rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Your donation creates real impact</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Every rupee you contribute directly supports healthcare, education, and community development programs that transform lives across India.
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Icons */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="text-center">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Stethoscope className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-xs text-gray-600">Healthcare</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-1">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                </div>
                <span className="text-xs text-gray-600">Education</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Leaf className="w-5 h-5 text-green-500" />
                </div>
                <span className="text-xs text-gray-600">Environment</span>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <span className="text-xs text-gray-600">Community</span>
              </div>
            </div>

            {/* Thank You Button */}
            <button
              onClick={handleThankYou}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              I've Donated - Thank You!
            </button>

            {/* Footer Text */}
            <p className="text-center text-xs text-gray-500 mt-4">
              Donations are secure and help us continue our welfare programs
            </p>
          </div>
        ) : (
          /* Thank You Screen */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">
              Your generosity helps us create a better tomorrow for communities in need.
            </p>
            <div className="w-12 h-1 bg-green-500 rounded-full mx-auto animate-pulse"></div>
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
    // Check if modal has already been shown in this session
    const hasShownModal = sessionStorage.getItem('donateModalShown');
    
    if (!hasShownModal && !hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
        // Mark that modal has been shown in this session
        sessionStorage.setItem('donateModalShown', 'true');
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  // Clear session storage when component unmounts (page refresh/close)
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
