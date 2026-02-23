import './globals.css';

export const metadata = {
  title: 'Glory Nights | Conciertos bajo una nueva luz',
  description: 'Descubre los mejores conciertos tributo en una atmósfera íntima y mágica.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/img/GLORY NIGHTS LOGO.jpeg"
              alt="Glory Nights"
              className="navbar-logo-img"
            />
          </a>
          <div className="nav-links">
            <a href="/">Conciertos</a>
            <a href="/bands">Artistas</a>
            <a href="/venues">Espacios</a>
            <a href="/contact">Contacto</a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
