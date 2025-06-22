import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FiMenu, FiX} from "react-icons/fi"; // Using react-icons for clean menu icons

// Reusable NavLink component for DRY code and active state handling
const NavLink = ({to, children, onClick}) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            onClick={onClick}
            className={`
                relative text-sm font-medium transition-colors duration-300
                ${isActive ? 'text-white' : 'text-neutral-400 hover:text-white'}
            `}
        >
            {children}
            {isActive && (
                <span
                    className="absolute -bottom-2 left-1/2 w-2/3 h-0.5 -translate-x-1/2 bg-stone-200 rounded-full"></span>
            )}
        </Link>
    );
};

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Effect to prevent scrolling when the mobile drawer is open
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isDrawerOpen]);

    const navItems = [
        {to: "/about", label: "About"},
        {to: "/projects", label: "Projects"},
        // {to: "/blog", label: "Blogs"},
        {to: "/contact", label: "Contact"}
    ];

    return (
        <header className="sticky top-0 z-50">
            <nav
                className="mx-auto px-6 py-4 flex justify-between items-center border-b border-neutral-700/50 bg-neutral-800/80 backdrop-blur-sm">
                <Link to="/" className="text-xl font-bold text-stone-100 tracking-wider">
                    AGPRASTYO
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink to={item.to}>{item.label}</NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-stone-200 z-50"
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    aria-label="Toggle menu"
                >
                    {isDrawerOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
                </button>
            </nav>

            {/* Mobile Drawer Menu */}
            <div
                className={`
                    md:hidden fixed inset-0 z-40 bg-stone-900 bg-opacity-90 backdrop-blur-md transition-transform duration-300 ease-in-out
                    ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <ul className="h-full flex flex-col justify-center items-center space-y-10">
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink to={item.to} onClick={() => setIsDrawerOpen(false)}>
                                <span className="text-2xl font-semibold">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;