import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Download } from 'lucide-react';
import { Button } from "./ui/button";

const About = () => {
    const googleDocExportUrl = "/resume.pdf";

    const aboutData = {
        summary: "Detail-oriented Backend Developer with hands-on experience in building scalable RESTful APIs using Go and PostgreSQL. Proficient in clean architecture, database integration, and containerized deployment with Docker. Seeking a Junior Backend Engineer position to contribute to real-world development challenges and deliver high-quality, secure software solutions.",
        skills: [
            {
                category: "Backend Development",
                items: ["Go (Golang)", "RESTful APIs", "Clean Architecture", "JWT Authentication", "RBAC"]
            },
            {
                category: "Databases & Caching",
                items: ["PostgreSQL (Schema & Queries)", "Redis", "SQL", "Database Migrations"]
            },
            {
                category: "Tools & Workflow",
                items: ["Git", "Docker", "Docker Compose", "Postman", "Swagger/OpenAPI"]
            },
            {
                category: "Frontend (Basic)",
                items: ["Flutter", "React", "SvelteKit", "JavaScript/TypeScript"]
            }
        ],
        experience: [
            {
                role: "Mobile Flutter Developer Intern",
                period: "February 2024 - May 2024",
                company: "PT. Solusi Digital Handal — Yogyakarta",
                points: [
                    "Converted **20+ Figma UI designs** into pixel-perfect Flutter widgets across various screen sizes.",
                    "Integrated **5+ third-party REST APIs** using HTTP packages, ensuring smooth data retrieval.",
                    "Streamlined application state management using the Bloc pattern, improving codebase readability and reducing debugging time."
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
            degree: "Bachelor's Degree in Computer Science",
            period: "March 2023 - Present",
            school: "Universitas Siber Muhammadiyah — Yogyakarta"
        }
    };

    return (
        <div className="space-y-8 font-mono pb-12">
            <section className="space-y-4">
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-3xl font-bold">About Me</h2>
                    <a href={googleDocExportUrl} download target="_blank" rel="noreferrer">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Download className="w-4 h-4" /> Download Resume
                        </Button>
                    </a>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                    {aboutData.summary}
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
                <div className="space-y-6">
                    {aboutData.skills.map((skillGroup, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-2 text-sm text-primary/80">{skillGroup.category}:</h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map(skill => (
                                    <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Separator />

            <section className="space-y-6">
                <h2 className="text-2xl font-bold">Experience</h2>

                {aboutData.experience.map((job, index) => (
                    <div key={index} className="space-y-1">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h3 className="font-bold text-lg">{job.role}</h3>
                            <span className="text-sm text-muted-foreground">{job.period}</span>
                        </div>
                        <div className="text-sm font-semibold text-primary/80">{job.company}</div>
                        <ul className="list-disc list-outside ml-4 mt-2 space-y-1 text-sm text-muted-foreground leading-relaxed">
                            {job.points.map((point, idx) => (
                                <li key={idx} dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="space-y-1">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <h3 className="font-bold text-lg">{aboutData.education.degree}</h3>
                        <span className="text-sm text-muted-foreground">{aboutData.education.period}</span>
                    </div>
                    <div className="text-sm text-primary/80">{aboutData.education.school}</div>
                </div>
            </section>
        </div>
    );
};
export default About;