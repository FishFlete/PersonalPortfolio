import React from 'react';
import './styles/callToAction.css';

const CallToAction: React.FC = () => {
    return (
        <div className="cta-container">
            <a
                href="public/Fisher-Fletemeyer-Resume.png" // Path to your PDF in the `public` folder
                target="_blank" // Opens the PDF in a new tab
                rel="noopener noreferrer" // Security best practice for external links
                style={{textDecoration: 'none'}} // To remove default link styling
            >
                <button className="view-resume-button">
                    View Resume
                </button>
            </a>

            <a
                href="mailto:fishflete@gmail.com"
                style={{textDecoration: 'none'}}
            >
                <button className="contact-button">
                    Contact Me
                </button>
            </a>
        </div>
    );
};

export default CallToAction;
