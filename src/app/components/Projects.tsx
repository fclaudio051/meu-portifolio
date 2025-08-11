'use client';

import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaUsers, 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaRocket, 
  FaChartLine 
} from 'react-icons/fa';

interface ProjectLinks {
  github: string;
  deploy: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  links: ProjectLinks;
  icon: React.ReactNode;
  gradient: string;
  category: string;
}

const PROJECTS: Project[] = [
  {
    id: 'financial-system',
    title: 'Sistema de Gestão Financeira',
    description: 'Aplicação full-stack para controle financeiro pessoal e empresarial com dashboard interativo e analytics avançados.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    features: [
      'Dashboard com métricas em tempo real',
      'Controle avançado de receitas e despesas',
      'Interface totalmente responsiva'
    ],
    links: {
      github: 'https://github.com/fclaudio051/meu-controle-financeiro.git',
      deploy: 'https://meu-controle-financeiro-frontend.onrender.com/'
    },
    icon: <FaDatabase className="w-6 h-6 text-emerald-400" />,
    gradient: 'from-emerald-500/20 via-blue-500/20 to-cyan-500/20',
    category: 'Full-Stack'
  },
  {
    id: 'imc-calculator',
    title: 'Calculadora de IMC Avançada',
    description: 'Interface moderna para cálculo de IMC com feedback visual inteligente e recomendações personalizadas de saúde.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Cálculo instantâneo com validação',
      'Feedback visual com animações',
      'Design system responsivo'
    ],
    links: {
      github: 'https://github.com/fclaudio051/React-calc-imc.git',
      deploy: 'https://fclaudio051.github.io/React-calc-imc/'
    },
    icon: <FaMobile className="w-6 h-6 text-blue-400" />,
    gradient: 'from-blue-500/20 via-purple-500/20 to-indigo-500/20',
    category: 'Frontend'
  },
  {
    id: 'secret-code-game',
    title: 'Jogo Código Secreto',
    description: 'Jogo multiplayer online estratégico onde jogadores competem para descobrir códigos secretos de 4 dígitos.',
    technologies: ['HTML5', 'CSS3', 'JavaScript ES6+'],
    features: [
      'Sistema multiplayer em tempo real',
      'Animações fluidas e interativas',
      'Interface adaptativa para mobile'
    ],
    links: {
      github: 'https://github.com/fclaudio051/game-secret-code.git',
      deploy: 'https://fclaudio051.github.io/game-secret-code/'
    },
    icon: <FaCode className="w-6 h-6 text-purple-400" />,
    gradient: 'from-purple-500/20 via-pink-500/20 to-rose-500/20',
    category: 'Frontend'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.article
      variants={itemVariants}
      className="group relative h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative h-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-zinc-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 flex flex-col">
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-blue-600/0 rounded-3xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
        
        <div className="relative p-8 flex flex-col h-full">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <span className="bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide">
              {project.category}
            </span>
            <div className="p-3 bg-zinc-800/80 backdrop-blur-sm rounded-xl group-hover:scale-110 group-hover:bg-zinc-700/80 transition-all duration-300">
              {project.icon}
            </div>
          </header>

          {/* Content */}
          <div className="space-y-6 flex-grow">
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-3">
                {project.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xs font-semibold text-emerald-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                <FaChartLine className="w-3 h-3" />
                Funcionalidades
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <FaRocket className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                🛠️ Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 text-zinc-300 text-xs px-3 py-1.5 rounded-lg group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons - sempre no bottom */}
          <div className="flex gap-3 mt-8">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn flex items-center justify-center gap-2 bg-zinc-800/80 backdrop-blur-sm hover:bg-zinc-700/80 border border-zinc-700/50 hover:border-zinc-600/50 text-zinc-300 hover:text-white py-3 px-4 rounded-xl transition-all duration-300 text-sm font-medium hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
            >
              <FaGithub className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Código
            </a>
            <a
              href={project.links.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-4 rounded-xl transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
              aria-label={`Ver demonstração do projeto ${project.title}`}
            >
              <FaExternalLinkAlt className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Deploy
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export function Projects() {
  return (
    <section 
      id="projects" 
      className="relative bg-zinc-950 text-white py-24 px-6 overflow-hidden"
      aria-labelledby="projects-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-zinc-950 to-zinc-950" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <h2 id="projects-title" className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Projetos em
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Soluções inovadoras que demonstram expertise técnica e capacidade de desenvolvimento full-stack
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mx-auto mt-8 rounded-full" />
        </motion.header>

        {/* Projects grid */}
        <motion.div
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
            />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.footer
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400 mb-8 text-lg">
            Interessado em ver mais projetos ou discutir uma oportunidade?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 border border-blue-500/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Entrar em contato para discutir projetos"
          >
            <FaUsers className="w-5 h-5" />
            Vamos Conversar
          </motion.a>
        </motion.footer>
      </div>
    </section>
  );
}