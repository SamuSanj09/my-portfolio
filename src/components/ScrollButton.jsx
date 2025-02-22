import { useEffect, useState } from 'react';
import './ScrollButton.css';
import { BiArrowFromBottom } from "react-icons/bi";


const ScrollButton = () => {
    console.log('ScrollButton component rendered');
    const [isVisible, setIsVisible] = useState(false);

    // Detecta el desplazamiento y muestra el botón cuando se hayan desplazado 300px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                console.log('Scroll detected, setting visibility to true');
                setIsVisible(true);
            } else {
                console.log('Scroll detected, setting visibility to false');
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento de scroll cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        console.log('Button clicked, attempting to scroll to top');
        
        // Method 3: Document element properties
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        console.log('Scroll to top executed');
    };

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <BiArrowFromBottom />
            ↑ 
        </button>
    );
};

export default ScrollButton;
