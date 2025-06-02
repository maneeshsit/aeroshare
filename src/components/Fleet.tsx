
import { Clock, Users, Gauge } from 'lucide-react';

const Fleet = () => {
  const helicopters = [
    {
      id: 1,
      name: "Hill HX50",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      passengers: "4-5",
      range: "400 nm",
      speed: "180 mph",
      description: "Our flagship luxury helicopter featuring state-of-the-art avionics and premium leather interiors.",
      price: "$2,500/hour"
    },
    {
      id: 2,
      name: "Hill Executive",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      passengers: "6-7",
      range: "500 nm",
      speed: "200 mph",
      description: "Perfect for executive travel with spacious cabin and advanced communication systems.",
      price: "$3,200/hour"
    },
    {
      id: 3,
      name: "Hill Sport",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      passengers: "2-3",
      range: "300 nm",
      speed: "160 mph",
      description: "Ideal for scenic tours and short-distance travel with excellent visibility.",
      price: "$1,800/hour"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of state-of-the-art Hill Helicopters, 
            each maintained to the highest safety standards and equipped with luxury amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helicopters.map((heli) => (
            <div key={heli.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={heli.image} 
                  alt={heli.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {heli.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{heli.name}</h3>
                <p className="text-gray-600 mb-4">{heli.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Users className="mx-auto mb-2 text-blue-600" size={20} />
                    <div className="text-sm text-gray-500">Passengers</div>
                    <div className="font-semibold">{heli.passengers}</div>
                  </div>
                  <div className="text-center">
                    <Gauge className="mx-auto mb-2 text-blue-600" size={20} />
                    <div className="text-sm text-gray-500">Range</div>
                    <div className="font-semibold">{heli.range}</div>
                  </div>
                  <div className="text-center">
                    <Clock className="mx-auto mb-2 text-blue-600" size={20} />
                    <div className="text-sm text-gray-500">Speed</div>
                    <div className="font-semibold">{heli.speed}</div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Book This Aircraft
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
