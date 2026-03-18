import { SKILLS, type Skill } from "./types";

export function Habilidades() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20"
    >
      <p className="font-bold font-['Syne'] text-indigo-400 max-w-xl leading-tight">
        Habilidades
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Syne'] text-white max-w-xl leading-tight">
        Tecnologias que uso
      </h2>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill: Skill) => (
          <span
            key={skill.name}
            className={`px-3 py-1 rounded-md text-sm border transition-colors duration-200 ${
              skill.highlight
                ? "text-indigo-400 border-indigo-400 bg-indigo-400/10"
                : "text-gray-300 border-gray-600 bg-gray-800 hover:text-indigo-400 hover:border-indigo-400"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
