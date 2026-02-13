import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-950 font-mono selection:bg-black selection:text-white overflow-hidden">

            {/* Split Pane Container - Fixed Height, Centered */}
            <div className="flex w-full max-w-6xl h-full  overflow-hidden relative">

                {/* Sidebar - Fixed Height (100% of Parent), No Scroll */}
                <div className="hidden md:flex w-64 lg:w-72 flex-shrink-0 h-full ">
                    <Sidebar />
                </div>

                {/* Main Content Area - Independent Scroll */}
                <main className="flex-1 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="container max-w-3xl py-8 px-6 md:px-10 mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
