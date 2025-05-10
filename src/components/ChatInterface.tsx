import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useChat } from '../hooks/useChat';
import ChatHeader from './ChatHeader';
import { useTheme } from '../hooks/useTheme';

const chatbotImages = [
  '/images/Bot.jpg',
  '/images/Bot2.jpg',
  '/images/Bot3.jpg',
  '/images/Bot4.jpg',

];

const ChatInterface: React.FC = () => {
  const { messages, isTyping, sendMessage, startConversation } = useChat();
  const { theme } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      startConversation();
    }, 1000);
    return () => clearTimeout(timer);
  }, [startConversation]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % chatbotImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex h-screen w-screen font-sans ${theme === 'dark' ? 'bg-[#02101E] text-cyan-400' : 'bg-white text-black'}`}>
      {/* LEFT SIDE - CHAT INTERFACE */}
      <div className="w-2/3 flex flex-col border-r border-[#06B6D4]/40 shadow-cyan-500/20 shadow-lg">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-thin scrollbar-thumb-[#0891B2]/70 scrollbar-track-[#020C1B]">
          <MessageList messages={messages} isTyping={isTyping} />
        </div>
        <div className="px-4 py-3 border-t border-[#06B6D4]/40">
          <MessageInput onSendMessage={sendMessage} isDisabled={isTyping} />
        </div>
      </div>

      {/* RIGHT SIDE - IMAGE SLIDER */}
      <div className="w-1/3 bg-[#041124] flex items-center justify-center p-6">
        <div className="relative w-full max-w-sm h-[400px] bg-[#020C1B] rounded-2xl shadow-lg border border-[#06B6D4]/30 p-4 flex flex-col items-center justify-center">
          <img
            src={chatbotImages[currentImageIndex]}
            alt="Chatbot"
            className="rounded-xl w-full h-full object-contain transition-all duration-700 shadow-md shadow-cyan-500/30"
          />
          <p className="mt-4 text-center text-sm text-cyan-400">Meet your chatbot assistant</p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
