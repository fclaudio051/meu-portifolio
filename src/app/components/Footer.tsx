'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaCode, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/fclaudio051',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/claudio-faustino',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <FaEnvelope />,
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=fclaudio051@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-zinc-900 to-zinc-800 text-white py-12 px-6 border-t border-zinc-800/50">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cláudio.dev
            </h3>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center
                           text-zinc-400 ${link.color} transition-all duration-300 hover:shadow-lg hover:border-zinc-600`}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-2"
          >
            <p className="text-zinc-400 flex items-center justify-center gap-2">
              Feito com <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                <FaHeart />
              </motion.span> e <FaCode className="text-blue-400" /> por Cláudio Faustino
            </p>
            
            <p className="text-sm text-zinc-500">
              Transformando ideias em realidade digital
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto"
          ></motion.div>

          {/* Copyright and additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
              <p className="text-zinc-500">
                © {currentYear} Cláudio Faustino. Todos os direitos reservados.
              </p>
              
              <div className="flex items-center gap-4 text-zinc-500">
                <span>Juazeiro do Norte, CE</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs">Disponível</span>
                </div>
              </div>
            </div>

            {/* Tech stack used */}
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed"
            >
              Portfólio desenvolvido com Next.js, TypeScript, Tailwind CSS e Framer Motion
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: 'rgba(59, 130, 246, 0.2)'
          }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-4 right-4 w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-xl
                     flex items-center justify-center text-zinc-400 hover:text-white
                     transition-all duration-300 hover:shadow-lg"
          aria-label="Voltar ao topo"
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↑
          </motion.div>
        </motion.button>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-4 left-10 w-2 h-2 bg-blue-400/30 rounded-full"
      ></motion.div>
      
      <motion.div
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-8 right-20 w-1 h-1 bg-purple-400/40 rounded-full"
      ></motion.div>
    </footer>
  );
}