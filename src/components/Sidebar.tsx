import React from "react";
import DepthMeter from "./DepthMeter";
import "./styles/sidebar.css"; // Ensure styling for Sidebar

const Sidebar: React.FC = () => {
    const sections = [
        { id: "header", label: "Header", top: "0%" }, // Adjust top value as needed
        { id: "bodyPart1", label: "Body Part 1", top: "20.7%" },
        { id: "bodyPart2", label: "Body Part 2", top: "46.65%" },
        { id: "bodyPart3", label: "Body Part 3", top: "72.5%" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="sidebar">
            <DepthMeter />
            <div className="scroll-buttons">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        style={{ top: section.top }} // Use the top value
                        title={`Go to ${section.label}`} // Tooltip for better UX
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
