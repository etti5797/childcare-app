import React from "react";
import ReactMarkdown from "react-markdown";
const ChatHistory = ({ chatHistory }) => {
  return (
    <>
      {chatHistory.map((message, index) => (
        <div key={index} className="chat-message">
          {message.type === "user" && (
            <span>You:</span>
          )}
          {message.type === "bot" && (
          <span>Bot:</span>
          )}
            <div>
            <ReactMarkdown>{message.message}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;