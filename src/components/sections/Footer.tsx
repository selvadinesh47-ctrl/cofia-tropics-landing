import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import cofiaLogo from "@/assets/cofia-logo-transparent.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#6B4423] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={cofiaLogo} 
                alt="Cofia Logo" 
                className="h-12 mr-4"
              />
              <span className="text-2xl font-bold">Cofia</span>
            </div>
            <p className="text-[#F0DCC9] leading-relaxed mb-6 max-w-md">
              Premium coconut products crafted with love and tradition. 
              Experience the pure taste of authentic coconut snacks, 
              trusted by thousands worldwide.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center hover:bg-[#6B4423] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center hover:bg-[#6B4423] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center hover:bg-[#6B4423] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center hover:bg-[#6B4423] transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#story" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#contact" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#8B4513] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-[#F0DCC9] mb-4 md:mb-0">
              <p>&copy; 2024 Cofia Coconut Products. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-[#F0DCC9] hover:text-white transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#8B4513] hover:bg-[#6B4423] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;