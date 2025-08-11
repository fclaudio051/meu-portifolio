'use client';

import { motion, type Variants, type Transition } from 'framer-motion';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiOpenai,
} from 'react-icons/si';

const techs = [
  // ... (o array techs permanece inalterado)
  {
    icon: <SiHtml5 />,
    label: 'HTML5',
    color: 'text-orange-500',
    bgColor: 'from-orange-500/20 to-orange-600/20',
    borderColor: 'border-orange-500/30',
    description: 'Estrutura semântica'
  },
  {
    icon: <SiCss3 />,
    label: 'CSS3',
    color: 'text-blue-500',
    bgColor: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
    description: 'Estilização avançada'
  },
  {
    icon: <SiJavascript />,
    label: 'JavaScript',
    color: 'text-yellow-400',
    bgColor: 'from-yellow-400/20 to-yellow-500/20',
    borderColor: 'border-yellow-400/30',
    description: 'Lógica interativa'
  },
  {
    icon: <SiTypescript />,
    label: 'TypeScript',
    color: 'text-blue-600',
    bgColor: 'from-blue-600/20 to-blue-700/20',
    borderColor: 'border-blue-600/30',
    description: 'JavaScript tipado'
  },
  {
    icon: <SiReact />,
    label: 'React',
    color: 'text-cyan-400',
    bgColor: 'from-cyan-400/20 to-cyan-500/20',
    borderColor: 'border-cyan-400/30',
    description: 'Interface moderna'
  },
  {
    icon: <SiNextdotjs />,
    label: 'Next.js',
    color: 'text-white',
    bgColor: 'from-gray-600/20 to-gray-700/20',
    borderColor: 'border-gray-600/30',
    description: 'Framework React'
  },
  {
    icon: <SiTailwindcss />,
    label: 'TailwindCSS',
    color: 'text-teal-400',
    bgColor: 'from-teal-400/20 to-teal-500/20',
    borderColor: 'border-teal-400/30',
    description: 'Utility-first CSS'
  },
  {
    icon: <SiGit />,
    label: 'Git',
    color: 'text-red-500',
    bgColor: 'from-red-500/20 to-red-600/20',
    borderColor: 'border-red-500/30',
    description: 'Controle de versão'
  },
  {
    icon: <SiGithub />,
    label: 'GitHub',
    color: 'text-gray-300',
    bgColor: 'from-gray-500/20 to-gray-600/20',
    borderColor: 'border-gray-500/30',
    description: 'Repositórios'
  },
  {
    icon: <SiOpenai />,
    label: 'OpenAI',
    color: 'text-green-400',
    bgColor: 'from-green-400/20 to-green-500/20',
    borderColor: 'border-green-400/30',
    description: 'IA integrada'
  }
];

export function TechStack() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  // Nova abordagem: Crie uma função para retornar a transição,
  // isso força o compilador a inferir o tipo corretamente.
  const createSpringTransition = (delay?: number): Transition => {
    return {
      type: "spring",
      stiffness: 100,
      damping: 12,
      ...(delay && { delay }),
    };
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: createSpringTransition(),
    }
  };

  return (
    <section
      id="tech"
      className="relative py-24 bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-800 text-center overflow-hidden"
    >
      {/* ... (código dos efeitos de fundo) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent mb-6"
            whileInView={{ scale: [0.9, 1] }}
            transition={createSpringTransition()}
          >
            🧠 Tecnologias que Domino
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ferramentas modernas para criar experiências digitais excepcionais
          </motion.p>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center"
          variants={containerVariants}
        >
          {techs.map((tech) => (
            <motion.div
              key={tech.label}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                y: -10,
                rotateY: 10
              }}
              whileTap={{ scale: 0.95 }}
              className={`group relative bg-gradient-to-br ${tech.bgColor} backdrop-blur-sm
                          border ${tech.borderColor} rounded-2xl p-6 w-full max-w-[180px] h-[160px]
                          hover:shadow-2xl hover:shadow-${tech.color.split('-')[1]}-500/20 transition-all duration-500
                          overflow-hidden cursor-pointer`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${tech.bgColor} rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-500`}></div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 text-5xl ${tech.color} mb-4 flex justify-center`}
              >
                {tech.icon}
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {tech.label}
                </h3>
                <p className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  {tech.description}
                </p>
              </div>

              {/* Floating particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"></div>

              {/* Hover overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tech.bgColor} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}
                style={{ pointerEvents: 'none' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid sm:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={createSpringTransition(0.2)}
              className="text-4xl font-bold text-blue-400 mb-2"
            >
              3+
            </motion.div>
            <p className="text-zinc-400">Anos de experiência</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={createSpringTransition(0.4)}
              className="text-4xl font-bold text-purple-400 mb-2"
            >
              10+
            </motion.div>
            <p className="text-zinc-400">Tecnologias dominadas</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={createSpringTransition(0.6)}
              className="text-4xl font-bold text-green-400 mb-2"
            >
              100%
            </motion.div>
            <p className="text-zinc-400">Dedicação aos projetos</p>
          </motion.div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                         text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300
                         shadow-lg hover:shadow-blue-500/25"
          >
            Ver Projetos em Ação 🚀
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}