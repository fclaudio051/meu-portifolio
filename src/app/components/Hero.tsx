'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaRocket, FaCode } from 'react-icons/fa';

export function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particles = [
    { left: '10%', top: '20%' },
    { left: '85%', top: '15%' },
    { left: '75%', top: '70%' },
    { left: '20%', top: '80%' },
    { left: '60%', top: '25%' },
    { left: '15%', top: '60%' },
  ];

  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-24 
                 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 text-white overflow-hidden"
      role="banner"
    >
      {/* Partículas de fundo */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Texto de apresentação */}
      <motion.div
        className="flex-1 text-center md:text-left z-10 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FaRocket className="text-sm" />
          Disponível para Oportunidades
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Cláudio Faustino
        </motion.h1>

        <motion.h2 
          className="text-xl md:text-2xl text-blue-400 mt-3 mb-4 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Desenvolvedor Front-End React & Next.js
        </motion.h2>

        <motion.p 
          className="text-zinc-300 text-base md:text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Especialista em React, Next.js e TypeScript. Foco em criar aplicações web modernas, 
          performáticas e que geram resultados reais.
        </motion.p>

        {/* Botões de ação principais */}
        <motion.div 
          className="flex flex-wrap justify-center md:justify-start gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                       text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 
                       shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 flex items-center gap-2"
          >
            <FaWhatsapp />
            Falar Agora
          </a>

          <a
            href="#projects"
            className="bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white 
                       px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2
                       hover:shadow-lg transform hover:scale-105"
          >
            <FaCode />
            Ver Projetos
          </a>
        </motion.div>

        {/* Links sociais */}
        <motion.div 
          className="flex justify-center md:justify-start gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://github.com/fclaudio051"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors text-2xl transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/claudio-faustino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-400 transition-colors text-2xl transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>

      {/* Foto em destaque */}
      <motion.div
        className="flex-1 flex justify-center mb-12 md:mb-0 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative">
          {/* Efeito de brilho */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 animate-pulse"></div>
          
          <div className="relative w-[320px] md:w-[400px] h-auto shadow-2xl border-4 border-blue-500/50 rounded-2xl overflow-hidden
                          transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/photo.png"
              alt="Cláudio Faustino - Desenvolvedor Front-End React & Next.js"
              width={400}
              height={500}
              priority
              className="w-full h-auto object-cover"
              quality={95}
            />
          </div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-zinc-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </header>
  );
}