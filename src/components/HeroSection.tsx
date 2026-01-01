import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import cofiaLogo from "@/assets/cofia-logo-new.png";
import heroProduct from "@/assets/hero-coconut-product.jpg";


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-gradient-to-br from-cofia-cresam to-cofia-tan/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-cofia-tan/5 to-cofia-green/5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
        {/* Logo - Standalone at top */}
        <div className="mb-8 lg:mb-12">
          <img 
            src={cofiaLogo} 
            alt="Cofia - Premium Coconut Products" 
            className="h-20 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-sm"
            style={{ background: 'transparent' }}
          />
        </div>

        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cofia-dark-brown leading-tight">
                Simply Coconut.
                <br />
                <span className="text-cofia-brown">Pure Goodness.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-cofia-dark-brown/80 font-poppins leading-relaxed max-w-xl mx-auto lg:mx-0">
                Authentic coconut snacks crafted for the world. Experience the pure taste of premium coconut products, trusted by thousands globally.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:pt-6 justify-center lg:justify-start">
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
            <div className="pt-6 lg:pt-8 border-t border-cofia-tan/30">
              <p className="text-sm text-cofia-dark-brown/60 font-poppins mb-2">Trusted by over</p>
              <p className="text-3xl lg:text-4xl font-playfair font-bold text-cofia-brown">1000+</p>
              <p className="text-sm text-cofia-dark-brown/60 font-poppins">happy customers worldwide</p>
            </div>
          </div>
          
          {/* Right Column - Product Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cofia-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-cofia-tan/20 rounded-full blur-2xl"></div>
              
              {/* Main Product Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
                <img 
                  src={heroProduct} 
                  alt="Premium Cofia Coconut Chips" 
                  className="w-full h-auto rounded-3xl shadow-[var(--shadow-premium)] object-cover aspect-[4/5]"
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-cofia-spice text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-poppins font-semibold shadow-lg transform rotate-12">
                  100% Natural
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cofia-brown rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cofia-brown rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;