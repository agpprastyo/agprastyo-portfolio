import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Content = () => {
    return (
        <div className="flex flex-col justify-center min-h-[60vh] space-y-8 font-mono">
            <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                    Agung Prasetyo
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                    Backend Developer & Software Engineer
                </p>
            </div>

            <p className="max-w-xl text-muted-foreground leading-relaxed">
                Building scalable, reliable, and secure backend systems.
                Focusing on Go, PostgreSQL, and Clean Architecture.
            </p>

            <div className="flex gap-4">
                <Link to="/projects">
                    <Button size="lg" className="gap-2">
                        View Projects <ArrowRight className="w-4 h-4" />
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button variant="outline" size="lg">
                        Contact Me
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Content;