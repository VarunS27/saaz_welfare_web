import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug: Check if environment variables are loaded
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey ? 'Loaded' : 'Missing');

      // Check if any are undefined
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration. Please check your environment variables.');
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        mobile_number: formData.mobile,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        email: formData.email, // For reply-to field in EmailJS template
        submission_time: new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('Template params:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);
      
      setSubmitStatus({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.' 
      });
      
      // Reset form
      setFormData({ name: '', mobile: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error object:', JSON.stringify(error, null, 2));
      
      // More specific error messages - Fixed the undefined error
      let errorMessage = 'Sorry, there was an error sending your message. ';
      
      if (error && error.message && error.message.includes('Missing EmailJS configuration')) {
        errorMessage += 'Configuration error. Please contact the administrator.';
      } else if (error && error.status === 400) {
        errorMessage += 'Invalid request. Please check all fields and try again.';
      } else if (error && error.status === 401) {
        errorMessage += 'Authentication error. Please contact the administrator.';
      } else if (error && error.status === 422) {
        errorMessage += 'Invalid template parameters. Please contact the administrator.';
      } else if (error && error.text) {
        errorMessage += `Server error: ${error.text}`;
      } else {
        errorMessage += 'Please try again or contact us directly.';
      }
      
      setSubmitStatus({ 
        success: false, 
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 8 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 8000);
    }
  };

  return (
    <section id='contact' className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c98d32] mb-4 sm:mb-6">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Have questions about our initiatives or want to get involved? Reach out to us.
          </p>
        </div>

        {/* Mobile-First Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Contact Form Column */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 p-4 sm:p-6 lg:p-8 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/20 transition-all duration-300 text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  required
                  pattern="[+]?[0-9\s\-\(\)]{10,15}"
                  minLength={10}
                  maxLength={15}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/20 transition-all duration-300 text-sm sm:text-base"
                />
                <div className="text-xs text-slate-500 mt-1">
                  Please include country code (e.g., +91 for India)
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/20 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  minLength={5}
                  maxLength={200}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/20 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={4}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border border-slate-200 focus:border-[#228B22] focus:ring-2 focus:ring-[#228B22]/20 transition-all duration-300 resize-none text-sm sm:text-base"
                />
                <div className="text-xs text-slate-500 mt-1">
                  {formData.message.length}/1000 characters
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#228B22] to-[#32CD32] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold sm:font-bold hover:from-[#32CD32] hover:to-[#228B22] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
              
              {submitStatus && (
                <div className={`text-center p-3 sm:p-4 rounded-lg sm:rounded-xl text-sm font-medium border ${
                  submitStatus.success 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Column */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
              Get in Touch
            </h3>
            
            <div className="space-y-6 sm:space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6A0DAD]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#6A0DAD]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Address</h4>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    103 B wing, Sai dham,<br />
                    Charkop, sector 8, Kandivali W,<br />
                    Mumbai-400067
                  </p>
                </div>
              </div>
              
              {/* Phone Numbers */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#228B22]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#228B22]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Contact Numbers</h4>
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base text-slate-600">
                      <a 
                        href="tel:+917666884823" 
                        className="hover:text-[#228B22] transition-colors duration-300 break-all"
                      >
                        +91 7666884823
                      </a>
                    </p>
                    <p className="text-sm sm:text-base text-slate-600">
                      <a 
                        href="tel:+918779823714" 
                        className="hover:text-[#228B22] transition-colors duration-300 break-all"
                      >
                        +91 8779823714
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6A0DAD]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#6A0DAD]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Email Us</h4>
                  <p className="text-sm sm:text-base text-slate-600">
                    <a 
                      href="mailto:saazwelfarefoundation@gmail.com" 
                      className="hover:text-[#6A0DAD] transition-colors duration-300 break-all"
                    >
                      saazwelfarefoundation@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#228B22]/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#228B22]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">Business Hours</h4>
                  <div className="space-y-1">
                    <p className="text-sm sm:text-base text-slate-600">Monday - Friday: 10:00 AM - 5:00 PM</p>
                    <p className="text-sm sm:text-base text-slate-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Note */}
              <div className="bg-gradient-to-r from-[#6A0DAD]/10 to-[#228B22]/10 p-4 sm:p-6 rounded-xl border border-[#6A0DAD]/20">
                <p className="text-center text-sm sm:text-base text-slate-700 leading-relaxed">
                  We value your feedback and inquiries. Our team is dedicated to responding to all messages within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Call-to-Action */}
        <div className="mt-8 sm:mt-12 lg:hidden">
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="tel:+917666884823"
              className="flex items-center justify-center gap-2 bg-[#228B22] text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-[#228B22]/90 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a 
              href="mailto:saazwelfarefoundation@gmail.com"
              className="flex items-center justify-center gap-2 bg-[#6A0DAD] text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-[#6A0DAD]/90 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
