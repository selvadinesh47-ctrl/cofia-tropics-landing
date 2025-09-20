import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Growing Market",
    description: "Join the booming healthy snacks industry with premium coconut products"
  },
  {
    icon: Users,
    title: "Marketing Support",
    description: "Comprehensive marketing materials and promotional support"
  },
  {
    icon: Globe,
    title: "Territory Rights",
    description: "Exclusive distribution rights in your geographical area"
  },
  {
    icon: Award,
    title: "Premium Brand",
    description: "Partner with a trusted brand known for quality and authenticity"
  }
];

const Distributor = () => {
  const handleBecomeDistributor = () => {
    const message = encodeURIComponent("Hello! I'm interested in becoming a distributor for your coconut chips. Please share the details and requirements. Thank you!");
    const whatsappUrl = `https://wa.me/919994898713?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Become Our Distribution Partner
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Join our growing network of successful distributors and bring premium 
            coconut products to your community. Unlock exclusive benefits and 
            build a profitable partnership with Cofia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-orange-100 transition-colors">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-orange-100 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-orange-100 mb-8">
              Take the first step towards a successful partnership. Contact us today 
              to learn more about distribution opportunities in your area.
            </p>
          </div>

          <Button
            onClick={handleBecomeDistributor}
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Apply Now - Become a Distributor
          </Button>

          {/* Contact Info */}
          <div className="mt-8 text-orange-100">
            <p className="text-lg">
              Or call us directly at{' '}
              <a href="tel:+919994898713" className="font-semibold text-white hover:text-orange-200 transition-colors">
                +91 99948 98713
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Distributor;