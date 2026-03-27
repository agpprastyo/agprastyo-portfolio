import { useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
    Github,
    Linkedin,
    Mail,
    User,
    Briefcase,
    MessageSquare,
    Home
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import profilePhoto from "../assets/profile.png";

const Sidebar = ({ onItemClick }) => {
    const location = useLocation();

    const navItems = [
        { name: "Welcome", path: "#", icon: <Home className="h-4 w-4" /> },
        { name: "About", path: "#about", icon: <User className="h-4 w-4" /> },
        { name: "Projects", path: "#projects", icon: <Briefcase className="h-4 w-4" /> },
        { name: "Contact", path: "#contact", icon: <MessageSquare className="h-4 w-4" /> },
    ];

    const socialLinks = [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com/agpprastyo", label: "Github" },
        { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/agprastyo", label: "LinkedIn" },
        { icon: <Mail className="h-4 w-4" />, href: "mailto:prasetyo.agpr@gmail.com", label: "Email" },
    ];

    return (
        <aside className="w-full h-full flex flex-col justify-between py-4 bg-[#fbfbfa] dark:bg-[#202020] border-r border-black/5 dark:border-white/5">
            <div className="px-2">
                {/* Workspace Header */}
                <div className="mb-6 flex items-center space-x-2 px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-md cursor-pointer transition-colors">
                    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 border border-border/50">
                        <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-sm font-semibold leading-none text-foreground">Agung's Space</h1>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col space-y-0.5">
                    {navItems.map((item) => (
                        <a key={item.path} href={item.path} onClick={onItemClick} className="w-full text-foreground/80 focus:outline-none">
                            <div className="flex items-center w-full px-2 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/5 rounded-md transition-colors cursor-pointer group">
                                <span className="text-muted-foreground mr-2 group-hover:text-foreground transition-colors">
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </div>
                        </a>
                    ))}
                </nav>
            </div>

            {/* Bottom Actions */}
            <div className="px-4 pb-2">
                <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                        {socialLinks.map((link) => (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                                <Button variant="ghost" size="icon" title={link.label} className="text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 h-8 w-8">
                                    {link.icon}
                                </Button>
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
