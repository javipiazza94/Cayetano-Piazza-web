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
          <a href="/" className="css-logo" style={{ textDecoration: 'none' }}>
            <span className="glory">Glory</span>
            <span className="nights">Nights</span>
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
