import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import cofiaLogo from "@/assets/cofia-logo.png";
import spImage from "@/assets/sp.jpg";
import gcImage from "@/assets/gc.jpg";
import vvImage from "@/assets/vv.jpg";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  weight: string;
  discount: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Spice Pop Coconut",
    price: 299,
    originalPrice: 349,
    image: spImage,
    description: "Bold spices meet premium coconut crunch",
    weight: "200g",
    discount: "15% OFF"
  },
  {
    id: "2", 
    name: "Garlic Crunch Coconut",
    price: 279,
    originalPrice: 329,
    image: gcImage,
    description: "Aromatic garlic with crispy coconut perfection",
    weight: "200g",
    discount: "15% OFF"
  },
  {
    id: "3",
    name: "Vanilla Velvet Coconut",
    price: 329,
    originalPrice: 379,
    image: vvImage,
    description: "Smooth vanilla essence with coconut luxury",
    weight: "200g",
    discount: "13% OFF"
  }
];

interface CartItem extends Product {
  quantity: number;
}

const Order = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== productId));
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    const orderDetails = cart
      .map(item => `${item.name} (${item.weight}) x ${item.quantity} = ₹${item.price * item.quantity}`)
      .join('\n');

    const message = `Hi, I would like to place an order:

Customer Details:
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}

Order Details:
${orderDetails}

Total Amount: ₹${getTotalAmount()}

Please confirm availability and delivery details.`;

    window.open(`https://wa.me/919994898713?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cofia-cream to-cofia-tan/10">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-cofia-tan/30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-cofia-brown hover:text-cofia-dark-brown transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-poppins">Back</span>
            </Link>
            <img src={cofiaLogo} alt="Cofia" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-2 bg-cofia-green/10 px-4 py-2 rounded-full">
            <ShoppingCart className="w-5 h-5 text-cofia-brown" />
            <span className="font-poppins font-semibold text-cofia-brown">{getTotalItems()} items</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="font-playfair text-4xl font-bold text-cofia-dark-brown mb-2">
                Order Our Products
              </h1>
              <p className="text-cofia-dark-brown/70 font-poppins">
                Select your favorite coconut products and place your order
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {products.map(product => (
                <Card key={product.id} className="border-cofia-tan/30 hover:shadow-[var(--shadow-premium)] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-3 right-3 z-10">
                    <Badge variant="destructive" className="bg-cofia-spice text-cofia-cream font-poppins font-semibold px-3 py-1 shadow-md">
                      {product.discount}
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="relative overflow-hidden rounded-lg mb-4 group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cofia-dark-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardTitle className="font-playfair text-xl text-cofia-dark-brown mb-2">
                      {product.name}
                    </CardTitle>
                    <p className="text-sm text-cofia-dark-brown/70 font-poppins">
                      {product.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-playfair font-bold text-cofia-brown">₹{product.price}</p>
                          <p className="text-sm font-poppins text-cofia-dark-brown/50 line-through">₹{product.originalPrice}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs bg-cofia-green/20 text-cofia-dark-brown border-cofia-green/30">
                          {product.weight}
                        </Badge>
                      </div>
                      <Button 
                        onClick={() => addToCart(product)}
                        variant="premium"
                        size="sm"
                        className="shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-premium)]"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cart & Order Section */}
          <div className="space-y-6">
            {/* Cart */}
            <Card className="border-cofia-tan/30">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-cofia-dark-brown flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Your Order
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.length === 0 ? (
                  <p className="text-cofia-dark-brown/60 font-poppins text-center py-4">
                    No items in cart
                  </p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between p-3 bg-cofia-cream/30 rounded-lg">
                        <div className="flex-1">
                          <p className="font-poppins font-medium text-cofia-dark-brown text-sm">
                            {item.name}
                          </p>
                          <p className="text-cofia-brown font-semibold">₹{item.price * item.quantity}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-8 h-8 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-poppins">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-8 h-8 p-0"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-cofia-tan/30 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="font-playfair text-lg font-bold text-cofia-dark-brown">Total:</span>
                        <span className="font-playfair text-xl font-bold text-cofia-brown">₹{getTotalAmount()}</span>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Customer Info */}
            {cart.length > 0 && (
              <Card className="border-cofia-tan/30">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-cofia-dark-brown">
                    Customer Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-poppins font-medium text-cofia-dark-brown mb-2">
                      Full Name
                    </label>
                    <Input
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                      className="border-cofia-tan/40 focus:border-cofia-brown"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-cofia-dark-brown mb-2">
                      Phone Number
                    </label>
                    <Input
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone"
                      className="border-cofia-tan/40 focus:border-cofia-brown"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-cofia-dark-brown mb-2">
                      Delivery Address
                    </label>
                    <Input
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Enter delivery address"
                      className="border-cofia-tan/40 focus:border-cofia-brown"
                    />
                  </div>
                  
                  <Button
                    onClick={handlePlaceOrder}
                    variant="premium"
                    size="lg"
                    className="w-full mt-6"
                    disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address}
                  >
                    Place Order via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;