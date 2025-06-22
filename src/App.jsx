import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Content from "./components/Content.jsx";
import About from "./components/About.jsx";
import NotFound from "./components/NotFound.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";

const SplashScreen = () => (
    <div className='bg-stone-900 h-screen w-screen flex items-center justify-center'>
        <div className='flex items-end space-x-1'>
            <span className='text-3xl font-semibold text-slate-300'>Loading</span>
            <span className='w-2 h-2 bg-stone-500 rounded-full animate-bounce [animation-delay:-0.3s]'></span>
            <span className='w-2 h-2 bg-stone-500 rounded-full animate-bounce [animation-delay:-0.15s]'></span>
            <span className='w-2 h-2 bg-stone-500 rounded-full animate-bounce'></span>
        </div>
    </div>
);


// Root layout component that contains the Header, main content area, and Footer
const RootLayout = () => {
    return (
        <div className='bg-stone-900 h-screen w-screen flex items-center justify-center'>
            <div className='w-[96%] h-[92%] bg-neutral-800 flex flex-col justify-between shadow-lg overflow-hidden'>
                <Header/>
                <div className='flex-1 overflow-y-auto px-8 no-scrollbar'>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <SplashScreen/>;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout/>}>

                    <Route index element={<Content/>}/> {/* Root path */}
                    {/* Add more routes here */}
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="projects" element={<Projects/>}/>

                    {/* <Route path="projects" element={<Projects />} /> */}
                    <Route path="*" element={<NotFound/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
};