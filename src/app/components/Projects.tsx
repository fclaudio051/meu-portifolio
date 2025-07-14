'use client';

import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Projetos em Destaque</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
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

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center mt-4 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-sm font-medium transition"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
