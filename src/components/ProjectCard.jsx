import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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
        <Card className="h-full flex flex-col bg-zinc-100 dark:bg-zinc-950 ">
            <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <CardTitle className="text-xl font-bold font-mono">{project.title}</CardTitle>
                        <div className="text-xs text-muted-foreground font-mono">{project.date}</div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-mono text-[10px]">{tech}</Badge>
                    ))}
                </div>
            </CardHeader>

            {isExpanded && (
                <CardContent>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-muted-foreground font-mono">
                        {project.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </CardContent>
            )}

            <CardFooter className="pt-2 mt-auto">
                <div className="flex gap-2 w-full">
                    {source && (
                        <a href={source} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="outline" size="sm" className="w-full gap-2">
                                <Github className="w-3 h-3" /> Code
                            </Button>
                        </a>
                    )}
                    {demo && (
                        <a href={demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button size="sm" className="w-full gap-2">
                                <ExternalLink className="w-3 h-3" /> Demo
                            </Button>
                        </a>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
