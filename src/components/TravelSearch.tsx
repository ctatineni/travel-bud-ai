
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const TravelSearch = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isFlexible, setIsFlexible] = useState(false);
  const [travelers, setTravelers] = useState(1);
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    console.log({
      destination,
      startDate,
      endDate,
      isFlexible,
      travelers,
      budget,
    });
    // Here we'd typically redirect to results page with search parameters
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg search-bar-shadow w-full max-w-4xl">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="all">All-Inclusive</TabsTrigger>
          <TabsTrigger value="flights">Flights</TabsTrigger>
          <TabsTrigger value="hotels">Hotels</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="destination">Where to?</Label>
              <Input 
                id="destination" 
                placeholder="City, country, or region" 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>Departure</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label>Return</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                      disabled={(date) => date < new Date() || (startDate && date < startDate)}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="travelers">Travelers</Label>
              <Input 
                id="travelers" 
                type="number" 
                min="1"
                value={travelers} 
                onChange={(e) => setTravelers(parseInt(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="budget">Budget (USD)</Label>
              <Input 
                id="budget" 
                placeholder="Max budget" 
                value={budget} 
                onChange={(e) => setBudget(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="flex items-end">
              <div className="flex items-center space-x-2 mb-[6px]">
                <Checkbox 
                  id="flexible" 
                  checked={isFlexible} 
                  onCheckedChange={(checked) => setIsFlexible(checked as boolean)} 
                />
                <label
                  htmlFor="flexible"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Flexible dates (±7 days)
                </label>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleSearch} 
              className="bg-travel-blue hover:bg-travel-blue/90 w-full md:w-1/2 mt-4" 
              size="lg"
            >
              Search Best Deals
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="flights" className="space-y-4">
          <div className="text-center text-lg">
            Flight search options will appear here
          </div>
        </TabsContent>
        
        <TabsContent value="hotels" className="space-y-4">
          <div className="text-center text-lg">
            Hotel search options will appear here
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TravelSearch;
