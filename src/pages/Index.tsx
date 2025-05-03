
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import PopularDestinations from "@/components/PopularDestinations";
import TravelInsights from "@/components/TravelInsights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeHero />
        <PopularDestinations />
        <TravelInsights />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
