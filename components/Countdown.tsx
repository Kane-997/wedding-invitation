'use client';

import { useEffect, useState } from 'react';

const WEDDING_DATE = new Date('2026-07-19T17:30:00');

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    past: false,
  };
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-sm"
        style={{
          background: 'rgba(255,255,255,0.7)',
          border: '1px solid #d4af37',
          boxShadow: '0 4px 20px rgba(212,175,55,0.15)',
        }}
      >
        <span
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 300,
            color: '#8a6820',
            lineHeight: 1,
          }}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span
        className="font-sans text-xs tracking-[0.25em] uppercase mt-3"
        style={{ color: '#b8962e' }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="countdown"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #fffef9 100%)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
          Đếm ngược đến ngày trọng đại
        </p>
        <h2
          className="font-serif mb-3"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#5c3d1a' }}
        >
          {time.past ? 'Chúng tôi đã kết hôn!' : 'Ngày cưới'}
        </h2>
        <div className="gold-divider mb-10" />

        {!time.past ? (
          <div className="flex items-start justify-center gap-1 sm:gap-3 flex-wrap">
            <TimeBox value={time.days} label="Ngày" />
            <div className="font-serif text-2xl sm:text-4xl mt-6 hidden sm:block" style={{ color: '#d4af37' }}>:</div>
            <TimeBox value={time.hours} label="Giờ" />
            <div className="font-serif text-2xl sm:text-4xl mt-6 hidden sm:block" style={{ color: '#d4af37' }}>:</div>
            <TimeBox value={time.minutes} label="Phút" />
            <div className="font-serif text-2xl sm:text-4xl mt-6 hidden sm:block" style={{ color: '#d4af37' }}>:</div>
            <TimeBox value={time.seconds} label="Giây" />
          </div>
        ) : (
          <p className="font-serif text-2xl italic" style={{ color: '#8a6820' }}>
            Cảm ơn tất cả đã cùng chúng tôi chia sẻ ngày đặc biệt này
          </p>
        )}

        <p className="font-sans text-sm mt-10 tracking-wider" style={{ color: '#9a7a3a' }}>
          Chủ Nhật, ngày 19 tháng 07 năm 2026 • 17:30 sáng
        </p>
      </div>
    </section>
  );
}
