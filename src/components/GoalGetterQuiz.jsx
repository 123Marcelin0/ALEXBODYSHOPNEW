import React, { useState, useEffect } from 'react';
import { Dumbbell, Flame, Heart, TrendingUp, Trophy, ArrowRight, Check, MessageCircle, Activity, Loader2, Zap } from 'lucide-react';

const GOALS = [
    { id: 'muscle', label: 'MUSKELAUFBAU', icon: Dumbbell, desc: 'Maximale Hypertrophie & Kraft.' },
    { id: 'fatloss', label: 'DEFINITION', icon: Flame, desc: 'Fettverbrennung & Muskelschutz.' },
    { id: 'health', label: 'PERFORMANCE', icon: Heart, desc: 'Energie, Fokus & Gesundheit.' }
];

const EXPERIENCE = [
    { id: 'beginner', label: 'STARTER', icon: TrendingUp, desc: 'Ich lege gerade den Grundstein.' },
    { id: 'pro', label: 'ATHLETE', icon: Trophy, desc: 'Ich will das nächste Level.' }
];

const RESULTS = {
    'muscle-beginner': {
        title: 'MUSCLE STARTER KIT',
        desc: 'Das Fundament für massiven Aufbau. Kein Schnickschnack, nur Resultate.',
        products: [
            { name: '100% Whey Protein', reason: 'Essentiell für Reparatur nach dem Training.' },
            { name: 'Creatine Monohydrate', reason: 'Der #1 Booster für Kraft & Volumen.' }
        ],
        price: '49,90€',
        oldPrice: '59,90€'
    },
    'muscle-pro': {
        title: 'HYPERTROPHY PRO STACK',
        desc: 'Für Erfahrene, die Plateaus durchbrechen wollen.',
        products: [
            { name: 'Iso-Whey Hydrolysat', reason: 'Schnellste Absorption für Profis.' },
            { name: 'High-Stim Pre-Workout', reason: 'Maximaler Fokus für brutale Sätze.' },
            { name: 'EAA Intra-Support', reason: 'Muskelschutz während des Trainings.' }
        ],
        price: '89,90€',
        oldPrice: '110,00€'
    },
    'fatloss': {
        title: 'SHREDDED DEFINITION PACK',
        desc: 'Behalte die Muskeln, verliere das Fett.',
        products: [
            { name: 'Thermogenic Burner', reason: 'Kurbelt den Stoffwechsel maximal an.' },
            { name: 'Shape Shake (Casein)', reason: 'Langzeit-Sättigung ohne Kalorien.' }
        ],
        price: '55,00€',
        oldPrice: '75,00€'
    },
    'health': {
        title: 'DAILY VITALITY SYSTEM',
        desc: 'Das Upgrade für deinen stressigen Alltag.',
        products: [
            { name: 'Omega-3 Gold', reason: 'Brain-Power & Entzündungshemmung.' },
            { name: 'Greens & Multivitamin', reason: 'Alle Mikronährstoffe in einem Scoop.' }
        ],
        price: '39,90€',
        oldPrice: '50,00€'
    }
};

