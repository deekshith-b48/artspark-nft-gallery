import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrendingSection from "@/components/sections/TrendingSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import TopCreatorsSection from "@/components/sections/TopCreatorsSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrendingSection />
        <CategoriesSection />
        <TopCreatorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
