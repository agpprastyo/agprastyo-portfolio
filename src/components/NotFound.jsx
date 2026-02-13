import { Link } from 'react-router-dom';
import { Button } from "./ui/button";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 font-mono">
            <h1 className="text-6xl font-bold tracking-widest text-muted-foreground">404</h1>
            <p className="text-xl text-muted-foreground">The page you were looking for doesn&apos;t exist.</p>
            <Link to="/">
                <Button variant="outline" className="mt-4">
                    Return Home
                </Button>
            </Link>
        </div>
    );
};

export default NotFound;