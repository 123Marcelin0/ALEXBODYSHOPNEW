import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef(null); // The dot
    const outlineRef = useRef(null); // The ring
    const requestRef = useRef(null);

    const mouseRef = useRef({ x: -100, y: -100 });
    const outlinePosRef = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const onMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Move dot instantly
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const animate = () => {
            // Lerp logic for outline
            const targetX = mouseRef.current.x;
            const targetY = mouseRef.current.y;

            const currentX = outlinePosRef.current.x;
            const currentY = outlinePosRef.current.y;

            // Smoothness factor
            const dx = targetX - currentX;
            const dy = targetY - currentY;

            outlinePosRef.current.x += dx * 0.15; // 0.15 speed
            outlinePosRef.current.y += dy * 0.15;

            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${outlinePosRef.current.x}px, ${outlinePosRef.current.y}px, 0)`;
            }

            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove);
        document.body.style.cursor = 'none'; // Global hide

        // Handle Links/Buttons Hover
        const handleMouseOver = (e) => {
            if (['A', 'BUTTON', 'INPUT', 'LABEL'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
                outlineRef.current?.classList.add('cursor-hover');
            }
        };
        const handleMouseOut = (e) => {
            outlineRef.current?.classList.remove('cursor-hover');
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(requestRef.current);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            {/* The Dot */}
            <div ref={cursorRef} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '8px',
                height: '8px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 10000,
                transform: 'translate3d(-100px, -100px, 0)', // initial off-screen
                marginTop: '-4px', // center pivot
                marginLeft: '-4px'
            }}></div>

            {/* The Outline */}
            <div ref={outlineRef} className="cursor-outline" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '40px',
                height: '40px',
                border: '1px solid rgba(255,255,255,0.5)',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 10000,
                transform: 'translate3d(-100px, -100px, 0)',
                marginTop: '-20px', // center pivot
                marginLeft: '-20px',
                transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s',
                mixBlendMode: 'difference' // Cool visibility against light backgrounds
            }}></div>

            <style>{`
                /* Hide default cursor on everything */
                body, a, button, input {
                    cursor: none !important;
                }
                
                .cursor-hover {
                    width: 60px !important;
                    height: 60px !important;
                    background-color: rgba(255,255,255,0.1);
                    border-color: transparent !important;
                    margin-top: -30px !important;
                    margin-left: -30px !important;
                }
            `}</style>
        </>
    );
}
