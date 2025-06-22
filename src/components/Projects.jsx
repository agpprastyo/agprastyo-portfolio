import {FaGithub} from 'react-icons/fa6';
import {FiArrowUpRight} from 'react-icons/fi';

const projectsData = [
    {
        title: 'GoShort',
        date: 'May 2025 - Present',
        description: 'A high-performance URL shortener service built with Go, demonstrating expertise in backend development, API design, and clean architecture.',
        features: [
            'Fast & Efficient with Fiber',
            'Secure JWT & Basic Authentication',
            'Protected Swagger API Docs',
            'Clean & Scalable Architecture',
        ],
        techStack: ['Go (Fiber)', 'PostgreSQL', 'React', 'Docker', 'Swagger', 'JWT'],
        githubLink: 'https://github.com/agpprastyo/GoShort',
    },


];

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
                            className="grid md:grid-cols-3 md:gap-12 py-12 border-b border-neutral-900 last:border-b-0"
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
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-stone-200 text-stone-900 font-semibold py-2.5 px-5 text-sm rounded-md hover:bg-stone-300 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <FaGithub/>
                                    View on GitHub
                                    <FiArrowUpRight className="ml-1"/>
                                </a>
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