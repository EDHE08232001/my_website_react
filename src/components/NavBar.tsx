import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Enables navigation across routes

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md shadow-md fixed w-full z-50">
                <div className="text-2xl font-bold text-purple-700">My Portfolio</div>
                <div className="hidden md:flex space-x-6 font-medium">
                    {/* Use absolute paths so links work even from the work experience page */}
                    <Link to="/#about" className="hover:text-purple-500 transition-colors">About</Link>
                    <Link to="/#projects" className="hover:text-purple-500 transition-colors">Projects</Link>
                    <Link to="/#contact" className="hover:text-purple-500 transition-colors">Contact</Link>
                    <a
                        href="/Edward_He_s_Resume.pdf"
                        download
                        className="hover:text-purple-500 transition-colors"
                    >
                        Resume
                    </a>
                </div>
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>
            {isOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-md px-6 py-4 space-y-4 fixed top-16 w-full shadow-md z-40">
                    {/* Mobile menu uses the same links for cross-page navigation */}
                    <Link to="/#about" className="block hover:text-purple-500 transition-colors">About</Link>
                    <Link to="/#projects" className="block hover:text-purple-500 transition-colors">Projects</Link>
                    <Link to="/#contact" className="block hover:text-purple-500 transition-colors">Contact</Link>
                    <a
                        href="/Edward_He_s_Resume.pdf"
                        download
                        className="block hover:text-purple-500 transition-colors"
                    >
                        Resume
                    </a>
                </div>
            )}
        </>
    );
};

export default NavBar;
