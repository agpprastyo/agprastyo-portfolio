import { useState } from 'react';
import { Badge } from "./ui/badge";
import { Download, Info } from 'lucide-react';
import { Button } from "./ui/button";

const About = () => {
    const googleDocExportUrl = "/resume.pdf";

    const aboutData = {
        summary: "Backend Engineer with a strong foundation in **Go (Golang)** and **PostgreSQL**, specialized in building scalable and reliable web applications. Experienced in developing high-performance REST APIs, real-time data synchronization, and efficient caching strategies. Proficient in modern full-stack development with a focus on delivering secure, well-documented, and production-ready systems. Dedicated to applying best practices in software architecture, observability, and automated deployment to create impactful digital solutions.",
        skills: [
            {
                category: "Backend Development",
                items: [
                    { name: "Go (Golang)", desc: "Primary language for production backend systems" },
                    { name: "Fiber v3", desc: "High-performance Go web framework" },
                    { name: "REST API Development", desc: "Designing and building RESTful services" },
                    { name: "Clean Architecture", desc: "Layered, testable code organization" },
                    { name: "Real-time WebSockets", desc: "Bidirectional live communication" },
                    { name: "Structured Logging (slog)", desc: "Go's structured logging for observability" },
                    { name: "Sentry Observability", desc: "Error tracking and performance monitoring" },
                    { name: "JWT & Refresh Tokens", desc: "Stateless authentication flows" },
                    { name: "RBAC", desc: "Role-Based Access Control for permissions" }
                ]
            },
            {
                category: "Databases & Caching",
                items: [
                    { name: "PostgreSQL", desc: "Primary relational database" },
                    { name: "sqlc (Type-safe SQL)", desc: "Compile-time verified SQL queries in Go" },
                    { name: "Redis", desc: "In-memory cache-aside & rate limiting" },
                    { name: "Schema Design", desc: "Normalized, performant DB schemas" },
                    { name: "Migrations", desc: "Version-controlled database evolution" }
                ]
            },
            {
                category: "Architecture",
                items: [
                    { name: "Background Workers", desc: "Offloading heavy tasks asynchronously" },
                    { name: "Async Processing", desc: "Non-blocking workflows and pipelines" },
                    { name: "Job Queues (BullMQ)", desc: "Redis-backed job scheduling" },
                    { name: "Monorepo Architecture", desc: "Shared code across multiple services" },
                    { name: "API Security", desc: "Rate limiting, CORS, input validation" }
                ]
            },
            {
                category: "DevOps & Cloud",
                items: [
                    { name: "GitHub Actions CI/CD", desc: "Automated test, build, deploy pipelines" },
                    { name: "Docker & Compose", desc: "Containerized development and deployment" },
                    { name: "Tailscale SSH", desc: "Secure private network access" },
                    { name: "Swagger/OpenAPI", desc: "Auto-generated API documentation" },
                    { name: "Semantic Versioning", desc: "Structured release management (v1.4.0+)" },
                    { name: "Cloudflare R2 / MinIO", desc: "S3-compatible object storage" },
                    { name: "Lifecycle Management", desc: "Automated resource cleanup" }
                ]
            },
            {
                category: "Frontend",
                items: [
                    { name: "React 19", desc: "Modern UI library with hooks" },
                    { name: "TanStack Router & Query", desc: "Type-safe routing and data fetching" },
                    { name: "TypeScript", desc: "Typed JavaScript for safer code" },
                    { name: "Tailwind CSS 4", desc: "Utility-first CSS framework" },
                    { name: "SvelteKit", desc: "Full-stack Svelte framework" },
                    { name: "Flutter", desc: "Cross-platform mobile development" },
                    { name: "i18next", desc: "Internationalization framework" }
                ]
            }
        ],
        experience: [
            {
                role: "Mobile Flutter Developer Intern",
                period: "February 2024 - May 2024",
                company: "PT. Solusi Digital Handal — Yogyakarta",
                points: [
                    "Converted **20+ Figma UI designs** into pixel-perfect Flutter widgets across various screen sizes.",
                    "Integrated multiple REST APIs into mobile applications for real-time data retrieval.",
                    "Implemented **Bloc state management** to improve maintainability and code structure."
                ]
            },
            {
                role: "Staff Photographer",
                period: "July 2021 - Present",
                company: "Laris Studio — Sleman, Yogyakarta",
                points: [
                    "Handled client projects from planning to delivery, ensuring high customer satisfaction.",
                    "Managed time and priorities effectively to meet strict deadlines.",
                    "Developed strong discipline, responsibility, and client communication skills."
                ]
            }
        ],
        education: {
            degree: "Bachelor's Degree in Informatics (Fully Online / Distance Learning)",
            period: "March 2023 - Present",
            school: "Universitas Siber Muhammadiyah — Yogyakarta"
        }
    };

    const [activeSkillGroup, setActiveSkillGroup] = useState(aboutData.skills[0].category);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center group mb-4">
                <h2 className="text-3xl font-bold text-foreground">About Me</h2>
                <a href={googleDocExportUrl} download target="_blank" rel="noreferrer" className="transition-opacity">
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:bg-black/5 dark:hover:bg-white/5 border border-border/40">
                        <Download className="w-4 h-4" /> Download Resume
                    </Button>
                </a>
            </div>

            {/* Notion-style Callout containing summary */}
            <div className="bg-secondary/50 dark:bg-secondary/20 rounded-[4px] p-4 flex items-start gap-3 border border-border/50">
                <div className="mt-0.5 text-lg"><Info className="w-5 h-5 text-muted-foreground" /></div>
                <p
                    className="text-foreground/90 leading-relaxed text-[15px]"
                    dangerouslySetInnerHTML={{ __html: aboutData.summary.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>') }}
                />
            </div>

            {/* Notion Tabs for Skills */}
            <div className="pt-6" id="skills">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Skills</h3>

                {/* Scrollable Tabs */}
                <div className="flex overflow-x-auto hide-scrollbar gap-1.5 mb-4 pb-2 border-b border-border/40">
                    {aboutData.skills.map((skillGroup) => {
                        const isActive = activeSkillGroup === skillGroup.category;
                        return (
                            <button
                                key={skillGroup.category}
                                onClick={() => setActiveSkillGroup(skillGroup.category)}
                                className={`px-3 py-1.5 text-[14px] whitespace-nowrap rounded-sm transition-colors ${isActive
                                        ? 'bg-foreground text-background font-medium shadow-sm'
                                        : 'text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
                                    }`}
                            >
                                {skillGroup.category}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="bg-secondary/20 rounded-md p-5 border border-border/40 min-h-[140px] shadow-sm">
                    <div className="flex flex-wrap gap-2.5">
                        {aboutData.skills.find(g => g.category === activeSkillGroup)?.items.map(skill => (
                            <div key={skill.name} className="group/tip relative">
                                <Badge
                                    variant="outline"
                                    className="font-mono text-xs font-normal rounded-[4px] bg-background border border-border/60 hover:border-foreground/30 shadow-sm px-2.5 py-1.5 text-foreground/80 flex items-center gap-1.5 transition-colors cursor-default"
                                >
                                    {skill.name}
                                </Badge>
                                {/* Tooltip */}
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-[11px] font-medium text-primary-foreground bg-foreground rounded-md shadow-lg opacity-0 group-hover/tip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                    {skill.desc}
                                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground"></span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Experience</h3>

                {aboutData.experience.map((job, index) => (
                    <div key={index} className="space-y-2 mb-6 ml-1 flex flex-col">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="w-2 h-2 rounded-full bg-primary/20 shrink-0"></span>
                            <h4 className="font-semibold text-lg text-foreground">{job.role}</h4>
                            <Badge variant="outline" className="font-mono text-[10px] text-muted-foreground rounded-sm border-border/50 py-0 h-5">
                                {job.period}
                            </Badge>
                        </div>
                        <div className="pl-6 text-[15px] text-muted-foreground">{job.company}</div>
                        <ul className="list-disc list-outside ml-11 space-y-1.5 text-[15px] text-foreground/80 leading-relaxed">
                            {job.points.map((point, idx) => (
                                <li key={idx} dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>') }} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <div className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Education</h3>
                <div className="space-y-1 mb-6 ml-1">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-2 h-2 rounded-full bg-primary/20 shrink-0"></span>
                        <h4 className="font-semibold text-lg text-foreground">{aboutData.education.degree}</h4>
                    </div>
                    <div className="pl-6 flex items-center gap-2 flex-wrap text-[15px] text-muted-foreground">
                        {aboutData.education.school}
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50 hidden md:block"></span>
                        <Badge variant="outline" className="font-mono text-[10px] rounded-sm border-border/50 py-0 h-5">
                            {aboutData.education.period}
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;