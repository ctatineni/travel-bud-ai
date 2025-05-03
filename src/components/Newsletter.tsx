
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Handle submission
    toast.success("Thanks for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <section className="py-16 bg-travel-softPurple">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Get Travel Deals & Updates</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about exclusive deals, 
          seasonal discounts, and travel tips from our experts.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button 
            type="submit" 
            className="bg-travel-purple hover:bg-travel-purple/90"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
