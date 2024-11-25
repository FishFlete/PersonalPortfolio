import React, { useState, useEffect } from 'react';
import './styles/depthMeter.css';

const Sidebar: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        // Ensure the correct container is used for scrolling
        const scrollableElement = document.documentElement || document.body;
        const scrollTop = scrollableElement.scrollTop; // Current vertical scroll
        const scrollHeight = scrollableElement.scrollHeight; // Total scrollable height
        const clientHeight = scrollableElement.clientHeight; // Viewport height

        console.log({
            scrollTop,
            scrollHeight,
            clientHeight,
            position: (scrollTop / (scrollHeight - clientHeight)) * 100
        });

        // Prevent division by zero if there is no scrollable content
        const scrollableDistance = scrollHeight - clientHeight;
        const position = scrollableDistance > 0 ? (scrollTop / scrollableDistance) * 100 : 0;

        setScrollPosition(position); // Update scroll position percentage
    };

    useEffect(() => {
        // Attach the scroll listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Remove listener on cleanup
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="depth-meter">
            <div className="dot" style={{ top: `${scrollPosition}%` }} />
            <div className="markers">
                {[...Array(11)].map((_, index) => (
                    <div
                        key={index}
                        className="marker"
                        style={{ top: `${index * 10}%` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
