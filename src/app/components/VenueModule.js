export default function VenueModule({ venue }) {
    const isDirectVideo = (url) => {
        if (!url) return false;
        return url.toLowerCase().match(/\.(mp4|webm|ogg)$/) != null;
    };

    return (
        <div className="glass-panel module-card">
            <div className="module-media">
                {isDirectVideo(venue.videoUrl) ? (
                    <video className="module-video" src={venue.videoUrl} autoPlay muted loop playsInline />
                ) : venue.imageUrl ? (
                    <div className="module-image" style={{ backgroundImage: `url("${venue.imageUrl}")` }}></div>
                ) : venue.videoUrl ? (
                    <div className="module-image-placeholder">
                        <a href={venue.videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{venue.videoUrl.includes('instagram') ? 'Ver Reel en Instagram' : 'Ver Vídeo Externo'}</a>
                    </div>
                ) : (
                    <div className="module-image-placeholder">Un espacio mágico</div>
                )}
            </div>
            <div className="module-content">
                <h3 style={{ fontSize: '1.8rem', margin: '0' }}>{venue.name}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: '0' }}>📍 {venue.location}</p>
                <div style={{ display: 'flex', gap: '15px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <span>👥 Capacidad: {venue.capacity}</span>
                    {venue.contactEmail && <span>✉️ {venue.contactEmail}</span>}
                </div>
                {venue.description && <p style={{ marginTop: '15px' }}>{venue.description}</p>}
            </div>
        </div>
    );
}
