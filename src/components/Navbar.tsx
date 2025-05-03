
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-travel-blue to-travel-purple bg-clip-text text-transparent">
            TravelBud AI
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-travel-blue transition-colors">
            Home
          </Link>
          <Link to="/destinations" className="text-gray-700 hover:text-travel-blue transition-colors">
            Destinations
          </Link>
          <Link to="/activities" className="text-gray-700 hover:text-travel-blue transition-colors">
            Activities
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-travel-blue transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:text-travel-blue">
            Sign In
          </Button>
          <Button className="bg-travel-blue hover:bg-travel-blue/90">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
