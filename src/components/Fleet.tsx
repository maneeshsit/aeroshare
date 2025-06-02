
import { Clock, Users, Gauge, Shield, Zap, Award } from 'lucide-react';

const Fleet = () => {
  const helicopters = [
    {
      id: 1,
      name: "HX50",
      image: "https://www.hillhelicopters.com/wp-content/uploads/2023/05/HX50-Exterior-1.jpg",
      passengers: "5",
      range: "400+ nm",
      speed: "140+ kts",
      description: "The world's first commercially certified helicopter with fly-by-wire flight controls and autonomous flight capability.",
      features: ["Fly-by-wire controls", "Autonomous flight", "Fenestron tail rotor", "Glass cockpit"],
      price: "Contact for pricing"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Enhanced Safety",
      description: "Revolutionary fly-by-wire technology with flight envelope protection"
    },
    {
      icon: Zap,
      title: "Autonomous Capability",
      description: "Advanced autopilot systems for reduced pilot workload"
    },
    {
      icon: Award,
      title: "British Engineering",
      description: "Designed and manufactured in the UK with precision craftsmanship"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Revolutionary HX50
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the world's first commercially certified helicopter with fly-by-wire flight controls. 
            The HX50 represents a quantum leap in helicopter technology, safety, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {helicopters.map((heli) => (
            <div key={heli.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={heli.image} 
                  alt={heli.name}
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {heli.price}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{heli.name}</h3>
                <p className="text-gray-600 mb-6 text-lg">{heli.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="mx-auto mb-2 text-blue-600" size={24} />
                    <div className="text-sm text-gray-500">Passengers</div>
                    <div className="font-semibold text-lg">{heli.passengers}</div>
                  </div>
                  <div className="text-center">
                    <Gauge className="mx-auto mb-2 text-blue-600" size={24} />
                    <div className="text-sm text-gray-500">Range</div>
                    <div className="font-semibold text-lg">{heli.range}</div>
                  </div>
                  <div className="text-center">
                    <Clock className="mx-auto mb-2 text-blue-600" size={24} />
                    <div className="text-sm text-gray-500">Speed</div>
                    <div className="font-semibold text-lg">{heli.speed}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {heli.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Learn More About HX50
                </button>
              </div>
            </div>
          ))}

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Why Choose the HX50?</h3>
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-lg p-3">
                  <feature.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
