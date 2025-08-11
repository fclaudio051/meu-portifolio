'use client';

import { motion } from 'framer-motion';
import {FaCode, FaUsers, FaLightbulb, FaCheckCircle, FaArrowRight, FaRocket } from 'react-icons/fa';

const strengths = [
  {
    icon: <FaCode />,
    title: 'Código Limpo e Manutenível',
    description: 'Escrevo código legível e documentado, focado em boas práticas para projetos escaláveis e duradouros.'
  },
  {
    icon: <FaUsers />,
    title: 'Experiência do Usuário (UX/UI)',
    description: 'Crio interfaces intuitivas, responsivas e acessíveis, garantindo uma ótima experiência em qualquer dispositivo.'
  },
  {
    icon: <FaLightbulb />,
    title: 'Resolução Proativa de Problemas',
    description: 'Identifico e resolvo desafios técnicos complexos, transformando obstáculos em oportunidades de inovação.'
  },
  {
    icon: <FaRocket />,
    title: 'Entrega Eficiente e Otimizada',
    description: 'Otimizo processos para entregar soluções de alta qualidade de forma ágil, com foco em valor e robustez.'
  }
];

const achievements = [
  'Liderança no desenvolvimento de aplicações web modernas utilizando React e Next.js, otimizando o desempenho e a experiência do usuário.',
  'Especialização na implementação de interfaces de usuário responsivas e adaptáveis, garantindo compatibilidade e usabilidade em diversos dispositivos e tamanhos de tela.',
  'Aplicação de TypeScript em projetos complexos para aprimorar a segurança do código, facilitar a manutenção e escalar o desenvolvimento de aplicações robustas.',
  'Proficiência na utilização de Tailwind CSS para o desenvolvimento ágil e eficiente de estilos, resultando em designs consistentes e visualmente atraentes.'
];

export function About() {
  return (
    <section id="about" className="bg-zinc-900 text-white py-24 px-6">
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
              Sobre
            </span> <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mim
            </span>
            <br />
            
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Desenvolvedor Front-End focado em criar soluções que fazem a diferença
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Coluna esquerda - Apresentação */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Transformando Ideias em Realidade Digital
            </h3>
            
            <div className="space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Com experiência em desenvolvimento web, especializo-me em criar aplicações React e Next.js que 
                <span className="text-green-400 font-semibold"> geram resultados reais</span>.
              </p>
              
              <p>
                Minha abordagem combina <span className="text-purple-400 font-semibold">excelência técnica</span> com 
                <span className="text-purple-400 font-semibold"> visão de negócio</span>, garantindo que cada linha de código 
                contribua para o sucesso do projeto.
              </p>
            </div>

            {/* Conquistas */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Experiência
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-sm text-zinc-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaArrowRight className="text-blue-500 mt-1 flex-shrink-0" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Coluna direita - Diferenciais */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Diferenciais */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Diferenciais
              </h3>
              <div className="grid gap-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 
                             hover:border-blue-500 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-blue-500 mt-1">
                        {strength.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {strength.title}
                        </h4>
                        <p className="text-sm text-zinc-300">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <motion.div
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold text-white mb-3">
                🚀 Pronto para o Próximo Desafio
              </h4>
              <p className="text-sm text-zinc-300 mb-4">
                Busco oportunidades onde possa aplicar minhas habilidades e contribuir para projetos inovadores.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg 
                         text-sm font-medium transition-all duration-300 transform hover:scale-105"
              >
                Vamos Conversar
                <FaArrowRight className="text-xs" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}