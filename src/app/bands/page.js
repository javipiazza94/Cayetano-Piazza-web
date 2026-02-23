'use client';
import { useEffect, useState } from 'react';

export default function BandsPage() {
    const [bands, setBands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/bands')
            .then(res => res.json())
            .then(data => {
                setBands(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '3rem', color: 'var(--accent)' }}>Nuestros Artistas</h1>
            <p style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--text-secondary)' }}>
                Los mejores tributos bajo una cuidada iluminación y un ambiente mágico.
            </p>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Cargando artistas...</p>
            ) : bands.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Aún no hay artistas registrados.</p>
            ) : (
                <div className="bands-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {bands.map(band => (
                        <div key={band.id} className="glass-panel" style={{ overflow: 'hidden', borderRadius: '4px' }}>
                            <div style={{
                                height: '200px',
                                background: band.imageUrl ? `linear-gradient(to bottom, transparent, var(--bg-color)), url("${band.imageUrl}") center/cover` : 'var(--accent-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-primary)'
                            }}>
                                {!band.imageUrl && <span>Sin imagen</span>}
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{band.name}</h3>
                                <h4 style={{ color: 'var(--accent)', marginBottom: '15px', fontFamily: 'Outfit, sans-serif', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                                    Tributo a {band.tributeTo}
                                </h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{band.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
}
