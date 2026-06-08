import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wedding.example.com'),
  title: 'Nhật Hào & Nhi Mai — 19.07.2026',
  description: 'Trân trọng kính mời bạn đến dự lễ cưới của chúng mình',
  openGraph: {
    title: 'Nhật Hào & Nhi Mai — 19.07.2026',
    description: 'Trân trọng kính mời bạn đến dự lễ cưới của chúng tôi',
    images: [{ url: 'https://sf-static.upanhlaylink.com/img/image_2026060452e76e6e912ea393abe4a00e3273607e.jpg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
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
