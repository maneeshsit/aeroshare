import { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { locations } from '../data/locations';

const Booking = () => {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    date: '',
    time: '',
    passengers: '1',
    serviceType: 'executive',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showDepartureSuggestions, setShowDepartureSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log('Booking submitted:', formData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        departure: '',
        destination: '',
        date: '',
        time: '',
        passengers: '1',
        serviceType: 'executive',
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const filteredDepartureLocations = locations.filter(location =>
    location.toLowerCase().includes(formData.departure.toLowerCase())
  );

  const filteredDestinationLocations = locations.filter(location =>
    location.toLowerCase().includes(formData.destination.toLowerCase())
  );

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Request Submitted!</h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for your interest in Hill Helicopters. Our team will contact you within 24 hours to confirm your booking and arrange payment.
              </p>
              <p className="text-sm text-gray-500">
                Reference: HX50-{Date.now().toString().slice(-6)}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Flight
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take to the skies? Fill out our booking form and our team will contact you 
            within 24 hours to confirm your reservation and arrange payment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <MapPin size={16} className="mr-2 text-blue-600" />
                  Departure Location
                </label>
                <input
                  type="text"
                  name="departure"
                  value={formData.departure}
                  onChange={handleChange}
                  onFocus={() => setShowDepartureSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowDepartureSuggestions(false), 200)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter departure location"
                  required
                />
                {showDepartureSuggestions && formData.departure && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-10 border">
                    {filteredDepartureLocations.slice(0, 5).map((location) => (
                      <div
                        key={location}
                        onClick={() => {
                          setFormData({...formData, departure: location});
                          setShowDepartureSuggestions(false);
                        }}
                        className="p-3 hover:bg-gray-100 cursor-pointer text-gray-900 text-sm"
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <MapPin size={16} className="mr-2 text-blue-600" />
                  Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  onFocus={() => setShowDestinationSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowDestinationSuggestions(false), 200)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter destination"
                  required
                />
                {showDestinationSuggestions && formData.destination && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-1 max-h-40 overflow-y-auto z-10 border">
                    {filteredDestinationLocations.slice(0, 5).map((location) => (
                      <div
                        key={location}
                        onClick={() => {
                          setFormData({...formData, destination: location});
                          setShowDestinationSuggestions(false);
                        }}
                        className="p-3 hover:bg-gray-100 cursor-pointer text-gray-900 text-sm"
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <Calendar size={16} className="mr-2 text-blue-600" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <Clock size={16} className="mr-2 text-blue-600" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center">
                  <Users size={16} className="mr-2 text-blue-600" />
                  Number of Passengers
                </label>
                <select
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6 Passengers</option>
                  <option value="7">7 Passengers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Service Type
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="executive">Executive Transport</option>
                  <option value="scenic">Scenic Tour</option>
                  <option value="special">Special Occasion</option>
                  <option value="emergency">Emergency Service</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-sm font-semibold text-gray-700">
                Special Requests or Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Any special requests or additional information..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </button>

            <p className="text-sm text-gray-500 text-center mt-4">
              Our team will contact you within 24 hours to confirm your booking and arrange payment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
