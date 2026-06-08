'use client';

import { useState } from 'react';
import { supabase, RSVPInsert } from '@/lib/supabase';
import { CheckCircle, Send } from 'lucide-react';

const initialForm: RSVPInsert = {
  name: '',
  email: '',
  attending: true,
  guests: 0,
  message: '',
  location: 'Sài Gòn',
};

export default function RSVP() {
  const [form, setForm] = useState<RSVPInsert>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim()) {
      setError('Vui lòng điền họ tên.');
      return;
    }
    setLoading(true);
    const { error: dbError } = await supabase.from('rsvp').insert([form]);
    setLoading(false);
    if (dbError) {
      setError('Đã có lỗi xảy ra. Vui lòng thử lại.');
    } else {
      setSubmitted(true);
    }
  };

  const inputClass = `w-full font-sans text-sm px-4 py-3 rounded-sm outline-none transition-all duration-300`;
  const inputStyle = {
    border: '1px solid #e8d5a3',
    background: 'rgba(255,255,255,0.8)',
    color: '#5c3d1a',
  };

  return (
    <section
      id="rsvp"
      className="py-12 px-4"
      style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #fffef9 100%)' }}
    >
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Phản hồi từ khách mời
          </p>
          <h2 className="font-serif text-3xl mb-3" style={{ fontWeight: 300, color: '#5c3d1a' }}>
            Xác Nhận Tham Dự
          </h2>
          <div className="gold-divider mb-4" />
          <p className="font-sans text-sm" style={{ color: '#7a5c2e', lineHeight: 1.6 }}>
            Vui lòng xác nhận trước ngày <strong>06/07/2026</strong> để chúng tôi chuẩn bị tốt nhất.
          </p>
        </div>

        <div className="rounded-sm p-4" style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid #e8d5a3', boxShadow: '0 12px 48px rgba(139,100,32,0.12)' }}>
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle size={56} className="mx-auto mb-4" style={{ color: '#d4af37' }} />
              <h3 className="font-serif text-2xl mb-3" style={{ color: '#5c3d1a' }}>
                Cảm ơn bạn!
              </h3>
              <p className="font-sans text-sm" style={{ color: '#7a5c2e', lineHeight: 1.8 }}>
                Chúng tôi đã nhận được xác nhận của bạn. <br />
                Mong chờ được gặp bạn trong ngày trọng đại!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: '#b8962e' }}>
                  Họ và tên *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nguyễn Văn An"
                  className={inputClass}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#d4af37')}
                  onBlur={(e) => (e.target.style.borderColor = '#e8d5a3')}
                />
              </div>

              <div>
                <label className="font-sans text-xs tracking-widest uppercase block mb-3" style={{ color: '#b8962e' }}>
                  Bạn có tham dự không?
                </label>
                <div className="flex gap-4">
                  {[
                    { val: true, label: 'Tôi sẽ đến' },
                    { val: false, label: 'Rất tiếc, tôi bận' },
                  ].map(({ val, label }) => (
                    <button
                      key={String(val)}
                      type="button"
                      onClick={() => setForm({ ...form, attending: val })}
                      className="flex-1 py-2.5 font-sans text-sm rounded-sm transition-all duration-300"
                      style={{
                        border: '1px solid #d4af37',
                        background: form.attending === val ? '#d4af37' : 'transparent',
                        color: form.attending === val ? 'white' : '#8a6820',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {form.attending && (
                <>
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: '#b8962e' }}>
                      Số khách đi cùng
                    </label>
                    <select
                      value={form.guests}
                      onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#d4af37')}
                      onBlur={(e) => (e.target.style.borderColor = '#e8d5a3')}
                    >
                      {[0, 1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n === 0 ? 'Chỉ mình tôi' : `+${n} người`}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: '#b8962e' }}>
                      Địa điểm tham dự
                    </label>
                    <select
                      value={form.location || 'Sài Gòn'}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#d4af37')}
                      onBlur={(e) => (e.target.style.borderColor = '#e8d5a3')}
                    >
                      <option value="Quy Nhơn">Quy Nhơn</option>
                      <option value="Sài Gòn">Sài Gòn</option>
                      <option value="Hậu Giang">Hậu Giang</option>
                    </select>
                  </div>
                </>
              )}

              <div>
                <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: '#b8962e' }}>
                  Lời chúc (tùy chọn)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Gửi lời chúc đến cặp đôi..."
                  rows={3}
                  className={inputClass}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => (e.target.style.borderColor = '#d4af37')}
                  onBlur={(e) => (e.target.style.borderColor = '#e8d5a3')}
                />
              </div>

              {error && (
                <p className="font-sans text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 font-sans text-sm tracking-[0.2em] uppercase py-3.5 rounded-sm transition-all duration-300"
                style={{
                  background: loading ? '#e8d5a3' : 'linear-gradient(135deg, #c9a84c, #d4af37)',
                  color: 'white',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: loading ? 'none' : '0 4px 16px rgba(212,175,55,0.4)',
                }}
              >
                <Send size={16} />
                {loading ? 'Đang gửi...' : 'Gửi xác nhận'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
