import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import vanillaImg from "@/assets/cofia-vanilla-package.jpg";
import spicePopImg from "@/assets/cofia-spice-pop-package.jpg";
import goldenCrunchImg from "@/assets/cofia-golden-crunch-package.jpg";

const products = [
  {
    id: 'vanilla',
    name: 'Velvet Vanilla',
    image: vanillaImg,
    description: 'Smooth and creamy vanilla coconut chips with a delicate sweetness that melts in your mouth.'
  },
  {
    id: 'spice',
    name: 'Spice Pop',
    image: spicePopImg,
    description: 'Bold and exciting spice blend that creates a perfect harmony of heat and coconut sweetness.'
  },
  {
    id: 'golden',
    name: 'Golden Crunch',
    image: goldenCrunchImg,
    description: 'Classic toasted coconut chips with the perfect golden crunch and traditional coconut flavor.'
  }
];

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    const product = products.find(p => p.id === productId);
    // You could add a toast notification here if needed
    console.log(`Clicked on ${product?.name}`);
  };

  const handleShopCollection = () => {
    navigate('/order');
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-orange-900 mb-6">
            Our Premium Collection
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Discover our handcrafted coconut chips, each flavor carefully developed to deliver 
            an extraordinary taste experience that celebrates the natural goodness of coconut.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-white to-orange-50"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 group-hover:text-orange-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-orange-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="inline-flex items-center text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                  <span>Click to explore</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-orange-700 mb-6 font-medium">
            Want to try all flavors?
          </p>
          <Button
            onClick={handleShopCollection}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Shop Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;