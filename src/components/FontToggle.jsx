import { useState, useEffect, useRef } from 'react';
import { Type } from 'lucide-react';

const fonts = [
    { id: 'sans', label: 'Sans-serif', class: 'font-sans', preview: 'Aa' },
    { id: 'serif', label: 'Serif', class: 'font-serif', preview: 'Aa' },
    { id: 'mono', label: 'Monospace', class: 'font-mono', preview: 'Aa' },
];

const FontToggle = () => {
    const [activeFont, setActiveFont] = useState(() => {
        return localStorage.getItem('portfolio-font') || 'sans';
    });
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const root = document.documentElement;
        // Remove all font classes first
        fonts.forEach(f => root.classList.remove(f.class));
        // Apply the active one
        const match = fonts.find(f => f.id === activeFont);
        if (match) root.classList.add(match.class);
        localStorage.setItem('portfolio-font', activeFont);
    }, [activeFont]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Change font"
            >
                <Type className="w-5 h-5" />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-[#fbfbfa] dark:bg-[#202020] border border-border/40 rounded-lg shadow-xl p-1.5 z-[200] animate-in fade-in zoom-in-95 duration-150">
                    {fonts.map(font => (
                        <button
                            key={font.id}
                            onClick={() => { setActiveFont(font.id); setIsOpen(false); }}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-[13px] transition-colors ${
                                activeFont === font.id
                                    ? 'bg-secondary text-foreground font-medium'
                                    : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                            }`}
                        >
                            <span className={`text-base ${font.class}`}>{font.preview}</span>
                            <span>{font.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FontToggle;
