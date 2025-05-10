import React from 'react';
import { Phone, Video, Info, Sun, Moon, Bot } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ChatHeader: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#020C1B] border-b border-[#041124] shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Bot size={22} className="text-[#02101E]" />
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-cyan-400 text-xl font-semibold tracking-wide">Chat Assistant</h2>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex space-x-3">
        <button className="p-2 bg-[#041124] hover:bg-[#022233] rounded-full text-cyan-400 shadow-md hover:shadow-cyan-500 transition">
          <Phone size={18} />
        </button>
        <button className="p-2 bg-[#041124] hover:bg-[#022233] rounded-full text-cyan-400 shadow-md hover:shadow-cyan-500 transition">
          <Video size={18} />
        </button>
        <button className="p-2 bg-[#041124] hover:bg-[#022233] rounded-full text-cyan-400 shadow-md hover:shadow-cyan-500 transition">
          <Info size={18} />
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 bg-[#041124] hover:bg-[#022233] rounded-full text-cyan-400 shadow-md hover:shadow-cyan-500 transition"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
