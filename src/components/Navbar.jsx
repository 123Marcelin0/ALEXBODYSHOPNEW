import React from 'react';
import { Instagram, Zap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{
      borderBottom: '1px solid var(--color-border)',
      padding: '1.5rem 0',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      <div className="container flex justify-between items-center">
        <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
          ALEXX <span className="text-accent">BODYSHOP</span>
        </div>

        <div className="flex items-center" style={{ gap: '2rem' }}>
          {/* Status Indicator */}
          <div className="flex items-center" style={{ gap: '0.75rem' }}>
            <div style={{ position: 'relative', display: 'flex' }}>
              <div style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
              }}></div>
              <div style={{
                position: 'absolute',
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: 'var(--color-accent)',
                opacity: 0.5,
                animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
              }}></div>
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }} className="text-accent">
              Open for Pickup
            </span>
          </div>
          <a href="https://www.instagram.com/alexx_bodyshop/?hl=en" target="_blank" rel="noopener noreferrer"
            className="btn-outline instagram-link"
            style={{
              padding: '0.6rem',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              color: 'var(--color-text)'
            }}>
            <Instagram size={20} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .instagram-link:hover {
          border-color: var(--color-accent) !important;
          color: var(--color-accent) !important;
          background-color: rgba(204, 255, 0, 0.1) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(204, 255, 0, 0.2);
        }
      `}</style>
    </nav>
  );
}
