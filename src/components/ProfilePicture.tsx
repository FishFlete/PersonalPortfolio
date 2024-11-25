import React from 'react';
import profilePic from '../assets/images/Fisher Fletemeyer Headshot.jpeg'; // Path to your image
import './styles/profilePicture.css';

const ProfilePicture: React.FC = () => {
    return (
        <div className="profile-picture">
            <img src={profilePic} alt="Profile" />
        </div>
    );
};

export default ProfilePicture;
