import { useState, useEffect } from 'react';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={` w-full fixed top-0 z-50 transition-colors duration-300 `}>
            <div className={`lg:w-3/4 lg:mx-auto mx-4  ${isScrolled ? 'lg:mx-auto mt-4 rounded-2xl  glass' : 'mx-4 bg-transparent '}`}>

            <nav className="container mx-auto lg:p-4 p-2 flex justify-between justify-items-center items-center align-top ">
                <a href="#hero">
                    <h1 className={`text-2xl font-bold text-white align-baseline`}>AGPRASTYO</h1>
                </a>
                <button
                    className="md:hidden text-white"
                    onClick={toggleDrawer}
                >
                    ☰
                </button>
                <ul className="  hidden md:flex space-x-4 ">
                    <li><a href="#about" className="underline-animation text-white ">About</a></li>

                    <li><a href="#projects" className="underline-animation text-white ">Projects</a></li>
                    <li><a href="#contact" className="underline-animation text-white ">Contact</a></li>

                    <li>
                        <a
                            href="https://docs.google.com/document/d/1dILeCMcz2CrZCaoHQ-cfrxwe_SIQlCpN3pYR8uJveSs/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline-animation text-white flex items-center"
                        >
                            Resume
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                      d="M20 14a1 1 0 0 0-1 1v3.077c0 .459-.022.57-.082.684a.363.363 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.571-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684L4.999 5.5a.5.5 0 0 1 .5-.5l3.5.005a1 1 0 1 0 .002-2L5.501 3a2.5 2.5 0 0 0-2.502 2.5v12.577c0 .76.083 1.185.32 1.627.223.419.558.753.977.977.442.237.866.319 1.627.319h12.154c.76 0 1.185-.082 1.627-.319.419-.224.753-.558.977-.977.237-.442.319-.866.319-1.627V15a1 1 0 0 0-1-1zm-2-9.055v-.291l-.39.09A10 10 0 0 1 15.36 5H14a1 1 0 1 1 0-2l5.5.003a1.5 1.5 0 0 1 1.5 1.5V10a1 1 0 1 1-2 0V8.639c0-.757.086-1.511.256-2.249l.09-.39h-.295a10 10 0 0 1-1.411 1.775l-5.933 5.932a1 1 0 0 1-1.414-1.414l5.944-5.944A10 10 0 0 1 18 4.945z"
                                      fill="currentColor"/>
                            </svg>
                        </a>
                    </li>

                </ul>
            </nav>
                {isDrawerOpen && (
                    <div className="md:hidden glass text-white p-4">
                        <ul className="space-y-4">
                            <li><a href="#about" className="underline-animation text-white "
                                   onClick={toggleDrawer}>About</a></li>

                            <li><a href="#projects" className="underline-animation text-white "
                                   onClick={toggleDrawer}>Projects</a></li>
                            <li><a href="#contact" className="underline-animation text-white "
                                   onClick={toggleDrawer}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;