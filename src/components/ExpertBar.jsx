import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function ExpertBar() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 90,
            width: 'calc(100% - 2rem)',
            maxWidth: '450px'
        }}>
            <div style={{
                backgroundColor: 'rgba(20, 20, 20, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--color-accent)',
                borderRadius: '0', /* Industrial square look */
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)'
            }}>
                <div className="flex items-center" style={{ gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ width: 40, height: 40, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                            {/* Avatar */}
                            <img src="https://placehold.co/100x100/111/FFF?text=A" alt="Alex" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ position: 'absolute', bottom: -2, right: -2, width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10b981', border: '2px solid var(--color-bg)' }}></div>
                    </div>
                    <div className="flex flex-col">
                        <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text)' }}>UNSICHER?</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Frag den Boss direkt</span>
                    </div>
                </div>

                <a href="#" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}>
                    <MessageCircle size={16} /> WhatsApp
                </a>
            </div>
        </div>
    );
}
