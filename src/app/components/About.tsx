'use client';

import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaCheckCircle } from 'react-icons/fa';

export function About() {
  return (
    <section id="about" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-6">
            Sobre Mim
          </h2>

          <p className="text-lg text-zinc-300 leading-relaxed mb-6">
            Sou <strong>Cláudio Faustino</strong>, desenvolvedor Front-End
            apaixonado por transformar ideias em interfaces modernas e funcionais.
          </p>

          <p className="text-zinc-400 text-base">
            Especialista em <strong>React</strong>, <strong>Next.js</strong> e
            <strong> Tailwind CSS</strong>, aplico boas práticas de UX/UI para criar experiências fluidas,
            responsivas e acessíveis. Busco constantemente evoluir tecnicamente e entregar resultados reais.
          </p>
        </motion.div>

        {/* Cards de destaque */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Card 1 */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow hover:shadow-lg transition-all flex gap-4 items-center">
            <FaCode className="text-4xl text-blue-500" />
            <div>
              <h3 className="text-3xl font-bold text-white">4+</h3>
              <p className="text-sm text-zinc-400">Projetos Completos</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow hover:shadow-lg transition-all flex gap-4 items-center">
            <FaCheckCircle className="text-4xl text-green-500" />
            <div>
              <h3 className="text-3xl font-bold text-white">95%</h3>
              <p className="text-sm text-zinc-400">Feedbacks positivos</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow hover:shadow-lg transition-all flex gap-4 items-center">
            <FaUsers className="text-4xl text-yellow-500" />
            <div>
              <h3 className="text-3xl font-bold text-white">10+</h3>
              <p className="text-sm text-zinc-400">Pessoas ajudadas</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow hover:shadow-lg transition-all flex gap-4 items-center">
            <FaCode className="text-4xl text-purple-500" />
            <div>
              <h3 className="text-base font-semibold text-white">
                React • Next.js • Tailwind
              </h3>
              <p className="text-sm text-zinc-400">Tecnologias principais</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
