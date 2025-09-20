import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No artificial preservatives, colors, or flavors. Just pure coconut goodness straight from nature."
  },
  {
    icon: Heart,
    title: "Heart Healthy",
    description: "Rich in healthy fats and fiber, our coconut chips support your wellness journey naturally."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully selected coconuts processed with traditional methods to preserve authentic taste."
  },
  {
    icon: Users,
    title: "Family Made",
    description: "Crafted with love by coconut farming families who have perfected their recipes for generations."
  }
];

const Story = () => {
  return (
    <section id="story" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Story Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-900 mb-8">
            Our Story
          </h2>
          <div className="text-lg text-orange-700 leading-relaxed space-y-6">
            <p>
              Born from a passion for authentic flavors and natural goodness, Cofia represents 
              the perfect harmony between traditional coconut processing methods and modern quality standards.
            </p>
            <p>
              Our journey began in the heart of coconut farming communities, where we discovered 
              time-honored techniques passed down through generations. Today, we bring these 
              authentic flavors to your table, ensuring every bite tells the story of pure, 
              unadulterated coconut excellence.
            </p>
            <p className="text-xl font-medium text-orange-800">
              Simply Coconut. Pure Goodness. That's our promise to you.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-orange-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-orange-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;