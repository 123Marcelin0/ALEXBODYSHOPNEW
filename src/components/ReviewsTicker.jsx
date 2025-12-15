import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
    { id: 1, name: 'Max M.', text: 'Endlich ein Shop mit Ahnung. Top Beratung!' },
    { id: 2, name: 'Lisa K.', text: 'Click & Collect funktioniert super easy.' },
    { id: 3, name: 'Tom S.', text: 'Beste Auswahl an US-Supps in der Stadt.' },
    { id: 4, name: 'Sarah L.', text: 'Mein Go-To für Protein Snacks.' },
];

export default function ReviewsTicker() {
    return (
        <section style={{ paddingBottom: '2rem' }}>
            <div style={{
                backgroundColor: 'var(--color-accent)',
                color: 'var(--color-accent-foreground)',
                padding: '1rem 0',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                position: 'relative'
            }}>
                <div style={{
                    display: 'inline-flex',
                    animation: 'marquee 20s linear infinite',
                    gap: '4rem'
                }}>
                    {[...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS].map((r, i) => (
                        <div key={i} className="flex items-center" style={{ gap: '1rem' }}>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="black" strokeWidth={0} />)}
                            </div>
                            <span style={{ fontWeight: 700, textTransform: 'uppercase' }}>{r.name}:</span>
                            <span>"{r.text}"</span>
                            <span style={{ margin: '0 2rem' }}>•</span>
                        </div>
                    ))}
                </div>
                <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <a
                    href="https://search.google.com/local/writereview?placeid=ChIJXW7HfsyHt0cRGjDhipo_ljQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                        fontSize: '0.75rem',
                        padding: '0.4rem 1rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        opacity: 0.8
                    }}
                >
                    <Star size={12} /> JETZT AUF GOOGLE BEWERTEN
                </a>
            </div>
        </section>
    );
}
