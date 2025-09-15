import React from "react";

const Footer: React.FC = () => (
    <footer className="py-6 text-center text-gray-500 bg-gradient-to-t from-purple-100 via-white to-blue-100">
        © {new Date().getFullYear()} Edward He. All rights reserved.
    </footer>
);

export default Footer;