import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero({ onStartQuiz }) {
    return (
        <section className="section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(204,255,0,0.08) 0%, rgba(10,10,10,0) 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <div className="container grid" style={{ gridTemplateColumns: '1.2fr 0.8fr', alignItems: 'center', gap: '4rem' }}>

                {/* Content */}
                <div className="flex flex-col animate-fade-in" style={{ gap: '2rem', animationDelay: '0.1s' }}>
                    <div className="flex items-center" style={{ gap: '1rem' }}>
                        <span className="badge">Lingen (Ems)</span>
                        <span style={{ height: '1px', width: '50px', backgroundColor: 'var(--color-border)' }}></span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Local Supplement Store</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 0.95, letterSpacing: '-0.02em' }}>
                        DEIN ZIEL<br />
                        IST <span className="text-accent" style={{
                            display: 'inline-block',
                            position: 'relative',
                            padding: '0 0.5rem'
                        }}>
                            UNSER JOB
                            <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '10px', zIndex: -1 }} viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 10 L100 0 L100 10 Z" fill="rgba(204,255,0,0.2)" />
                            </svg>
                        </span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '550px', lineHeight: 1.6 }}>
                        Top-Produkte für High-Performer. Keine Wartezeit. <br />
                        Checke den Bestand online, reserviere per WhatsApp und hol es dir direkt ab.
                    </p>

                    <div className="flex" style={{ gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                        <button onClick={onStartQuiz} className="btn" style={{ minWidth: '200px' }}>
                            <Zap size={20} />
                            Goal-Getter Quiz
                        </button>
                        <button className="btn btn-outline" style={{ minWidth: '180px' }}>
                            Katalog ansehen
                        </button>
                    </div>

                    <div className="flex items-center" style={{ gap: '2rem', marginTop: '2rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', color: 'var(--color-accent)' }}>100%</h4>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Original Ware</span>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', color: 'var(--color-accent)' }}>0€</h4>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Versandkosten</span>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', color: 'var(--color-accent)' }}>24/7</h4>
                            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>Support</span>
                        </div>
                    </div>
                </div>

                {/* Visual */}
                <div style={{ position: 'relative', height: '500px', width: '100%' }} className="hero-visual">
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        background: 'linear-gradient(135deg, var(--color-surface) 0%, #0a0a0a 100%)',
                        border: '1px solid var(--color-border)',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '8rem',
                            color: 'var(--color-bg)',
                            textShadow: '-1px -1px 0 var(--color-border), 1px 1px 0 var(--color-border)',
                            transform: 'rotate(-90deg)',
                            opacity: 0.5,
                            userSelect: 'none'
                        }}>ALEXX</span>

                        {/* Floating Elements (Simulated Product Box) */}
                        <div style={{
                            position: 'absolute',
                            top: '-10%',
                            right: '-10%',
                            width: '60%',
                            height: '70%',
                            border: '2px solid var(--color-accent)',
                            backgroundColor: 'rgba(204,255,0,0.05)',
                            backdropFilter: 'blur(5px)',
                            zIndex: 2
                        }}></div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 968px) {
          .hero-visual { display: none !important; }
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
}
