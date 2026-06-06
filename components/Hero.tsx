'use client';

import { Heart, MapPin, Clock, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: '#ffffff' }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/SUKA9135.jpg"
          alt="Wedding"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.25)' }}
        />
      </div>

      <div
        className="relative z-10 w-full px-4 flex items-end justify-center pb-6 min-h-screen"
      >
        <div
          className="w-full rounded-2xl p-6 backdrop-blur-md"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
          }}
        >
          <div className="text-center mb-6">
            <p className="font-sans text-xs tracking-widest uppercase mb-4" style={{ color: '#b8962e' }}>
              A wedding story
            </p>
            <h1 className="font-serif mb-4" style={{ fontSize: '2rem', fontWeight: 300, color: '#5c3d1a', lineHeight: 1.2 }}>
              Nhật Hào & Nhi Mai
            </h1>
            <p className="font-sans text-sm" style={{ color: '#d4af37', letterSpacing: '0.1em' }}>
              19.07.2026
            </p>
            <div className="gold-divider mt-4" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div style={{ width: '30px', height: '1px', background: '#d4af37' }} />
            <Heart fill="#d4af37" stroke="#d4af37" size={14} />
            <div style={{ width: '30px', height: '1px', background: '#d4af37' }} />
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <Calendar size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>Ngày</p>
                <p className="font-sans text-sm" style={{ color: '#5c3d1a' }}>Chủ Nhật, 19 tháng 07, 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>Giờ</p>
                <p className="font-sans text-sm" style={{ color: '#5c3d1a' }}>17:30 PM</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
              <div>
                <p className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>Địa điểm</p>
                <p className="font-sans text-sm" style={{ color: '#5c3d1a' }}>Trung tâm Tiệc cưới Grand Palace (Sáu Cao 2)</p>
              </div>
            </div>
          </div>

          <a
            href="#rsvp"
            className="block w-full font-sans text-sm tracking-[0.2em] uppercase py-3 rounded-lg text-center"
            style={{
              background: 'linear-gradient(135deg, #d4af37, #e8d5a3)',
              color: 'white',
            }}
          >
            Xác nhận tham dự
          </a>
        </div>
      </div>
    </section>
  );
}
