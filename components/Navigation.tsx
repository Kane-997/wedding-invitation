'use client';

import { useState } from 'react';
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
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40" style={{ background: 'rgba(255,254,249,0.95)', borderBottom: '1px solid #e8d5a3' }}>
      <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <Heart fill="#d4af37" stroke="#d4af37" size={18} />
          <span className="font-serif text-lg" style={{ color: '#5c3d1a', fontWeight: 400 }}>H&N</span>
        </a>

        <button className="p-2" onClick={() => setOpen(!open)} style={{ color: '#5c3d1a' }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="fixed top-14 left-0 right-0 bottom-0 z-40 overflow-y-auto" style={{ background: 'rgba(255,254,249,0.98)', borderTop: '1px solid #e8d5a3' }}>
          <div className="px-4 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-sans text-sm tracking-widest uppercase py-3 border-b"
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
