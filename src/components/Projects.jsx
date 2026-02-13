import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            title: "POS Kasir Full Stack Point of Sales - Personal Project",
            date: "June 2025 - Present",
            stack: [
                "Golang (Fiber)",
                "React",
                "PostgreSQL",
                "Cloudflare R2",
                "JWT",
                "Swagger",
                "Docker",
                "Midtrans API"
            ],
            description: [
                "Developed a scalable backend system for a Point of Sale (POS) application, creating 50+ RESTful API endpoints for inventory and transaction management.",
                "Integrated a dynamic QRIS via Midtrans API (Sandbox mode), enabling automated and secure cashless transaction processing.",
                "Secured application endpoints by implementing robust JWT authentication (access & refresh tokens) and Role-Based Access Control (RBAC) for 3 distinct user roles.",
                "Accelerated local development setup time by 50% by containerizing the application and database environments using Docker and Docker Compose.",
                "Ensured seamless frontend-backend integration by comprehensively documenting 100% of the APIs using Swagger/OpenAPI."
            ],
            links: "POS Kasir   – Full Stack Point of Sales - Personal Project | [Source Code](https://github.com/agpprastyo/POS-kasir) | [Live Demo](https://pos-kasir.agprastyo.me)"
        },
        {
            title: "GoShort URL Shortener | Personal Project",
            date: "Mar 2025 - May 2025",
            stack: [
                "Go",
                "PostgreSQL",
                "Docker",
                "JWT"
            ],
            description: [
                "Engineered a reliable URL shortener service capable of generating unique short links and redirecting users with minimal latency.",
                "Designed and integrated RESTful APIs, securing user-specific data and actions via JWT authentication.",
                "Deployed the application and PostgreSQL database efficiently using Docker containers."
            ],
            links: "GoShort URL Shortener | Personal Project | [Source Code](https://github.com/agpprastyo/GoShort)"
        }
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold font-mono border-b pb-4">Projects</h2>
            <div className="flex flex-col gap-6 pb-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};
export default Projects;
