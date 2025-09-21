import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
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
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ success: true, message: 'Thank you! Your message has been received.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsSubmitting(false);
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  return (
    <section id='contact' className="min-h-screen py-20 px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-70"></div>
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
      
          <h2 className="text-4xl sm:text-5xl font-bold text-[#c98d32] mb-4">Contact Us</h2>
         <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about our initiatives or want to get involved? Reach out to us.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form Column */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Contact Form</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6A0DAD] focus:ring focus:ring-[#6A0DAD]/20 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6A0DAD] focus:ring focus:ring-[#6A0DAD]/20 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6A0DAD] focus:ring focus:ring-[#6A0DAD]/20 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#6A0DAD] focus:ring focus:ring-[#6A0DAD]/20 transition-all duration-300 resize-none"
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#6A0DAD] to-[#228B22] text-white py-4 px-6 rounded-xl font-bold hover:from-[#228B22] hover:to-[#6A0DAD] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
              
              {submitStatus && (
                <div className={`text-center p-3 rounded-xl text-sm font-medium ${
                  submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Column */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50 p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Contact us with</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6A0DAD]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#6A0DAD]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Address</h4>
                  <p className="text-slate-600">
                    103 B wing, Sai dham, <br />
                  Charkop, sector 8, Kandivali w,
                    Mumbai-400067, 
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#228B22]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#228B22]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Contact no</h4>
                  <p className="text-slate-600" ><a href="tel:+91 7666884823">+91 7666884823</a></p>
                  <p className="text-slate-600" ><a href="tel:+91 8779823714">+91 8779823714</a></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6A0DAD]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#6A0DAD]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Email Us</h4>
                  <p className="text-slate-600"> <a href="mailto:saazwelfarefoundation@gmail.com">saazwelfarefoundation@gmail.com</a></p>

                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#228B22]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#228B22]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1">Open Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#6A0DAD]/10 to-[#228B22]/10 p-6 rounded-xl border border-[#6A0DAD]/20">
                <p className="text-center text-slate-700">
              We value your feedback and inquiries. Our team is dedicated to responding to all messages within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        
      </div>
    </section>
  );
}
