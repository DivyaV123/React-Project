'use client'
import { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 20) {
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
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
        title='Scroll To Top'
            className={`${styles.scrollToTopBtn} ${isVisible ? styles.show : ''} `}
            onClick={scrollToTop}
        >
            <img src="/icon_arrow_black.svg" alt="Scroll to Top" className={styles.arrowUp}/>
        </button>
    );
};

export default ScrollToTopButton;
