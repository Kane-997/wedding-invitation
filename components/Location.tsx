'use client';

import { MapPin, Clock, Calendar } from 'lucide-react';

const venues = [
  {
    title: 'Lễ Vu Quy',
    subtitle: 'Nhà hàng tiệc cưới Grand Palace (Sáu Cao 2)',
    address: 'Cầu Hà Thanh 2, Phường Quy Nhơn, Tỉnh Gia Lai',
    time: '17h30',
    date: 'Chủ Nhật, 19/07/2026',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5121.061892682316!2d109.21558885130312!3d13.787749262049624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f6b62562a5253%3A0x7262732c53d33395!2sS%C3%A1u%20Cao%202%20Restaurant!5e1!3m2!1svi!2s!4v1780730720990!5m2!1svi!2s',
    directionsUrl: 'https://maps.app.goo.gl/6T2GQN324Mk5oQCa6',
  },
  {
    title: 'Tiệc Báo Hỷ',
    subtitle: 'Trung tâm tiệc cưới Vườn Cau',
    address: '360 Đ. Phan Văn Trị, Bình Lợi Trung, TP. Hồ Chí Minh',
    time: '18:00',
    date: 'Chủ Nhật, 26/07/2026',
    mapUrl:
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5179.225872503015!2d106.69120001164896!3d10.821830458308005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528edfe9be909%3A0xf26d8955dfb14ac6!2zTmjDoCBow6BuZyBWxrDhu51uIENhdQ!5e1!3m2!1svi!2s!4v1780730860799!5m2!1svi!2s',
    directionsUrl: 'https://maps.app.goo.gl/nhWZriq6fG25fryWA',
  },
  {
    title: 'Tân Hôn',
    subtitle: 'Tư gia nhà trai',
    address: '117 Ấp 3, Xã Hòa An, Thành Phố Cần Thơ',
    time: '09:00',
    date: 'Thứ Ba, 11/08/2026',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d106.6954!3d10.7737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3a9d8d1bb5%3A0x3b0786e7!2zTMOqIEzhu6dpLCBRdeG6rW4gMSwgSENN!5e0!3m2!1svi!2svn!4v1700000000000',
    directionsUrl: 'https://maps.google.com/?q=10.7737,106.6954',
  },
];

export default function Location() {
  return (
    <section id="location" className="py-12 px-4" style={{ background: 'linear-gradient(180deg, #fffef9 0%, #fdf6e9 100%)' }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Địa điểm tổ chức
          </p>
          <h2 className="font-serif text-3xl mb-3" style={{ fontWeight: 300, color: '#5c3d1a' }}>
            Thời gian & Địa điểm
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="space-y-5">
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
              <div className="h-40 relative overflow-hidden">
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
                  className="mt-4 inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-sm"
                  style={{
                    border: '1px solid #d4af37',
                    color: 'white',
                    background: '#d4af37',
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
