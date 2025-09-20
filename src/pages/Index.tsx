import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">Welcome to Cofia</h1>
          <p className="text-lg text-orange-600 mb-8">
            For the full Cofia experience, please visit our main site.
          </p>
          <button 
            onClick={() => window.location.href = '/index.html'}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Visit Main Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;