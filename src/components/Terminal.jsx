import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'info', content: 'Welcome to ThameeshOS v1.0.0' },
    { type: 'info', content: 'Type "help" for available commands.' },
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', content: cmd }];

    switch (trimmedCmd) {
      case 'help':
        newHistory.push({ type: 'info', content: 'Available commands:' });
        newHistory.push({ type: 'info', content: '  help     - Show this help message' });
        newHistory.push({ type: 'info', content: '  clear    - Clear the terminal' });
        newHistory.push({ type: 'info', content: '  whoami   - Display user info' });
        newHistory.push({ type: 'info', content: '  contact  - Show contact details' });
        newHistory.push({ type: 'info', content: '  skills   - Navigate to Skills page' });
        newHistory.push({ type: 'info', content: '  projects - Navigate to Projects page' });
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        newHistory.push({ type: 'success', content: 'Thameesh Kumar K S' });
        newHistory.push({ type: 'info', content: 'DevOps Engineer | Cloud Infrastructure | CI/CD Automation' });
        break;
      case 'contact':
        newHistory.push({ type: 'info', content: 'Phone: 9360948981' });
        newHistory.push({ type: 'info', content: 'Email: thameesh31052000@gmail.com' });
        newHistory.push({ type: 'info', content: 'LinkedIn: linkedin.com/in/thameesh-kumar-051a1b239/' });
        break;
      case 'skills':
        newHistory.push({ type: 'success', content: 'Navigating to Skills...' });
        navigate('/skills');
        break;
      case 'projects':
        newHistory.push({ type: 'success', content: 'Navigating to Projects...' });
        navigate('/projects');
        break;
      case '':
        break;
      default:
        newHistory.push({ type: 'error', content: `Command not found: ${trimmedCmd}` });
    }

    setHistory(newHistory);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className={`fixed bottom-4 right-4 w-full max-w-lg z-50 transition-all duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-3rem)]'}`}>
      <div className="bg-[#18181b] border border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Terminal Header */}
        <div
          className="bg-[#27272a] p-2 flex items-center justify-between cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-gray-400">terminal</span>
            <span className="text-xs font-mono text-gray-300">thameesh-terminal</span>
          </div>
          <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Terminal Body */}
        {isOpen && (
          <div
            className="h-64 bg-black/90 p-4 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, idx) => (
              <div key={idx} className={`mb-1 ${
                line.type === 'input' ? 'text-gray-300' :
                line.type === 'error' ? 'text-red-400' :
                line.type === 'success' ? 'text-green-400' : 'text-gray-400'
              }`}>
                {line.type === 'input' ? <span className="text-primary mr-2">$</span> : null}
                {line.content}
              </div>
            ))}
            <div className="flex items-center text-gray-300">
              <span className="text-primary mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none flex-1 focus:ring-0 p-0"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
