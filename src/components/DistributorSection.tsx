import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Globe2 } from "lucide-react";

const DistributorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-cofia-green/20 to-cofia-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-cofia-green/10 to-cofia-cream/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content Box */}
          <div className="bg-cofia-cream/80 backdrop-blur-sm rounded-3xl shadow-[var(--shadow-premium)] p-8 lg:p-12 text-center border border-cofia-tan/30">
            {/* Icons */}
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cofia-green/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-cofia-brown" />
              </div>
              <div className="w-12 h-12 bg-cofia-tan/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-cofia-brown" />
              </div>
              <div className="w-12 h-12 bg-cofia-green/20 rounded-full flex items-center justify-center">
                <Globe2 className="w-6 h-6 text-cofia-brown" />
              </div>
            </div>
            
            {/* Title */}
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-cofia-dark-brown mb-4">
              Want to Grow With Us?
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-cofia-dark-brown/80 font-poppins mb-8 max-w-2xl mx-auto">
              Join our global family of distributors and be part of the coconut revolution. 
              Partner with us to bring authentic Cofia products to your market.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-2xl font-playfair font-bold text-cofia-brown">10000+</p>
                <p className="text-xs text-cofia-dark-brown/60 font-poppins">Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-playfair font-bold text-cofia-brown">2+</p>
                <p className="text-xs text-cofia-dark-brown/60 font-poppins">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-playfair font-bold text-cofia-brown">95%</p>
                <p className="text-xs text-cofia-dark-brown/60 font-poppins">Success Rate</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <Button 
              variant="premium" 
              size="lg" 
              className="min-w-[240px]"
              onClick={() => window.open(`https://wa.me/919876543210?text=${encodeURIComponent('Hi, I am interested in your product and would like to request more information.')}`, '_blank')}
            >
              Apply to Become Distributor
            </Button>
            
            {/* Benefits */}
            <div className="mt-8 pt-6 border-t border-cofia-tan/30">
              <p className="text-sm text-cofia-dark-brown/60 font-poppins">
                • Exclusive Territory Rights • Marketing Support • Training Provided • Proven Business Model
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorSection;