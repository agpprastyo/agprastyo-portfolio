import  { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-6">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="glass text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-50/[0.5] "
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;