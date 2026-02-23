import './globals.css';
import NavBar from './components/NavBar';

export const metadata = {
  title: 'Glory Nights | Conciertos bajo una nueva luz',
  description: 'Descubre los mejores conciertos tributo en una atmósfera íntima y mágica.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
