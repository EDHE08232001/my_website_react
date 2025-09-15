import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToHash listens for changes in the URL's hash and smoothly scrolls
 * to the element whose `id` matches the hash fragment.
 * This allows navigation links such as `/#about` to work even when
 * clicked from other routes like `/work`.
 */
const ScrollToHash: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return null;
};

export default ScrollToHash;