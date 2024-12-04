import React from 'react';
import Wave from 'react-wavify';

//css imports
import "./styles/wavecomponent.css"

const WaveComponent: React.FC = () => {
    return (
        <>
        <div className="wave-container">
            <Wave
                fill="#a8d3ff"
                paused={false}
                style={{ display: 'flex'}}
                options={{
                    height: 40,
                    amplitude: 30,
                    speed: 0.15,
                    points: 8,
                }}
            />
        </div>

        </>
    );
};

export default WaveComponent;
