import { useState, useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Maneja el evento de scroll
    const handleScroll = () => {
        console.log('Scroll event triggered'); // Depuration
        console.log('ScrollY:', window.scrollY); // Depuration

        if (window.scrollY > 100) {
            console.log('ScrollY > 100, haciendo el botón visible'); 
            setIsVisible(true);
        } else {
            console.log('ScrollY <= 100, ocultando el botón'); 
            setIsVisible(false);
        }
    };

    useEffect(() => {
        console.log('Componente montado, registrando evento de scroll'); 

        // Register it
        window.addEventListener('scroll', handleScroll);

        // Verifify the initial scroll position
        handleScroll();

        return () => {
            console.log('Componente desmontado, eliminando evento de scroll'); 
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    useEffect(() => {
        console.log('Estado isVisible actualizado:', isVisible); 
    }, [isVisible]);

    // Scroll Function
    const scrollToTop = () => {
        console.log('Botón clickeado, haciendo scroll hacia arriba'); // Depuración
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            tabIndex={0} 
        >
            ↑
        </button>
    );
};

export default ScrollButton;