import { Leaf, Globe, Heart, Award } from "lucide-react";

const USPBanner = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial additives"
    },
    {
      icon: Globe,
      title: "Farm-to-Shelf",
      description: "Direct from coconut farms"
    },
    {
      icon: Heart,
      title: "Cholesterol Free",
      description: "Heart-healthy snacking"
    },
    {
      icon: Award,
      title: "FSSAI Certified",
      description: "Quality guaranteed"
    }
  ];

  return (
    <section className="py-16 bg-cofia-dark-brown relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-cofia-cream/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-cofia-cream mb-4">
              Why Choose Cofia?
            </h2>
            <p className="text-cofia-cream/80 font-poppins">
              Experience the difference that authentic quality makes
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cofia-cream/10 rounded-full mb-4 group-hover:bg-cofia-cream/20 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-cofia-cream" />
                </div>
                
                {/* Content */}
                <h3 className="font-poppins font-semibold text-lg text-cofia-cream mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-cofia-cream/70 font-poppins">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-16 pt-12 border-t border-cofia-cream/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-playfair font-bold text-cofia-cream mb-2">10000+</p>
                <p className="text-sm text-cofia-cream/70 font-poppins">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-playfair font-bold text-cofia-cream mb-2">2+</p>
                <p className="text-sm text-cofia-cream/70 font-poppins">Countries Served</p>
              </div>
              <div>
                <p className="text-3xl font-playfair font-bold text-cofia-cream mb-2">2+</p>
                <p className="text-sm text-cofia-cream/70 font-poppins">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPBanner;