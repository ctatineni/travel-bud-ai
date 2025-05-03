
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import PopularDestinations from "@/components/PopularDestinations";
import TravelInsights from "@/components/TravelInsights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Index = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeHero />
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Plan Your Perfect Trip</h2>
              <p className="text-lg text-gray-700 mb-4">
                Tell our AI assistant about your dream vacation and get personalized recommendations tailored just for you.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our assistant will ask you relevant questions to understand your preferences and provide the best travel options within your budget.
              </p>
              <Button 
                onClick={() => setShowChat(!showChat)}
                className="bg-travel-purple hover:bg-travel-purple/90 mb-6 md:hidden"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                {showChat ? "Hide Chat Assistant" : "Open Chat Assistant"}
              </Button>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-travel-blue/10 p-3 rounded-full">
                    <span className="text-travel-blue font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Share Your Travel Dreams</h3>
                    <p className="text-gray-600">Tell us where you want to go and what you want to do</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-travel-blue/10 p-3 rounded-full">
                    <span className="text-travel-blue font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Get Personalized Recommendations</h3>
                    <p className="text-gray-600">Our AI will suggest the best options based on your preferences</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-travel-blue/10 p-3 rounded-full">
                    <span className="text-travel-blue font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Book With Confidence</h3>
                    <p className="text-gray-600">Secure the best deals for your perfect vacation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`w-full md:w-1/2 ${showChat ? 'block' : 'hidden md:block'}`}>
              <ChatInterface />
            </div>
          </div>
        </div>
        <PopularDestinations />
        <TravelInsights />
        <Newsletter />
      </main>
      <Footer />

      {/* Floating chat button (visible only on larger screens) */}
      <div className="fixed bottom-6 right-6 hidden md:block">
        <Button 
          onClick={() => setShowChat(!showChat)}
          className={`rounded-full h-14 w-14 ${showChat ? 'bg-gray-700' : 'bg-travel-blue'} hover:bg-travel-blue/90 shadow-lg`}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
