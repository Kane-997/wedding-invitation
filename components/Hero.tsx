'use client';

import { useEffect, useState } from 'react';
import { Heart, MapPin, Clock, Calendar } from 'lucide-react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden pt-16 md:pt-0"
      style={{ background: '#ffffff' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/SUKA9135.jpg"
          alt="Wedding"
          className="w-default h-default object-cover md:object-contain"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Dark overlay for mobile */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: 'rgba(0,0,0,0.25)' }}
        />
      </div>

      {/* Content Card - Center bottom on mobile, right side on desktop */}
      <div
        className="relative z-10 w-full px-4 sm:px-6 md:px-0 md:w-1/3 lg:w-2/5 flex items-end md:items-center justify-center md:justify-end pb-6 md:pb-0 md:pr-12 min-h-screen md:min-h-0"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-out 0.3s',
        }}
      >
        <div
          className="w-full sm:w-96 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
          }}
        >
          {/* Header */}
          <div className="text-center mb-6">
            <p
              className="font-sans text-xs tracking-widest uppercase mb-3"
              style={{ color: '#b8962e' }}
            >
              Trân trọng báo tin
            </p>
            <h2
              className="font-serif mb-3"
              style={{
                fontSize: '1.8rem',
                fontWeight: 400,
                color: '#d4af37',
                lineHeight: 1.2,
              }}
            >
              Lễ Thành Hôn
            </h2>
            <div className="gold-divider" />
          </div>

          {/* Names */}
          <div className="text-center mb-6">
            <p className="font-sans text-sm" style={{ color: '#7a5c2e' }}>
              của
            </p>
            <h1
              className="font-serif mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 500,
                color: '#5c3d1a',
              }}
            >
              Nhật Hào & Nhi Mai
            </h1>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div style={{ width: '30px', height: '1px', background: '#d4af37' }} />
            <Heart fill="#d4af37" stroke="#d4af37" size={14} />
            <div style={{ width: '30px', height: '1px', background: '#d4af37' }} />
          </div>

          {/* Details */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Calendar size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>
                  Ngày
                </p>
                <p className="font-sans text-sm" style={{ color: '#5c3d1a' }}>
                  Chủ Nhật, 19 tháng 07, 2026
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>
                  Giờ
                </p>
                <p className="font-sans text-sm" style={{ color: '#5c3d1a' }}>
                  17:30 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>
                  Địa điểm
                </p>
                <p className="font-sans text-sm" style={{ color: '#5c3d1a' }}>
                  Trung tâm Tiệc cưới Grand Palace (Sáu Cao 2)
                </p>
              </div>
            </div>
          </div>

          {/* Action button */}
          <a
            href="#rsvp"
            className="block w-full font-sans text-sm tracking-[0.2em] uppercase py-3 rounded-lg transition-all duration-300 text-center"
            style={{
              background: 'linear-gradient(135deg, #d4af37, #e8d5a3)',
              color: 'white',
              boxShadow: '0 4px 16px rgba(212,175,55,0.4)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(212,175,55,0.5)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(212,175,55,0.4)';
            }}
          >
            Xác nhận tham dự
          </a>
        </div>
      </div>

      {/* Scroll indicator - mobile only */}
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden z-20"
        style={{
          opacity: visible ? 0.7 : 0,
          transition: 'all 1s ease-out 1.5s',
        }}
      >
        <div
          className="w-px h-8"
          style={{
            background: 'linear-gradient(to bottom, #d4af37, transparent)',
            animation: 'pulse-soft 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
