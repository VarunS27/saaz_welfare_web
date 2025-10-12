import React, { useState, useEffect } from 'react';
import { X, Heart, Users, BookOpen, Stethoscope, Leaf, Gift, Download } from 'lucide-react';
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

  // Even larger QR code with better quality
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-auto relative max-h-[95vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
        >
          <X className="w-6 h-6 text-gray-500" />
        </button>

        {/* Header */}
        <div className="px-6 pt-6 pb-4 text-center border-b border-gray-100">
         
          <h2 className="text-2xl font-bold text-gray-800">Support Our Mission</h2>
          <p className="text-sm text-gray-600 mt-1">Every donation makes a difference</p>
        </div>

        {!showThankYou ? (
          <div className="p-6">
            {/* Extra Large QR Code Section */}
            <div className="text-center mb-6">
              <div className="bg-white rounded-2xl p-6 mb-4 border-2 border-[#c98d32]/20 shadow-lg">
                <div className="w-80 h-80 mx-auto bg-white rounded-xl border-2 border-gray-100 flex items-center justify-center p-3 shadow-sm">
                  <img
                    src={qrCodeUrl}
                    alt="Donation QR Code - Scan to donate"
                    className="w-full h-full object-contain rounded-lg"
                    style={{ imageRendering: 'crisp-edges' }}
                  />
                </div>
                
                {/* Download QR Button */}
                <button
                  onClick={downloadQR}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mx-auto shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download QR Code
                </button>
              </div>
              
              {/* UPI ID Display */}
              <div className="bg-gradient-to-r from-[#c98d32]/10 to-orange-50 rounded-xl p-4 mb-4 border border-[#c98d32]/20">
                <p className="text-base font-semibold text-gray-800 mb-2">💳 UPI Payment Details:</p>
                <div className="bg-white rounded-lg p-3 mb-3 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">UPI ID:</p>
                  <p className="text-lg font-bold text-[#c98d32] tracking-wide">7666884823@okbizaxis</p>
                  <button
                    onClick={() => navigator.clipboard.writeText('7666884823@okbizaxis')}
                    className="text-xs text-blue-600 hover:text-blue-800 mt-1 underline"
                  >
                    Click to copy UPI ID
                  </button>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><span className="font-medium">📱 Quick Steps:</span></p>
                  <p>1. Open any UPI app (GPay, PhonePe, Paytm)</p>
                  <p>2. Scan the QR code above OR enter UPI ID manually</p>
                  <p>3. Enter your donation amount</p>
                  <p>4. Complete the secure payment</p>
                </div>
              </div>
            </div>

            {/* Impact Message */}
            <div className="mb-6 p-4 bg-orange-50 rounded-xl border border-orange-200">
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
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Stethoscope className="w-6 h-6 text-red-500" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Healthcare</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Education</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-6 h-6 text-green-500" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Environment</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <span className="text-xs text-gray-600 font-medium">Community</span>
              </div>
            </div>

            {/* Thank You Button */}
            <button
              onClick={handleThankYou}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              I've Donated - Thank You!
            </button>

            {/* Security Note */}
            <div className="mt-4 p-3 bg-gray-50 rounded-xl">
              
              <p className="text-center text-xs text-gray-500">
                Donations help us continue our welfare programs across India
              </p>
            </div>
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
