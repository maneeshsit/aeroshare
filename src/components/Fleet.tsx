
import { Clock, Users, Gauge, Shield, Zap, Award, Plane, Settings, Heart } from 'lucide-react';
import { useState } from 'react';
import HX50Modal from './HX50Modal';

const Fleet = () => {
  const [isHX50ModalOpen, setIsHX50ModalOpen] = useState(false);

  const helicopters = [
    {
      id: 1,
      name: "HX50",
      image: "/lovable-uploads/425c5c10-5eb3-4944-af22-17ce47ed954d.png",
      passengers: "5",
      range: "700 nm", 
      speed: "140 kts",
      horsepower: "500 shp",
      payload: "1760 lbs",
      description: "The world's first commercially certified helicopter with fly-by-wire flight controls and autonomous flight capability. A revolutionary step forward in helicopter safety and performance.",
      features: [
        "Fly-by-wire flight controls", 
        "Autonomous flight capability", 
        "Fenestron tail rotor", 
        "Glass cockpit with advanced avionics",
        "Flight envelope protection",
        "Enhanced safety systems"
      ],
      price: "Contact for pricing"
    }
  ];

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
      title: "Engineering Excellence",
      description: "Designed and manufactured at Duxford Airfield with precision craftsmanship and cutting-edge technology"
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
    <>
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Revolutionary HX50
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet the world's first commercially certified helicopter with fly-by-wire flight controls. 
              The HX50 represents a quantum leap in helicopter technology, combining engineering excellence 
              with revolutionary safety features and autonomous capabilities that redefine what's possible in rotorcraft aviation.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-20">
            {helicopters.map((heli) => (
              <div key={heli.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  <img 
                    src={heli.image} 
                    alt={heli.name}
                    className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {heli.price}
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-sm text-blue-200 mb-1">World's First</div>
                    <div className="text-lg font-semibold">Fly-by-Wire Helicopter</div>
                  </div>
                </div>
                
                <div className="p-10">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {heli.name}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{heli.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <Users className="mx-auto mb-3 text-blue-600" size={28} />
                      <div className="text-sm text-gray-500 mb-1">Passengers</div>
                      <div className="font-bold text-xl text-gray-900">{heli.passengers}</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <Gauge className="mx-auto mb-3 text-blue-600" size={28} />
                      <div className="text-sm text-gray-500 mb-1">Max Range</div>
                      <div className="font-bold text-xl text-gray-900">{heli.range}</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <Clock className="mx-auto mb-3 text-blue-600" size={28} />
                      <div className="text-sm text-gray-500 mb-1">Cruise Speed</div>
                      <div className="font-bold text-xl text-gray-900">{heli.speed}</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <Settings className="mx-auto mb-3 text-blue-600" size={28} />
                      <div className="text-sm text-gray-500 mb-1">Horse Power</div>
                      <div className="font-bold text-xl text-gray-900">{heli.horsepower}</div>
                    </div>
                  </div>

                  <div className="mb-8 text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Payload</div>
                    <div className="font-bold text-2xl text-gray-900">{heli.payload}</div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">Revolutionary Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {heli.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700 p-2 bg-gray-50 rounded-lg">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose the HX50?</h3>
                <p className="text-gray-600 text-lg">Experience the future of helicopter aviation with groundbreaking technology</p>
              </div>
              
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-4 flex-shrink-0">
                    <feature.icon className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HX50Modal isOpen={isHX50ModalOpen} onClose={() => setIsHX50ModalOpen(false)} />
    </>
  );
};

export default Fleet;
