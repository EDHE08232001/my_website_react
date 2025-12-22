import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
            <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi, I'm Edward He
            </motion.h1>
            <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                A passionate Computer Science student and future innovator. Let's build something amazing together.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
                    onClick={() => navigate('/work')}
                >
                    View My Work
                </Button>

                <Button
                    className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
                    onClick={() => navigate('/certifications')}
                >
                    View My Certifications
                </Button>
            </div>

        </section>
    );
};

export default Hero;