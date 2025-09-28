import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Image/Info */}
          <div className="space-y-8">
            {/* Coconut Plantation Image */}
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-[var(--shadow-premium)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cofia-green/80 to-cofia-brown/60 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                    <MapPin className="w-12 h-12" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold mb-4">Visit Our Farms</h3>
                  <p className="font-poppins text-white/90 leading-relaxed">
                    Experience the authentic coconut cultivation process in the heart of India's coconut country.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="bg-cofia-cream/50 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cofia-brown rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-cofia-cream" />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-cofia-dark-brown">Phone</p>
                  <p className="text-cofia-dark-brown/70 font-poppins">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cofia-brown rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cofia-cream" />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-cofia-dark-brown">Email</p>
                  <p className="text-cofia-dark-brown/70 font-poppins">hello@cofia.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cofia-brown rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cofia-cream" />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-cofia-dark-brown">Address</p>
                  <p 
                    className="text-cofia-dark-brown/70 font-poppins cursor-pointer hover:text-cofia-brown transition-colors"
                    onClick={() => window.open('https://maps.app.goo.gl/48jRXy1CiZ9yMnXx8', '_blank')}
                  >
                    1172b, Panatham Patti, Metrathi, Tamil Nadu 642203
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-cofia-dark-brown mb-4">
                Contact Us
              </h2>
              <p className="text-cofia-dark-brown/70 font-poppins leading-relaxed">
                Have questions about our products or want to explore partnership opportunities? 
                We'd love to hear from you.
              </p>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-poppins font-medium text-cofia-dark-brown mb-2">
                    Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your full name"
                    className="border-cofia-tan/40 focus:border-cofia-brown bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-poppins font-medium text-cofia-dark-brown mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    className="border-cofia-tan/40 focus:border-cofia-brown bg-white"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-cofia-dark-brown mb-2">
                  Country
                </label>
                <Input 
                  type="text" 
                  placeholder="Your country"
                  className="border-cofia-tan/40 focus:border-cofia-brown bg-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-poppins font-medium text-cofia-dark-brown mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your interest in Cofia products..."
                  rows={5}
                  className="border-cofia-tan/40 focus:border-cofia-brown bg-white resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
            
            {/* Response Time */}
            <div className="bg-cofia-green/10 rounded-xl p-4 text-center">
              <p className="text-sm text-cofia-dark-brown/70 font-poppins">
                <span className="font-semibold text-cofia-brown">Quick Response:</span> We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;