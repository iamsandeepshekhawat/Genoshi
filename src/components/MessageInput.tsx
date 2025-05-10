import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Paperclip, Smile } from 'lucide-react';

interface MessageInputProps {
  onSendMessage: (text: string) => void;
  isDisabled: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isDisabled }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isDisabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t border-[#1A2A3A] p-4 bg-[#041124] backdrop-blur-md">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3">
        
        {/* Attachment */}
        <button 
          type="button"
          className="p-2 rounded-full hover:bg-[#020C1B] transition-colors text-cyan-400 hover:text-white shadow-md hover:shadow-cyan-500/40"
        >
          <Paperclip size={20} />
        </button>
        
        {/* Input Field */}
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isDisabled}
            className="w-full py-3 px-4 rounded-full border border-[#1A2A3A] bg-[#02101E] text-cyan-400 placeholder:text-[#4B5E70] focus:outline-none focus:ring-2 focus:ring-[#06B6D4] shadow-inner"
          />
          {/* Emoji Button */}
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-white hover:bg-[#020C1B] p-1 rounded-full transition-colors shadow hover:shadow-cyan-500/30"
          >
            <Smile size={20} />
          </button>
        </div>

        {/* Send or Mic */}
        {message.trim() ? (
          <button
            type="submit"
            disabled={isDisabled}
            className="p-3 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#0891B2] text-[#02101E] shadow-lg hover:shadow-cyan-500/60 transition-shadow disabled:opacity-40"
          >
            <Send size={20} />
          </button>
        ) : (
          <button
            type="button"
            className="p-3 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#0891B2] text-[#02101E] shadow-lg hover:shadow-cyan-500/60 transition-shadow"
          >
            <Mic size={20} />
          </button>
        )}
      </form>
    </div>
  );
};

export default MessageInput;
