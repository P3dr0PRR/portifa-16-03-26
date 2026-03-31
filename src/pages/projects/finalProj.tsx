import { ProjectsPageContent } from "../../components/projectCard/projects/projectPage";
import { projects } from "../../components/projectCard/projectsectionTypes";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { HeaderFinalProj } from "./headerFinalProj";

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
    <section>
      <HeaderFinalProj />
      <div className="min-h-screen bg-black text-white px-6 py-20 md:px-16 space-y-8">
        <div className="flex items-center gap-2 bg-indigo-500/40 border border-indigo-400 rounded-md p-2 w-max">
          <p className="text-indigo-400">Destaque</p>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-['Syne'] mt-2">
          {project.name}
        </h1>
        <p className="text-gray-300 max-w-lg font-['DM Sans'] font-light leading-relaxed">
          {project.description}
        </p>
        <div className="border border-gray-300 rounded-md h-full min-h-[600px]">
          {project.img && (
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          )}
          <div className="hidden md:block py-4 px-8">
            <div className="flex items-center gap-2 bg-emerald-500/40 border border-emerald-400 rounded-md p-2 w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              <span className="text-sm text-emerald-400">Online</span>
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex items-center gap-2 bg-emerald-500/40 border border-emerald-400 rounded-md p-2 w-max">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="text-sm text-emerald-400">Online</span>
          </div>
        </div>

        <div>
          <h2 className="text-indigo-400 font-bold font-['Syne']">
            Sobre o Projeto
          </h2>
          <p className="text-gray-300  font-['DM Sans'] font-light leading-relaxed">
            {project.about}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
          <div className="border border-gray-300 rounded-md p-4 w-full flex-1">
            <h2 className="text-indigo-400 font-bold font-['Syne']">
              Stack técnica
            </h2>
            <p className="text-gray-300 font-['DM Sans'] font-light leading-relaxed ">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="inline-block bg-indigo-500/40 border border-indigo-400 rounded-md p-2 m-2"
                >
                  {tech}
                </span>
              ))}
            </p>
          </div>

          <div className="border border-gray-300 rounded-md p-4 w-full flex-1 flex flex-col justify-between">
            <div className="flex justify-between">
              <h2 className="text-indigo-400 font-bold font-['Syne']">Links</h2>
              <ArrowUpRight className="hidden md:block text-indigo-400 w-8 h-8 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="flex flex-col gap-3 mt-3 md:mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-indigo-400 font-['DM Sans'] font-light leading-relaxed hover:text-indigo-300 transition-colors"
              >
                <span className="font-semibold">Deploy</span>
                <span className="text-gray-300 break-all md:text-right">
                  {project.link}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
          <div className="border border-gray-300 rounded-md p-4 w-full flex-1">
            <h2 className="text-indigo-400 font-bold font-['Syne']">
              O que aprendi
            </h2>
            <p className="text-gray-300 font-['DM Sans'] font-light leading-relaxed ">
              {project.aprendizado.map((tech) => (
                <span
                  key={tech}
                  className="inline-block text-gray-300 font-['DM Sans'] font-light leading-relaxed "
                >
                  - {tech}
                </span>
              ))}
            </p>
          </div>

          <div className="border border-gray-300 rounded-md p-4 w-full flex-1 flex flex-col justify-between">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-green-500 rounded-full w-4 h-4"></span>
                <span className="text-gray-300 font-['DM Sans'] font-light leading-relaxed">
                  {project.status}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-orange-500 rounded-full w-4 h-4"></span>
                <span className="text-gray-300 font-['DM Sans'] font-light leading-relaxed">
                  {project.tipo}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="bg-indigo-400 rounded-full w-4 h-4"></span>
                <span className="text-gray-300 font-['DM Sans'] font-light leading-relaxed">
                  {project.ano}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
