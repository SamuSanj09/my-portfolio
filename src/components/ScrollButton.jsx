import React, { useState, useEffect } from 'react';
import './ScrollButton.css'; // Asegúrate de importar los estilos

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        console.log(window.scrollY);
        console.log("scrolling");
        if (window.scrollY > 10) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollButton;
