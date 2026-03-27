import { Outlet } from "react-router-dom";
import TableOfContents from "./TableOfContents";
import { ThemeToggle } from "./ThemeToggle";
import FontToggle from "./FontToggle";

const Layout = () => {
    return (
        <div className="min-h-screen w-full bg-background text-foreground flex flex-col items-center">
            
            {/* Fixed Header Elements (Theme Toggle + Font Toggle) */}
            <div className="fixed top-6 right-6 md:right-12 z-[100] flex items-center gap-1">
                <FontToggle />
                <ThemeToggle />
            </div>

            {/* Right side floating navigation */}
            <div className="hidden lg:block fixed right-0 top-0 h-screen w-48 pointer-events-none z-50">
                <TableOfContents />
            </div>
            
            {/* Main Content Area */}
            <main id="main-scroll-area" className="w-full flex-1 flex justify-center relative">
                
                {/* Content bounded wrapper */}
                <div className="w-full max-w-4xl min-h-full">
                    <div className="pb-24 pt-12 md:pt-20">
                        <Outlet />
                    </div>
                </div>

            </main>

        </div>
    );
};

export default Layout;
