'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaUsers, FaCertificate, FaBriefcase } from 'react-icons/fa';

const timeline = [
  {
    year: '2025',
    title: 'Em Busca de Oportunidades em Desenvolvimento Front-End',
    subtitle: 'Pronto para Contribuir e Inovar',
    description: 'Ativamente buscando uma posição desafiadora onde possa aplicar e expandir meus conhecimentos em React e Next.js, contribuindo para o desenvolvimento de produtos digitais impactantes e inovadores.',
    icon: <FaBriefcase className="text-2xl text-blue-500" />,
    type: 'current'
  },
  {
    year: '2024',
    title: 'Conclusão da Graduação em Análise e Desenvolvimento de Sistemas',
    subtitle: 'Desenvolvimento de Projetos Full-Stack e Portfólio',
    description: 'Finalização da formação acadêmica, com foco na criação de aplicações web completas (full-stack) utilizando React, Next.js, Node.js e PostgreSQL. Ênfase em uma excelente experiência de usuário (UX/UI) e performance otimizada.',
    icon: <FaRocket className="text-2xl text-green-500" />,
    type: 'project'
  },
  {
    year: '2023',
    title: 'Especialização e Aprofundamento em React',
    subtitle: 'Domínio de Ecossistema Moderno de Front-End',
    description: 'Aprofundamento técnico em React, com domínio de React Hooks, Context API e TypeScript. Habilidade em construir componentes reutilizáveis e gerenciar estados complexos para aplicações escaláveis.',
    icon: <FaCode className="text-2xl text-purple-500" />,
    type: 'skill'
  },
  {
    year: '2022',
    title: 'Início da Jornada em Desenvolvimento Web e Acadêmica',
    subtitle: 'Fundamentos Sólidos e Descoberta da Paixão',
    description: 'Primeiros passos no universo do desenvolvimento web, construindo uma base robusta em HTML, CSS e JavaScript. Este período marcou o início da minha graduação e a descoberta da paixão por transformar ideias em realidade digital.',
    icon: <FaGraduationCap className="text-2xl text-yellow-500" />,
    type: 'education'
  }
];

const certifications = [
  {
    name: 'fullStack Developer',
    issuer: 'B7Web',
    year: '2025',
    icon: <FaCertificate className="text-blue-500" />
  },
  {
    name: 'Analise e Desenvolvimento de Sistemas',
    issuer: 'Estácio',
    year: '2024',
    icon: <FaCertificate className="text-black dark:text-white" />
  },
  {
    name: 'Building a website',
    issuer: 'Programming Hub',
    year: '2023',
    icon: <FaCertificate className="text-blue-600" />
  },
  {
    name: 'Desenvolvimento Web Completo - 20 cursos + 20 projetos',
    issuer: 'Udemy',
    year: '2023',
    icon: <FaCertificate className="text-yellow-500" />
  }
];

export function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-zinc-800 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-blue-400 mb-4">
            Minha Jornada
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Evolução constante e dedicação ao aprendizado contínuo
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-8 flex items-center gap-2">
              <FaRocket className="text-blue-500" />
              Timeline de Crescimento
            </h3>

            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Ícone */}
                    <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full 
                                   ${item.type === 'current' ? 'bg-blue-500' : 'bg-zinc-700 dark:bg-zinc-600'} 
                                   border-4 border-white dark:border-zinc-800`}>
                      {item.icon}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 pb-8">
                      <div className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                            {item.year}
                          </span>
                          {item.type === 'current' && (
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                              Atual
                            </span>
                          )}
                        </div>
                        <h4 className="text-xl font-semibold text-zinc-800 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                          {item.subtitle}
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certificações e Estatísticas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Certificações */}
            <div>
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-white mb-6 flex items-center gap-2">
                <FaCertificate className="text-yellow-500" />
                Certificações & Cursos
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-zinc-50 dark:bg-zinc-700 rounded-lg p-4 border border-zinc-200 dark:border-zinc-600
                             hover:border-blue-500 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      {cert.icon}
                      <div className="flex-1">
                        <h4 className="font-semibold text-zinc-800 dark:text-white">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {cert.issuer} • {cert.year}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Objetivos futuros */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 
                          rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-4 flex items-center gap-2">
                🎯 Próximos Objetivos
              </h3>
              <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Conquistar uma posição como Desenvolvedor Front-End
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Aprofundar conhecimentos em arquitetura de software
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Contribuir para projetos open source
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  Expandir para desenvolvimento full-stack
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}