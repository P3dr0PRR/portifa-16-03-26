import { ProjectsPageContent } from "../../components/projectCard/projects/projectPage";
import { projects } from "../../components/projectCard/projectsectionTypes";
import { Link, useParams } from "react-router-dom";

export function ProjectsPage() {
  return <ProjectsPageContent />;
}

export function ProjectDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-black text-white px-6 py-20 md:px-16">
        <h1 className="text-4xl font-bold font-['Syne']">
          Projeto nao encontrado
        </h1>
        <p className="text-gray-300 mt-3">
          Esse link nao corresponde a nenhum projeto cadastrado.
        </p>
        <Link
          to="/projetos"
          className="inline-block mt-6 text-indigo-400 hover:scale-105 transition-transform duration-300"
        >
          Voltar para projetos →
        </Link>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 md:px-16">
      <p className="text-indigo-400 text-xs uppercase tracking-widest">
        {project.type}
      </p>
      <h1 className="text-4xl md:text-5xl font-bold font-['Syne'] mt-2">
        {project.name}
      </h1>
      <p className="text-gray-300 mt-4 max-w-3xl leading-relaxed">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 mt-6">
        {project.techs.map((tech) => (
          <li
            key={`${project.slug}-${tech}`}
            className="bg-gray-600/40 border border-gray-500 text-white text-xs px-2 py-1 rounded-md"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={() => window.open(project.link, "_blank")}
          className="text-indigo-400 text-left text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Ver projeto online →
        </button>
        <Link
          to="/projetos"
          className="text-indigo-400 text-sm hover:scale-105 transition-transform duration-300"
        >
          Voltar para todos os projetos →
        </Link>
      </div>
    </section>
  );
}
