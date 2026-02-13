import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Layout = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <div className="h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-950 font-mono selection:bg-black selection:text-white overflow-hidden">

            {/* Split Pane Container - Fixed Height, Centered */}
            <div className="flex w-full max-w-6xl h-full  overflow-hidden relative">

                {/* Sidebar - Fixed Height (100% of Parent), No Scroll */}
                <div className="hidden md:flex w-64 lg:w-72 flex-shrink-0 h-full ">
                    <Sidebar />
                </div>

                {/* Mobile Drawer */}
                <div className="md:hidden absolute  top-4 left-4 z-50">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="bg-zinc-100 dark:bg-zinc-950">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-0">
                            <div className="h-full px-6 py-6 flex">
                                <Sidebar onItemClick={() => setIsSheetOpen(false)} />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Main Content Area - Independent Scroll */}
                <main className="flex-1 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="container max-w-3xl pt-20 pb-8 px-6 md:px-10 md:py-8 mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
