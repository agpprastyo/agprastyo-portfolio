import { BrowserRouter } from 'react-router-dom';

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import About from "./components/About.jsx";

export const App = () => (
    <BrowserRouter >
        <div className="">
            <Header/>
            <Hero/>
            <div className="relative overflow-hidden flex items-center justify-center h-full w-full" >
                <div
                    className="absolute"
                    style={{
                        top: '50%',  // Center vertically
                        left: '50%', // Center horizontally
                        width: '30%', // Adjust width to your preference
                        height: '40%',
                        opacity: 0.25,
                        filter: 'blur(40px)',
                        transform: 'translate(-50%, -50%) scale(1.5)', // Center and scale
                        background: `
                        linear-gradient(
                            75deg,
                           
                            hsl(40, 100%, 10%), 
                            transparent,
                            hsl(50, 50%, 30%), 
                            transparent
                        )`,

                    }}
                ></div>

                {/* Content Section centered */}
                <div className=" z-10 text-center  w-full">
                    <About/>
                    <TechStack/>
                </div>
            </div>
            <div className=" w-3/4 mx-auto">
                {/* First Mesh Effect centered */}
                <div
                    className="absolute"
                    style={{
                        top: '50%',  // Center vertically
                        left: '50%', // Center horizontally
                        width: '40%', // Adjust width to your preference
                        height: '50%',
                        opacity: 0.2,
                        filter: 'blur(50px)',
                        transform: 'translate(-50%, -50%) scale(1.3)', // Center and scale
                        background: `
                        linear-gradient(
                            135deg,
                            hsl(200, 100%, 30%),  // Dark blue
                            transparent,
                            hsl(50, 100%, 50%),   // Bright yellow
                            transparent
                        )`,
                    }}
                ></div>



            </div>
        </div>
        <Projects/>

        <Contact/>
        <Footer/>
        <ScrollToTopButton/>
    </BrowserRouter>
);
