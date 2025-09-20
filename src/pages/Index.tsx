import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Welcome to Cofia React App</h1>  
          <p className="text-lg text-orange-600 mb-8">
            Choose your option below:
          </p>
          
          <div className="space-y-4 mb-8">
            <Link to="/order">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg w-full max-w-xs">
                Order Products
              </Button>
            </Link>
            
            <div>
              <Button 
                onClick={() => window.location.href = '/index.html'}
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg w-full max-w-xs"
              >
                Visit Main Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;