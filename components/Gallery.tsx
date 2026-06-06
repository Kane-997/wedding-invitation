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
    photos: [0, 1],
    layout: 'row',
  },
  {
    type: 'text',
    title: 'OUR LOVE STORY',
    text: 'From the first moment we met, we knew it was something special. Our journey together has been filled with love, laughter, and countless beautiful memories.',
  },
  {
    type: 'gallery',
    photos: [2, 3, 4, 5],
    layout: 'varied',
  },
  {
    type: 'text',
    title: 'TAKE ME TO YOUR HEART',
    text: 'Take me to your heart, take me to your soul. Give your hand before I\'m old. Show me what love is, haven\'t got a clue.',
  },
  {
    type: 'gallery',
    photos: [2, 3, 4, 5, 6, 7, 8, 9, 10],
    layout: 'mixed',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + photos.length) % photos.length : null));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % photos.length : null));

  const renderGalleryRow = (photoIndices: number[], layout?: string) => {
    if (layout === 'varied') {
      return (
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-1 row-span-2">
            <div
              key={photoIndices[0]}
              className="overflow-hidden cursor-pointer rounded-sm h-full"
              onClick={() => setLightbox(photoIndices[0])}
            >
              <img
                src={photos[photoIndices[0]].thumb}
                alt={`Wedding photo ${photoIndices[0] + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-3">
            {photoIndices.slice(1, 3).map((idx) => (
              <div
                key={idx}
                className="overflow-hidden cursor-pointer rounded-sm h-60"
                onClick={() => setLightbox(idx)}
              >
                <img
                  src={photos[idx].thumb}
                  alt={`Wedding photo ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (layout === 'mixed') {
      return (
        <div className="grid grid-cols-3 gap-3">
          {photoIndices.map((idx, i) => (
            <div
              key={idx}
              className={`overflow-hidden cursor-pointer rounded-sm ${
                i === 2 ? 'col-span-2 h-160' : 'h-80'
              }`}
              onClick={() => setLightbox(idx)}
            >
              <img
                src={photos[idx].thumb}
                alt={`Wedding photo ${idx + 1}`}
                className="w-full h-auto object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-3">
        {photoIndices.map((idx) => (
          <div
            key={idx}
            className="overflow-hidden cursor-pointer rounded-sm h-80"
            onClick={() => setLightbox(idx)}
          >
            <img
              src={photos[idx].thumb}
              alt={`Wedding photo ${idx + 1}`}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      id="gallery"
      className="py-12 px-4"
      style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #fffef9 100%)' }}
    >
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Khoảnh khắc của chúng tôi
          </p>
          <h2 className="font-serif text-3xl mb-3" style={{ fontWeight: 300, color: '#5c3d1a' }}>
            Bộ ảnh cưới
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              {section.type === 'gallery' && renderGalleryRow(section.photos!, section.layout)}
              {section.type === 'text' && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <h3 className="font-serif text-2xl mb-4" style={{ fontWeight: 300, color: '#5c3d1a', lineHeight: 1.3 }}>
                    {section.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#7a5c2e', lineHeight: 1.8 }}>
                    {section.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <button className="absolute left-2 text-white" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <ChevronLeft size={32} />
          </button>
          <img
            src={photos[lightbox].src}
            alt="Wedding photo"
            className="max-h-[85vh] max-w-[95vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-2 text-white" onClick={(e) => { e.stopPropagation(); next(); }}>
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-4 font-sans text-sm text-white opacity-60">
            {lightbox + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}
