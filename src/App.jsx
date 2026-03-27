import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};