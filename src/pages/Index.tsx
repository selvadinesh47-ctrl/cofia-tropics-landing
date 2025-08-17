import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import ProductShowcase from "@/components/ProductShowcase";
import USPBanner from "@/components/USPBanner";
import DistributorSection from "@/components/DistributorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <ProductShowcase />
      <USPBanner />
      <DistributorSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
