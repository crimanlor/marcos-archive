import type { Metadata } from 'next';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { siteConfig } from './config/site';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.siteUrl),
  title: {
    default: siteConfig.architect.name,
    template: `%s | ${siteConfig.architect.name}`,
  },
  description: siteConfig.siteDescription,
  keywords: siteConfig.seo.keywords.split(', '),
  icons: {
    icon: siteConfig.architect.favicon || '/images/marcos-villen-logo.png',
    apple: siteConfig.architect.favicon || '/images/marcos-villen-logo.png',
  },
  openGraph: {
    type: 'website',
      locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.architect.name,
    description: siteConfig.siteDescription,
    images: [
      {
        url: siteConfig.seo.ogImage,
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
