import { useState, useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, FileCode, X } from "lucide-react";

const ProjectCard = ({ project }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isModalOpen]);

    const getLinks = (text) => {
        if (!text) return { source: null, demo: null };
        const links = {};
        const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
        let match;
        while ((match = regex.exec(text)) !== null) {
            const label = match[1].toLowerCase();
            const url = match[2];
            if (label.includes("source code") || label.includes("code")) {
                links.source = url;
            } else if (label.includes("demo") || label.includes("live")) {
                links.demo = url;
            }
        }
        return links;
    };

    const { source, demo } = getLinks(project.links);

    return (
        <>
            {/* Gallery Card View (Button to open Modal) */}
            <div
                className="border border-border/60 rounded-md overflow-hidden bg-card hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-colors duration-200 cursor-pointer shadow-sm min-h-[100px] flex flex-col justify-center"
                onClick={() => setIsModalOpen(true)}
            >
                <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary rounded-md">
                            <FileCode className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-[16px] leading-tight text-foreground">{project.title.split('\\-')[0] || project.title}</h3>
                            <p className="font-mono text-[11px] text-muted-foreground mt-1">{project.date}</p>
                        </div>
                    </div>

                    {/* Inline Stack Preview */}
                    <div className="flex flex-wrap gap-1.5 sm:justify-end max-w-[50%]">
                        {project.stack.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="font-mono text-[9px] font-normal rounded-sm bg-black/5 dark:bg-white/10 text-foreground/70 px-1.5 py-0 h-4 border-transparent shadow-none">
                                {tech}
                            </Badge>
                        ))}
                        {project.stack.length > 3 && (
                            <Badge variant="secondary" className="font-mono text-[9px] font-normal rounded-sm bg-black/5 dark:bg-white/10 text-foreground/70 px-1.5 py-0 h-4 border-transparent shadow-none">
                                +{project.stack.length - 3}
                            </Badge>
                        )}
                    </div>
                </div>
            </div>

            {/* Notion Modal Popup */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    {/* Modal Content container */}
                    <div
                        className="bg-background w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-xl shadow-2xl border border-border/50 flex flex-col smooth-scroll relative animate-in fade-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Header Cover Layer */}
                        <div className="w-full h-32 md:h-48 bg-secondary/80 flex items-start justify-end p-4 relative">
                            <button
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
                                className="bg-background/40 hover:bg-background/90 backdrop-blur-md rounded-full h-8 w-8 flex items-center justify-center transition-colors z-10 cursor-pointer"
                            >
                                <X className="h-4 w-4 text-foreground" />
                            </button>
                        </div>

                        <div className="p-6 md:px-12 md:pb-12 relative -mt-10 md:-mt-12">
                            {/* Page Icon Over Cover */}
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-background border-4 border-background flex items-center justify-center mb-6 shadow-sm">
                                <FileCode className="h-8 w-8 md:h-10 md:w-10 text-muted-foreground" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">{project.title.split('\\-')[0] || project.title}</h2>
                            <p className="text-muted-foreground font-mono text-sm mb-8">{project.date}</p>

                            {/* Properties Area (Look like notion database properties) */}
                            <div className="flex flex-col gap-3 mb-8">
                                <div className="flex items-start gap-4 text-[14px]">
                                    <span className="text-muted-foreground w-24 flex-shrink-0">Stack</span>
                                    <div className="flex flex-wrap gap-1.5 flex-1">
                                        {project.stack.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="font-mono text-[10px] font-normal rounded-[4px] bg-secondary text-foreground/80 px-2 py-0.5 h-6">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-[14px]">
                                    <span className="text-muted-foreground w-24 flex-shrink-0">Type</span>
                                    <span className="border-b border-border text-foreground">Personal Project</span>
                                </div>
                            </div>

                            <hr className="border-border/60 mb-8" />

                            <ul className="list-disc list-outside ml-5 space-y-2 text-[15px] text-foreground/90 leading-relaxed mb-10">
                                {project.description.map((desc, i) => (
                                    <li key={i} dangerouslySetInnerHTML={{ __html: desc.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>') }} />
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-3 w-full">
                                {source && (
                                    <a href={source} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="gap-2 h-10 px-4 text-sm font-medium rounded-md bg-background hover:bg-secondary transition-colors">
                                            <Github className="w-4 h-4" /> View Source
                                        </Button>
                                    </a>
                                )}
                                {demo && (
                                    <a href={demo} target="_blank" rel="noopener noreferrer">
                                        <Button variant="default" className="gap-2 h-10 px-4 text-sm font-medium rounded-md transition-colors">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;
