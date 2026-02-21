import './globals.css';

export const metadata = {
  title: 'Epic Tributes | Conciertos de Película',
  description: 'Promovemos los mejores grupos de versiones de Meccano, El Señor de los Anillos y Harry Potter.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav className="navbar">
          <h2>Epic Tributes</h2>
          <div className="nav-links">
            <a href="/">Inicio</a>
            <a href="/bands">Grupos</a>
            <a href="/concerts">Conciertos</a>
            <a href="/contact">Contacto</a>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
