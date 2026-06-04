'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: 'col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2649956/pexels-photo-2649956.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/2649956/pexels-photo-2649956.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
    span: '',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + photos.length) % photos.length : null));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % photos.length : null));

  return (
    <section
      id="gallery"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #fffef9 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Khoảnh khắc của chúng tôi
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#5c3d1a' }}
          >
            Bộ ảnh cưới
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-40 md:auto-rows-48">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden cursor-pointer rounded-sm group hidden md:block ${photo.span}`}
              style={{ minHeight: 'auto' }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.thumb}
                alt={`Wedding photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
          {/* Mobile simplified grid - show first 8 photos */}
          {photos.slice(0, 8).map((photo, i) => (
            <div
              key={`mobile-${i}`}
              className="overflow-hidden cursor-pointer rounded-sm group md:hidden"
              style={{ minHeight: '160px' }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.thumb}
                alt={`Wedding photo ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-yellow-300 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 sm:left-8 text-white hover:text-yellow-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={photos[lightbox].src}
            alt="Wedding photo"
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 0 60px rgba(212,175,55,0.3)' }}
          />
          <button
            className="absolute right-4 sm:right-8 text-white hover:text-yellow-300 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-6 font-sans text-sm text-white opacity-60">
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
