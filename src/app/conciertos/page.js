'use client';
import { useEffect, useState } from 'react';
import ConcertModule from '../components/ConcertModule';

export default function ConciertosPage() {
    const [concerts, setConcerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('upcoming');

    useEffect(() => {
        fetch('/api/concerts')
            .then(res => res.json())
            .then(data => {
                setConcerts(data);
                setLoading(false);
            });
    }, []);

    const now = new Date();

    // Filtramos conciertos futuros y pasados
    const upcomingConcerts = concerts.filter(c => new Date(c.date) >= now);

    // Los pasados los ordenamos de más reciente a más antiguo
    const pastConcerts = concerts
        .filter(c => new Date(c.date) < now)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Determinar qué lista mostrar
    const displayConcerts = activeTab === 'upcoming' ? upcomingConcerts : pastConcerts;

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '3.5rem', color: 'var(--accent)' }}>Cartelera</h1>
            <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }}>
                Vive la música en su estado más puro bajo la mágica luz de las velas.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', justifyContent: 'center' }}>
                <button
                    onClick={() => setActiveTab('upcoming')}
                    className="btn-primary"
                    style={{
                        background: activeTab === 'upcoming' ? 'var(--accent)' : 'transparent',
                        color: activeTab === 'upcoming' ? '#0b0c10' : 'var(--accent)',
                        padding: '8px 25px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        fontStyle: 'normal'
                    }}
                >
                    Próximos Conciertos
                </button>
                <button
                    onClick={() => setActiveTab('past')}
                    className="btn-primary"
                    style={{
                        background: activeTab === 'past' ? 'var(--accent)' : 'transparent',
                        color: activeTab === 'past' ? '#0b0c10' : 'var(--accent)',
                        padding: '8px 25px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        fontStyle: 'normal'
                    }}
                >
                    Conciertos Pasados
                </button>
            </div>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Cargando conciertos...</p>
            ) : displayConcerts.length === 0 ? (
                <p style={{ textAlign: 'center' }}>
                    {activeTab === 'upcoming' ? 'No hay conciertos programados por ahora.' : 'Aún no hay conciertos pasados.'}
                </p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {displayConcerts.map(concert => (
                        <ConcertModule key={concert.id} concert={concert} />
                    ))}
                </div>
            )}
        </div>
    );
}
