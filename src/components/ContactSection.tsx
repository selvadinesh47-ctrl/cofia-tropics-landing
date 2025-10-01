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
            {/* Map Location */}
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-[var(--shadow-premium)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.0987!2d77.0234!3d10.4321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI1JzU1LjYiTiA3N8KwMDEnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cofia Farm Location"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cofia-brown/90 to-transparent p-6">
                <h3 className="font-playfair text-xl font-bold text-white mb-2">Visit Our Farms</h3>
                <p className="font-poppins text-white/90 text-sm">
                  1172b, Panatham Patti, Metrathi, Tamil Nadu 642203
                </p>
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
                  <p className="text-cofia-dark-brown/70 font-poppins">+91 99948 98713</p>
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