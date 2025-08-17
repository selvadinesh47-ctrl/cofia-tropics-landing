import { Leaf, Cog, CheckCircle } from "lucide-react";
import coconutTreeBg from "@/assets/coconut-tree-bg.png";

const OurStorySection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Authentic Ingredients",
      description: "Pure coconut from trusted farms"
    },
    {
      icon: Cog,
      title: "Modern Production",
      description: "Advanced processing technology"
    },
    {
      icon: CheckCircle,
      title: "Trusted Quality",
      description: "FSSAI certified excellence"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Tree */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src={coconutTreeBg} 
          alt="" 
          className="h-full w-auto object-contain"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-cofia-brown mb-8">
            Our Story
          </h2>
          
          {/* Story Content */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-cofia-dark-brown leading-relaxed font-poppins mb-6">
              Cofia was born in India's coconut heartland to bring honest, clean, coconut-based snacks to the world. 
              Our journey began with a simple mission: to share the pure goodness of authentic coconut products 
              with families everywhere.
            </p>
            
            <p className="text-lg text-cofia-dark-brown leading-relaxed font-poppins">
              From our traditional roots to modern innovation, we've maintained our commitment to quality, 
              sustainability, and the timeless taste that has delighted over 10 million customers worldwide.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-cofia-cream/50 transition-all duration-300 hover:shadow-[var(--shadow-card)]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cofia-tan/20 rounded-full mb-4 group-hover:bg-cofia-tan/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-cofia-brown" />
                </div>
                
                <h3 className="font-poppins font-semibold text-lg text-cofia-dark-brown mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-cofia-dark-brown/70 font-poppins">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;