import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Marcos Villén Rubio',
  description: 'Urbanismo · Biofilia · Regeneración Ecológica',
  keywords: 'arquitectura, paisaje, diseño, portfolio',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://marcos-landscape.vercel.app/',
    siteName: 'Estudio de Arquitectura',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-950 antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
