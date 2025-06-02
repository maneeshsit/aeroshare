
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

  const filteredFromLocations = locations.filter(location =>
    location.toLowerCase().includes(fromLocation.toLowerCase())
  );

  const filteredToLocations = locations.filter(location =>
    location.toLowerCase().includes(toLocation.toLowerCase())
  );

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
            Hill Helicopters
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mt-4">
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
                    className="bg-transparent text-white outline-none w-full text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-white/20 rounded-xl p-5 backdrop-blur-sm">
                <Users className="text-blue-400" size={24} />
                <div className="text-left">
                  <div className="text-sm text-gray-300 mb-1">Passengers</div>
                  <select className="bg-transparent text-white outline-none w-full text-sm">
                    <option value="1" className="text-gray-900">1 Passenger</option>
                    <option value="2" className="text-gray-900">2 Passengers</option>
                    <option value="3" className="text-gray-900">3 Passengers</option>
                    <option value="4" className="text-gray-900">4 Passengers</option>
                    <option value="5" className="text-gray-900">5 Passengers</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-5 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-xl">
              Request HX50 Experience
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
