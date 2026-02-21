import { projects } from "../data/projectsData";
import { RiArrowRightLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="py-24 px-6 bg-slate-950">
      <section id="projects" className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="h-full flex flex-col justify-between p-6 cursor-pointer transition group rounded-3xl shadow-xl border border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-start">
                <RiArrowRightLine
                  size={22}
                  className="text-gray-400 group-hover:text-primary transition"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
