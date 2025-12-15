import React, { useEffect, useState } from 'react';
import { Instagram, Zap } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', id: 'hero' },
  { label: 'Beratung', id: 'quiz' },
  { label: 'Shop', id: 'catalog' },
  { label: 'Pläne', id: 'blueprints' },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('hero');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = React.useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Increased offset for better triggering

      let currentId = 'hero';
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentId = item.id;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = navRefs.current[activeId];
    if (activeLink) {
      setIndicatorStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        opacity: 1
      });
    }
  }, [activeId]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return (
    <nav style={{
      borderBottom: '1px solid var(--color-border)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 100
    }}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>
          ALEXX <span className="text-accent">BODYSHOP</span>
        </div>

        {/* Navigation Links - Desktop Only */}
        <div className="nav-links flex items-center" style={{ gap: '2rem', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              ref={el => navRefs.current[item.id] = el}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              style={{
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: activeId === item.id ? 'white' : 'var(--color-text-muted)',
                position: 'relative',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </a>
          ))}
          {/* Sliding Underline */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            height: '2px',
            backgroundColor: 'var(--color-accent)',
            boxShadow: '0 0 10px var(--color-accent)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth sliding transition
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            opacity: indicatorStyle.opacity,
            pointerEvents: 'none'
          }}></div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center" style={{ gap: '2rem' }}>
          {/* Status Indicator - Hide on very small screens to save space if needed, but keeping for now */}
          <div className="flex items-center status-indicator" style={{ gap: '0.75rem' }}>
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
        
        /* Hide nav links on mobile/tablet */
        @media (max-width: 968px) {
            .nav-links { display: none !important; }
            .status-indicator { display: none !important; } /* Simplify header on mobile */
        }
      `}</style>
    </nav>
  );
}
