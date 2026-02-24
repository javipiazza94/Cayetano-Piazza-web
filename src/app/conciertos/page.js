'use client';
import { useEffect, useState } from 'react';
import ConcertModule from '../components/ConcertModule';

export default function ConciertosPage() {
    const [concerts, setConcerts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/concerts')
            .then(res => res.json())
            .then(data => {
                setConcerts(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '3rem', color: 'var(--accent)' }}>Próximos Conciertos</h1>
            <p style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--text-secondary)' }}>
                Vive la música en su estado más puro bajo la mágica luz de las velas.
            </p>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Cargando conciertos...</p>
            ) : concerts.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No hay conciertos programados por ahora.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {concerts.map(concert => (
                        <ConcertModule key={concert.id} concert={concert} />
                    ))}
                </div>
            )}
        </div>
    );
}
