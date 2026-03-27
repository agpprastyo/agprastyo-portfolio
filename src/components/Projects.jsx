import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "POS Kasir \\- Full Stack Point of Sales | Personal Project",
            date: "June 2025 - Present",
            category: "Go",
            stack: [
                "Go (Fiber v3)",
                "React 19",
                "PostgreSQL (sqlc)",
                "Redis",
                "WebSocket",
                "Sentry",
                "Cloudflare R2",
                "Docker",
                "GitHub Actions"
            ],
            description: [
                "Engineered a production-ready POS system with a focus on real-time state synchronization, high-performance analytics, and observability.",
                "Implemented **Real-time Synchronization** using a global WebSocket Hub to broadcast order updates and shift status across multiple cashier instances.",
                "Optimized **Analytics Dashboard** performance by implementing **Redis cache-aside logic** for complex sales and product performance reports.",
                "Enhanced system reliability with **Observability** upgrades, including log/slog structured logging and **Sentry SDK** for request-scoped error tracking and panic recovery.",
                "Designed a secure **RBAC system** integrated into both Backend middleware and Frontend UI components (shadcn/ui), ensuring granular permission-based access.",
                "Designed a **Single-Port Deployment** strategy where a high-performance Go binary serves both the REST API and the React SPA, simplifying infrastructure.",
                "Developed an **Automated Maintenance Pipeline** featuring a daily cron-based database reset (Wipe & Re-seed) to ensure demo environment consistency.",
                "Established a robust **CI/CD workflow** via GitHub Actions, including automated builds, Docker image versioning (v1.4.0+), and Tailscale-secured deployments.",
                "Maintained **unit tests for core business logic** (Orders & Auth) using mockgen and pgxmock to ensure system stability during architectural migrations."
            ],
            links: "POS Kasir \\- Full Stack Point of Sales | Personal Project | [Source Code](https://github.com/agpprastyo/POS-kasir) | [Live Demo](https://pos-kasir.agprastyo.me)"
        },
        {
            title: "KirimKarya \\- Photo Delivery & Client Proofing Platform",
            date: "Mar 2026 - Present",
            category: "TypeScript",
            stack: [
                "Bun",
                "TypeScript",
                "Hono",
                "PostgreSQL (Drizzle ORM)",
                "Redis",
                "BullMQ",
                "S3",
                "SvelteKit"
            ],
            description: [
                "Engineered a high-performance backend architecture designed to support image delivery, background processing, and scalable file storage.",
                "Designed a **monorepo architecture** separating API services, frontend applications, and background worker services.",
                "Built an **asynchronous image processing pipeline** using Redis and BullMQ to handle heavy tasks such as watermarking and thumbnail generation.",
                "Implemented **background workers** to offload CPU-intensive image processing and maintain fast API response times.",
                "Integrated **S3-compatible object storage** for scalable image uploads and file management.",
                "Developed automated **cron-based lifecycle jobs** to remove expired gallery assets from storage and database.",
                "Secured API endpoints using **Better Auth session management, RBAC authorization, and strict request validation using Zod**."
            ],
            links: "KirimKarya \\- Photo Delivery & Client Proofing Platform | [Source Code](https://github.com/agpprastyo/KirimKarya)"
        }
    ];

    const categories = ['All', ...new Set(projects.map(p => p.category))];
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All' 
        ? projects 
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
            
            {/* Notion Database View Tabs */}
            <div className="flex items-center gap-1 border-b border-border/40 mb-4">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`px-3 py-2 text-[13px] font-medium border-b-2 -mb-[1px] transition-colors ${
                            activeFilter === cat
                                ? 'border-foreground text-foreground'
                                : 'border-transparent text-muted-foreground hover:text-foreground/70 hover:border-border'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Notion Gallery Grid View */}
            <div className="grid grid-cols-1 gap-4">
                {filtered.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};
export default Projects;
