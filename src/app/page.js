import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-container animate-fade-in">
      <header className="hero">
        <div className="glass-panel text-center hero-content">
          <h1 className="hero-title">Elevando la Música al Público General</h1>
          <p className="hero-subtitle">
            Vive la magia de los mejores tributos: Meccano, El Señor de los Anillos y Harry Potter de la mano de grupos excepcionales.
          </p>
          <a href="/concerts" className="btn-primary" style={{ marginTop: '20px' }}>
            Próximos Conciertos
          </a>
        </div>
      </header>

      <section className="featured-section">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Nuestros Grupos Exclusivos</h2>
        <div className="bands-grid">
          <div className="glass-panel band-card">
            <div className="band-img-placeholder" style={{ background: 'linear-gradient(45deg, #1f2833, #66fcf1)' }}>
              <h3>Meccano Tribute</h3>
            </div>
            <div className="band-info">
              <h4>Mecano Revival</h4>
              <p>Revive la movida madrileña con la mejor banda tributo.</p>
            </div>
          </div>

          <div className="glass-panel band-card">
            <div className="band-img-placeholder" style={{ background: 'linear-gradient(45deg, #45a29e, #1f2833)' }}>
              <h3>Lord of the Rings</h3>
            </div>
            <div className="band-info">
              <h4>The Shire Symphony</h4>
              <p>Épicas melodías que te transportarán a la Tierra Media.</p>
            </div>
          </div>

          <div className="glass-panel band-card">
            <div className="band-img-placeholder" style={{ background: 'linear-gradient(45deg, #0b0c10, #66fcf1)' }}>
              <h3>Harry Potter</h3>
            </div>
            <div className="band-info">
              <h4>Hogwarts Ensemble</h4>
              <p>Siente la magia de John Williams en directo.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-container {
          padding-bottom: 50px;
        }
        
        .hero {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 60px;
          background: radial-gradient(circle at center, rgba(102, 252, 241, 0.1) 0%, transparent 70%);
        }
        
        .hero-content {
          padding: 60px 40px;
          max-width: 800px;
          text-align: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 20px;
          background: linear-gradient(to right, #ffffff, var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-primary);
          max-width: 600px;
          margin: 0 auto;
        }

        .bands-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .band-card {
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .band-card:hover {
          transform: translateY(-10px);
        }

        .band-img-placeholder {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .band-info {
          padding: 20px;
        }

        .band-info h4 {
          margin-bottom: 10px;
          color: var(--accent);
        }
      `}</style>
    </div>
  );
}
