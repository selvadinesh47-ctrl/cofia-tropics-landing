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
          <div className="space-y-6">
            {/* Map Location */}
            <div className="relative h-64 lg:h-80 rounded-3xl overflow-hidden shadow-[var(--shadow-premium)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5826766984363!2d77.0086628!3d10.9702476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f4e85d1bcb7%3A0x7e4e4f9b8e6c5a1f!2s1172b%2C%20Panatham%20Patti%2C%20Metrathi%2C%20Tamil%20Nadu%20642203!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cofia Farm Location"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cofia-brown/90 to-transparent p-4 md:p-6">
                <h3 className="font-playfair text-lg md:text-xl font-bold text-white mb-1 md:mb-2">Visit Our Farms</h3>
                <p className="font-poppins text-white/90 text-xs md:text-sm">
                  1172b, Panatham Patti, Metrathi, Tamil Nadu 642203
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 md:p-8 space-y-6 shadow-[var(--shadow-card)] border border-cofia-tan/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cofia-brown rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-7 h-7 md:w-8 md:h-8 text-cofia-cream" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-poppins font-bold text-cofia-dark-brown text-base md:text-lg mb-1">Phone</p>
                  <a 
                    href="tel:+919994898713"
                    className="text-cofia-brown font-poppins font-medium text-base md:text-lg hover:underline block break-all"
                  >
                    +91 99948 98713
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pt-2 border-t border-cofia-tan/20">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cofia-brown rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-7 h-7 md:w-8 md:h-8 text-cofia-cream" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-poppins font-bold text-cofia-dark-brown text-base md:text-lg mb-1">Email</p>
                  <a 
                    href="mailto:info@cofia.in"
                    className="text-cofia-brown font-poppins font-medium text-base md:text-lg hover:underline block break-all"
                  >
                    info@cofia.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 pt-2 border-t border-cofia-tan/20">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-cofia-brown rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MapPin className="w-7 h-7 md:w-8 md:h-8 text-cofia-cream" strokeWidth={2} fill="none" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-poppins font-bold text-cofia-dark-brown text-base md:text-lg mb-1">Address</p>
                  <button 
                    className="text-cofia-brown font-poppins font-medium text-base md:text-lg hover:underline text-left transition-colors"
                    onClick={() => window.open('https://maps.app.goo.gl/GCjZ1jnoHPUHh63y8', '_blank')}
                  >
                    1172b, Panatham Patti, Metrathi, Tamil Nadu 642203
                  </button>
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