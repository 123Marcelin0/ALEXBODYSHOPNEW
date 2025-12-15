import React from 'react';

export default function Footer() {
    return (
        <footer className="section" style={{
            borderTop: '1px solid var(--color-border)',
            marginTop: '4rem',
            paddingTop: '6rem',
            paddingBottom: '10rem',
            backgroundColor: 'var(--color-surface)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Marquee */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: '100%',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                opacity: 0.03,
                zIndex: 0,
                userSelect: 'none'
            }}>
                <div style={{
                    display: 'inline-block',
                    animation: 'footerMarquee 40s linear infinite',
                    fontSize: '18vw',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1
                }}>
                    ALEXX BODYSHOP — ALEXX BODYSHOP — ALEXX BODYSHOP — ALEXX BODYSHOP —
                </div>
                <div style={{
                    display: 'inline-block',
                    animation: 'footerMarquee 40s linear infinite',
                    fontSize: '18vw',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1
                }}>
                    ALEXX BODYSHOP — ALEXX BODYSHOP — ALEXX BODYSHOP — ALEXX BODYSHOP —
                </div>
            </div>
            <style>{`
        @keyframes footerMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

            <div className="container grid" style={{
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                position: 'relative',
                zIndex: 1,
                textAlign: 'center'
            }}>
                <div className="flex flex-col items-center" style={{ gap: '1.5rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.5rem' }}>ALEXX <span className="text-accent">BODYSHOP</span></h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', maxWidth: '300px' }}>
                        Dein lokaler Partner für Supplements in Premium-Qualität. Click & Collect noch heute.
                    </p>
                </div>

                <div className="flex flex-col items-center" style={{ gap: '1.5rem' }}>
                    <h4>Öffnungszeiten</h4>
                    <ul style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
                        <li style={{ display: 'grid', gridTemplateColumns: '80px 100px', gap: '1rem', textAlign: 'left' }}>
                            <span>Mo-Fr</span>
                            <span style={{ textAlign: 'right' }}>10:00 - 19:00</span>
                        </li>
                        <li style={{ display: 'grid', gridTemplateColumns: '80px 100px', gap: '1rem', textAlign: 'left' }}>
                            <span>Sa</span>
                            <span style={{ textAlign: 'right' }}>10:00 - 16:00</span>
                        </li>
                        <li style={{ display: 'grid', gridTemplateColumns: '80px 100px', gap: '1rem', textAlign: 'left' }}>
                            <span>So</span>
                            <span className="text-accent" style={{ textAlign: 'right' }}>Closed</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center" style={{ gap: '1.5rem' }}>
                    <h4>Rechtliches</h4>
                    <ul style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
                        <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'inherit'}>Impressum</li>
                        <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'inherit'}>Datenschutz</li>
                        <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'inherit'}>AGB</li>
                        <li style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = 'inherit'}>Widerrufsrecht</li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 1, marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                &copy; {new Date().getFullYear()} Alexx Bodyshop. Built for Performance.
            </div>
        </footer>
    );
}
