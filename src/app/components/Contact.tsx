'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaRocket } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'fclaudio051@email.com',
    link: 'mailto:claudio@email.com',
    color: 'text-blue-500'
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/claudio-faustino',
    link: 'https://www.linkedin.com/in/claudio-faustino',
    color: 'text-blue-600'
  },
  {
    icon: <FaGithub />,
    title: 'GitHub',
    value: 'github.com/fclaudio051',
    link: 'https://github.com/fclaudio051',
    color: 'text-gray-500'
  }
];

const availability = [
  'Disponível para oportunidades remotas',
  'Aceito projetos freelance',
  'Interessado em posições full-time'
];

export function Contact() {
  return (
    <section id="contact" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="projects-title" className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Vamos
            </span> <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversar
            </span>
            <br />
            
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Estou aberto a novas oportunidades e parcerias interessantes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Informações de Contato
            </h3>

            {/* Cards de contato */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-zinc-800 border border-zinc-700 rounded-lg
                           hover:border-blue-500 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`text-2xl ${info.color} group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {info.title}
                    </h4>
                    <p className="text-zinc-300 text-sm">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Disponibilidade */}
            <motion.div
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-6 flex items-center justify-center gap-2">
                <FaRocket className="text-blue-500" />
                Disponibilidade
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {availability.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-center gap-2 text-sm text-zinc-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}