import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Nanjing Vanju Technology – Nanjing, China",
    period: "Jul 2025 – Present",
    description: [
      "Enhanced both front-end and back-end features of company applications.",
      "Built a waveform chart visualization with Vue.js for time-based data.",
      "Implemented backend routes with Java Spring Boot to support front-end interactions.",
      "Designed responsive UI components and aligned front-end/back-end requirements."
    ]
  },
  {
    role: "AI Trainer",
    company: "Outlier AI – Remote",
    period: "Jan 2024 – Aug 2024",
    description: [
      "Refined AI models to improve response accuracy and contextual understanding.",
      "Created solutions to enhance problem-solving and writing proficiency.",
      "Performed analyses to identify areas for further model improvement."
    ]
  },
  {
    role: "Junior Software Developer – Laptop Application",
    company: "Nanjing Unitech Electric Power Company – Remote",
    period: "Jul 2023 – Sep 2023",
    description: [
      "Developed the “UnifiedMonitor” app to fetch real-time solar panel data from manufacturers’ websites.",
      "Used Selenium, Guava, and Jsoup for web automation and HTML parsing.",
      "Created a dynamic SVG interface and designed an O(n²) data-fetching algorithm."
    ]
  },
  {
    role: "Junior Software Developer – VBA Automation Script",
    company: "Asiacom-Americas – Dulles, Virginia, U.S.A.",
    period: "Jun 2022 – Aug 2022",
    description: [
      "Built an automation script consolidating weekly employee reports into a bi-weekly summary.",
      "Optimized performance to O(n) and reduced HR workload.",
      "Adopted a modular approach for improved readability and maintenance."
    ]
  }
];

const WorkExperience: React.FC = () => (
  <section className="min-h-screen px-6 py-20 bg-gray-50">
    <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
      Work Experience
    </h2>
    <div className="grid gap-8 max-w-4xl mx-auto">
      {experiences.map((exp, idx) => (
        <Card
          key={idx}
          className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">
              {exp.role}
            </h3>
            <p className="text-lg text-purple-600 mb-2">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default WorkExperience;
