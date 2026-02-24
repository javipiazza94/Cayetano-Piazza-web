'use client';
import { useEffect, useState } from 'react';
import ArtistModule from '../components/ArtistModule';

export default function ArtistasPage() {
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
            <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '3rem', color: 'var(--accent)' }}>Nuestros Artistas</h1>
            <p style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--text-secondary)' }}>
                Los mejores tributos interpretados por músicos excepcionales.
            </p>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Cargando artistas...</p>
            ) : bands.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Aún no hay artistas registrados.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {bands.map(band => (
                        <ArtistModule key={band.id} artist={band} />
                    ))}
                </div>
            )}
        </div>
    );
}
