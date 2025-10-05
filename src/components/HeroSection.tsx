import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import cofiaLogo from "@/assets/cofia-logo.png";
import heroProduct from "@/assets/hero-coconut-product.jpg";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-br from-cofia-cresam to-cofia-tan/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-cofia-tan/5 to-cofia-green/5"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[calc(100vh-96px)]">
          {/* Left Column - Content (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={cofiaLogo} 
                alt="Cofia - Premium Coconut Products" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-cofia-dark-brown leading-tight">
                Simply Coconut.
                <br />
                <span className="text-cofia-brown">Pure Goodness.</span>
              </h1>
              
              <p className="text-xl text-cofia-dark-brown/80 font-poppins leading-relaxed max-w-xl">
                Authentic coconut snacks crafted for the world. Experience the pure taste of premium coconut products, trusted by thousands globally.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                variant="hero" 
                size="lg" 
                className="min-w-[160px]"
                onClick={() => navigate('/order')}
              >
                Shop Now
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="min-w-[200px]"
                onClick={() => window.open(`https://wa.me/919994898713?text=${encodeURIComponent('Hi, I am interested in your product and would like to request more information.')}`, '_blank')}
              >
                Become a Distributor
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-cofia-tan/30">
              <p className="text-sm text-cofia-dark-brown/60 font-poppins mb-3">Trusted by over</p>
              <p className="text-3xl font-playfair font-bold text-cofia-brown">1000+</p>
              <p className="text-sm text-cofia-dark-brown/60 font-poppins">happy customers worldwide</p>
            </div>
          </div>
          
          {/* Right Column - Product Image (40%) */}
          <div className="lg:col-span-2 relative">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-cofia-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cofia-tan/20 rounded-full blur-2xl"></div>
              
              {/* Main Product Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                <img 
                  src={heroProduct} 
                  alt="Premium Cofia Coconut Chips" 
                  className="w-full h-auto rounded-3xl shadow-[var(--shadow-premium)] object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3 bg-cofia-spice text-white px-4 py-2 rounded-full text-sm font-poppins font-semibold shadow-lg transform rotate-12">
                  100% Natural
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cofia-brown rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cofia-brown rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;