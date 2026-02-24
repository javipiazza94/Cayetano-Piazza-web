import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata = {
  title: 'Glory Nights | Conciertos bajo una nueva luz',
  description: 'Descubre los mejores conciertos tributo en una atmósfera íntima y mágica.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className={montserrat.className}>
        <NavBar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
