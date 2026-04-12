import { SKILLS, type Skill } from "./types";

export function Habilidades() {
  return (
    <section
      id="skills"
      className="flex flex-col justify-start gap-4 px-6 py-12 md:px-16 md:py-20"
    >
      <p className="sec-label">Habilidades</p>
      <h2 className="text-text-default">Tecnologias que uso</h2>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill: Skill) => (
          <span
            key={skill.name}
            className={`span-skills ${
              skill.highlight
                ? "text-text-secondary border-indigo-400 bg-indigo-400/10"
                : "text-text-default border-gray-600 bg-gray-800 hover:text-indigo-400 hover:border-indigo-400"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}
