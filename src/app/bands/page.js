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
        <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '3rem', color: 'var(--accent)' }}>Nuestros Grupos Tributo</h1>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Cargando grupos...</p>
            ) : bands.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Aún no hay grupos registrados.</p>
            ) : (
                <div className="bands-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {bands.map(band => (
                        <div key={band.id} className="glass-panel" style={{ padding: '30px', borderRadius: '20px' }}>
                            <h2 style={{ color: 'white', marginBottom: '10px' }}>{band.name}</h2>
                            <h4 style={{ color: 'var(--accent)', marginBottom: '20px' }}>Tributo a {band.tributeTo}</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>{band.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
