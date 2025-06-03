import { Calendar, MapPin, Users } from 'lucide-react';
import { useState } from 'react';
import HX50Modal from './HX50Modal';
import VideoModal from './VideoModal';
import { locations } from '../data/locations';

const Hero = () => {
  const [isHX50ModalOpen, setIsHX50ModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPassengers, setSelectedPassengers] = useState('1');
  const [isRequestSubmitting, setIsRequestSubmitting] = useState(false);
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);

  const filteredFromLocations = locations.filter(location =>
    location.toLowerCase().includes(fromLocation.toLowerCase())
  );

  const filteredToLocations = locations.filter(location =>
    location.toLowerCase().includes(toLocation.toLowerCase())
  );

  const handleHX50Request = async () => {
    setIsRequestSubmitting(true);
    
    const requestData = {
      from: fromLocation,
      to: toLocation,
      date: selectedDate,
      passengers: selectedPassengers,
      serviceType: 'HX50 Experience',
      timestamp: new Date().toISOString()
    };
    
    console.log('HX50 Experience Request:', requestData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsRequestSubmitting(false);
    setIsRequestSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsRequestSubmitted(false);
      setFromLocation('');
      setToLocation('');
      setSelectedDate('');
      setSelectedPassengers('1');
    }, 3000);
  };

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
            combining British engineering excellence with cutting-edge autonomous technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in">
            <button 
              onClick={() => setIsHX50ModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 shadow-xl"
            >
              Discover HX50
            </button>
            <button 
              onClick={() => setIsVideoModalOpen(true)}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              Watch Demo Flight
            </button>
          </div>

          {/* Quick Booking Form */}
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto animate-scale-in border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-5 backdrop-blur-sm">
                  <MapPin className="text-blue-400" size={24} />
                  <div className="text-left w-full">
                    <div className="text-sm text-gray-300 mb-1">From</div>
                    <input 
                      type="text" 
                      placeholder="Departure location" 
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      onFocus={() => setShowFromSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
                      className="bg-transparent text-white placeholder-gray-300 outline-none w-full text-sm"
                    />
                  </div>
                </div>
                {showFromSuggestions && fromLocation && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-10">
                    {filteredFromLocations.slice(0, 5).map((location) => (
                      <div
                        key={location}
                        onClick={() => {
                          setFromLocation(location);
                          setShowFromSuggestions(false);
                        }}
                        className="p-3 hover:bg-gray-100 cursor-pointer text-gray-900 text-sm"
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-5 backdrop-blur-sm">
                  <MapPin className="text-blue-400" size={24} />
                  <div className="text-left w-full">
                    <div className="text-sm text-gray-300 mb-1">To</div>
                    <input 
                      type="text" 
                      placeholder="Destination" 
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      onFocus={() => setShowToSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
                      className="bg-transparent text-white placeholder-gray-300 outline-none w-full text-sm"
                    />
                  </div>
                </div>
                {showToSuggestions && toLocation && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-10">
                    {filteredToLocations.slice(0, 5).map((location) => (
                      <div
                        key={location}
                        onClick={() => {
                          setToLocation(location);
                          setShowToSuggestions(false);
                        }}
                        className="p-3 hover:bg-gray-100 cursor-pointer text-gray-900 text-sm"
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-5 backdrop-blur-sm">
                <Calendar className="text-blue-400" size={24} />
                <div className="text-left">
                  <div className="text-sm text-gray-300 mb-1">Date</div>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-transparent text-white outline-none w-full text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-5 backdrop-blur-sm">
                <Users className="text-blue-400" size={24} />
                <div className="text-left">
                  <div className="text-sm text-gray-300 mb-1">Passengers</div>
                  <select 
                    value={selectedPassengers}
                    onChange={(e) => setSelectedPassengers(e.target.value)}
                    className="bg-transparent text-white outline-none w-full text-sm"
                  >
                    <option value="1" className="text-gray-900">1 Passenger</option>
                    <option value="2" className="text-gray-900">2 Passengers</option>
                    <option value="3" className="text-gray-900">3 Passengers</option>
                    <option value="4" className="text-gray-900">4 Passengers</option>
                    <option value="5" className="text-gray-900">5 Passengers</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              onClick={handleHX50Request}
              disabled={isRequestSubmitting}
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-5 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-xl"
            >
              {isRequestSubmitting ? 'Submitting Request...' : 'Request HX50 Experience'}
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
