import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import DiscoverSection from "@/components/DiscoverSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="mt-8 md:mt-12">
        <ProductCarousel />
      </div>
      <DiscoverSection />
      <div className="mt-12 md:mt-16" />
      <AboutSection />
      <div className="mt-16 md:mt-24" />
    </>
  );
}
