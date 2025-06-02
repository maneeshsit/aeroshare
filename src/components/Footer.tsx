
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://www.hillhelicopters.com/wp-content/uploads/2023/04/Hill-Helicopters-Logo-White.png" 
                alt="Hill Helicopters" 
                className="h-8"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Pioneering the future of helicopter aviation with revolutionary fly-by-wire technology 
              and autonomous flight capabilities. British engineering at its finest.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">YT</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HX50 Helicopter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fly-by-Wire Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Autonomous Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Specifications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Configurator</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sales & Leasing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Training Programs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Maintenance Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parts & Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">Headquarters</div>
                  <div className="text-gray-400 text-sm">Duxford Airfield<br />Cambridge, CB22 4QR<br />United Kingdom</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-gray-400 text-sm">+44 (0) 1223 370 077</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400 text-sm">info@hillhelicopters.com</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <div className="text-white font-medium">Business Hours</div>
                  <div className="text-gray-400 text-sm">Mon-Fri: 9:00-17:00 GMT</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Hill Helicopters Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
