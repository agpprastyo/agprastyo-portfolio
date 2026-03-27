import { useEffect, useState } from 'react';

const TableOfContents = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'skills', 'projects', 'contact'];
            let current = 'about';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 250) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: 'about', label: 'Hello, I\'m Agung Prasetyo.' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Let\'s Work Together' }
    ];

    return (
        <div className="hidden lg:flex flex-col absolute top-0 w-full pointer-events-none" style={{ height: 'calc(100vh - 44px)' }}>
            <div className="w-full relative h-full">

                {/* Hit Area wrapper for hover triggers */}
                <div
                    className="absolute right-0 sm:right-6 md:right-8 lg:right-10 pointer-events-auto flex justify-end"
                    style={{ top: '130px' }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* The Popup Card (shows on hover) */}
                    <div
                        className={`absolute right-0 top-0 w-[240px] bg-[#fbfbfa] dark:bg-[#202020] border border-border/40 rounded-xl shadow-lg p-5 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] transform origin-top-right ${isHovered ? 'opacity-100 scale-100 translate-x-0 z-50 pointer-events-auto' : 'opacity-0 scale-95 translate-x-2 -z-10 pointer-events-none'
                            }`}
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map(item => {
                                const isActive = activeSection === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollTo(item.id)}
                                        className={`text-left text-[14px] transition-colors hover:text-foreground/80 ${isActive ? 'text-[#2383e2] dark:text-[#2eaadc] font-medium' : 'text-muted-foreground font-normal'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* The Dashes (shows when not hovered) */}
                    <div className={`flex flex-col items-end gap-4 w-14 pb-3 pr-2 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered ? 'opacity-0 translate-x-2 pointer-events-none' : 'opacity-100 translate-x-0'}`}>
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <div key={item.id} className="cursor-pointer h-4 w-full flex items-center justify-end" onClick={() => scrollTo(item.id)}>
                                    <div
                                        className={`rounded-full transition-all duration-300 ${isActive ? 'bg-foreground/80 w-6 h-[3px]' : 'bg-foreground/30 w-3 h-[2px]'}`}
                                    >
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TableOfContents;
