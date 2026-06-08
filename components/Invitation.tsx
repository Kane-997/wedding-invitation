export default function Invitation() {
  return (
    <section
      id="invitation"
      className="py-12 px-4"
      style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #fffef9 100%)' }}
    >
      <div className="max-w-lg mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
          Lời kính mời
        </p>
        <h2 className="font-serif text-3xl mb-4" style={{ fontWeight: 300, color: '#5c3d1a' }}>
          Trân trọng kính mời
        </h2>
        <div className="gold-divider mb-6" />

        <p className="font-serif text-lg italic mb-4" style={{ color: '#5c3d1a', lineHeight: 1.8 }}>
          "Chúng mình xin trân trọng kính mời bạn đến dự lễ cưới của chúng mình"
        </p>

        <div className="space-y-4">
          <div
  className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
  style={{
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid #e8d5a3',
    boxShadow: `
      0 8px 30px rgba(212,175,55,0.12),
      0 2px 8px rgba(0,0,0,0.04)
    `,
  }}
>
            <p className="font-sans text-xs uppercase tracking-wider mb-2" style={{ color: '#b8962e' }}>
              Lễ Vu Quy
            </p>
            <p className="font-serif text-lg" style={{ color: '#5c3d1a' }}>
              Nhật Hào & Nhi Mai
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#7a5c2e' }}>
              Chủ Nhật, 19 tháng 07 năm 2026<br />
              17:30 — Trung tâm Tiệc cưới Grand Palace (Sáu Cao 2)
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div
  className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
  style={{
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid #e8d5a3',
    boxShadow: `
      0 8px 30px rgba(212,175,55,0.12),
      0 2px 8px rgba(0,0,0,0.04)
    `,
  }}
>
            <p className="font-sans text-xs uppercase tracking-wider mb-2" style={{ color: '#b8962e' }}>
              Lễ Báo Hỷ
            </p>
            <p className="font-serif text-lg" style={{ color: '#5c3d1a' }}>
              Nhật Hào & Nhi Mai
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#7a5c2e' }}>
              Chủ Nhật, 26 tháng 07 năm 2026<br />
              18:00 — Nhà hàng Vườn Cau Gò Vấp
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div
  className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1"
  style={{
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid #e8d5a3',
    boxShadow: `
      0 8px 30px rgba(212,175,55,0.12),
      0 2px 8px rgba(0,0,0,0.04)
    `,
  }}
>
            <p className="font-sans text-xs uppercase tracking-wider mb-2" style={{ color: '#b8962e' }}>
              Lễ Thành Hôn
            </p>
            <p className="font-serif text-lg" style={{ color: '#5c3d1a' }}>
              Nhật Hào & Nhi Mai
            </p>
            <p className="font-sans text-sm mt-2" style={{ color: '#7a5c2e' }}>
              Thứ 3, 11 tháng 08 năm 2026<br />
              Full day - Tư gia nhà trai
            </p>
          </div>

          <p className="font-sans text-xs leading-relaxed" style={{ color: '#9a7a3a' }}>
            Sự hiện diện của bạn là niềm hạnh phúc lớn lao đối với chúng mình.<br />
            Mong chờ được gặp gỡ bạn trong ngày trọng đại này.
          </p>
        </div>
      </div>
    </section>
  );
}
