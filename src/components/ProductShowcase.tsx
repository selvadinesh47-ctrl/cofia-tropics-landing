import vv from "@/assets/vv.jpg";
import sp from "@/assets/sp.jpg";
import gc from "@/assets/gc.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Vanilla Coconut Chips",
      description: "Smooth vanilla flavor with crispy coconut",
      color: "bg-gradient-to-br from-yellow-100 to-orange-100",
      tagColor: "bg-yellow-200 text-yellow-800",
      img:vv
    },
    {
      id: 2,
      name: "Spice Pop Coconut",
      description: "Bold spicy kick with coconut crunch",
      color: "bg-gradient-to-br from-red-100 to-pink-100",
      tagColor: "bg-red-200 text-red-800",
      img:sp
    },
    {
      id: 3,
      name: "Golden Crunch",
      description: "Classic toasted coconut perfection",
      color: "bg-gradient-to-br from-amber-100 to-yellow-100",
      tagColor: "bg-amber-200 text-amber-800",
      img:gc
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cofia-tan/30 to-cofia-tan/10 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-cofia-brown mb-4">
            Our Coconut Chips
          </h2>
          <p className="text-lg text-cofia-dark-brown/80 font-poppins max-w-2xl mx-auto">
            Discover our premium range of coconut chips, each crafted with authentic ingredients 
            and bursting with natural flavors.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="bg-white rounded-3xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-premium)] transition-shadow duration-500 overflow-hidden">
                {/* Product Image */}
                <div className={`${product.color} p-8 relative overflow-hidden`}>
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm">
                    <img 
                      src={product.img} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Tag */}
                  <div className={`absolute top-4 right-4 ${product.tagColor} px-3 py-1 rounded-full text-xs font-poppins font-medium`}>
                    Premium
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-playfair font-bold text-xl text-cofia-dark-brown mb-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-cofia-dark-brown/70 font-poppins text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Action Area */}
                  <div className="mt-4 pt-4 border-t border-cofia-tan/30">
                    <p className="text-xs text-cofia-dark-brown/50 font-poppins group-hover:text-cofia-brown transition-colors">
                      Click to explore →
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-cofia-dark-brown/60 font-poppins mb-4">
            Want to try all flavors?
          </p>
          <button className="bg-cofia-brown text-cofia-cream px-8 py-3 rounded-full font-poppins font-semibold hover:bg-cofia-dark-brown transition-colors duration-300 shadow-[var(--shadow-button)]">
            Shop Complete Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;