import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projectList = [
    {
        title: "CUDA Glow Effect",
        description:
            "High-performance image and video processing app featuring dynamic glow effects. Utilized CUDA Graphs to optimize segmentation inference and designed a parallel mipmap pipeline with triple buffering for real-time performance.",
        repoLink: "https://github.com/EDHE08232001/GlowEffect"
    },
    {
        title: "Course Booking App",
        description:
            "Android application for scheduling and account management with a dynamic UI. Employed JUnit for testing to ensure reliability and maintainability.",
        repoLink: "https://github.com/EDHE08232001/student-course-booking-app"
    },
    {
        title: "Hotel Database Management System",
        description:
            "Hotel management system with a PostgreSQL backend, automated tasks using triggers, and responsive front-end utilities for real-time operations.",
        repoLink: "https://github.com/EDHE08232001/CSI2132_Project"
    },
    {
        title: "Stopwatch App",
        description:
            "React-based stopwatch featuring modern state management with hooks. Built test suites with React Testing Library and Jest for robust reliability.",
        repoLink: "https://github.com/EDHE08232001/InternAssessmentSolution"
    }
];

const Projects: React.FC = () => (
    <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-12">
                Worth Noting Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((p, idx) => (
                    <ProjectCard
                        key={idx}
                        title={p.title}
                        description={p.description}
                        repoLink={p.repoLink}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;