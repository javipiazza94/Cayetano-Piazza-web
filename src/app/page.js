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
            Descubre conciertos mágicos en lugares espectaculares. Disfruta de la mejor música de cámara homenajeando a Los Beatles, Mecano, El Señor de los Anillos y Harry Potter.
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
          <div className="band-card">
            <div className="band-img-wrapper">
              <div className="band-img-placeholder" style={{ background: 'url("/img/conciertos-de-verano.jpg") center/cover' }}>
                <div className="date-badge">JUL 25</div>
              </div>
            </div>
            <div className="band-info">
              <span className="category">Pop / Clásico</span>
              <h3>Conciertos de verano. </h3>
              <p className="location">📍 Bodegas Hidaldo: LA GITANA, Sanlúcar de Barrameda</p>
              <div className="card-footer">
                <span className="price">Desde 15,00 €</span>
                <span className="tickets-link">Ver entradas →</span>
              </div>
            </div>
          </div>

          <div className="band-card">
            <div className="band-img-wrapper">
              <div className="band-img-placeholder" style={{ background: 'url("/img/glory-nightsharry-potter--el-senor-de-los-anillos.jpg") center/cover' }}>
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

          <div className="band-card">
            <div className="band-img-wrapper">
              <div className="band-img-placeholder" style={{ background: 'url("/img/harry-poter.jpeg") center/cover' }}>
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
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Una experiencia absolutamente inolvidable. La atmósfera íntima y la música perfecta hicieron una noche mágica."</p>
            <p className="review-author">- María L. (Tributo a Mecano)</p>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Me transporté directamente a la Tierra Media. El cuarteto de cuerdas fue espectacular y el lugar era precioso."</p>
            <p className="review-author">- Carlos G. (El Señor de los Anillos)</p>
          </div>
          <div className="review-card">
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
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto1.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto2.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto3.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto4.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto5.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto6.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto7.jpeg")' }}></div>
          <div className="gallery-item" style={{ backgroundImage: 'url("/img/concierto8.jpeg")' }}></div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-header">
          <h2>Preguntas Frecuentes</h2>
          <p>Todo lo que necesitas saber antes de vivir la magia</p>
        </div>
        <div className="faq-container">
          <div className="faq-item">
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
        <div className="footer-logo-area">
          <a href="/">
            <img
              src="/img/GLORY NIGHTS LOGO.jpeg"
              alt="Glory Nights"
              className="footer-logo-img"
            />
          </a>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h3 className="footer-heading">Contacto</h3>
            <p className="footer-text">info@glorynights.es</p>
            <p className="footer-text">+34 600 000 000</p>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Redes Sociales</h3>
            <div className="social-icons">
              <a href="#" aria-label="Instagram" className="social-icon-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="social-icon-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.17a8.16 8.16 0 0 0 4.76 1.53v-3.5a4.82 4.82 0 0 1-1-.51z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="social-icon-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="social-icon-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
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
          background: url("/img/concierto5.jpeg") center/cover no-repeat;
          margin-bottom: 0;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%);
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
          font-family: 'Crimson Text', serif;
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
          font-family: 'Crimson Text', serif;
          font-weight: 400;
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.8;
          text-shadow: 0 2px 10px rgba(255,255,255,0.5);
        }

        /* ===== LIGHT SECTIONS (White bg, dark text) ===== */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
          padding: 0 20px;
        }
        
        .section-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1A1A1A;
          line-height: 1.25;
          letter-spacing: -0.5px;
        }
        
        .section-header p {
          color: #1A1A1A;
          font-size: 1.15rem;
          font-family: 'Crimson Text', serif;
          font-weight: 400;
          line-height: 1.8;
          max-width: 620px;
          margin: 0 auto;
        }

        /* Featured / Cartelera */
        .featured-section {
          background: #FFFFFF;
          max-width: 100%;
          padding: 100px 20px;
        }

        .featured-section .bands-grid {
          max-width: 1200px;
          margin: 0 auto;
        }

        .bands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 40px;
        }

        .band-card {
          overflow: hidden;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
          background: #FFFFFF;
          border: 1px solid #e8e8e8;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .band-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }

        .band-card:hover .band-img-placeholder {
          transform: scale(1.05);
        }

        .band-img-wrapper {
          overflow: hidden;
        }

        .band-img-placeholder {
          height: 260px;
          position: relative;
          transition: transform 0.6s ease;
        }

        .date-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(0,0,0,0.75);
          border: none;
          color: #FFFFFF;
          padding: 8px 14px;
          font-family: 'Crimson Text', serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-align: center;
          border-radius: 4px;
        }

        .band-info {
          padding: 28px 25px;
        }

        .category {
          font-family: 'Crimson Text', serif;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #C5A059;
          margin-bottom: 12px;
          display: block;
        }

        .band-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: #1A1A1A;
          line-height: 1.35;
          font-weight: 700;
        }

        .location {
          color: #666666;
          font-size: 0.95rem;
          margin-bottom: 20px;
          font-family: 'Crimson Text', serif;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eeeeee;
          padding-top: 18px;
          font-family: 'Crimson Text', serif;
        }
        
        .price {
          color: #1D1E20;
          font-weight: 600;
          font-size: 1rem;
        }
        
        .tickets-link {
          color: #C5A059;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }

        .tickets-link:hover {
          color: #a8843a;
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

        /* Reviews Section */
        .reviews-section {
          background: #F8F7F4;
          max-width: 100%;
          padding: 100px 20px;
        }

        .reviews-section .reviews-grid {
          max-width: 1200px;
          margin: 0 auto;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .review-card {
          padding: 40px 30px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 18px;
          background: #FFFFFF;
          border: none;
          border-radius: 8px;
          border-top: 3px solid #C5A059;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        .review-stars {
          color: #C5A059;
          font-size: 1.4rem;
          letter-spacing: 3px;
        }

        .review-text {
          font-family: 'Crimson Text', serif;
          font-style: italic;
          font-size: 1.15rem;
          color: #1A1A1A;
          line-height: 1.8;
        }

        .review-author {
          font-family: 'Crimson Text', serif;
          font-size: 0.85rem;
          color: #888888;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-top: auto;
        }

        /* Gallery Section */
        .gallery-section {
          background: #FFFFFF;
          max-width: 100%;
          padding: 100px 20px;
        }


        .gallery-section .gallery-grid {
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .gallery-item {
          height: 320px;
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          transition: transform 0.5s ease, filter 0.5s ease;
          filter: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .gallery-item:hover {
          transform: scale(1.02);
          filter: brightness(1.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        /* FAQ Section */
        .faq-section {
          background: #F8F7F4;
          max-width: 100%;
          padding: 100px 20px;
        }
        .reviews-section .section-header p,
        .gallery-section .section-header p,
        .faq-section .section-header p {
          color: #4d4b4b;
        }

        .faq-section .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          padding: 30px 35px;
          background: #FFFFFF;
          border: 1px solid #eeeeee;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }

        .faq-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          margin-bottom: 14px;
          color: #1A1A1A;
          font-weight: 700;
        }

        .faq-item p {
          color: #4d4b4bff;
          font-family: 'Crimson Text', serif;
          font-weight: 400;
          font-size: 1.05rem;
          line-height: 1.8;
          opacity: 1;
        }

        /* Footer Section */
        .footer-section {
          background: #1a1a1a;
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100%;
        }

        .footer-logo-area {
          display: flex;
          justify-content: center;
          padding: 60px 20px 40px;
          border-bottom: 1px solid rgba(197, 160, 89, 0.15);
        }

        .footer-logo-img {
          height: 100px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .footer-logo-img:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }

        .footer-columns {
          display: flex;
          justify-content: center;
          gap: 120px;
          padding: 60px 40px 80px;
          flex-wrap: wrap;
          max-width: 900px;
          margin: 0 auto;
        }

        .footer-col {
          text-align: center;
        }

        .footer-heading {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--accent);
          margin-bottom: 25px;
        }

        .footer-text {
          font-family: 'Crimson Text', serif;
          font-size: 1rem;
          color: var(--text-secondary);
          margin-bottom: 8px;
          font-weight: 400;
        }

        .social-icons {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
        }

        .social-icon-link {
          color: var(--text-secondary);
          transition: color 0.3s ease, transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .social-icon-link:hover {
          color: var(--accent);
          transform: translateY(-3px);
          border-color: var(--accent);
        }

        .footer-bottom-bar {
          border-top: 1px solid rgba(197, 160, 89, 0.15);
          text-align: center;
          padding: 20px;
        }

        .copyright {
          font-family: 'Crimson Text', serif;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-subtitle {
            font-size: 1.1rem;
          }
          .section-header h2 {
            font-size: 2.2rem;
          }
          .featured-section,
          .reviews-section,
          .gallery-section,
          .faq-section {
            padding: 60px 16px;
          }
          .footer-columns {
            flex-direction: column;
            gap: 50px;
            padding: 40px 20px 60px;
          }
          .footer-logo-img {
            height: 70px;
          }
        }
      `}</style>
    </div>
  );
}
