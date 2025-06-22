import {FaGithub, FaLinkedin, FaXTwitter} from 'react-icons/fa6';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/agpprastyo',
        icon: FaGithub,
    },
    {
        name: 'X (Twitter)',
        href: 'https://x.com/agprastyo_',
        icon: FaXTwitter,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/agprastyo/',
        icon: FaLinkedin,
    },
];

const Footer = () => {
    return (
        <footer className="border-t border-neutral-700/50">
            <div className="mx-auto  px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
                {/* Social Icons */}
                <div className="flex justify-center space-x-6 md:order-2">
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-stone-200 transform transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true"/>
                        </a>
                    ))}
                </div>

                {/* Copyright Notice */}
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-neutral-500">
                        &copy; {new Date().getFullYear()} Agung Prasetyo. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;