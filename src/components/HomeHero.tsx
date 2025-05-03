
import { Button } from "@/components/ui/button";
import TravelSearch from "./TravelSearch";

const HomeHero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1682687982093-4e86b2e91045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Find Your Perfect Trip with AI
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 mb-8">
            Personalized travel recommendations based on your preferences, budget, and schedule.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-travel-blue hover:bg-travel-blue/90 text-lg px-8 py-6" size="lg">
              Plan My Trip
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-6" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <TravelSearch />
      </div>
    </div>
  );
};

export default HomeHero;
