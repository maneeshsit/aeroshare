
import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);

  const PrivacyPolicyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
            <button
              onClick={() => setShowPrivacyPolicy(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>At Aeroshare, we are committed to protecting your privacy and ensuring the security of your personal information.</p>
            <h3 className="text-xl font-semibold text-gray-900">Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you book a flight, create an account, or contact us.</p>
            <h3 className="text-xl font-semibold text-gray-900">How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
            <h3 className="text-xl font-semibold text-gray-900">Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@aeroshare.com</p>
          </div>
        </div>
      </div>
    </div>
  );

  const TermsConditionsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Terms & Conditions</h2>
            <button
              onClick={() => setShowTermsConditions(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>Welcome to Aeroshare. These terms and conditions outline the rules and regulations for the use of our services.</p>
            <h3 className="text-xl font-semibold text-gray-900">Acceptance of Terms</h3>
            <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            <h3 className="text-xl font-semibold text-gray-900">Use License</h3>
            <p>Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.</p>
            <h3 className="text-xl font-semibold text-gray-900">Booking Terms</h3>
            <p>All bookings are subject to availability and confirmation. Payment terms and cancellation policies apply as specified during booking.</p>
            <h3 className="text-xl font-semibold text-gray-900">Limitation of Liability</h3>
            <p>Aeroshare shall not be liable for any damages arising from the use of our services.</p>
            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
            <p>For questions regarding these terms, please contact us at legal@aeroshare.com</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-2xl font-bold text-white">Aeroshare</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Pioneering the future of helicopter aviation with revolutionary fly-by-wire technology 
                and autonomous flight capabilities. Premium aviation services for the modern traveler.
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

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#fleet" className="text-gray-400 hover:text-white transition-colors">HX50 Helicopter</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Book Your Flight</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Features</a></li>
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
                    <div className="text-gray-400 text-sm">Premium Aviation Hub<br />Global Operations Center</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-white font-medium">Phone</div>
                    <div className="text-gray-400 text-sm">+1 (555) 123-AERO</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400 text-sm">info@aeroshare.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <div className="text-white font-medium">Business Hours</div>
                    <div className="text-gray-400 text-sm">24/7 Customer Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Aeroshare. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button 
                  onClick={() => setShowPrivacyPolicy(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setShowTermsConditions(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms & Conditions
                </button>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacyPolicy && <PrivacyPolicyModal />}
      {showTermsConditions && <TermsConditionsModal />}
    </>
  );
};

export default Footer;
