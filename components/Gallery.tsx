'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_20260604b4b98cb0a20ce5429b15757850e5b643.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_20260604b4b98cb0a20ce5429b15757850e5b643.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_20260604696900d55b961dcabe358e29fce6f1d8.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_20260604696900d55b961dcabe358e29fce6f1d8.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_20260604591faa1b94f3fff6a0741eb4a3dc2f6d.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_20260604591faa1b94f3fff6a0741eb4a3dc2f6d.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_202606041519dbdec222ef0cdba96a64418cf56d.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_202606041519dbdec222ef0cdba96a64418cf56d.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_20260604d82266a505ea901b32bbdb48548c5f86.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_20260604d82266a505ea901b32bbdb48548c5f86.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_2026060413929522f844629f1a459308b27707a2.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_2026060413929522f844629f1a459308b27707a2.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_202606049b884b0b41b7c2d22be677f79cfa24f4.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_202606049b884b0b41b7c2d22be677f79cfa24f4.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_20260604a27d98cdd879840f9d6718ed84080140.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_20260604a27d98cdd879840f9d6718ed84080140.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_202606042daef4d690d668995f93c7b5c4b5c3f6.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_202606042daef4d690d668995f93c7b5c4b5c3f6.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_202606042124284c1b0c2e222a1cf58814244118.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_202606042124284c1b0c2e222a1cf58814244118.jpg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    src: 'https://sf-static.upanhlaylink.com/img/image_20260604ef8f691b19eb44fad0c2deedf6cd10ec.jpg?auto=compress&cs=tinysrgb&w=800',
    thumb: 'https://sf-static.upanhlaylink.com/img/image_20260604ef8f691b19eb44fad0c2deedf6cd10ec.jpg?auto=compress&cs=tinysrgb&w=400',
  },
];

const sections: Array<{ type: string; photos?: number[]; layout?: string; title?: string; text?: string }> = [
  {
    type: 'gallery',
    photos: [0, 1, 2],
    layout: 'row',
  },
  {
    type: 'text',
    title: 'OUR LOVE STORY',
    text: 'From the first moment we met, we knew it was something special. Our journey together has been filled with love, laughter, and countless beautiful memories.',
  },
  {
    type: 'gallery',
    photos: [3, 4, 5],
    layout: 'varied',
  },
  {
    type: 'text',
    title: 'TAKE ME TO YOUR HEART',
    text: 'Take me to your heart, take me to your soul. Give your hand before I\'m old. Show me what love is, haven\'t got a clue.',
  },
  {
    type: 'gallery',
    photos: [6, 7, 8, 9, 10],
    layout: 'mixed',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + photos.length) % photos.length : null));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % photos.length : null));

  const renderGalleryRow = (photoIndices: number[], layoutType: string) => {
    if (layoutType === 'row') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {photoIndices.map((idx) => (
            <div
              key={idx}
              className="overflow-hidden cursor-pointer rounded-sm group"
              onClick={() => setLightbox(idx)}
            >
              <img
                src={photos[idx].thumb}
                alt={`Wedding photo ${idx + 1}`}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      );
    } else if (layoutType === 'varied') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 overflow-hidden cursor-pointer rounded-sm group" onClick={() => setLightbox(photoIndices[0])}>
            <img src={photos[photoIndices[0]].thumb} alt="Wedding photo" className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-1">
            {[photoIndices[1], photoIndices[2]].map((idx) => (
              <div key={idx} className="overflow-hidden cursor-pointer rounded-sm group" onClick={() => setLightbox(idx)}>
                <img src={photos[idx].thumb} alt="Wedding photo" className="w-full h-36 md:h-36 object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (layoutType === 'mixed') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-64 md:auto-rows-72">
          {photoIndices.map((idx, pos) => {
            let spanClass = '';
            if (pos === 0) spanClass = 'md:col-span-2 md:row-span-2';
            else if (pos === 3) spanClass = 'md:col-span-2';
            return (
              <div
                key={idx}
                className={`overflow-hidden cursor-pointer rounded-sm group ${spanClass}`}
                onClick={() => setLightbox(idx)}
              >
                <img src={photos[idx].thumb} alt="Wedding photo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <section
      id="gallery"
      className="py-16 md:py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #fffef9 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
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

        <div className="space-y-16 md:space-y-20">
          {sections.map((section, idx) => (
            <div key={idx}>
              {section.type === 'gallery' && renderGalleryRow(section.photos!, section.layout!)}
              {section.type === 'text' && (
                <div className="py-12 md:py-16 flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
                  <h3
                    className="font-serif text-4xl md:text-5xl mb-6"
                    style={{ fontWeight: 300, color: '#5c3d1a', lineHeight: 1.3 }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="font-sans text-base md:text-lg leading-relaxed"
                    style={{ color: '#7a5c2e', lineHeight: 1.8 }}
                  >
                    {section.text}
                  </p>
                </div>
              )}
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
