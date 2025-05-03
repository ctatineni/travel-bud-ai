
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-travel-softPurple py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About TravelBud AI</h1>
              <p className="text-lg text-gray-700 mb-8">
                We're revolutionizing the way people plan their travel with advanced 
                AI technology and personalized recommendations.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At TravelBud AI, we believe that everyone deserves amazing travel experiences without the stress 
                  of planning or budget constraints. Our mission is to make travel planning effortless and 
                  accessible by leveraging the latest in artificial intelligence technology.
                </p>
                <p className="text-gray-700 mb-4">
                  We analyze thousands of travel options in real-time to find you the best deals that match your 
                  preferences, schedule, and budget. By being flexible with travel dates, our AI can help you 
                  save up to 40% on your vacation costs.
                </p>
                <p className="text-gray-700">
                  Whether you're planning a weekend getaway or a month-long adventure, TravelBud AI is your 
                  intelligent travel companion every step of the way.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Travel Planning" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-travel-blue font-bold text-xl">40%</p>
                  <p className="text-sm text-gray-600">Average savings with<br />flexible dates</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-travel-softPurple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-travel-purple text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Share Your Preferences</h3>
                <p className="text-gray-600">
                  Tell us where you want to go, your budget, and travel preferences. The more 
                  details you provide, the better recommendations we can make.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-travel-softPurple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-travel-purple text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes thousands of travel options in real-time to find the best matches
                  for you, considering price trends, availability, and user reviews.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-travel-softPurple rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-travel-purple text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Personalized Recommendations</h3>
                <p className="text-gray-600">
                  Receive tailored travel recommendations with detailed itineraries, 
                  accommodations, activities, and transportation options.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-gray-700 mb-8">
                Join thousands of satisfied travelers who have discovered amazing destinations 
                and saved money with TravelBud AI's intelligent recommendations.
              </p>
              <Button className="bg-travel-blue hover:bg-travel-blue/90 text-lg px-8 py-6" size="lg">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
