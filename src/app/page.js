export default function Home() {
  return (
    <div className="home-container animate-fade-in">
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="candle-glow"></div>
          <p className="hero-kicker">Una experiencia musical inmersiva</p>
          <h1 className="hero-title">Tributos a la luz<br />de las velas</h1>
          <p className="hero-subtitle">
            Descubre conciertos mágicos en lugares espectaculares. Disfruta de la mejor música de cámara homenajeando a Mecano, El Señor de los Anillos y Harry Potter.
          </p>
          <a href="/concerts" className="btn-primary" style={{ marginTop: '40px' }}>
            Comprar entradas
          </a>
        </div>
      </header>

      <section className="featured-section">
        <div className="section-header text-center">
          <h2>Cartelera Destacada</h2>
          <p>Los homenajes más esperados en un ambiente íntimo y espectacular</p>
        </div>

        <div className="bands-grid">
          <div className="glass-panel band-card">
            <div className="band-img-wrapper">
              <div className="band-img-placeholder" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-color)), url("/img/tributo%20meccano.jpg") center/cover' }}>
                <div className="date-badge">24 NOV</div>
              </div>
            </div>
            <div className="band-info">
              <span className="category">Pop / Clásico</span>
              <h3>Tributo a Mecano: Revive la Movida</h3>
              <p className="location">📍 Cartuja Center, Sevilla</p>
              <div className="card-footer">
                <span className="price">Desde 15,00 €</span>
                <span className="tickets-link">Ver entradas →</span>
              </div>
            </div>
          </div>

          <div className="glass-panel band-card">
            <div className="band-img-wrapper">
              <div className="band-img-placeholder" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-color)), url("/img/glory-nightsharry-potter--el-senor-de-los-anillos.jpg") center/cover' }}>
                <div className="date-badge">20 FEB</div>
              </div>
            </div>
            <div className="band-info">
              <span className="category">Bandas Sonoras</span>
              <h3>El Señor de los Anillos bajo las Estrellas</h3>
              <p className="location">📍 Teatro Gutiérrez de Alba, Alcalá de Guadaira</p>
              <div className="card-footer">
                <span className="price">Desde 15,00 €</span>
                <span className="tickets-link">Ver entradas →</span>
              </div>
            </div>
          </div>

          <div className="glass-panel band-card">
            <div className="band-img-wrapper">
              <div className="band-img-placeholder" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-color)), url("/img/harry-poter.jpeg") center/cover' }}>
                <div className="date-badge">20 FEB</div>
              </div>
            </div>
            <div className="band-info">
              <span className="category">Bandas Sonoras</span>
              <h3>La Magia de Harry Potter en Concierto</h3>
              <p className="location">📍 Teatro Gutiérrez de Alba, Alcalá de Guadaira</p>
              <div className="card-footer">
                <span className="price">Desde 15,00 €</span>
                <span className="tickets-link">Ver entradas →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-header text-center">
          <h2>Lo que dicen nuestros asistentes</h2>
          <p>La magia de Glory Nights a través de sus experiencias</p>
        </div>
        <div className="reviews-grid">
          <div className="review-card glass-panel">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Una experiencia absolutamente inolvidable. La atmósfera íntima y la música perfecta hicieron una noche mágica."</p>
            <p className="review-author">- María L. (Tributo a Mecano)</p>
          </div>
          <div className="review-card glass-panel">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Me transporté directamente a la Tierra Media. El cuarteto de cuerdas fue espectacular y el lugar era precioso."</p>
            <p className="review-author">- Carlos G. (El Señor de los Anillos)</p>
          </div>
          <div className="review-card glass-panel">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"El ambiente a la luz de las velas le da un toque muy especial a la banda sonora de Harry Potter. ¡Repetiré seguro!"</p>
            <p className="review-author">- Laura S. (Harry Potter)</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-header text-center">
          <h2>Galería</h2>
          <p>Instantes mágicos capturados a la luz de las velas</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/CANDLELIGHTS.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=800")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800")' }}></div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-header text-center">
          <h2>Preguntas Frecuentes</h2>
          <p>Todo lo que necesitas saber antes de vivir la magia</p>
        </div>
        <div className="faq-container">
          <div className="faq-item glass-panel">
            <h3>¿Cuál es el código de vestimenta?</h3>
            <p>Recomendamos un estilo elegante casual, acorde a la atmósfera clásica de la localización pero asegurando tu comodidad.</p>
          </div>
          <div className="faq-item glass-panel">
            <h3>¿Puedo tomar fotografías durante la actuación?</h3>
            <p>Se permiten fotografías sin flash antes y después de los conciertos para no interrumpir la experiencia inmersiva del resto de asistentes.</p>
          </div>
          <div className="faq-item glass-panel">
            <h3>¿A qué hora abren las puertas del recinto?</h3>
            <p>Las puertas abren formalmente 45 minutos antes del inicio del evento. Una vez comenzado el concierto no se permitirá el acceso a la sala.</p>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-content glass-panel" style={{ borderBottom: 'none', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <div className="footer-brand">
            <a href="/" className="css-logo" style={{ marginBottom: '20px', textDecoration: 'none' }}>
              <span className="glory" style={{ color: '#FFFFFF' }}>Glory</span>
              <span className="nights">Nights</span>
            </a>
            <p>Conciertos de película a la luz de las velas.</p>
          </div>
          <div className="footer-social">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="#">Instagram</a>
              <a href="#">TikTok</a>
              <a href="#">Facebook</a>
              <a href="#">YouTube</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom glass-panel" style={{ borderTop: '1px solid rgba(184, 147, 37, 0.2)', borderTopLeftRadius: 0, borderTopRightRadius: 0, textAlign: 'center', padding: '15px' }}>
          <p className="copyright">&copy; {new Date().getFullYear()} Glory Nights. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style>{`
        .home-container {
          padding-bottom: 0;
        }
        
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          /* background photo simulating candlelight/classic concert */
          background: url("https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=2000") center/cover no-repeat;
          margin-bottom: 60px;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,1) 100%);
          z-index: 1;
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 60px 20px;
          max-width: 900px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-kicker {
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 0.9rem;
          color: var(--accent-dark);
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 30px;
          color: var(--text-primary);
          text-shadow: 0 4px 20px rgba(255,255,255,0.5);
        }

        .hero-subtitle {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
          text-shadow: 0 2px 10px rgba(255,255,255,0.5);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 20px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        
        .section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
        }

        .featured-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }

        .bands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }

        .band-card {
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }

        .band-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1), inset 0 0 20px rgba(184, 147, 37, 0.1);
        }

        .band-card:hover .band-img-placeholder {
          transform: scale(1.05);
        }

        .band-img-wrapper {
          overflow: hidden;
        }

        .band-img-placeholder {
          height: 240px;
          position: relative;
          transition: transform 0.6s ease;
        }

        .date-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0,0,0,0.8);
          border: 1px solid var(--accent);
          color: var(--accent-dark);
          padding: 8px 12px;
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-align: center;
          backdrop-filter: blur(4px);
        }

        .band-info {
          padding: 30px 25px;
        }

        .category {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--accent-dark);
          margin-bottom: 12px;
          display: block;
        }

        .band-info h3 {
          font-size: 1.6rem;
          margin-bottom: 15px;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .location {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 25px;
          font-family: 'Outfit', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.05);
          padding-top: 20px;
          font-family: 'Outfit', sans-serif;
        }
        
        .price {
          color: var(--text-primary);
          font-weight: 500;
        }
        
        .tickets-link {
          color: var(--accent-dark);
          font-weight: 500;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1px;
        }

        /* Nav & Footer overrides */
        .accent-text {
          color: var(--accent);
          font-style: italic;
          text-transform: lowercase;
          font-size: 0.85em;
          margin-left: 5px;
          font-family: 'Playfair Display', serif;
        }

        /* Gallery Section */
        .gallery-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px 80px;
        }

        /* Reviews Section */
        .reviews-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px 80px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .review-card {
          padding: 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 15px;
          border-top: 3px solid var(--accent);
        }

        .review-stars {
          color: var(--accent);
          font-size: 1.5rem;
          letter-spacing: 2px;
        }

        .review-text {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.6;
        }

        .review-author {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .gallery-item {
          height: 300px;
          background-size: cover;
          background-position: center;
          border-radius: 4px;
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: sepia(30%) contrast(1.1);
          cursor: pointer;
        }

        .gallery-item:hover {
          transform: scale(1.02);
          filter: sepia(0%) contrast(1.1) brightness(1.1);
          box-shadow: 0 10px 30px rgba(184, 147, 37, 0.15);
        }

        /* FAQ Section */
        .faq-section {
          max-width: 800px;
          margin: 0 auto;
          padding: 60px 20px 100px;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          padding: 25px 30px;
        }

        .faq-item h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: var(--accent-dark);
        }

        .faq-item p {
          color: var(--text-primary);
          font-weight: 400;
          line-height: 1.7;
          opacity: 0.9;
        }

        /* Footer Section */
        .footer-section {
          max-width: 1200px;
          margin: 0 auto 40px;
          padding: 0 20px;
        }

        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 50px;
          gap: 40px;
        }

        .footer-brand h2 {
          font-size: 2rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--text-primary);
          margin-bottom: 15px;
        }

        .footer-brand p {
          color: var(--text-secondary);
          font-weight: 400;
          font-size: 1.1rem;
        }

        .footer-social h3 {
          font-size: 1.3rem;
          margin-bottom: 20px;
          color: var(--accent-dark);
        }

        .social-links {
          display: flex;
          gap: 25px;
        }

        .social-links a {
          font-family: 'Outfit', sans-serif;
          font-weight: 500;
          letter-spacing: 1px;
          color: var(--text-primary);
          position: relative;
        }
        
        .social-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: var(--accent);
          transition: width 0.3s ease;
        }

        .social-links a:hover {
          color: var(--accent-dark);
        }

        .social-links a:hover::after {
          width: 100%;
        }

        .copyright {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          color: var(--text-secondary);
          letter-spacing: 1px;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .footer-content {
            flex-direction: column;
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
