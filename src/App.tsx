import React from 'react';
import Header from './components/Header';
import WaveComponent from './components/WaveComponent';
import BodyPart1 from './components/BodyPart1';
import BodyPart2 from './components/BodyPart2';
import BodyPart3 from './components/BodyPart3';
import Footer from './components/Footer';
import Sidebar from "@/components/Sidebar.tsx";


const App: React.FC = () => {
    return (
        <>
            {/*<Clouds />*/}
            {/*<Birds />*/}
            <Sidebar />
            <Header />
            <WaveComponent />
            <BodyPart1 />
            <BodyPart2 />
            <BodyPart3 />
            <Footer />
        </>
    );
};

export default App;