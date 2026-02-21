'use client';
import { useEffect, useState } from 'react';

export default function ConcertsPage() {
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
        <div className="container animate-fade-in" style={{ padding: '40px 20px' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '3rem', color: 'var(--accent)' }}>Próximos Conciertos</h1>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Cargando conciertos...</p>
            ) : concerts.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No hay conciertos programados por ahora.</p>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                    {concerts.map(concert => (
                        <div key={concert.id} className="glass-panel" style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                            <div>
                                <h2 style={{ color: 'white' }}>{concert.bandName}</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>📍 {concert.venueName} - {concert.location}</p>
                                <p style={{ color: 'var(--accent)', fontWeight: 'bold', marginTop: '10px' }}>📅 {new Date(concert.date).toLocaleString('es-ES')}</p>
                            </div>
                            <a href={concert.ticketUrl || '#'} target="_blank" rel="noreferrer" className="btn-primary">
                                Comprar Entradas
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
