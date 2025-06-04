
import { useState } from 'react';
import HX50Modal from './HX50Modal';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isHX50ModalOpen, setIsHX50ModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

  if (isRequestSubmitted) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/425c5c10-5eb3-4944-af22-17ce47ed954d.png')`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">HX50 Experience Request Submitted!</h2>
            <p className="text-lg mb-6">
              Thank you for your interest in the HX50 Experience. Our team will contact you shortly to arrange your revolutionary helicopter journey.
            </p>
            <p className="text-sm text-gray-300">
              Reference: HX50-EXP-{Date.now().toString().slice(-6)}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/425c5c10-5eb3-4944-af22-17ce47ed954d.png')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              HX50 Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Experience the future of helicopter aviation with the revolutionary HX50. 
            The world's first commercially certified helicopter with fly-by-wire flight controls, 
            combining engineering excellence with cutting-edge autonomous technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in">
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              Watch Demo Flight
            </button>
          </div>
        </div>
      </section>

      <HX50Modal isOpen={isHX50ModalOpen} onClose={() => setIsHX50ModalOpen(false)} />
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  );
};

export default Hero;
