'use client';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 py-24 px-6 text-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
          Entre em Contato
        </h2>

        <p className="text-lg text-zinc-300 mb-10 max-w-xl mx-auto">
          Está procurando um desenvolvedor Front-End dedicado, criativo e focado em resultado? Vamos conversar!
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fclaudio051@gmail.com"
            aria-label="Enviar e-mail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/fclaudio051"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/claudio-faustino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
