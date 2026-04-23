import { Link } from "react-router-dom";
import { projects, type Highlight } from "./projects/Highlights";

export function ProjectsPreview() {
  return (
    <section
      id="projetos"
      className="flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20"
    >
      <p className="sec-label">Projetos</p>
      <h2 className="text-text-default">O que já construí</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Highlight) => (
          <div
            key={project.slug}
            className={`flex flex-col items-start justify-between bg-gray-800 border-2 border-gray-600 p-6 hover:border-l-indigo-400 text-white rounded-md gap-4 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between w-full">
                <span className="text-text-secondary text-xs uppercase tracking-widest">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="bg-green-500 rounded-full w-4 h-4"></span>
                  <span className="text-text-default font-light leading-relaxed">
                    {project.status}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="text-text-default">{project.description}</p>
            </div>

            <ul className="flex flex-wrap gap-2">
              {project.techs.map((tech: string) => (
                <li
                  key={`${project.name}-${tech}`}
                  className="bg-gray-600/40 border border-gray-500 text-text-default text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Ver projeto →
            </a>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/projetos"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "auto" })}
          className="bg-gray-800 border-2 border-indigo-400 p-4 md:p-5 rounded-md text-center text-xl md:text-2xl lg:text-3xl font-bold font-syne text-text-default max-w-xl leading-tight cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          Ver Todos
        </Link>
      </div>
    </section>
  );
}
