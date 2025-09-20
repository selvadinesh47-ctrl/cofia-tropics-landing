import React from 'react';
import { Shield, Truck, Heart, Award } from 'lucide-react';

const uspItems = [
  {
    icon: Heart,
    title: "100% Natural",
    description: "No artificial additives"
  },
  {
    icon: Truck,
    title: "Farm-to-Shelf",
    description: "Direct from coconut farms"
  },
  {
    icon: Shield,
    title: "Cholesterol Free",
    description: "Heart-healthy snacking"
  },
  {
    icon: Award,
    title: "FSSAI Certified",
    description: "Quality guaranteed"
  }
];

const stats = [
  {
    number: "10000+",
    label: "Happy Customers"
  },
  {
    number: "2+",
    label: "Countries Served"
  },
  {
    number: "1+",
    label: "Years Experience"
  },
  {
    number: "100%",
    label: "Customer Satisfaction"
  }
];

const USP = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8B4513] to-[#6B4423] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* USP Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {uspItems.map((item, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-100 transition-colors">
                {item.title}
              </h3>
              
              {/* Description */}
            <p className="text-[#F0DCC9] text-lg">
              {item.description}
            </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="border-t border-white/20 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Trusted Worldwide</h3>
            <p className="text-xl text-[#F0DCC9]">Join thousands who choose Cofia for pure coconut goodness</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl text-[#F0DCC9] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USP;