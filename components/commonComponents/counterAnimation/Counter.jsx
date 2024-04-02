import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ initialValue, targetValue, label }) => {
    const [count, setCount] = useState(initialValue);
    const counterRef = useRef(null); // Ref to the counter element
    
    useEffect(() => {
        // Function to handle intersection
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Start counting animation
                    startCountAnimation();
                }
            });
        };

        // Create a new Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0.5 // Trigger when 50% of the element is visible
        });

        // Observe the counter element
        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        // Clean up function
        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []); // Run only once on component mount

    // Function to start the counting animation
    const startCountAnimation = () => {
        const speed = 400; // Adjust the speed here
        const incrementPerFrame = (targetValue - initialValue) / speed; // Calculate increment per frame

        const interval = setInterval(() => {
            if (count < targetValue) {
                setCount(prevCount => Math.min(prevCount + incrementPerFrame, targetValue));
            } else {
                clearInterval(interval);
            }
        }, 1);

        // Clean up function
        return () => clearInterval(interval);
    };

    return (
        <div ref={counterRef} className="counter">
            <div className="value">
                {Math.ceil(count) >= targetValue ? `${label}` : Math.ceil(count)}
            </div>
        </div>
    );
};

export default Counter;
