import React from "react";
import ProjectCard from "@/components/ProjectCard";

const Projects: React.FC = () => (
    <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((project) => (
                    <ProjectCard
                        key={project}
                        title={`Project ${project}`}
                        description={`A brief description of Project ${project} showcasing my skills in web development and design.`}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;