import React, { useEffect, useState } from 'react';

export default function IntroOverlay({ onComplete }) {
    const [startSlide, setStartSlide] = useState(false);

    useEffect(() => {
        // Pulse phase
        const timer1 = setTimeout(() => {
            setStartSlide(true);
        }, 1000); // Wait 1s before lifting

        // Cleanup phase (notify parent to potentially unmount, though css slide is enough visually)
        const timer2 = setTimeout(() => {
            onComplete && onComplete();
        }, 1600); // 1s wait + 0.6s animation

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <>
            <div
                className="intro-overlay"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    backgroundColor: '#000',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                    transform: startSlide ? 'translateY(-100%)' : 'translateY(0)',
                    willChange: 'transform' // optimize performance
                }}
            >
                <h1
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        letterSpacing: '0.1em',
                        fontWeight: 900,
                        opacity: startSlide ? 0 : 1, // Fade out as it slides up
                        transition: 'opacity 0.4s',
                        animation: 'pulseText 1.5s infinite ease-in-out',
                        color: 'white' // Default color for first part
                    }}
                >
                    <span style={{ color: 'white' }}>ALEXX</span> <span style={{ color: 'var(--color-accent)' }}>BODYSHOP</span>
                </h1>
            </div>
            <style>{`
        @keyframes pulseText {
            0% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.05); text-shadow: 0 0 15px rgba(204, 255, 0, 0.2); }
            100% { opacity: 0.8; transform: scale(1); }
        }
      `}</style>
        </>
    );
}
