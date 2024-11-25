import React from 'react';
import './styles/callToAction.css';

const CallToAction: React.FC = () => {
    return (
        <div className="cta-container">
            <button className="cta-button">View Resume</button>
            <button className="cta-button">Contact Me</button>
        </div>
    );
};

export default CallToAction;
