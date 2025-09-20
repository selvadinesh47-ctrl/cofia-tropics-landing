import React from 'react';
import Hero from '../components/sections/Hero';
import Story from '../components/sections/Story';
import Products from '../components/sections/Products';
import USP from '../components/sections/USP';
import Distributor from '../components/sections/Distributor';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Story />
      <Products />
      <USP />
      <Distributor />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;