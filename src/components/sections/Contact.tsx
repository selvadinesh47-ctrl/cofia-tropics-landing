import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiry: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Success!",
      description: "Thank you! Your message has been sent. We'll respond within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      inquiry: 'general'
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#F5E6D3] to-[#F0DCC9]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#6B4423] mb-6">Get In Touch</h2>
          <p className="text-xl text-[#8B4513] max-w-3xl mx-auto leading-relaxed">
            Ready to experience the pure taste of premium coconut products? 
            Contact us for orders or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#8B4513]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6B4423] mb-1">Phone</h3>
                    <p className="text-[#8B4513]">+91 99948 98713</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#8B4513]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6B4423] mb-1">Email</h3>
                    <p className="text-[#8B4513]">info@cofia.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5E6D3] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#8B4513]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#6B4423] mb-1">Address</h3>
                    <p className="text-[#8B4513]">Coconut Farms, Kerala, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Farm Image Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center text-green-600 text-lg font-medium">
                Our Coconut Farms
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#6B4423] text-center">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-[#D2B48C] focus:border-[#8B4513] focus:ring-[#8B4513]"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-[#D2B48C] focus:border-[#8B4513] focus:ring-[#8B4513]"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-[#D2B48C] focus:border-[#8B4513] focus:ring-[#8B4513]"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-[#8B4513] mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    value={formData.inquiry}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="wholesale">Wholesale Orders</option>
                    <option value="distributor">Distributor Partnership</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-orange-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;