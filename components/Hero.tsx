'use client';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/SUKA9135.jpg"
          alt="Wedding"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.35)' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 pb-26">
        <p className="font-sans text-sm tracking-widest uppercase mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Save the date
        </p>

        <h1 className="font-serif text-4xl md:text-5xl mb-8" style={{ fontWeight: 300, color: 'white', lineHeight: 1.3 }}>
          Nhật Hào
          <br />
          & Nhi Mai
        </h1>

        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-8" style={{ background: 'rgba(212,175,55,0.2)', border: '2px solid rgba(212,175,55,0.5)' }}>
          <span style={{ fontSize: '20px', color: 'rgba(212,175,55,0.7)' }}>💕</span>
        </div>

        <p className="font-sans text-sm mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
          19.07.2026
        </p>
        <p className="font-sans text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>
          TP. Quy Nhơn
        </p>
      </div>
    </section>
  );
}
