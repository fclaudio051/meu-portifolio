'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Projetos em Destaque</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div>
                <h3 className="text-2xl font-semibold text-blue-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ícones com rótulos abaixo */}
              <div className="flex justify-center gap-8 mt-4 text-center">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-gray-400 hover:text-gray-200 transition"
                >
                  <FaGithub className="text-2xl" />
                  <span className="text-xs mt-1">Código</span>
                </a>
                <a
                  href={project.links.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-blue-600 hover:text-blue-400 transition"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                  <span className="text-xs mt-1">Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
