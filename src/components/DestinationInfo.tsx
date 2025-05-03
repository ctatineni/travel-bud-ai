
import { Button } from "@/components/ui/button";

interface DestinationInfoProps {
  destination: string;
}

const DestinationInfo = ({ destination }: DestinationInfoProps) => {
  // This is a placeholder component that would fetch and display real information about the destination
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">About {destination}</h3>
      <p className="text-gray-700 mb-4">
        Discover more about {destination} and what makes it special. This section would typically
        display information about local attractions, weather, best times to visit, and other
        relevant travel details.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-medium mb-2">Best Time to Visit</h4>
          <p className="text-sm text-gray-600">June - September</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-medium mb-2">Language</h4>
          <p className="text-sm text-gray-600">English, Local language</p>
        </div>
        <div className="bg-gray-50 p-4 rounded">
          <h4 className="font-medium mb-2">Currency</h4>
          <p className="text-sm text-gray-600">Local Currency (USD accepted)</p>
        </div>
      </div>
      <Button className="w-full bg-travel-blue hover:bg-travel-blue/90">
        Show Things to Do
      </Button>
    </div>
  );
};

export default DestinationInfo;
