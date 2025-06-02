
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">HillShare</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium helicopter charter services providing safe, luxurious, and reliable transportation 
              for all your aviation needs.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#fleet" className="text-gray-400 hover:text-white transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Executive Transport</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Scenic Tours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Special Occasions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Charters</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Airport Transfers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">Headquarters</div>
                  <div className="text-gray-400 text-sm">1234 Aviation Blvd<br />Los Angeles, CA 90045</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">24/7 Booking</div>
                  <div className="text-gray-400 text-sm">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400 text-sm">info@hillshare.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">Operations</div>
                  <div className="text-gray-400 text-sm">24/7 Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 HillShare. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
