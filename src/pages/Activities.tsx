
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const activities = [
  {
    id: 1,
    name: "Guided Snorkeling Tour",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$45",
    rating: 4.9,
    category: "Water",
    duration: "3 hours"
  },
  {
    id: 2,
    name: "Eiffel Tower Skip-the-Line Tour",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$79",
    rating: 4.7,
    category: "Cultural",
    duration: "2 hours"
  },
  {
    id: 3,
    name: "Volcano Hiking Adventure",
    location: "Hawaii, USA",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$120",
    rating: 4.8,
    category: "Adventure",
    duration: "Full day"
  },
  {
    id: 4,
    name: "Traditional Cooking Class",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    price: "$89",
    rating: 4.9,
    category: "Food",
    duration: "3 hours"
  },
  {
    id: 5,
    name: "Berlin Street Art Tour",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1607604760190-ec4e3e59e4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$30",
    rating: 4.6,
    category: "Cultural",
    duration: "2 hours"
  },
  {
    id: 6,
    name: "Safari Game Drive",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    price: "$150",
    rating: 4.9,
    category: "Wildlife",
    duration: "Half day"
  },
  {
    id: 7,
    name: "Wine Tasting Tour",
    location: "Tuscany, Italy",
    image: "https://images.unsplash.com/photo-1621957036778-20186a65f172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$110",
    rating: 4.8,
    category: "Food",
    duration: "6 hours"
  },
  {
    id: 8,
    name: "Scuba Diving Experience",
    location: "Great Barrier Reef, Australia",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$200",
    rating: 4.9,
    category: "Water",
    duration: "Full day"
  },
];

const Activities = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");

  const filteredActivities = activities.filter((activity) => {
    // Filter by search query
    const matchesSearch = 
      activity.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      activity.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory;
    
    // Filter by duration
    const matchesDuration = selectedDuration === "all" || activity.duration === selectedDuration;
    
    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-travel-softPeach py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6">Discover Activities</h1>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
              Find amazing experiences and activities for your next trip, recommended by our AI-powered platform.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Search activities or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white"
                />
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                    <SelectItem value="Cultural">Cultural</SelectItem>
                    <SelectItem value="Food">Food & Drink</SelectItem>
                    <SelectItem value="Water">Water Activities</SelectItem>
                    <SelectItem value="Wildlife">Wildlife</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Any Duration</SelectItem>
                    <SelectItem value="2 hours">2 hours</SelectItem>
                    <SelectItem value="3 hours">3 hours</SelectItem>
                    <SelectItem value="Half day">Half day</SelectItem>
                    <SelectItem value="Full day">Full day</SelectItem>
                    <SelectItem value="6 hours">6 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No activities found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredActivities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden border-none destination-card h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-48">
                      <img 
                        src={activity.image} 
                        alt={activity.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 bg-travel-blue text-white px-3 py-1">
                        {activity.category}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold">{activity.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{activity.location}</p>
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-700">{activity.rating}</span>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-travel-blue font-semibold">{activity.price}</span>
                        <span className="text-gray-600 text-sm">{activity.duration}</span>
                      </div>
                      <Button className="w-full mt-4 bg-travel-blue hover:bg-travel-blue/90">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;
