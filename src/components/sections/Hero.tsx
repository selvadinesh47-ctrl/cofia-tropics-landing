import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import heroImg from "@/assets/hero-coconut-product.jpg";
import cofiaLogo from "@/assets/cofia-logo-transparent.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/order');
  };

  const handleDistributor = () => {
    const message = encodeURIComponent("Hello! I'm interested in becoming a distributor for your coconut chips. Please share the details and requirements. Thank you!");
    const whatsappUrl = `https://wa.me/919994898713?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            {/* Logo */}
            <div className="mb-8">
              <img 
                src={cofiaLogo} 
                alt="Cofia Logo" 
                className="h-20 mx-auto lg:mx-0"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-orange-900 leading-tight">Simply Coconut.</span>
              <span className="block text-orange-800 leading-tight">Pure Goodness.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-orange-700 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Authentic coconut snacks crafted for the world. Experience the pure taste of premium coconut products, trusted by millions globally.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                onClick={handleShopNow}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Shop Now
              </Button>
              <Button
                onClick={handleDistributor}
                variant="outline"
                size="lg"
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Become a Distributor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center lg:text-left">
              <p className="text-orange-600 text-sm font-medium mb-2">Trusted by over</p>
              <p className="text-4xl font-bold text-orange-800 mb-2">10000+</p>
              <p className="text-orange-600 text-sm">happy customers worldwide</p>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Product Badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold transform rotate-12 shadow-lg z-10">
                100% Natural
              </div>
              
              {/* Main Product Image */}
              <div className="relative">
                <img 
                  src={heroImg} 
                  alt="Cofia Coconut Products" 
                  className="w-full max-w-lg h-auto object-contain drop-shadow-2xl"
                />
                
                {/* Floating animation */}
                <div className="absolute inset-0 animate-pulse opacity-20">
                  <div className="w-full h-full bg-gradient-to-r from-orange-300 to-yellow-300 rounded-3xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;