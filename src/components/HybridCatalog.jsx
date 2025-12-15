import React from 'react';
import { MessageCircle, HelpCircle, Package, ArrowRight } from 'lucide-react';

const PRODUCTS = [
    { id: 1, name: 'Whey Protein Isolate', category: 'Muscle', price: '29,99€', image: 'https://placehold.co/300x400/222/FFF?text=WHEY' },
    { id: 2, name: 'Creatine Monohydrate', category: 'Muscle', price: '19,99€', image: 'https://placehold.co/300x400/222/FFF?text=CREATINE' },
    { id: 3, name: 'Pre–Workout V2', category: 'Energy', price: '34,99€', image: 'https://placehold.co/300x400/222/FFF?text=BOOSTER' },
    { id: 4, name: 'Omega 3 Essentials', category: 'Health', price: '14,99€', image: 'https://placehold.co/300x400/222/FFF?text=OMEGA' },
    { id: 5, name: 'Daily Vitamins', category: 'Health', price: '12,99€', image: 'https://placehold.co/300x400/222/FFF?text=VITAMINS' },
    { id: 6, name: 'Casein Night Protein', category: 'Muscle', price: '32,99€', image: 'https://placehold.co/300x400/222/FFF?text=CASEIN' },
];

export default function HybridCatalog() {
    const [activeCategory, setActiveCategory] = React.useState('All');

    const filteredProducts = activeCategory === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <section className="section" id="catalog">
            <div className="container">
                <div className="flex justify-between items-center" style={{ marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 className="section-title" style={{ margin: 0 }}>LATEST DROPS</h2>
                        <p className="text-muted">Frisch eingetroffen. Sofort abholbereit.</p>
                    </div>

                    <div className="flex" style={{ gap: '0.5rem' }}>
                        {['All', 'Muscle', 'Health'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className="badge"
                                style={{
                                    cursor: 'pointer',
                                    border: activeCategory === cat ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                                    fontSize: '1rem',
                                    padding: '0.5rem 1rem',
                                    backgroundColor: activeCategory === cat ? 'var(--color-accent)' : 'transparent',
                                    color: activeCategory === cat ? 'var(--color-accent-foreground)' : 'var(--color-text-muted)',
                                    transition: 'all 0.2s',
                                    outline: 'none'
                                }}
                                onMouseOver={e => {
                                    if (activeCategory !== cat) {
                                        e.target.style.borderColor = 'var(--color-accent)';
                                        e.target.style.color = 'var(--color-accent)';
                                    }
                                }}
                                onMouseOut={e => {
                                    if (activeCategory !== cat) {
                                        e.target.style.borderColor = 'var(--color-border)';
                                        e.target.style.color = 'var(--color-text-muted)';
                                    }
                                }}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {/* Bundle Teaser */}
                    <div className="card" style={{ gridColumn: '1 / -1', background: 'linear-gradient(90deg, #111 0%, #222 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', border: '1px solid var(--color-accent)' }}>
                        <div>
                            <h3>THE MORNING ROUTINE STACK</h3>
                            <p className="text-muted">Starte den Tag wie ein Pro. Greens + Omega + Multi.</p>
                            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-accent)' }}>49,99€</span>
                                <span style={{ textDecoration: 'line-through', color: 'var(--color-text-muted)' }}>65,00€</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn">
                                <MessageCircle size={20} /> Jetzt Reservieren
                            </button>
                            <button className="btn btn-outline">Detail-Infos</button>
                        </div>
                    </div>

                    {filteredProducts.map(p => (
                        <div key={p.id} className="card flex flex-col" style={{ padding: 0, overflow: 'hidden' }}>
                            <div style={{ height: '300px', width: '100%', position: 'relative', borderBottom: '1px solid var(--color-border)' }}>
                                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                                    onMouseOver={e => e.currentTarget.style.filter = 'none'}
                                    onMouseOut={e => e.currentTarget.style.filter = 'grayscale(100%)'} />
                                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                                    <span className="badge" style={{ backgroundColor: 'white', color: 'black' }}>{p.category}</span>
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{p.name}</h4>
                                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '1.5rem' }}>{p.price}</div>

                                <div className="flex flex-col" style={{ gap: '0.5rem', marginTop: 'auto' }}>
                                    <button className="btn" style={{ width: '100%', fontSize: '0.9rem' }}>
                                        <MessageCircle size={18} /> Reservieren
                                    </button>
                                    <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem', border: 'none', color: 'var(--color-text-muted)' }}>
                                        <HelpCircle size={18} style={{ marginRight: '0.5rem' }} /> Frage stellen
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
