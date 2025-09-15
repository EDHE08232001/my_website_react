import React from "react";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => (
    <section id="contact" className="py-20 px-6 bg-white/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-6">Contact</h2>
            <p className="text-lg text-gray-700 mb-8">Interested in working together? Drop me a message and let's connect.</p>
            <Button className="px-8 py-4 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
                Get in Touch
            </Button>
        </div>
    </section>
);

export default Contact;