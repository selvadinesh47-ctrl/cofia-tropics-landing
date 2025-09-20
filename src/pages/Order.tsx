import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Import product images
import vanillaImg from "@/assets/cofia-vanilla-package.jpg";
import spicePopImg from "@/assets/cofia-spice-pop-package.jpg";
import goldenCrunchImg from "@/assets/cofia-golden-crunch-package.jpg";

interface Product {
  id: string;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 'velvet-vanilla',
    name: 'Velvet Vanilla',
    image: vanillaImg
  },
  {
    id: 'spice-pop',
    name: 'Spice Pop',
    image: spicePopImg
  },
  {
    id: 'golden-crunch',
    name: 'Golden Crunch',
    image: goldenCrunchImg
  }
];

const Order = () => {
  const navigate = useNavigate();
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'velvet-vanilla': 0,
    'spice-pop': 0,
    'golden-crunch': 0
  });

  const updateQuantity = (productId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, prev[productId] + change)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-2xl font-bold text-orange-800">Order Products</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-6 text-orange-800 text-center">
                  {product.name}
                </CardTitle>
                
                {/* Quantity Controls */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(product.id, -1)}
                    disabled={quantities[product.id] === 0}
                    className="h-12 w-12 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Minus className="h-5 w-5" />
                  </Button>
                  
                  <span className="text-2xl font-bold min-w-[4rem] text-center text-orange-800">
                    {quantities[product.id]}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(product.id, 1)}
                    className="h-12 w-12 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Order;