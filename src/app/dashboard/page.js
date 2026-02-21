'use client';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('bands');

    // Data State
    const [bands, setBands] = useState([]);
    const [venues, setVenues] = useState([]);

    // Forms State
    const [bandForm, setBandForm] = useState({ name: '', tributeTo: '', description: '' });
    const [venueForm, setVenueForm] = useState({ name: '', location: '', capacity: '' });
    const [concertForm, setConcertForm] = useState({ band_id: '', venue_id: '', date: '' });

    const fetchData = async () => {
        fetch('/api/bands').then(res => res.json()).then(setBands);
        fetch('/api/venues').then(res => res.json()).then(setVenues);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEntitySubmit = async (e, type, endpoint, formData) => {
        e.preventDefault();
        await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        alert(`${type} guardado con éxito!`);
        fetchData();
    };

    const inputStyle = { width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', background: 'rgba(0,0,0,0.3)', color: 'white', border: '1px solid var(--glass-border)' };

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--accent)' }}>Panel del Promotor</h1>
            <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }}>
                Gestión de bases de datos para bandas, salas y conciertos.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', justifyContent: 'center' }}>
                {['bands', 'venues', 'concerts'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="btn-primary"
                        style={{
                            background: activeTab === tab ? 'var(--accent)' : 'transparent',
                            color: activeTab === tab ? '#0b0c10' : 'var(--accent)',
                            padding: '8px 20px',
                            fontSize: '0.9rem'
                        }}
                    >
                        {tab === 'bands' ? 'Bandas' : tab === 'venues' ? 'Salas' : 'Conciertos'}
                    </button>
                ))}
            </div>

            <div className="glass-panel" style={{ padding: '30px' }}>
                {activeTab === 'bands' && (
                    <div>
                        <h2>Añadir Banda</h2>
                        <form onSubmit={(e) => handleEntitySubmit(e, 'Banda', '/api/bands', bandForm)} style={{ marginTop: '20px' }}>
                            <input style={inputStyle} type="text" placeholder="Nombre (ej. Mecano Revival)" required value={bandForm.name} onChange={e => setBandForm({ ...bandForm, name: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="Tributo a (ej. Meccano)" required value={bandForm.tributeTo} onChange={e => setBandForm({ ...bandForm, tributeTo: e.target.value })} />
                            <textarea style={{ ...inputStyle, resize: 'vertical' }} rows="3" placeholder="Descripción" value={bandForm.description} onChange={e => setBandForm({ ...bandForm, description: e.target.value })}></textarea>
                            <button type="submit" className="btn-primary">Guardar Banda</button>
                        </form>
                    </div>
                )}

                {activeTab === 'venues' && (
                    <div>
                        <h2>Añadir Sala</h2>
                        <form onSubmit={(e) => handleEntitySubmit(e, 'Sala', '/api/venues', venueForm)} style={{ marginTop: '20px' }}>
                            <input style={inputStyle} type="text" placeholder="Nombre de la Sala" required value={venueForm.name} onChange={e => setVenueForm({ ...venueForm, name: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="Ubicación" required value={venueForm.location} onChange={e => setVenueForm({ ...venueForm, location: e.target.value })} />
                            <input style={inputStyle} type="number" placeholder="Capacidad" required value={venueForm.capacity} onChange={e => setVenueForm({ ...venueForm, capacity: e.target.value })} />
                            <button type="submit" className="btn-primary">Guardar Sala</button>
                        </form>
                    </div>
                )}

                {activeTab === 'concerts' && (
                    <div>
                        <h2>Programar Concierto</h2>
                        <form onSubmit={(e) => handleEntitySubmit(e, 'Concierto', '/api/concerts', concertForm)} style={{ marginTop: '20px' }}>
                            <select style={inputStyle} required value={concertForm.band_id} onChange={e => setConcertForm({ ...concertForm, band_id: e.target.value })}>
                                <option value="" disabled style={{ color: 'gray' }}>Selecciona una Banda</option>
                                {bands.map(b => <option key={b.id} value={b.id} style={{ background: '#1f2833' }}>{b.name}</option>)}
                            </select>

                            <select style={inputStyle} required value={concertForm.venue_id} onChange={e => setConcertForm({ ...concertForm, venue_id: e.target.value })}>
                                <option value="" disabled style={{ color: 'gray' }}>Selecciona una Sala</option>
                                {venues.map(v => <option key={v.id} value={v.id} style={{ background: '#1f2833' }}>{v.name}</option>)}
                            </select>

                            <input style={inputStyle} type="datetime-local" required value={concertForm.date} onChange={e => setConcertForm({ ...concertForm, date: e.target.value })} />
                            <button type="submit" className="btn-primary">Programar Concierto</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