export default function GoalGetterQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [analyzing, setAnalyzing] = useState(false);

    const handleSelect = (key, value) => {
        setAnswers(prev => ({ ...prev, [key]: value }));
        const nextStep = step + 1;

        if (nextStep === 2) {
            setAnalyzing(true);
            setTimeout(() => {
                setAnalyzing(false);
                setStep(nextStep);
            }, 1500);
        } else {
            setStep(nextStep);
        }
    };

    const restart = () => {
        setStep(0);
        setAnswers({});
        setAnalyzing(false);
    };

    const getResult = () => {
        let key = '';
        if (answers.goal === 'muscle') {
            key = answers.experience === 'beginner' ? 'muscle-beginner' : 'muscle-pro';
        } else {
            key = answers.goal === 'fatloss' ? 'fatloss' : 'health';
        }
        return RESULTS[key];
    };

    const result = step === 2 && !analyzing ? getResult() : null;

    return (
        <section className="section bg-surface" id="quiz" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            scrollMarginTop: '0',
            position: 'relative',
            padding: '2rem 0'
        }}>
            <div className="container" style={{ width: '100%' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>

                    {/* Header (Hidden on Analysis/Result for clean look) */}
                    {step < 2 && !analyzing && (
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in">
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-accent)', marginBottom: '1rem', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em' }}>
                                <Zap size={16} fill="currentColor" /> AI-Powered Configurator
                            </div>
                            <h2 className="section-title" style={{ border: 'none', padding: 0, fontSize: '3rem', marginBottom: '1rem' }}>GOAL GETTER</h2>
                            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Dein perfekter Stack in wenigen Klicks.</p>

                            {/* Steps Indicator */}
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                                <div style={{ width: '40px', height: '4px', backgroundColor: step >= 0 ? 'var(--color-accent)' : 'var(--color-border)' }}></div>
                                <div style={{ width: '40px', height: '4px', backgroundColor: step >= 1 ? 'var(--color-accent)' : 'var(--color-border)' }}></div>
                                <div style={{ width: '40px', height: '4px', backgroundColor: step >= 2 ? 'var(--color-accent)' : 'var(--color-border)' }}></div>
                            </div>
                        </div>
                    )}

                    {analyzing && (
                        <div className="flex flex-col items-center justify-center animate-fade-in" style={{ height: '400px' }}>
                            <Loader2 size={60} className="text-accent spin" style={{ animation: 'spin 1s linear infinite' }} />
                            <h3 style={{ marginTop: '2rem', fontSize: '1.5rem' }}>Analysiere Profil...</h3>
                            <p className="text-muted">Matche mit lokalem Inventar...</p>
                            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                        </div>
                    )}

                    {!analyzing && step === 0 && (
                        <div className="grid animate-fade-in" style={{ gap: '1.5rem' }}>
                            {GOALS.map(g => (
                                <button key={g.id}
                                    onClick={() => handleSelect('goal', g.id)}
                                    className="goal-card"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '2rem',
                                        padding: '2rem',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--color-border)',
                                        textAlign: 'left',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                                        e.currentTarget.querySelector('.icon-wrap').style.transform = 'scale(1.1)';
                                        e.currentTarget.querySelector('.icon-wrap').style.color = 'var(--color-accent)';
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                                        e.currentTarget.querySelector('.icon-wrap').style.transform = 'scale(1)';
                                        e.currentTarget.querySelector('.icon-wrap').style.color = 'white';
                                    }}
                                >
                                    <div className="icon-wrap" style={{
                                        transition: 'all 0.3s',
                                        color: 'white'
                                    }}>
                                        <g.icon size={48} strokeWidth={1} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>{g.label}</h3>
                                        <p className="text-muted" style={{ margin: 0 }}>{g.desc}</p>
                                    </div>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        borderRadius: '50%',
                                        border: '1px solid var(--color-border)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <ArrowRight size={20} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {!analyzing && step === 1 && (
                        <div className="grid animate-fade-in" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <h3 style={{ gridColumn: '1/-1', textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem' }}>WIE LANGE BIST DU DABEI?</h3>
                            {EXPERIENCE.map(e => (
                                <button key={e.id}
                                    onClick={() => handleSelect('experience', e.id)}
                                    className="goal-card"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '1.5rem',
                                        padding: '3rem 2rem',
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--color-border)',
                                        cursor: 'pointer',
                                        textAlign: 'center',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseOver={e => {
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                    }}
                                    onMouseOut={e => {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ color: 'var(--color-accent)' }}>
                                        <e.icon size={48} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{e.label}</h3>
                                        <p className="text-muted" style={{ margin: 0, fontSize: '0.9rem' }}>{e.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {!analyzing && step === 2 && result && (
                        <div className="animate-fade-in" style={{ textAlign: 'center' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                padding: '0.5rem 1rem', borderRadius: '100px',
                                border: '1px solid var(--color-accent)', color: 'var(--color-accent)',
                                marginBottom: '2rem', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase'
                            }}>
                                <Check size={14} /> Perfect Match Found
                            </div>

                            <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1rem' }}>{result.title}</h1>
                            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 3rem auto' }}>{result.desc}</p>

                            <div className="flex flex-col md-row" style={{ gap: '2rem', alignItems: 'flex-start' }}>
                                {/* Product Detail Card */}
                                <div style={{
                                    flex: 1,
                                    backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)',
                                    padding: '2rem', width: '100%', textAlign: 'left',
                                    position: 'relative', overflow: 'hidden'
                                }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--color-accent)' }}></div>

                                    <h4 style={{ marginBottom: '2rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.1em' }}>Dein Expert Stack:</h4>

                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        {result.products.map((p, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ minWidth: '24px', paddingTop: '4px' }}>
                                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-accent)' }}></div>
                                                </div>
                                                <div>
                                                    <span style={{ display: 'block', fontWeight: 700, fontSize: '1.1rem' }}>{p.name}</span>
                                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{p.reason}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}>Gesamtpaket</div>
                                            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-text)' }}>
                                                {result.price} <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: 'var(--color-text-muted)', marginLeft: '0.5rem' }}>{result.oldPrice}</span>
                                            </div>
                                        </div>
                                        <button className="btn" style={{ padding: '1rem 2rem' }}>
                                            <MessageCircle size={20} /> Jetzt Reservieren
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button onClick={restart} style={{ marginTop: '2rem', background: 'none', border: 'none', color: 'var(--color-text-muted)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}>
                                Start New Analysis
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
