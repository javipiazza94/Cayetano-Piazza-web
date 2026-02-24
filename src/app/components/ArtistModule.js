export default function ArtistModule({ artist }) {
    const isDirectVideo = (url) => {
        if (!url) return false;
        return url.toLowerCase().match(/\.(mp4|webm|ogg)$/) != null;
    };

    return (
        <div className="glass-panel module-card">
            <div className="module-media">
                {isDirectVideo(artist.videoUrl) ? (
                    <video className="module-video" src={artist.videoUrl} autoPlay muted loop playsInline />
                ) : artist.imageUrl ? (
                    <div className="module-image" style={{ backgroundImage: `url("${artist.imageUrl}")` }}></div>
                ) : artist.videoUrl ? (
                    <div className="module-image-placeholder">
                        <a href={artist.videoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>{artist.videoUrl.includes('instagram') ? 'Ver Reel en Instagram' : 'Ver Vídeo Externo'}</a>
                    </div>
                ) : (
                    <div className="module-image-placeholder">Descubre la magia</div>
                )}
            </div>
            <div className="module-content">
                <h3 style={{ fontSize: '1.8rem', margin: '0' }}>{artist.name}</h3>
                <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', margin: '0' }}>
                    Tributo a {artist.tributeTo}
                </h4>
                {artist.description && <p style={{ marginTop: '15px' }}>{artist.description}</p>}
            </div>
        </div>
    );
}
