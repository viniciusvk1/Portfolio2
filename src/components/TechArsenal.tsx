import React from 'react';
import { 
  Layout, 
  Server, 
  LineChart, 
  Cog, 
  Blocks,
  Code2,
  Database,
  Braces
} from 'lucide-react';
import { motion } from 'framer-motion';

const TechArsenal = () => {
  const specialties = [
    {
      icon: <Layout className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Arquitetura de Frontend",
      description: "Construindo interfaces de usuário escaláveis e performáticas com frameworks e ferramentas modernas."
    },
    {
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Sistemas de Backend",
      description: "Projetando arquiteturas de servidor robustas e APIs com foco em escalabilidade."
    },
    {
      icon: <LineChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Análise de Dados",
      description: "Transformando dados brutos em insights valiosos por meio de técnicas de estatística e visualização de dados."
    },
    {
      icon: <Cog className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Automação RPA",
      description: "Automatizando processos repetitivos para maior eficiência operacional."
    }
  ];

  const technologies = [
    {
      icon: <Code2 />,
      name: "Java",
      type: "Backend"
    },
    {
      icon: <Blocks />,
      name: "Spring",
      type: "Framework"
    },
    {
      icon: <Braces />,
      name: "TypeScript",
      type: "Language"
    },
    {
      icon: <Layout />,
      name: "React",
      type: "Frontend"
    },
    {
      icon: <Database />,
      name: "SQL",
      type: "Database"
    },
    {
      icon: <Code2 />,
      name: "Python",
      type: "Language"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <h2 className="text-xl sm:text-2xl font-mono text-green-500 mb-4 sm:mb-6">[ ARSENAL TECNOLÓGICO ]</h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="terminal-button border border-green-500 p-4 sm:p-6 hover:bg-green-500/5 transition-all"
            >
              <div className="text-green-500 mb-3 sm:mb-4">
                {specialty.icon}
              </div>
              <h3 className="font-mono text-green-500 text-base sm:text-lg mb-2">{specialty.title}</h3>
              <p className="text-green-500/70 text-xs sm:text-sm">{specialty.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-mono text-green-500 mb-4 sm:mb-6">[ STACK PRINCIPAL ]</h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="terminal-button border border-green-500 p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:bg-green-500/5 transition-all"
              >
                <div className="text-green-500 mb-2">
                  {tech.icon}
                </div>
                <p className="font-mono text-green-500 text-xs sm:text-sm">{tech.name}</p>
                <p className="text-green-500/50 text-[10px] sm:text-xs mt-1">{tech.type}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 sm:mt-8 p-3 sm:p-4 border border-green-500/30 rounded">
          <p className="text-green-500/70 text-xs sm:text-sm font-mono">
            <span className="text-cyan-300">$</span> Sempre em busca de novas tecnologias e aprendizados
            <span className="cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechArsenal;