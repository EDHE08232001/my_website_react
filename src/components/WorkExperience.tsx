import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
}

const experiences: Experience[] = [
    {
        role: "Software Engineer Intern",
        company: "Example Corp",
        period: "Jun 2023 - Aug 2023",
        description: "Implemented features and collaborated with cross-functional teams to deliver a responsive web application."
    }
];

const WorkExperience: React.FC = () => (
    <section className="min-h-screen px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">Work Experience</h2>
        <div className="grid gap-8 max-w-3xl mx-auto">
            {experiences.map((exp, idx) => (
                <Card key={idx} className="rounded-2xl shadow-lg">
                    <CardContent>
                        <h3 className="text-2xl font-semibold mb-2">{exp.role} @ {exp.company}</h3>
                        <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                        <p className="text-gray-700">{exp.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
);

export default WorkExperience;