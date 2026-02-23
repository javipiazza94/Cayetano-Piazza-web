'use client';
import { useEffect, useState } from 'react';

export default function VenuesPage() {
    const [venues, setVenues] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/venues')
            .then(res => res.json())
            .then(data => {
                setVenues(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '3rem', color: 'var(--accent)' }}>Espacios Únicos</h1>
            <p style={{ textAlign: 'center', marginBottom: '60px', color: 'var(--text-secondary)' }}>
                Lugares mágicos elegidos especialmente para envolverte de la atmósfera de Glory Nights.
            </p>

            {loading ? (
                <p style={{ textAlign: 'center' }}>Cargando espacios...</p>
            ) : venues.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Aún no hay salas registradas.</p>
            ) : (
                <div className="bands-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {venues.map(venue => (
                        <div key={venue.id} className="glass-panel" style={{ overflow: 'hidden', borderRadius: '4px' }}>
                            <div style={{
                                height: '200px',
                                background: venue.imageUrl ? `linear-gradient(to bottom, transparent, var(--bg-color)), url("${venue.imageUrl}") center/cover` : 'var(--accent-muted)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--text-primary)'
                            }}>
                                {!venue.imageUrl && <span>Sin imagen</span>}
                            </div>
                            <div style={{ padding: '30px' }}>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{venue.name}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '5px' }}>📍 {venue.location}</p>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '15px' }}>👥 Capacidad: {venue.capacity} personas</p>
                                {venue.contactEmail && (
                                    <p style={{ color: 'var(--accent-dark)', fontSize: '0.9rem' }}>✉️ {venue.contactEmail}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
}
