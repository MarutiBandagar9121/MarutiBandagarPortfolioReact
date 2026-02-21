import { useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import Navbar from "../components/Navbar";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <>
    <Navbar/>
    <section className="py-24 px-6 max-w-4xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="w-full max-h-96 object-top rounded-xl mb-8"
      />

      <p className="text-gray-400 mb-6">{project.fullDescription}</p>

      <ul className="list-disc list-inside text-gray-400 space-y-2 mb-8">
        {project.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.techStack.map((tech) => (
          <span
            key={tech.name}
            className={`${tech.color} px-4 py-2 rounded-full text-sm font-medium`}
          >
            {tech.name}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary px-6 py-3 rounded-xl"
      >
        View on GitHub
      </a>
    </section>
    </>
  );
}