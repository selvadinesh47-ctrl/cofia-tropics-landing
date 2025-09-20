import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

// Import product images
import vanillaImg from "@/assets/cofia-vanilla-package.jpg";
import spicePopImg from "@/assets/cofia-spice-pop-package.jpg";
import goldenCrunchImg from "@/assets/cofia-golden-crunch-package.jpg";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

const products: Product[] = [
  {
    id: 'velvet-vanilla',
    name: 'Velvet Vanilla',
    image: vanillaImg,
    price: 150
  },
  {
    id: 'spice-pop',
    name: 'Spice Pop',
    image: spicePopImg,
    price: 150
  },
  {
    id: 'golden-crunch',
    name: 'Golden Crunch',
    image: goldenCrunchImg,
    price: 150
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

  const getTotalItems = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + (quantities[product.id] * product.price);
    }, 0);
  };

  const handlePlaceOrder = () => {
    const orderItems = products
      .filter(product => quantities[product.id] > 0)
      .map(product => `${product.name} ${quantities[product.id]}`)
      .join(', ');

    if (orderItems) {
      const message = `Hello! I would like to place an order: ${orderItems}. Total amount: ₹${getTotalPrice()}. Please confirm the order details. Thank you!`;
      const whatsappUrl = `https://wa.me/919994898713?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
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
            <h1 className="text-2xl font-bold text-orange-800">Place Your Order</h1>
            <div className="flex items-center gap-2 text-orange-700">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">{getTotalItems()} items</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 text-orange-800">{product.name}</CardTitle>
                <p className="text-2xl font-bold text-orange-600 mb-4">₹{product.price}</p>
                
                {/* Quantity Controls */}
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(product.id, -1)}
                    disabled={quantities[product.id] === 0}
                    className="h-10 w-10 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  
                  <span className="text-xl font-semibold min-w-[3rem] text-center text-orange-800">
                    {quantities[product.id]}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(product.id, 1)}
                    className="h-10 w-10 rounded-full border-orange-300 hover:bg-orange-50"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
              
              {quantities[product.id] > 0 && (
                <CardFooter className="bg-orange-50 border-t p-3">
                  <div className="w-full text-center">
                    <span className="text-sm text-orange-700">
                      Subtotal: ₹{quantities[product.id] * product.price}
                    </span>
                  </div>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        {getTotalItems() > 0 && (
          <Card className="max-w-md mx-auto bg-gradient-to-r from-orange-100 to-amber-100 border-orange-200">
            <CardHeader>
              <CardTitle className="text-center text-orange-800">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {products
                .filter(product => quantities[product.id] > 0)
                .map(product => (
                  <div key={product.id} className="flex justify-between text-orange-700">
                    <span>{product.name} × {quantities[product.id]}</span>
                    <span>₹{quantities[product.id] * product.price}</span>
                  </div>
                ))
              }
              <div className="border-t border-orange-300 pt-2 mt-4">
                <div className="flex justify-between font-bold text-lg text-orange-800">
                  <span>Total</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={handlePlaceOrder}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3"
                size="lg"
              >
                Place Order via WhatsApp
              </Button>
            </CardFooter>
          </Card>
        )}

        {getTotalItems() === 0 && (
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="py-8">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-orange-300" />
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Your cart is empty</h3>
              <p className="text-orange-600">Add some delicious coconut chips to get started!</p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Order;