
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type MessageRole = "user" | "assistant" | "system";

interface ChatMessageProps {
  content: string;
  role: MessageRole;
  timestamp?: Date;
}

const ChatMessage = ({ content, role, timestamp }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`flex gap-3 max-w-[80%] ${isUser ? "flex-row-reverse" : ""}`}
      >
        <Avatar className={`h-8 w-8 ${isUser ? "bg-travel-blue" : "bg-travel-purple"} transition-all hover:scale-105`}>
          {!isUser && (
            <AvatarImage src="/placeholder.svg" alt="TravelBud AI" />
          )}
          <AvatarFallback>
            {isUser ? "U" : "TB"}
          </AvatarFallback>
        </Avatar>
        
        <div
          className={`rounded-lg px-4 py-3 ${
            isUser
              ? "bg-travel-blue text-white shadow-sm"
              : "bg-gray-100 shadow-sm border border-gray-100"
          } transition-all`}
        >
          <div className="text-sm leading-relaxed">{content}</div>
          {timestamp && (
            <div className="text-xs opacity-70 mt-1 text-right">
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
