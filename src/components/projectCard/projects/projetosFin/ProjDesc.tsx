import { projects, type Project } from "../../projectsectionTypes";
import { Link } from "react-router-dom";

export function Projs() {
  return (
    <section className="flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20">
      <p className="text-gray-300">{projects.length} projetos</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Project) => (
          <div
            key={project.name}
            className={`flex flex-col items-start justify-between bg-gray-800 border-2 border-gray-600 p-6 hover:border-l-indigo-400 text-white rounded-md gap-4 ${
              project.featured ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex flex-col gap-2 w-full">
              <span className="text-indigo-400 text-xs uppercase tracking-widest">
                {project.type}
              </span>
              <h3 className="text-2xl font-bold font-['Syne']">
                {project.name}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-2">
              {project.techs.map((tech: string) => (
                <li
                  key={`${project.name}-${tech}`}
                  className="bg-gray-600/40 border border-gray-500 text-white text-xs px-2 py-1 rounded-md"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className=" w-full flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                onClick={() => window.open(project.link, "_blank")}
                className="text-indigo-400 text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Ver projeto →
              </button>
              <Link
                to={"/projetos/" + project.slug}
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" })
                }
                className="text-indigo-400 text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                Ver descricao do projeto →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
