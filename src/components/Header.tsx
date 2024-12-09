import React from 'react';
import ProfilePicture from './ProfilePicture';
import CallToAction from './CallToAction';
import SocialLinks from './SocialLinks';
import './styles/header.css';
import Birds from "./Birds";
import Clouds from "./Clouds.tsx";

const Header: React.FC = () => {
    return (
        <header className="header" id={"header"}>
            <div id={"header-top"}>
            <ProfilePicture />
            <h1>Fisher Fletemeyer</h1>
            <h2>Full-Stack Developer</h2>
            <p>Turning ideas into scalable and efficient web solutions.</p>
            <CallToAction />
            <SocialLinks />
            </div>
            <Birds />
            <Clouds />
        </header>
    );
};

export default Header;
