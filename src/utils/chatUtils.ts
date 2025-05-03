
// Types for chat messages
export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  timestamp: Date;
}

// Generate a unique ID for messages
export const generateMessageId = (): string => {
  return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
};

// Initial messages to show in the chat
export const initialMessages: ChatMessage[] = [
  {
    id: "1",
    content: "Hi! I'm your TravelBud AI assistant. I can help you plan your perfect vacation. Where would you like to go?",
    role: "assistant",
    timestamp: new Date(),
  },
];

// Example follow-up questions based on user input
export const generateFollowUpQuestion = (userInput: string): string => {
  const lowercaseInput = userInput.toLowerCase();
  
  if (lowercaseInput.includes("beach")) {
    return "Great choice! Would you prefer a quiet beach or one with more activities and nightlife?";
  } else if (lowercaseInput.includes("mountain") || lowercaseInput.includes("hiking")) {
    return "Mountains are beautiful! Do you prefer challenging hikes or more relaxed scenic views?";
  } else if (lowercaseInput.includes("europe")) {
    return "Europe has so many incredible destinations! Are you interested in specific countries or cities?";
  } else if (lowercaseInput.includes("budget")) {
    return "What's your approximate budget range for this trip?";
  } else if (lowercaseInput.includes("family") || lowercaseInput.includes("kids")) {
    return "How many people will be traveling, and what are the ages of the children?";
  } else if (lowercaseInput.includes("date") || lowercaseInput.includes("when")) {
    return "When are you planning to travel? Are your dates flexible?";
  } else {
    return "That sounds interesting! How long are you planning to stay, and what's your approximate budget?";
  }
};

// Process user message and return AI response
export const processUserMessage = async (message: string): Promise<string> => {
  // In a real implementation, this would call an AI service
  // For now, we'll use the generateFollowUpQuestion function
  
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return generateFollowUpQuestion(message);
};
