import NewsletterWidget from './components/NewsletterWidget';
import './home.css';

const FALLBACK_REVIEWS = [
  { id: 'f1', author: 'María L. (Tributo a Mecano)', text: '"Una experiencia absolutamente inolvidable. La atmósfera íntima y la música perfecta hicieron una noche mágica."', stars: 5 },
  { id: 'f2', author: 'Carlos G. (El Señor de los Anillos)', text: '"Me transporté directamente a la Tierra Media. El cuarteto de cuerdas fue espectacular y el lugar era precioso."', stars: 5 },
  { id: 'f3', author: 'Laura S. (Harry Potter)', text: '"El ambiente a la luz de las velas le da un toque muy especial a la banda sonora de Harry Potter. ¡Repetiré seguro!"', stars: 5 },
];

export default async function Home() {
  let reviews = [];
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/reviews`, { cache: 'no-store' });
    if (res.ok) reviews = await res.json();
  } catch { /* use fallback */ }
  if (!Array.isArray(reviews) || reviews.length === 0) reviews = FALLBACK_REVIEWS;

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
          <a href="/conciertos" className="btn-primary" style={{ marginTop: '40px' }}>
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
              <h3>Conciertos de verano </h3>
              <p className="location">📍 Bodegas Hidaldo: LA GITANA, Sanlúcar de Barrameda</p>
              <div className="card-footer">
                <span className="price">Desde 25,00 €</span>
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
                <span className="price">Desde 25,00 €</span>
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
          {reviews.map(r => (
            <div className="review-card" key={r.id}>
              <div className="review-stars">{'★'.repeat(r.stars || 5)}{'☆'.repeat(5 - (r.stars || 5))}</div>
              <p className="review-text">{r.text}</p>
              <p className="review-author">— {r.author}{r.concert_label ? ` (${r.concert_label})` : ''}</p>
            </div>
          ))}
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

      {/* VIDEO SECTION */}
      <section className="video-section">
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/img/concierto12.mp4" type="video/mp4" />
          <source src="/img/concierto9.mp4" type="video/mp4" />
          <source src="/img/concierto11.mp4" type="video/mp4" />
          <source src="/img/concierto10.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-content">
          <p className="video-kicker">Gloria en cada nota</p>
          <h2 className="video-title">Una experiencia que<br />no olvidarás</h2>
          <p className="video-body">Más de 500 asistentes han vivido la magia de Glory Nights.<br />Únete a ellos y descubre los conciertos que están marcando la diferencia.</p>
          <a href="/conciertos" className="btn-primary video-cta">Ver próximas fechas</a>
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

      <NewsletterWidget />

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
              <a href="https://www.instagram.com/glory_nights_concerts?igsh=MWtncnczNmd6bnIzMw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link">
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
              <a href="https://www.facebook.com/share/1HM1fH84d8/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="social-icon-link">
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

    </div>
  );
}
