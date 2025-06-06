
import { Briefcase, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Commercial Operations",
      description: "Advanced helicopter solutions for commercial aviation and business transport.",
      features: ["Executive transport", "Corporate charters", "VIP services", "Multi-city operations"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Comprehensive maintenance services and technical support for Hill Helicopters.",
      features: ["Scheduled maintenance", "Technical support", "Parts supply", "Field service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hill Helicopters provides comprehensive solutions from revolutionary aircraft manufacturing 
            to world-class training and support services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-6 group-hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
