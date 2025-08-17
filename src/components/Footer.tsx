import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import cofiaLogo from "@/assets/cofia-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: "Home", href: "#home" },
      { name: "Our Story", href: "#story" },
      { name: "Products", href: "#products" },
      { name: "Contact", href: "#contact" }
    ],
    products: [
      { name: "Vanilla Coconut Chips", href: "#" },
      { name: "Spice Pop Coconut", href: "#" },
      { name: "Golden Crunch", href: "#" },
      { name: "All Products", href: "#" }
    ],
    support: [
      { name: "Become Distributor", href: "#distributor" },
      { name: "Quality Assurance", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  };

  return (
    <footer className="bg-cofia-brown text-cofia-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-br from-cofia-dark-brown to-transparent"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <img 
                  src={cofiaLogo} 
                  alt="Cofia" 
                  className="h-12 w-auto object-contain filter brightness-0 invert mb-4"
                />
                <p className="text-cofia-cream/80 font-poppins leading-relaxed text-sm">
                  Premium coconut products crafted with authentic ingredients, 
                  trusted by over 10 million customers worldwide.
                </p>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="font-poppins font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-cofia-cream/10 rounded-full flex items-center justify-center hover:bg-cofia-cream/20 transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-cofia-cream/10 rounded-full flex items-center justify-center hover:bg-cofia-cream/20 transition-colors duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:hello@cofia.com" 
                    className="w-10 h-10 bg-cofia-cream/10 rounded-full flex items-center justify-center hover:bg-cofia-cream/20 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="tel:+919876543210" 
                    className="w-10 h-10 bg-cofia-cream/10 rounded-full flex items-center justify-center hover:bg-cofia-cream/20 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-cofia-cream/70 hover:text-cofia-cream font-poppins text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="font-poppins font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-cofia-cream/70 hover:text-cofia-cream font-poppins text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-poppins font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-cofia-cream/70 hover:text-cofia-cream font-poppins text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-cofia-cream/20">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-cofia-cream/60 font-poppins text-sm">
                © {currentYear} Cofia Coconut Products. All rights reserved.
              </p>
              
              <div className="flex gap-6">
                <a 
                  href="#" 
                  className="text-cofia-cream/60 hover:text-cofia-cream font-poppins text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="text-cofia-cream/60 hover:text-cofia-cream font-poppins text-sm transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="text-cofia-cream/60 hover:text-cofia-cream font-poppins text-sm transition-colors duration-300"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;