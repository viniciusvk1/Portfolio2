import React from 'react';
import { Mail, Linkedin, Github, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá Vinícius! Gostaria de discutir um projeto/oportunidade com você.");
    window.open(`https://wa.me/5511995762272?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:viniciusalmeida.vk1@gmail.com?subject=Oportunidade%20de%20Projeto&body=Olá%20Vinícius!%20Gostaria%20de%20discutir%20um%20projeto%20com%20você.';
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl font-mono text-green-500 mb-4 sm:mb-6">[ CONTATO ]</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsAppClick}
            className="terminal-button flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-green-500 text-green-500 hover:bg-green-500/10 transition-all w-full"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
            <div className="text-left">
              <p className="font-mono text-xs sm:text-sm">WhatsApp</p>
              <p className="text-[10px] sm:text-xs opacity-75">Iniciar conversa</p>
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEmailClick}
            className="terminal-button flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-green-500 text-green-500 hover:bg-green-500/10 transition-all w-full"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            <div className="text-left">
              <p className="font-mono text-xs sm:text-sm">Email</p>
              <p className="text-[10px] sm:text-xs opacity-75">Enviar mensagem</p>
            </div>
          </motion.button>

          <motion.a
            href="https://www.linkedin.com/in/viniciusalmeida1711/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="terminal-button flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-green-500 text-green-500 hover:bg-green-500/10 transition-all w-full"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            <div className="text-left">
              <p className="font-mono text-xs sm:text-sm">LinkedIn</p>
              <p className="text-[10px] sm:text-xs opacity-75">Conectar</p>
            </div>
          </motion.a>

          <motion.a
            href="https://github.com/viniciusvk1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="terminal-button flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-green-500 text-green-500 hover:bg-green-500/10 transition-all w-full"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            <div className="text-left">
              <p className="font-mono text-xs sm:text-sm">GitHub</p>
              <p className="text-[10px] sm:text-xs opacity-75">Ver projetos</p>
            </div>
          </motion.a>
        </div>

        <div className="mt-6 sm:mt-8 p-3 sm:p-4 border border-green-500/30 rounded">
          <p className="text-green-500/70 text-xs sm:text-sm font-mono">
            <span className="text-cyan-300">$</span> Disponível para projetos!
            <span className="cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;