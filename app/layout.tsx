import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding.example.com'),
  title: 'Minh Anh & Quốc Huy — 15.02.2025',
  description: 'Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi',
  openGraph: {
    title: 'Minh Anh & Quốc Huy — 15.02.2025',
    description: 'Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi',
    images: [{ url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
