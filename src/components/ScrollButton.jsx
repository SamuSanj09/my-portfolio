import { useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
    console.log('ScrollButton component rendered');
    
    // Test if scrolling works on mount
    useEffect(() => {
        console.log('Testing scroll capabilities on mount');
    }, []);
    
    const scrollToTop = () => {
        console.log('Button clicked, attempting multiple scroll methods');
        
        // Method 1: Basic scrollTo
        window.scrollTo(0, 0);
        console.log('Method 1 executed');
        
        // Method 2: With behavior smooth
        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log('Method 2 executed');
        } catch (e) {
            console.error('Smooth scroll failed:', e);
        }
        
        // Method 3: Document element properties
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        console.log('Method 3 executed');
        
        // Method 4: requestAnimationFrame for smoother scrolling
        const scrollToTopAnimated = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            if (c > 0) {
                window.requestAnimationFrame(scrollToTopAnimated);
                window.scrollTo(0, c - c / 8);
            }
        };
        window.requestAnimationFrame(scrollToTopAnimated);
        console.log('Method 4 executed');
    };
    
    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default ScrollButton;