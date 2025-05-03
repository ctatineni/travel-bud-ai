
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Destination = {
  id: number;
  name: string;
  image: string;
  priceRange: string;
  rating: number;
  tag: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80",
    priceRange: "From $799",
    rating: 4.8,
    tag: "Best Value"
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    priceRange: "From $1,299",
    rating: 4.9,
    tag: "Popular"
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1557409518-691ebcd96038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    priceRange: "From $1,099",
    rating: 4.7,
    tag: "Trending"
  },
  {
    id: 4,
    name: "Tulum, Mexico",
    image: "https://images.unsplash.com/photo-1682553064896-cf944fa619c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80",
    priceRange: "From $649",
    rating: 4.6,
    tag: "Beach"
  },
];

const PopularDestinations = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Popular Destinations</h2>
          <Button variant="outline" className="border-travel-blue text-travel-blue hover:bg-travel-blue hover:text-white">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden border-none destination-card">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-4 right-4 ${
                    destination.tag === "Best Value" ? "bg-travel-orange" : 
                    destination.tag === "Popular" ? "bg-travel-purple" : 
                    destination.tag === "Trending" ? "bg-pink-500" : "bg-travel-blue"
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
