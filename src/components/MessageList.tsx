import React, { useEffect, useRef } from 'react';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import { MessageType } from '../types';

interface MessageListProps {
  messages: MessageType[];
  isTyping: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#02101E] text-white">
      {/* Empty state */}
      {messages.length === 0 && !isTyping && (
        <div className="h-full flex items-center justify-center text-cyan-600/60">
          <p className="text-base italic">Genoshi is waiting to chat with you…</p>
        </div>
      )}

      {/* Messages */}
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      {/* Typing */}
      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
