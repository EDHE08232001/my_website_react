import React from "react";

const About: React.FC = () => (
    <section id="about" className="py-20 px-6 bg-white/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                I am Edward He, a Computer Science graduate and incoming Master of Applied Science
                candidate in Electrical &amp; Computer Engineering (Applied Artificial Intelligence) at the
                University of Ottawa. My academic and professional journey spans software development,
                real-time AI computing, and GPU-accelerated graphics—most notably research in CUDA Graphs
                for high-performance image and video processing.
                <br /><br />
                Beyond research, I’ve built full-stack applications and automation solutions across
                industries—from HR reporting tools and database-driven hotel systems to interactive React
                and Android apps. I thrive on turning complex ideas into elegant, efficient software and
                enjoy collaborating with cross-functional teams to create technology that is both practical
                and forward-thinking.
            </p>
        </div>
    </section>
);

export default About;