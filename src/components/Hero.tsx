
import { Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=3498&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Premium Helicopter
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Charter Service
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Experience the ultimate in luxury travel with Hill Helicopters. 
          Book premium helicopter charters for business, leisure, or special occasions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Book Your Flight
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            View Our Fleet
          </button>
        </div>

        {/* Quick Booking Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-3xl mx-auto animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-4">
              <MapPin className="text-blue-400" size={20} />
              <div className="text-left">
                <div className="text-sm text-gray-300">From</div>
                <input 
                  type="text" 
                  placeholder="Departure location" 
                  className="bg-transparent text-white placeholder-gray-300 outline-none w-full"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-4">
              <MapPin className="text-blue-400" size={20} />
              <div className="text-left">
                <div className="text-sm text-gray-300">To</div>
                <input 
                  type="text" 
                  placeholder="Destination" 
                  className="bg-transparent text-white placeholder-gray-300 outline-none w-full"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-4">
              <Calendar className="text-blue-400" size={20} />
              <div className="text-left">
                <div className="text-sm text-gray-300">Date</div>
                <input 
                  type="date" 
                  className="bg-transparent text-white outline-none w-full"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/20 rounded-lg p-4">
              <Users className="text-blue-400" size={20} />
              <div className="text-left">
                <div className="text-sm text-gray-300">Passengers</div>
                <select className="bg-transparent text-white outline-none w-full">
                  <option value="1" className="text-gray-900">1 Passenger</option>
                  <option value="2" className="text-gray-900">2 Passengers</option>
                  <option value="3" className="text-gray-900">3 Passengers</option>
                  <option value="4" className="text-gray-900">4 Passengers</option>
                </select>
              </div>
            </div>
          </div>

          <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02]">
            Search Available Flights
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
