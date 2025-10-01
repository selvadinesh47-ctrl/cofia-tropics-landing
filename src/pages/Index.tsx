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
      <section id="home">
        <HeroSection />
      </section>
      <section id="our-story">
        <OurStorySection />
      </section>
      <section id="products">
        <ProductShowcase />
        <USPBanner />
      </section>
      <DistributorSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
