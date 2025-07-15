'use client';

import { motion } from 'framer-motion';
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
  { icon: <SiHtml5 />, label: 'HTML5', color: 'text-orange-500' },
  { icon: <SiCss3 />, label: 'CSS3', color: 'text-blue-500' },
  { icon: <SiJavascript />, label: 'JavaScript', color: 'text-yellow-400' },
  { icon: <SiTypescript />, label: 'TypeScript', color: 'text-blue-600' },
  { icon: <SiReact />, label: 'React', color: 'text-cyan-400' },
  { icon: <SiNextdotjs />, label: 'Next.js', color: 'text-black dark:text-white' },
  { icon: <SiTailwindcss />, label: 'TailwindCSS', color: 'text-teal-400' },
  { icon: <SiGit />, label: 'Git', color: 'text-red-500' },
  { icon: <SiGithub />, label: 'GitHub', color: 'text-gray-800 dark:text-gray-200' },
  { icon: <SiOpenai />, label: 'OpenAI', color: 'text-green-600 dark:text-green-400' }

];

export function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 bg-white dark:bg-zinc-900 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white mb-10">
          🧠 Tecnologias que uso
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center">
          {techs.map(({ icon, label, color }, index) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex flex-col items-center"
            >
              <div className={`text-4xl ${color}`}>{icon}</div>
              <span className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
