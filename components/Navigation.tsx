'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const links = [
  { href: '#home', label: 'Trang chủ' },
  { href: '#countdown', label: 'Đếm ngược' },
  { href: '#gallery', label: 'Ảnh cưới' },
  { href: '#location', label: 'Địa điểm' },
  { href: '#rsvp', label: 'Xác nhận' },
  { href: '#wishes', label: 'Lời chúc' },
  { href: '#gift', label: 'Mừng cưới' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(255,254,249,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid #e8d5a3' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(139,100,32,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <Heart
            fill="#d4af37"
            stroke="#d4af37"
            size={18}
            className="transition-transform group-hover:scale-110"
          />
          <span
            className="font-serif text-lg"
            style={{ color: scrolled ? '#5c3d1a' : '#8a6820', fontWeight: 400 }}
          >
            H & N
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.18em] uppercase transition-colors duration-300"
              style={{ color: scrolled ? '#7a5c2e' : '#8a6820' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#d4af37')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = scrolled ? '#7a5c2e' : '#8a6820')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          style={{ color: '#8a6820' }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 overflow-y-auto"
          style={{
            background: 'rgba(255,254,249,0.98)',
            borderTop: '1px solid #e8d5a3',
          }}
        >
          <div className="px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-sans text-sm tracking-widest uppercase py-4 border-b"
                style={{ color: '#7a5c2e', borderColor: '#f5e6c8' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
