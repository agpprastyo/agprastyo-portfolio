import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
    Github,
    Linkedin,
    Mail
} from "lucide-react";
import { Separator } from "./ui/separator";

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },

        { name: "Contact", path: "/contact" },
    ];

    const socialLinks = [
        { icon: <Github className="h-4 w-4" />, href: "https://github.com/agpprastyo", label: "Github" },
        { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/agpprastyo", label: "LinkedIn" },
        { icon: <Mail className="h-4 w-4" />, href: "mailto:prasetyo.agpr@gmail.com", label: "Email" },
    ];

    return (
        <aside className="w-full  flex flex-col justify-between my-8">
            <div className="">
                <div className="mb-8 text-right">
                    <Link to="/">
                        <h1 className="text-2xl font-bold tracking-tight font-mono">Agung Prasetyo</h1>
                    </Link>
                    <p className="text-muted-foreground mt-2 text-sm font-mono">Backend Developer</p>
                </div>

                <nav className="flex flex-col space-y-2 ">
                    {navItems.map((item) => (
                        <Link key={item.path} to={item.path}>
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-end font-mono tracking-wider",
                                    location.pathname === item.path ? "font-bold text-lg" : ""
                                )}
                            >
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                </nav>
            </div>

            <div>
                <Separator />
                <div className="flex justify-end space-x-2 ">
                    {socialLinks.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" title={link.label} className="hover:bg-zinc-200 dark:hover:bg-zinc-800">
                                {link.icon}
                            </Button>
                        </a>
                    ))}
                </div>
                <p className="text-xs text-right text-muted-foreground mt-2 font-mono">
                    © {new Date().getFullYear()}
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;
