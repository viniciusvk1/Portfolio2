import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from './components/Contact';
import TechArsenal from './components/TechArsenal';
import Projects from './components/Projects';

function App() {
  const [loading, setLoading] = useState(true);
  const [decryptedText, setDecryptedText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [showName, setShowName] = useState(false);
  const [waitingForEnter, setWaitingForEnter] = useState(false);
  const [decryptionComplete, setDecryptionComplete] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  
  const originalText = "Criando experiências digitais na interseção entre design e tecnologia. Especializado em construir aplicações escaláveis com tecnologia de ponta.";
  
  const generateRandomChar = () => {
    const chars = '!@#$%¨&*()_+1234567890qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const generateEncryptedText = () => {
    if (!originalText) return '';
    return Array.from({ length: originalText.length }, () => generateRandomChar()).join('');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setWaitingForEnter(true);
      setEncryptedText(generateEncryptedText());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && waitingForEnter) {
        setWaitingForEnter(false);
        startDecryption();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [waitingForEnter]);

  useEffect(() => {
    if (showName) {
      setTimeout(() => {
        setShowMenu(true);
      }, 1000);
    }
  }, [showName]);

  const startDecryption = () => {
    let currentIndex = 0;
    const decryptInterval = setInterval(() => {
      if (currentIndex <= originalText.length) {
        setDecryptedText(originalText.slice(0, currentIndex));
        setEncryptedText(
          originalText.slice(0, currentIndex) + 
          Array.from({ length: Math.max(0, originalText.length - currentIndex) }, () => generateRandomChar()).join('')
        );
        currentIndex++;
      } else {
        clearInterval(decryptInterval);
        setDecryptionComplete(true);
        setTimeout(() => {
          setShowName(true);
        }, 1500);
      }
    }, 30);
  };

  const asciiTitle = `
████████╗███████╗ ██████╗██╗  ██╗    ██╗███╗   ██╗███╗   ██╗ ██████╗ ██╗   ██╗ █████╗ ████████╗ ██████╗ ██████╗ 
╚══██╔══╝██╔════╝██╔════╝██║  ██║    ██║████╗  ██║████╗  ██║██╔═══██╗██║   ██║██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
   ██║   █████╗  ██║     ███████║    ██║██╔██╗ ██║██╔██╗ ██║██║   ██║██║   ██║███████║   ██║   ██║   ██║██████╔╝
   ██║   ██╔══╝  ██║     ██╔══██║    ██║██║╚██╗██║██║╚██╗██║██║   ██║╚██╗ ██╔╝██╔══██║   ██║   ██║   ██║██╔══██╗
   ██║   ███████╗╚██████╗██║  ██║    ██║██║ ╚████║██║ ╚████║╚██████╔╝ ╚████╔╝ ██║  ██║   ██║   ╚██████╔╝██║  ██║
   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝    ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝ ╚═════╝   ╚═══╝  ╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
`;

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projetos' },
    { id: 'tech', label: 'Arsenal Tecnológico' },
    { id: 'contact', label: 'Contato' }
  ];

  const handleMenuClick = (id: string) => {
    if (id === 'home') {
      setCurrentSection(null);
      setDecryptionComplete(true);
      setShowName(true);
    } else {
      setCurrentSection(id);
    }
    setIsMenuOpen(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black p-4 sm:p-6 md:p-8">
        <div className="terminal max-w-lg mx-auto">
          <div className="terminal-content">
            <p className="terminal-prompt mb-4 text-sm sm:text-base">Initializing system...</p>
            <div className="flex flex-col gap-2">
              <p className="text-green-500 text-sm sm:text-base">[INFO] Loading modules...</p>
              <p className="text-green-500 text-sm sm:text-base">[INFO] Checking dependencies...</p>
              <p className="text-green-500 text-sm sm:text-base">[INFO] Starting encryption service...</p>
              <div className="h-1 bg-green-900 rounded overflow-hidden mt-2">
                <div className="loading-bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (currentSection) {
      case 'contact':
        return <Contact />;
      case 'tech':
        return <TechArsenal />;
      case 'projects':
        return <Projects />;
      default:
        return (
          <div className="terminal">
            <div className="terminal-content">
              <p className="terminal-prompt"></p>
              <p className="font-mono text-green-500 break-all text-sm sm:text-base">
                {encryptedText || decryptedText}
                <span className="cursor"></span>
              </p>
              {waitingForEnter && (
                <p className="press-enter text-xs sm:text-sm">Press Enter to continue...</p>
              )}
              {decryptionComplete && (
                <div className="mt-4 space-y-2">
                  <p className="text-green-500 text-sm sm:text-base">[SUCCESS] Decryption complete</p>
                  <p className="text-green-500 text-sm sm:text-base">[INFO] Encryption key found: 0xF9A3B7D1</p>
                  <p className="text-green-500 text-sm sm:text-base">[INFO] Cipher successfully broken</p>
                </div>
              )}
              {showName && (
                <div className="mt-4 transition-opacity duration-300">
                  <p className="terminal-prompt text-cyan-300 text-sm sm:text-base md:text-lg">
                    Vinícius Almeida ✦ Full Stack Developer
                  </p>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 left-4 z-10 w-auto sm:w-auto"
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="terminal-button flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-green-500 text-green-500 hover:bg-green-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-mono text-xs sm:text-sm">MENU</span>
            </motion.button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ 
                    duration: 0.3,
                    height: { type: "spring", stiffness: 500, damping: 30 }
                  }}
                  className="mt-2 overflow-hidden w-48 sm:w-56"
                >
                  <div className="bg-black border border-green-500 py-1 sm:py-2">
                    {menuItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                        onClick={() => handleMenuClick(item.id)}
                        className="w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-xs sm:text-sm text-green-500 hover:bg-green-500/10 transition-colors relative group flex items-center"
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute left-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          &gt;
                        </motion.span>
                        <span className="ml-4">
                          {item.label}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="flex-grow p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <pre className="ascii-art mb-4 sm:mb-6 md:mb-8 text-[0.5rem] sm:text-xs md:text-sm overflow-x-auto text-green-500 hidden sm:block">
            {asciiTitle}
          </pre>
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

export default App;