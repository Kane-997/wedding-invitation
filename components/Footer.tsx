import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center" style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #f5e6c8 100%)', borderTop: '1px solid #e8d5a3' }}>
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="gold-divider flex-1 max-w-16" />
        <Heart fill="#d4af37" stroke="#d4af37" size={16} />
        <div className="gold-divider flex-1 max-w-16" />
      </div>

      <h3 className="font-serif text-xl mb-1" style={{ fontWeight: 300, color: '#8a6820' }}>
        Nhật Hào & Nhi Mai
      </h3>
      <p className="font-sans text-xs tracking-[0.35em] uppercase mb-4" style={{ color: '#b8962e' }}>
        19.07.2026
      </p>

      <p className="font-sans text-xs italic" style={{ color: '#9a7a3a' }}>
        "Tình yêu nhẫn nhục, tình yêu nhân từ, tình yêu không ghen tị..."
      </p>
      <p className="font-sans text-xs mt-1" style={{ color: '#b8962e' }}>
        — 1 Cô-rinh-tô 13:4
      </p>

      <div className="gold-divider mt-4 mb-3" />

      <p className="font-sans text-xs" style={{ color: '#c9a84c', opacity: 0.7 }}>
        Được tạo với <Heart fill="#d4af37" stroke="#d4af37" size={10} className="inline" /> dành riêng
      </p>
    </footer>
  );
}
