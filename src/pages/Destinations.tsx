
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    priceRange: "From $799",
    rating: 4.8,
    tag: "Beach",
    region: "Asia"
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    priceRange: "From $1,299",
    rating: 4.9,
    tag: "Island",
    region: "Europe"
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1557409518-691ebcd96038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    priceRange: "From $1,099",
    rating: 4.7,
    tag: "City",
    region: "Asia"
  },
  {
    id: 4,
    name: "Tulum, Mexico",
    image: "https://images.unsplash.com/photo-1682553064896-cf944fa619c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
    priceRange: "From $649",
    rating: 4.6,
    tag: "Beach",
    region: "North America"
  },
  {
    id: 5,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1499856871958-5b9357976b82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    priceRange: "From $899",
    rating: 4.8,
    tag: "City",
    region: "Europe"
  },
  {
    id: 6,
    name: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    priceRange: "From $1,199",
    rating: 4.7,
    tag: "Adventure",
    region: "Africa"
  },
  {
    id: 7,
    name: "New York City, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    priceRange: "From $799",
    rating: 4.7,
    tag: "City",
    region: "North America"
  },
  {
    id: 8,
    name: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    priceRange: "From $1,499",
    rating: 4.8,
    tag: "City",
    region: "Oceania"
  },
];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredDestinations = destinations.filter((destination) => {
    // Filter by search query
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by region
    const matchesRegion = selectedRegion === "all" || destination.region === selectedRegion;
    
    // Filter by tag
    const matchesTag = selectedTag === "all" || destination.tag === selectedTag;
    
    return matchesSearch && matchesRegion && matchesTag;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="bg-travel-softPurple py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-6">Explore Destinations</h1>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
              Discover amazing places around the world and plan your next adventure with our AI-powered recommendations.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white"
                />
                
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="Asia">Asia</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="North America">North America</SelectItem>
                    <SelectItem value="South America">South America</SelectItem>
                    <SelectItem value="Africa">Africa</SelectItem>
                    <SelectItem value="Oceania">Oceania</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Beach">Beach</SelectItem>
                    <SelectItem value="City">City</SelectItem>
                    <SelectItem value="Mountain">Mountain</SelectItem>
                    <SelectItem value="Island">Island</SelectItem>
                    <SelectItem value="Adventure">Adventure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
              <p className="text-gray-600">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDestinations.map((destination) => (
                <Card key={destination.id} className="overflow-hidden border-none destination-card">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className={`absolute top-4 right-4 ${
                        destination.tag === "Beach" ? "bg-travel-blue" : 
                        destination.tag === "City" ? "bg-travel-purple" :
                        destination.tag === "Mountain" ? "bg-green-500" :
                        destination.tag === "Island" ? "bg-travel-orange" : "bg-pink-500"
                      }`}>
                        {destination.tag}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{destination.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-travel-blue font-medium">{destination.priceRange}</span>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-gray-700">{destination.rating}</span>
                        </span>
                      </div>
                      <Button className="w-full mt-4 bg-travel-blue hover:bg-travel-blue/90">
                        View Details
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

export default Destinations;
