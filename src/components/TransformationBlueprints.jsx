import React, { useState } from 'react';
import { Dumbbell, Utensils, ClipboardList, Send, CheckCircle, Lock, Layout } from 'lucide-react';

export default function TransformationBlueprints() {
    const [showCustomForm, setShowCustomForm] = useState(false);

    return (
        <section className="section" id="blueprints" style={{ backgroundColor: '#0f0f0f', position: 'relative', overflow: 'hidden', paddingTop: '8rem', paddingBottom: '4rem' }}>

            {/* Background Pattern */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.5,
                pointerEvents: 'none'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ border: 'none', padding: 0, fontSize: '3rem', marginBottom: '1rem' }}>TRANSFORMATION<br /><span className="text-accent">BLUEPRINTS</span></h2>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        Wissenschaftlich fundierte Systeme für Training & Ernährung.
                        Digital, mobil und sofort abrufbar.
                    </p>
                </div>

                {/* Training Section */}
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Dumbbell size={24} className="text-accent" />
                        <h3 style={{ fontSize: '1.5rem', margin: 0 }}>TRAINING SYSTEMS</h3>
                        <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-border)' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {/* Training Card 1 */}
                        <div className="card" style={{
                            backgroundColor: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            display: 'flex', flexDirection: 'column', gap: '1.5rem',
                            minHeight: '320px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ width: 50, height: 50, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Layout size={24} />
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', letterSpacing: '0.05em' }}>READY-TO-GO</span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>MASS MONSTER VOL. 1</h3>
                                <p className="text-muted">Der Klassiker für maximalen Zuwachs. 4-er Split Fokus Hypertrophie.</p>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>Gym Required</span>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>Adv. Beginner</span>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>39,00€</div>
                                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Details</button>
                            </div>
                        </div>

                        {/* Training Card 2 */}
                        <div className="card" style={{
                            backgroundColor: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            display: 'flex', flexDirection: 'column', gap: '1.5rem',
                            minHeight: '320px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ width: 50, height: 50, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Layout size={24} />
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', letterSpacing: '0.05em' }}>READY-TO-GO</span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>HOME HERO</h3>
                                <p className="text-muted">Kein Gym? Kein Problem. Minimales Equipment, maximale Reize.</p>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>Home Workouts</span>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>All Levels</span>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>29,00€</div>
                                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nutrition Section */}
                <div style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Utensils size={24} className="text-accent" />
                        <h3 style={{ fontSize: '1.5rem', margin: 0 }}>NUTRITION PROTOCOLS</h3>
                        <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-border)' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {/* Nutrition Card 1 */}
                        <div className="card" style={{
                            backgroundColor: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            display: 'flex', flexDirection: 'column', gap: '1.5rem',
                            minHeight: '320px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ width: 50, height: 50, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Utensils size={24} />
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', letterSpacing: '0.05em' }}>READY-TO-GO</span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>SHRED MECHANICS</h3>
                                <p className="text-muted">Kein Hungern. Smartes Carb-Cycling für Definition.</p>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>High Protein</span>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>Flexible</span>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>29,00€</div>
                                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Details</button>
                            </div>
                        </div>

                        {/* Nutrition Card 2 */}
                        <div className="card" style={{
                            backgroundColor: 'var(--color-surface)',
                            border: '1px solid var(--color-border)',
                            display: 'flex', flexDirection: 'column', gap: '1.5rem',
                            minHeight: '320px'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ width: 50, height: 50, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                    <Utensils size={24} />
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px', letterSpacing: '0.05em' }}>READY-TO-GO</span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>BULK BLUEPRINT</h3>
                                <p className="text-muted">Clean Bulk Strategie ohne unnötigen Fettaufbau.</p>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>High Calorie</span>
                                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-border)', borderRadius: '4px', color: 'var(--color-text-muted)' }}>Performance</span>
                            </div>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>35,00€</div>
                                <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Built - Large Card */}
                <div className="card" style={{
                    gridColumn: '1 / -1',
                    background: 'linear-gradient(145deg, var(--color-surface) 0%, #1a1a1a 100%)',
                    border: '1px solid var(--color-accent)',
                    padding: '0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                }}>
                    <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Personal Coaching</div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>CUSTOM BUILT<br />PROTOCOL</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><CheckCircle size={18} color="var(--color-accent)" /> 100% Individuelle Makros & Kalorien</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><CheckCircle size={18} color="var(--color-accent)" /> Berücksichtigung von Verletzungen</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}><CheckCircle size={18} color="var(--color-accent)" /> 24/7 WhatsApp Support</li>
                        </ul>

                        {!showCustomForm ? (
                            <button onClick={() => setShowCustomForm(true)} className="btn" style={{ width: 'fit-content' }}>
                                <ClipboardList size={20} /> Plan auf mich zuschneiden
                            </button>
                        ) : (
                            <div className="animate-fade-in" style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                border: '1px solid var(--color-border)'
                            }}>
                                <h4 style={{ marginBottom: '1rem' }}>Dein Profil Flash-Check:</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                                    <input type="text" placeholder="Gewicht (kg)" style={{ padding: '0.8rem', backgroundColor: '#000', border: '1px solid var(--color-border)', color: 'white' }} />
                                    <input type="text" placeholder="Größe (cm)" style={{ padding: '0.8rem', backgroundColor: '#000', border: '1px solid var(--color-border)', color: 'white' }} />
                                    <input type="text" placeholder="Ziel (Stichwort)" style={{ gridColumn: '1 / -1', padding: '0.8rem', backgroundColor: '#000', border: '1px solid var(--color-border)', color: 'white' }} />
                                </div>
                                <button className="btn" style={{ width: '100%' }}>
                                    <Send size={18} /> Anfrage an Alex senden
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Visual Side of Custom Card */}
                    <div style={{
                        position: 'relative',
                        minHeight: '300px',
                        borderLeft: '1px solid var(--color-border)',
                        background: 'radial-gradient(circle at center, rgba(40,40,40,0.5) 0%, rgba(10,10,10,0.8) 100%)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        {/* Mock interface lines */}
                        <div style={{ width: '80%', height: '80%', border: '1px dashed var(--color-border)', borderRadius: '12px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '10%', left: '10%', right: '10%', height: '10px', backgroundColor: 'var(--color-surface)' }}></div>
                            <div style={{ position: 'absolute', top: '20%', left: '10%', width: '40%', height: '10px', backgroundColor: 'var(--color-surface)' }}></div>

                            <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', textAlign: 'right' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(255,255,255,0.1)' }}>ALEXX</div>
                                <div style={{ color: 'var(--color-accent)', fontWeight: 700 }}>VERIFIED COACH</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upsell Indicator */}
                <div style={{ gridColumn: '1/-1', textAlign: 'center', marginTop: '4rem', opacity: 0.7 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '100px', border: '1px solid var(--color-border)' }}>
                        <Lock size={14} /> Kostenlos freischalten ab 100€ Einkaufswert
                    </div>
                </div>

            </div>
        </section>
    );
}
