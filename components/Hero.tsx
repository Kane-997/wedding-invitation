'use client';

import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const PETALS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  size: `${12 + Math.random() * 14}px`,
}));

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #fffef9 0%, #fdf6e9 40%, #f5e6c8 100%)',
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
            top: '-200px',
            right: '-150px',
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, #d4af37 0%, transparent 70%)',
            bottom: '-100px',
            left: '-100px',
          }}
        />
      </div>

      {/* Falling petals */}
      {PETALS.map((petal) => (
        <div
          key={petal.id}
          className="absolute pointer-events-none select-none"
          style={{
            left: petal.left,
            top: '-20px',
            fontSize: petal.size,
            animation: `petalFall ${petal.duration} ${petal.delay} linear infinite`,
            opacity: 0.6,
          }}
        >
          🌸
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top ornament */}
        <div
          className="flex items-center justify-center gap-4 mb-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 0.2s',
          }}
        >
          <div className="gold-divider flex-1 max-w-24" />
          <span className="text-2xl" style={{ color: '#d4af37' }}>✦</span>
          <div className="gold-divider flex-1 max-w-24" />
        </div>

        <p
          className="font-sans text-xs tracking-[0.4em] uppercase mb-4"
          style={{
            color: '#b8962e',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 0.3s',
          }}
        >
          Trân trọng kính mời
        </p>

        <h1
          className="font-serif mb-2"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 300,
            color: '#8a6820',
            lineHeight: 1.1,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease-out 0.4s',
          }}
        >
          Minh Anh
        </h1>

        <div
          className="flex items-center justify-center gap-4 my-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'all 1s ease-out 0.6s',
          }}
        >
          <div className="gold-divider flex-1 max-w-32" />
          <Heart
            className="animate-float"
            fill="#d4af37"
            stroke="#d4af37"
            style={{ width: 28, height: 28 }}
          />
          <div className="gold-divider flex-1 max-w-32" />
        </div>

        <h1
          className="font-serif mb-8"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 300,
            color: '#8a6820',
            lineHeight: 1.1,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s ease-out 0.7s',
          }}
        >
          Quốc Huy
        </h1>

        <div
          className="font-sans"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s ease-out 0.9s',
          }}
        >
          <div
            className="inline-block px-8 py-3 mb-6 rounded-sm"
            style={{
              border: '1px solid #d4af37',
              background: 'rgba(212, 175, 55, 0.08)',
            }}
          >
            <p className="text-sm tracking-[0.3em] uppercase" style={{ color: '#b8962e' }}>
              Thứ Bảy • 15 tháng 02 năm 2025
            </p>
          </div>
        </div>

        <p
          className="font-sans text-sm tracking-widest"
          style={{
            color: '#9a7a3a',
            opacity: visible ? 1 : 0,
            transition: 'all 1s ease-out 1.1s',
          }}
        >
          Trung tâm Tiệc cưới Capella • 123 Nguyễn Huệ, Quận 1, TP.HCM
        </p>

        {/* Bottom ornament */}
        <div
          className="flex items-center justify-center gap-4 mt-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'all 1s ease-out 1.3s',
          }}
        >
          <div className="gold-divider flex-1 max-w-24" />
          <span className="text-2xl" style={{ color: '#d4af37' }}>✦</span>
          <div className="gold-divider flex-1 max-w-24" />
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 flex flex-col items-center gap-2"
          style={{
            opacity: visible ? 0.7 : 0,
            transition: 'all 1s ease-out 1.5s',
          }}
        >
          <span className="font-sans text-xs tracking-widest uppercase" style={{ color: '#b8962e' }}>
            Cuộn xuống
          </span>
          <div
            className="w-px h-10"
            style={{
              background: 'linear-gradient(to bottom, #d4af37, transparent)',
              animation: 'pulse-soft 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
