export default function ConcertModule({ concert }) {
    const concertDate = new Date(concert.date);
    const isPast = concertDate < new Date();

    const formattedDate = concertDate.toLocaleString('es-ES', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    const isDirectVideo = (url) => {
        if (!url) return false;
        return url.toLowerCase().match(/\.(mp4|webm|ogg)$/) != null;
    };

    return (
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'row', gap: '0', overflow: 'hidden', borderRadius: '8px', minHeight: '260px' }}>
            {/* ── LEFT: Media ── */}
            <div className="module-media" style={{ flex: '0 0 320px', minHeight: '260px', position: 'relative', overflow: 'hidden', background: '#111' }}>
                {isDirectVideo(concert.videoUrl) ? (
                    <video src={concert.videoUrl} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                ) : concert.bandImage ? (
                    <div style={{ backgroundImage: `url("${concert.bandImage}")`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '100%', position: 'absolute', inset: 0 }} />
                ) : concert.videoUrl ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '20px', textAlign: 'center' }}>
                        <a href={concert.videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{concert.videoUrl.includes('instagram') ? 'Ver Reel en Instagram' : 'Ver Vídeo Externo'}</a>
                    </div>
                ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Próximamente</div>
                )}
                {/* Gradient overlay to blend into the right panel */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 70%, var(--card-bg, #0b0c10) 100%)' }} />
            </div>

            {/* ── RIGHT: Info ── */}
            <div style={{ flex: 1, padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                        <span style={{ color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>{formattedDate}</span>
                        <h3 style={{ fontFamily: 'var(--font-playfair)', fontSize: '1.8rem', lineHeight: '1.2', margin: '5px 0 0', color: 'var(--accent)' }}>{concert.bandName}</h3>
                        <p style={{ color: 'var(--text-secondary)', margin: '5px 0 0', fontSize: '0.95rem' }}>📍 {concert.venueName} - {concert.location}</p>
                    </div>
                    {/* Ticket Button Area */}
                    <div>
                        {isPast ? (
                            <span style={{ display: 'inline-block', textAlign: 'center', color: 'var(--text-secondary)', padding: '8px 15px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'not-allowed', fontSize: '0.9rem' }}>
                                ✅ Celebrado
                            </span>
                        ) : concert.ticketUrl ? (
                            <a href={concert.ticketUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '8px 20px', display: 'inline-block', fontSize: '0.95rem' }}>
                                Entradas
                            </a>
                        ) : (
                            <span style={{ display: 'inline-block', textAlign: 'center', color: 'gray', fontStyle: 'italic', padding: '8px 15px', fontSize: '0.9rem' }}>Agotadas</span>
                        )}
                    </div>
                </div>

                {concert.description && <p style={{ margin: '10px 0 0', lineHeight: 1.6, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{concert.description}</p>}
            </div>
        </div>
    );
}
