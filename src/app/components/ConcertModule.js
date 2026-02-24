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
        <div className="glass-panel module-card">
            <div className="module-media">
                {isDirectVideo(concert.videoUrl) ? (
                    <video className="module-video" src={concert.videoUrl} autoPlay muted loop playsInline />
                ) : concert.bandImage ? (
                    <div className="module-image" style={{ backgroundImage: `url("${concert.bandImage}")` }}></div>
                ) : concert.videoUrl ? (
                    <div className="module-image-placeholder">
                        <a href={concert.videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{concert.videoUrl.includes('instagram') ? 'Ver Reel en Instagram' : 'Ver Vídeo Externo'}</a>
                    </div>
                ) : (
                    <div className="module-image-placeholder">Próximamente</div>
                )}
            </div>
            <div className="module-content">
                <span style={{ color: 'var(--accent)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    {formattedDate}
                </span>
                <h3 style={{ fontSize: '1.8rem', lineHeight: '1.2', margin: '0' }}>{concert.bandName}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: '0' }}>📍 {concert.venueName} - {concert.location}</p>
                {concert.description && <p style={{ marginTop: '10px' }}>{concert.description}</p>}

                <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                    {isPast ? (
                        <span style={{ display: 'block', textAlign: 'center', color: 'var(--text-secondary)', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'not-allowed' }}>
                            ✅ Evento Celebrado
                        </span>
                    ) : concert.ticketUrl ? (
                        <a href={concert.ticketUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '10px', display: 'block' }}>
                            Comprar Entradas
                        </a>
                    ) : (
                        <span style={{ display: 'block', textAlign: 'center', color: 'gray', fontStyle: 'italic', padding: '10px' }}>Entradas no disponibles</span>
                    )}
                </div>
            </div>
        </div>
    );
}
