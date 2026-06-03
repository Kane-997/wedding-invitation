import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="py-14 px-6 text-center"
      style={{
        background: 'linear-gradient(180deg, #fdf6e9 0%, #f5e6c8 100%)',
        borderTop: '1px solid #e8d5a3',
      }}
    >
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="gold-divider flex-1 max-w-24" />
        <Heart fill="#d4af37" stroke="#d4af37" size={20} />
        <div className="gold-divider flex-1 max-w-24" />
      </div>

      <h3
        className="font-serif mb-2"
        style={{ fontSize: '2rem', fontWeight: 300, color: '#8a6820' }}
      >
        Minh Anh & Quốc Huy
      </h3>
      <p
        className="font-sans text-xs tracking-[0.35em] uppercase mb-6"
        style={{ color: '#b8962e' }}
      >
        15 tháng 02 năm 2025
      </p>

      <p className="font-sans text-sm italic" style={{ color: '#9a7a3a' }}>
        "Tình yêu nhẫn nhục, tình yêu nhân từ, tình yêu không ghen tị..."
      </p>
      <p className="font-sans text-xs mt-2" style={{ color: '#b8962e' }}>
        — 1 Cô-rinh-tô 13:4
      </p>

      <div className="gold-divider mt-8 mb-4" />

      <p className="font-sans text-xs" style={{ color: '#c9a84c', opacity: 0.7 }}>
        Được tạo với{' '}
        <Heart fill="#d4af37" stroke="#d4af37" size={10} className="inline mx-1" />
        dành riêng cho ngày trọng đại
      </p>
    </footer>
  );
}
