'use client';

import { motion } from 'framer-motion';

const links = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Contato', href: '#contact' },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo ou Nome */}
        <a href="#hero" className="text-xl font-bold text-white tracking-tight">
          Cláudio.dev
        </a>

        {/* Navegação */}
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Menu mobile (opcional para depois) */}
        {/* <div className="md:hidden">
          [icone ou botão de menu]
        </div> */}
      </div>
    </motion.header>
  );
}
