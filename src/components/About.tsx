import React from "react";

const About: React.FC = () => (
    <section id="about" className="py-20 px-6 bg-white/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-6">About Me</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                I am an Engineering Student at the University of Ottawa with a love for building modern, scalable applications and exploring cutting-edge technologies.
            </p>
        </div>
    </section>
);

export default About;