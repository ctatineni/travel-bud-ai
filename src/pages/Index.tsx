
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import PopularDestinations from "@/components/PopularDestinations";
import TravelInsights from "@/components/TravelInsights";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ChatInterface from "@/components/ChatInterface";
import TravelSearch from "@/components/TravelSearch";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [showChat, setShowChat] = useState(true);
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HomeHero />
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10">
            <Tabs defaultValue="chat" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-travel-blue to-travel-purple bg-clip-text text-transparent">Plan Your Dream Trip</h2>
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="chat" className="flex items-center gap-2 data-[state=active]:bg-travel-blue data-[state=active]:text-white">
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat Assistant</span>
                  </TabsTrigger>
                  <TabsTrigger value="search" className="flex items-center gap-2 data-[state=active]:bg-travel-blue data-[state=active]:text-white">
                    <Search className="h-4 w-4" />
                    <span>Advanced Search</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="chat" className="mt-0">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <p className="text-xl text-gray-700 mb-6">
                      Tell our AI assistant about your dream vacation and get personalized recommendations tailored just for you.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-travel-blue/10 p-3 rounded-full">
                          <span className="text-travel-blue font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Share Your Travel Dreams</h3>
                          <p className="text-gray-600">Tell us where you want to go and what you want to do</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-travel-blue/10 p-3 rounded-full">
                          <span className="text-travel-blue font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Get Personalized Recommendations</h3>
                          <p className="text-gray-600">Our AI will suggest the best options based on your preferences</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-travel-blue/10 p-3 rounded-full">
                          <span className="text-travel-blue font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Book With Confidence</h3>
                          <p className="text-gray-600">Secure the best deals for your perfect vacation</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white mt-8">
                      Learn How It Works
                    </Button>
                  </div>
                  <div className="w-full md:w-1/2">
                    <ChatInterface />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="search" className="mt-0">
                <TravelSearch />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-travel-softPurple p-6 rounded-xl">
              <div className="text-travel-purple mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Deals</h3>
              <p className="text-gray-700">Get access to the latest deals from top travel providers.</p>
            </div>
            <div className="bg-travel-softPeach p-6 rounded-xl">
              <div className="text-travel-orange mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Local Experiences</h3>
              <p className="text-gray-700">Discover unique activities recommended by locals.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-travel-blue mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Recommendations</h3>
              <p className="text-gray-700">AI-powered suggestions based on your preferences and budget.</p>
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
          onClick={() => {
            setShowChat(!showChat);
            setActiveTab("chat");
          }}
          className={`rounded-full h-14 w-14 ${showChat ? 'bg-gray-700' : 'bg-travel-blue'} hover:bg-travel-blue/90 shadow-lg`}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
