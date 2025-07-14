'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <header
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-24 
                 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-white"
      role="banner"
    >
      {/* Texto de apresentação */}
      <motion.div
        className="flex-1 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        aria-label="Apresentação do desenvolvedor"
      >
        <p className="text-lg text-blue-400 mb-2">Olá, me chamo</p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Cláudio Faustino
        </h1>

        <h2 className="text-xl md:text-2xl text-zinc-400 mt-3">
          Desenvolvedor Front-End React / Next.js
        </h2>

        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium 
                       transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Ver Projetos
          </a>

          <a
            href="#contact"
            className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 
                       rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Contato
          </a>
        </div>
      </motion.div>

      {/* Foto em destaque */}
      <motion.div
        className="flex-1 flex justify-center mb-12 md:mb-0"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        aria-label="Foto do Cláudio Faustino"
      >
        <div className="w-[320px] md:w-[400px] h-auto shadow-2xl border-4 border-blue-500 rounded-xl overflow-hidden">
          <Image
            src="/photo.png"
            alt="Foto de Cláudio Faustino sorrindo"
            width={400}
            height={500}
            priority
            className="w-full h-auto object-cover"
            quality={90}
          />
        </div>
      </motion.div>
    </header>
  );
}
