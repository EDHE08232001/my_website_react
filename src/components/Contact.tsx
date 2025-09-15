import React from "react";
import { Button } from "@/components/ui/button";

// Simple modal component
const ContactModal: React.FC<{
    open: boolean;
    onClose: () => void;
}> = ({ open, onClose }) => {
    if (!open) return null; // nothing rendered if closed

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={onClose} // click backdrop to close
        >
            {/* stopPropagation so clicking inside doesn't close */}
            <div
                className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold text-purple-700 mb-4">Contact Me</h3>
                <p className="text-gray-700 mb-2">
                    <strong>Phone:</strong> (+1) 647-615-0823
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Email:</strong>{" "}
                    <a
                        href="mailto:ehe058@uottawa.ca"
                        className="text-purple-600 underline"
                    >
                        ehe058@uottawa.ca
                    </a>
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>LinkedIn:</strong>{" "}
                    <a
                        href="https://www.linkedin.com/in/edward-he-045306232/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 underline"
                    >
                        linkedin.com/in/edward-he-045306232
                    </a>
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>GitHub:</strong>{" "}
                    <a
                        href="https://github.com/EDHE08232001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 underline"
                    >
                        github.com/EDHE08232001
                    </a>
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <Button
                        variant="outline"
                        className="rounded-xl"
                        onClick={onClose}
                    >
                        Close
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Contact: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <section
            id="contact"
            className="py-20 px-6 bg-white/60 backdrop-blur-md"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-purple-700 mb-6">Contact</h2>
                <p className="text-lg text-gray-700 mb-8">
                    Interested in working together? Drop me a message and let's connect.
                </p>
                <Button
                    className="px-8 py-4 bg-purple-600 text-white rounded-2xl shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
                    onClick={() => setIsOpen(true)}
                >
                    Get in Touch
                </Button>

                {/* Modal appears when isOpen = true */}
                <ContactModal open={isOpen} onClose={() => setIsOpen(false)} />
            </div>
        </section>
    );
};

export default Contact;