import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex justify-start bot-message-appear">
      <div className="bg-gray-100 rounded-2xl rounded-bl-none py-3 px-4">
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-gray-400 typing-dot"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 typing-dot"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400 typing-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;