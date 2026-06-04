'use client';

import { MapPin, Clock, Calendar } from 'lucide-react';

const venues = [
  {
    title: 'Lễ Vu Quy',
    subtitle: 'Nhà gái',
    address: '123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM',
    time: '08:00 — 10:00',
    date: 'Thứ Bảy, 15/02/2025',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4547!2d106.7028!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb5%3A0x3b0786e7!2zTmd1eeG7hW4gSHXhu4csIFF14bqtbiAxLCBI4buTIENow60gTWluaA!5e0!3m2!1svi!2svn!4v1700000000000',
    directionsUrl: 'https://maps.google.com/?q=10.7769,106.7028',
  },
  {
    title: 'Tiệc Cưới',
    subtitle: 'Trung tâm tiệc cưới',
    address: 'Capella Wedding Center, 456 Lê Lợi, Quận 1, TP.HCM',
    time: '11:00 — 14:00',
    date: 'Thứ Bảy, 15/02/2025',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6954!3d10.7737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb5%3A0x3b0786e7!2zTMOqIEzhu6dpLCBRdeG6rW4gMSwgSENN!5e0!3m2!1svi!2svn!4v1700000000000',
    directionsUrl: 'https://maps.google.com/?q=10.7737,106.6954',
  },
];

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #fffef9 0%, #fdf6e9 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Địa điểm tổ chức
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#5c3d1a' }}
          >
            Thời gian & Địa điểm
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {venues.map((venue, i) => (
            <div
              key={i}
              className="rounded-sm overflow-hidden"
              style={{
                border: '1px solid #e8d5a3',
                boxShadow: '0 8px 40px rgba(139,100,32,0.1)',
                background: 'rgba(255,255,255,0.8)',
              }}
            >
              {/* Map */}
              <div className="h-40 md:h-56 relative overflow-hidden">
                <iframe
                  src={venue.mapUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={venue.title}
                />
                <div
                  className="absolute top-3 left-3 font-sans text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
                  style={{ background: 'rgba(212,175,55,0.9)', color: 'white' }}
                >
                  {venue.title}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="font-serif mb-1"
                  style={{ fontSize: '1.5rem', fontWeight: 400, color: '#5c3d1a' }}
                >
                  {venue.subtitle}
                </h3>
                <div
                  className="w-10 h-px mb-4"
                  style={{ background: '#d4af37' }}
                />

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
                    <span className="font-sans text-sm" style={{ color: '#5c3d1a' }}>
                      {venue.date}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
                    <span className="font-sans text-sm" style={{ color: '#5c3d1a' }}>
                      {venue.time}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: '#d4af37', marginTop: '2px', flexShrink: 0 }} />
                    <span className="font-sans text-sm" style={{ color: '#5c3d1a' }}>
                      {venue.address}
                    </span>
                  </div>
                </div>

                <a
                  href={venue.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 px-5 py-2.5 rounded-sm"
                  style={{
                    border: '1px solid #d4af37',
                    color: '#8a6820',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#d4af37';
                    (e.currentTarget as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#8a6820';
                  }}
                >
                  <MapPin size={14} />
                  Chỉ đường
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
