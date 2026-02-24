'use client';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('bands');

    // Data State
    const [bands, setBands] = useState([]);
    const [venues, setVenues] = useState([]);

    // Editing State
    const [editingId, setEditingId] = useState({ bands: null, venues: null, concerts: null });

    // Forms State
    const initialBand = { name: '', tributeTo: '', description: '', imageUrl: '', videoUrl: '' };
    const initialVenue = { name: '', location: '', capacity: '', imageUrl: '', videoUrl: '', description: '' };
    const initialConcert = { band_id: '', venue_id: '', date: '', ticketUrl: '', videoUrl: '', description: '' };

    const [bandForm, setBandForm] = useState(initialBand);
    const [venueForm, setVenueForm] = useState(initialVenue);
    const [concertForm, setConcertForm] = useState(initialConcert);
    const [concerts, setConcerts] = useState([]);
    const [messages, setMessages] = useState([]);

    const fetchData = async () => {
        fetch('/api/bands').then(res => res.json()).then(setBands);
        fetch('/api/venues').then(res => res.json()).then(setVenues);
        fetch('/api/concerts').then(res => res.json()).then(setConcerts);
        fetch('/api/contact').then(res => res.json()).then(setMessages);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEntitySubmit = async (e, type, endpoint, formData, tabKey) => {
        e.preventDefault();
        const isEditing = editingId[tabKey] !== null;
        const method = isEditing ? 'PUT' : 'POST';
        const payload = isEditing ? { ...formData, id: editingId[tabKey] } : formData;

        await fetch(endpoint, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        alert(`${type} ${isEditing ? 'actualizado' : 'guardado'} con éxito!`);
        cancelEdit(tabKey);
        fetchData();
    };

    const handleDelete = async (endpoint, id) => {
        if (!confirm('¿Estás seguro de que deseas eliminar este elemento?')) return;
        await fetch(`${endpoint}?id=${id}`, { method: 'DELETE' });
        fetchData();
    };

    const cancelEdit = (tabKey) => {
        setEditingId({ ...editingId, [tabKey]: null });
        if (tabKey === 'bands') setBandForm(initialBand);
        if (tabKey === 'venues') setVenueForm(initialVenue);
        if (tabKey === 'concerts') setConcertForm(initialConcert);
    };

    const startEdit = (tabKey, item) => {
        setEditingId({ ...editingId, [tabKey]: item.id });
        if (tabKey === 'bands') setBandForm({ name: item.name, tributeTo: item.tributeTo, description: item.description || '', imageUrl: item.imageUrl || '', videoUrl: item.videoUrl || '' });
        if (tabKey === 'venues') setVenueForm({ name: item.name, location: item.location, capacity: item.capacity || '', imageUrl: item.imageUrl || '', videoUrl: item.videoUrl || '', description: item.description || '' });
        if (tabKey === 'concerts') setConcertForm({ band_id: item.band_id, venue_id: item.venue_id, date: item.date, ticketUrl: item.ticketUrl || '', videoUrl: item.videoUrl || '', description: item.description || '' });
    };

    const inputStyle = { width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', background: 'rgba(0,0,0,0.3)', color: 'white', border: '1px solid var(--glass-border)' };

    return (
        <div className="container animate-fade-in" style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--accent)' }}>Panel del Promotor</h1>
            <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }}>
                Gestión de bases de datos para bandas, salas y conciertos.
            </p>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['bands', 'venues', 'concerts', 'messages'].map(tab => (
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
                        {tab === 'bands' ? 'Bandas' : tab === 'venues' ? 'Salas' : tab === 'concerts' ? 'Conciertos' : 'Mensajes'}
                    </button>
                ))}
            </div>

            <div className="glass-panel" style={{ padding: '30px' }}>
                {activeTab === 'bands' && (
                    <div>
                        <h2>{editingId.bands ? 'Editar Banda' : 'Añadir Banda'}</h2>
                        <form onSubmit={(e) => handleEntitySubmit(e, 'Banda', '/api/bands', bandForm, 'bands')} style={{ marginTop: '20px' }}>
                            <input style={inputStyle} type="text" placeholder="Nombre (ej. Mecano Revival)" required value={bandForm.name} onChange={e => setBandForm({ ...bandForm, name: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="Tributo a (ej. Meccano)" required value={bandForm.tributeTo} onChange={e => setBandForm({ ...bandForm, tributeTo: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="URL de la imagen (opcional)" value={bandForm.imageUrl} onChange={e => setBandForm({ ...bandForm, imageUrl: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="URL del vídeo (mp4/webm) (opcional)" value={bandForm.videoUrl} onChange={e => setBandForm({ ...bandForm, videoUrl: e.target.value })} />
                            <textarea style={{ ...inputStyle, resize: 'vertical' }} rows="3" placeholder="Descripción" value={bandForm.description} onChange={e => setBandForm({ ...bandForm, description: e.target.value })}></textarea>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="submit" className="btn-primary">{editingId.bands ? 'Actualizar Banda' : 'Guardar Banda'}</button>
                                {editingId.bands && <button type="button" onClick={() => cancelEdit('bands')} className="btn-primary" style={{ background: 'transparent', color: 'gray', borderColor: 'gray' }}>Cancelar</button>}
                            </div>
                        </form>

                        <h3 style={{ marginTop: '40px', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>Bandas Registradas</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {bands.map(b => (
                                <div key={b.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '5px' }}>
                                    <div>
                                        <strong>{b.name}</strong> <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>(Tributo a {b.tributeTo})</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => startEdit('bands', b)} style={{ background: 'transparent', color: '#4da6ff', border: 'none', cursor: 'pointer' }}>Editar</button>
                                        <button onClick={() => handleDelete('/api/bands', b.id)} style={{ background: 'transparent', color: '#ff4d4d', border: 'none', cursor: 'pointer' }}>Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'venues' && (
                    <div>
                        <h2>{editingId.venues ? 'Editar Sala' : 'Añadir Sala'}</h2>
                        <form onSubmit={(e) => handleEntitySubmit(e, 'Sala', '/api/venues', venueForm, 'venues')} style={{ marginTop: '20px' }}>
                            <input style={inputStyle} type="text" placeholder="Nombre de la Sala" required value={venueForm.name} onChange={e => setVenueForm({ ...venueForm, name: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="Ubicación" required value={venueForm.location} onChange={e => setVenueForm({ ...venueForm, location: e.target.value })} />
                            <input style={inputStyle} type="number" placeholder="Capacidad" required value={venueForm.capacity} onChange={e => setVenueForm({ ...venueForm, capacity: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="URL de la imagen (opcional)" value={venueForm.imageUrl} onChange={e => setVenueForm({ ...venueForm, imageUrl: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="URL del vídeo (mp4/webm) (opcional)" value={venueForm.videoUrl} onChange={e => setVenueForm({ ...venueForm, videoUrl: e.target.value })} />
                            <textarea style={{ ...inputStyle, resize: 'vertical' }} rows="3" placeholder="Descripción del espacio" value={venueForm.description} onChange={e => setVenueForm({ ...venueForm, description: e.target.value })}></textarea>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="submit" className="btn-primary">{editingId.venues ? 'Actualizar Sala' : 'Guardar Sala'}</button>
                                {editingId.venues && <button type="button" onClick={() => cancelEdit('venues')} className="btn-primary" style={{ background: 'transparent', color: 'gray', borderColor: 'gray' }}>Cancelar</button>}
                            </div>
                        </form>

                        <h3 style={{ marginTop: '40px', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>Salas Registradas</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {venues.map(v => (
                                <div key={v.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '5px' }}>
                                    <div>
                                        <strong>{v.name}</strong> <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>({v.location})</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => startEdit('venues', v)} style={{ background: 'transparent', color: '#4da6ff', border: 'none', cursor: 'pointer' }}>Editar</button>
                                        <button onClick={() => handleDelete('/api/venues', v.id)} style={{ background: 'transparent', color: '#ff4d4d', border: 'none', cursor: 'pointer' }}>Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'concerts' && (
                    <div>
                        <h2>{editingId.concerts ? 'Editar Concierto' : 'Programar Concierto'}</h2>
                        <form onSubmit={(e) => handleEntitySubmit(e, 'Concierto', '/api/concerts', concertForm, 'concerts')} style={{ marginTop: '20px' }}>
                            <select style={inputStyle} required value={concertForm.band_id} onChange={e => setConcertForm({ ...concertForm, band_id: e.target.value })}>
                                <option value="" disabled style={{ color: 'gray' }}>Selecciona una Banda</option>
                                {bands.map(b => <option key={b.id} value={b.id} style={{ background: '#1f2833' }}>{b.name}</option>)}
                            </select>

                            <select style={inputStyle} required value={concertForm.venue_id} onChange={e => setConcertForm({ ...concertForm, venue_id: e.target.value })}>
                                <option value="" disabled style={{ color: 'gray' }}>Selecciona una Sala</option>
                                {venues.map(v => <option key={v.id} value={v.id} style={{ background: '#1f2833' }}>{v.name}</option>)}
                            </select>

                            <input style={inputStyle} type="datetime-local" required value={concertForm.date} onChange={e => setConcertForm({ ...concertForm, date: e.target.value })} />
                            <input style={inputStyle} type="url" placeholder="URL de venta de entradas (opcional)" value={concertForm.ticketUrl} onChange={e => setConcertForm({ ...concertForm, ticketUrl: e.target.value })} />
                            <input style={inputStyle} type="text" placeholder="URL del vídeo promocional (opcional)" value={concertForm.videoUrl} onChange={e => setConcertForm({ ...concertForm, videoUrl: e.target.value })} />
                            <textarea style={{ ...inputStyle, resize: 'vertical' }} rows="3" placeholder="Descripción del concierto" value={concertForm.description} onChange={e => setConcertForm({ ...concertForm, description: e.target.value })}></textarea>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button type="submit" className="btn-primary">{editingId.concerts ? 'Actualizar Concierto' : 'Programar Concierto'}</button>
                                {editingId.concerts && <button type="button" onClick={() => cancelEdit('concerts')} className="btn-primary" style={{ background: 'transparent', color: 'gray', borderColor: 'gray' }}>Cancelar</button>}
                            </div>
                        </form>

                        <h3 style={{ marginTop: '40px', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>Conciertos Programados</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {concerts.map(c => (
                                <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '5px' }}>
                                    <div>
                                        <strong>{c.bandName}</strong> <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>en {c.venueName} - {new Date(c.date).toLocaleDateString()}</span>
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <button onClick={() => startEdit('concerts', c)} style={{ background: 'transparent', color: '#4da6ff', border: 'none', cursor: 'pointer' }}>Editar</button>
                                        <button onClick={() => handleDelete('/api/concerts', c.id)} style={{ background: 'transparent', color: '#ff4d4d', border: 'none', cursor: 'pointer' }}>Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'messages' && (
                    <div>
                        <h2>Mensajes de Contacto</h2>
                        <h3 style={{ marginTop: '20px', marginBottom: '20px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px' }}>Bandeja de Entrada</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {messages.length === 0 ? (
                                <p style={{ color: 'gray' }}>No hay mensajes nuevos.</p>
                            ) : messages.map(msg => (
                                <div key={msg.id} style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                        <div>
                                            <strong style={{ fontSize: '1.2rem', color: 'var(--accent)' }}>{msg.senderName}</strong> <span style={{ color: 'gray', fontSize: '0.9rem' }}> &lt;{msg.senderEmail}&gt;</span>
                                            <div style={{ fontSize: '0.85rem', color: '#4da6ff', marginTop: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>Asunto: {msg.type}</div>
                                            <div style={{ fontSize: '0.8rem', color: 'gray', marginTop: '2px' }}>Recibido: {new Date(msg.created_at).toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short' })}</div>
                                        </div>
                                        <button onClick={() => handleDelete('/api/contact', msg.id)} style={{ background: 'transparent', color: '#ff4d4d', border: 'none', cursor: 'pointer', padding: '5px 10px', fontWeight: 'bold' }}>Eliminar</button>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', whiteSpace: 'pre-wrap', margin: 0, marginTop: '10px' }}>{msg.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
