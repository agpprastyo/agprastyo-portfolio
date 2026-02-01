import {FaGithub} from 'react-icons/fa6';
import {FiArrowUpRight} from 'react-icons/fi';
import resumeData from '../data/resume.json';
import { stripHtml } from '../utils/stripHtml';

// Map resume projects to UI-friendly structure
const projectsData = (resumeData?.sections?.projects?.items || []).map((p) => {
    const title = p.name || p.title || 'Untitled Project';
    const date = p.period || p.date || '';
    const description = stripHtml(p.description || '');

    // Heuristic tech stack extraction based on known keywords
    const techStack = [];
    const lower = (description || '').toLowerCase();
    if (lower.includes('go')) techStack.push('Go');
    if (lower.includes('fiber')) techStack.push('Fiber');
    if (lower.includes('postgres')) techStack.push('PostgreSQL');
    if (lower.includes('redis')) techStack.push('Redis');
    if (lower.includes('docker')) techStack.push('Docker');
    if (lower.includes('swagger') || lower.includes('openapi')) techStack.push('Swagger/OpenAPI');
    if (lower.includes('jwt')) techStack.push('JWT');
    if (techStack.length === 0) techStack.push('Go', 'Docker');

    // Heuristic features list
    const features = [];
    if (lower.includes('authentication')) features.push('Authentication & Authorization');
    if (lower.includes('rest') || lower.includes('api')) features.push('REST API');
    if (lower.includes('container') || lower.includes('docker')) features.push('Containerized (Docker)');
    if (lower.includes('swagger')) features.push('API Documentation (Swagger)');
    if (features.length === 0) features.push('Clean Architecture', 'Production-ready');

    const githubLink = (p.website && p.website.url) || '';
    const otherLinks = [];
    // if website points to github repo but labeled as site, keep as github
    if (githubLink && githubLink.includes('github.com')) {
        // keep as githubLink but also set otherLinks empty
    } else if (githubLink) {
        otherLinks.push({label: 'Live Demo', url: githubLink});
    }

    return {
        title,
        date,
        description,
        features,
        techStack,
        githubLink: githubLink && githubLink.includes('github.com') ? githubLink : '',
        otherLinks,
    };
});

const TechBadge = ({children}) => (
    <span className="inline-block bg-neutral-700/80 text-stone-300 text-xs font-medium px-3 py-1 rounded-full">
        {children}
    </span>
);

const Projects = () => {
    return (
        <section id="projects" className="py-16 lg:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-stone-100 relative inline-block">
                        <span className="relative z-10">Features Projects</span>
                        <span
                            className="absolute -bottom-2 left-0 w-2/3 h-4 bg-stone-500 transform -translate-y-2 z-0"></span>
                    </h2>
                    <p className="mt-4 text-lg text-neutral-400">
                        A selection of projects where I&apos;ve turned ideas into reality.
                    </p>
                </div>
                <div>
                    {projectsData.map((project, index) => (
                        <article
                            key={index}
                            className="grid md:grid-cols-3 md:gap-12 py-12 border-b border-neutral-700/50 last:border-b-0"
                        >
                            {/* Left Column: Main Info */}
                            <div className="md:col-span-2 mb-8 md:mb-0">
                                <div className="flex items-baseline gap-4 mb-4">
                                    <h3 className="text-2xl font-bold text-stone-100">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-neutral-400">
                                        {project.date}
                                    </span>
                                </div>

                                <p className="text-neutral-300 leading-relaxed mb-8">
                                    {project.description}
                                </p>

                                <a
                                    href={project.githubLink || project.otherLinks?.[0]?.url || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-stone-200 text-stone-900 font-semibold py-2.5 px-5 text-sm rounded-md hover:bg-stone-300 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <FaGithub/>
                                    View on GitHub
                                    <FiArrowUpRight className="ml-1"/>
                                </a>
                                <div className='mt-6'>
                                    <h4 className="font-semibold text-stone-200 mb-3">Other Links</h4>
                                    {project.otherLinks && (
                                        <div className="flex flex-wrap gap-4">
                                            {project.otherLinks.map((link, i) => (
                                                <a
                                                    key={i}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center gap-2 bg-stone-200 text-stone-900 font-semibold py-2.5 px-5 text-sm rounded-md hover:bg-stone-300 transition-all duration-300 transform hover:-translate-y-1"
                                                >
                                                    <FiArrowUpRight className="ml-1" />
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Column: Tech Details */}
                            <aside className="md:col-span-1">
                                <div className="mb-6">
                                    <h4 className="font-semibold text-stone-200 mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <TechBadge key={tech}>{tech}</TechBadge>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-stone-200 mb-3">Key Features</h4>
                                    <ul className="list-none space-y-2 text-neutral-400 text-sm">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="text-stone-400">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

