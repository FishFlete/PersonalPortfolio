import React, { useState, useEffect } from "react";
import "./styles/depthMeter.css";

const DepthMeter: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const scrollableElement = document.documentElement || document.body; // Root scrolling container
        const scrollTop = scrollableElement.scrollTop; // Current vertical scroll
        const scrollHeight = scrollableElement.scrollHeight; // Total scrollable height
        const clientHeight = scrollableElement.clientHeight; // Height of the viewport

        // Calculate the scroll position as a percentage
        let position = (scrollTop / (scrollHeight - clientHeight)) * 100;

        // Constrain the dot's maximum height to 90% of the sidebar height
        const maxHeight = 99; // Set max height in percentage (0-100)
        position = Math.min(position, maxHeight);

        // Optional: Set a minimum height if needed (e.g., don't let the dot go below a threshold)
        const minHeight = 0; // Set min height in percentage (0-100)
        position = Math.max(position, minHeight);

        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="depth-meter">
            <div className="dot" style={{ top: `${scrollPosition}%` }} />
        </div>
    );
};

export default DepthMeter;
