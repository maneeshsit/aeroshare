
import { useState } from 'react';
import { X, Shield, Zap, Award, Settings, Plane, Heart } from 'lucide-react';

interface HX50ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HX50Modal = ({ isOpen, onClose }: HX50ModalProps) => {
  if (!isOpen) return null;

  const features = [
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Revolutionary fly-by-wire technology with comprehensive flight envelope protection and automated safety systems"
    },
    {
      icon: Zap,
      title: "Autonomous Capability", 
      description: "Advanced autopilot systems with autonomous flight modes for reduced pilot workload and enhanced operational safety"
    },
    {
      icon: Award,
      title: "British Engineering Excellence",
      description: "Designed and manufactured in the UK at Duxford Airfield with precision craftsmanship and cutting-edge technology"
    },
    {
      icon: Settings,
      title: "Advanced Avionics",
      description: "State-of-the-art glass cockpit with integrated flight management systems and intuitive pilot interface"
    },
    {
      icon: Plane,
      title: "Superior Performance",
      description: "Optimized aerodynamics with fenestron tail rotor for reduced noise and enhanced performance characteristics"
    },
    {
      icon: Heart,
      title: "Passenger Comfort",
      description: "Spacious cabin design with premium materials and advanced vibration reduction for exceptional passenger experience"
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
          
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              HX50 Helicopter
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              The world's first commercially certified helicopter with fly-by-wire flight controls. 
              A revolutionary step forward in helicopter safety and performance.
            </p>
          </div>

          <div className="mb-8">
            <img 
              src="/lovable-uploads/425c5c10-5eb3-4944-af22-17ce47ed954d.png" 
              alt="HX50 Helicopter"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-sm text-gray-500 mb-1">Passengers</div>
              <div className="font-bold text-xl text-gray-900">5</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-sm text-gray-500 mb-1">Range</div>
              <div className="font-bold text-xl text-gray-900">400+ nm</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-sm text-gray-500 mb-1">Speed</div>
              <div className="font-bold text-xl text-gray-900">140+ kts</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Revolutionary Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl p-3 flex-shrink-0">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Years of R&D</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">£50M+</div>
                <div className="text-blue-100">Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HX50Modal;
