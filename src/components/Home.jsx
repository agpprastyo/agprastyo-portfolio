import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import profilePhoto from "../assets/profile.webp";
import { Github, Linkedin, Mail, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const Home = () => {
    return (
        <div className="flex flex-col w-full">
            {/* Content Container */}
            <div className="max-w-3xl w-full mx-auto px-6 md:px-12 pb-24 relative mt-12 md:mt-16">

                {/* Header Information (Text + Avatar) */}
                <motion.div
                    className="flex justify-between items-center mb-8 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <div>
                        {/* Page Title */}
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 text-foreground">
                            Agung Prasetyo
                        </h1>
                        <p className="text-muted-foreground text-xl mb-5 border-l-2 border-primary/40 pl-3">
                            Backend Developer
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a href="https://github.com/agpprastyo" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 hover:bg-secondary rounded-md">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/agprastyo" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 hover:bg-secondary rounded-md">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:prasetyo.agpr@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors p-1.5 hover:bg-secondary rounded-md">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Page Icon (Avatar) */}
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-full overflow-hidden border border-border bg-background shadow-md">
                        <img
                            src={profilePhoto}
                            alt="Agung Prasetyo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Notion-style Properties Block */}
                <motion.div
                    className="mb-16 border-t border-border/40 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex flex-col gap-2 text-[14px]">
                        <div className="flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-md hover:bg-secondary/50 transition-colors">
                            <span className="flex items-center gap-2 text-muted-foreground w-32 flex-shrink-0">
                                <MapPin className="w-4 h-4" /> Location
                            </span>
                            <span className="text-foreground">Sleman, Yogyakarta</span>
                        </div>
                        <div className="flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-md hover:bg-secondary/50 transition-colors">
                            <span className="flex items-center gap-2 text-muted-foreground w-32 flex-shrink-0">
                                <Briefcase className="w-4 h-4" /> Status
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-foreground">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Open to Work
                            </span>
                        </div>
                        {/* <div className="flex items-center gap-3 py-1.5 px-2 -mx-2 rounded-md hover:bg-secondary/50 transition-colors">
                            <span className="flex items-center gap-2 text-muted-foreground w-32 flex-shrink-0">
                                <GraduationCap className="w-4 h-4" /> Education
                            </span>
                            <span className="text-foreground">Universitas Siber Muhammadiyah</span>
                        </div> */}
                    </div>
                </motion.div>

                {/* Page Sections */}
                <div className="space-y-16">
                    <motion.section id="about" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                        <About />
                    </motion.section>

                    <motion.section id="projects" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                        <Projects />
                    </motion.section>

                    <motion.section id="contact" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
                        <Contact />
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default Home;
