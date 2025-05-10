import React, { useEffect, useState } from 'react';
import { CheckCheck } from 'lucide-react';
import { MessageType } from '../types';
import { formatMessageTime } from '../utils/formatters';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const isUser = message.sender === 'user';
  const animationClass = isUser ? 'user-message-appear' : 'bot-message-appear';
  
  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} ${isVisible ? animationClass : 'opacity-0'}`}
    >
      <div 
        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-soft
          ${isUser 
            ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-br-none' 
            : 'bg-stone-100 text-stone-800 rounded-bl-none'}
        `}
      >
        <div className="flex flex-col">
          <span className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</span>
          <div className={`flex justify-end items-center mt-1 space-x-1 text-xs ${isUser ? 'text-primary-200' : 'text-stone-400'}`}>
            <span className="font-medium">{formatMessageTime(message.timestamp)}</span>
            {isUser && (
              <span>
                <CheckCheck size={14} className="inline-block" />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;