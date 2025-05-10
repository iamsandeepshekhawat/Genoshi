import ChatInterface from './components/ChatInterface';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen w-screen font-sans flex flex-col ${theme === 'dark' ? 'bg-[#02101E] text-cyan-400' : 'bg-white text-black'}`}>
      {/* Header with Logo and Toggle */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white dark:bg-[#020C1B] border-b border-gray-200 dark:border-[#041124] shadow-md">

        {/* Brand Name */}
        <div className="text-2xl font-bold tracking-wide bg-gradient-to-tr from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
          Genoshi Chat
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="text-sm px-4 py-2 rounded-lg bg-[#041124] hover:bg-[#022233] text-cyan-400 border border-cyan-500/30 shadow hover:shadow-cyan-500/30 transition-all"
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Chat Interface */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <ChatInterface />
      </main>

      {/* Footer (Optional) */}
      <footer className="text-center text-xs text-cyan-600 py-3 border-t border-[#041124] bg-[#020C1B]">
        © 2025 Genoshi. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
