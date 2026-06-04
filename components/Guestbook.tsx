'use client';

import { useState, useEffect } from 'react';
import { supabase, GuestbookInsert, GuestbookRow } from '@/lib/supabase';
import { Heart, Send } from 'lucide-react';

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestbookRow[]>([]);
  const [form, setForm] = useState<GuestbookInsert>({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
      if (data) setMessages(data as GuestbookRow[]);
    };
    fetchMessages();
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.message.trim()) {
      setError('Vui lòng điền họ tên và lời chúc.');
      return;
    }
    setLoading(true);
    const { error: dbError } = await supabase.from('guestbook').insert([form]);
    setLoading(false);
    if (dbError) {
      setError('Đã có lỗi xảy ra. Vui lòng thử lại.');
    } else {
      setForm({ name: '', message: '' });
      setSubmitted((s) => !s);
    }
  };

  const inputStyle = {
    border: '1px solid #e8d5a3',
    background: 'rgba(255,255,255,0.8)',
    color: '#5c3d1a',
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <section
      id="guestbook"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #fffef9 0%, #fdf6e9 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Để lại lời chúc
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#5c3d1a' }}
          >
            Sổ lưu bút
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Form */}
        <div
          className="rounded-sm p-6 sm:p-8 mb-10"
          style={{
            background: 'rgba(255,255,255,0.9)',
            border: '1px solid #e8d5a3',
            boxShadow: '0 8px 40px rgba(139,100,32,0.1)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: '#b8962e' }}>
                Tên của bạn
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nguyễn Văn An"
                className="w-full font-sans text-sm px-4 py-3 rounded-sm outline-none transition-all duration-300"
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = '#d4af37')}
                onBlur={(e) => (e.target.style.borderColor = '#e8d5a3')}
              />
            </div>
            <div>
              <label className="font-sans text-xs tracking-widest uppercase block mb-2" style={{ color: '#b8962e' }}>
                Lời chúc
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Chúc mừng hạnh phúc trăm năm..."
                rows={3}
                className="w-full font-sans text-sm px-4 py-3 rounded-sm outline-none transition-all duration-300"
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={(e) => (e.target.style.borderColor = '#d4af37')}
                onBlur={(e) => (e.target.style.borderColor = '#e8d5a3')}
              />
            </div>
            {error && <p className="font-sans text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 font-sans text-sm tracking-[0.2em] uppercase px-8 py-3 rounded-sm transition-all duration-300"
              style={{
                background: loading ? '#e8d5a3' : 'linear-gradient(135deg, #c9a84c, #d4af37)',
                color: 'white',
                cursor: loading ? 'not-allowed' : 'pointer',
                boxShadow: loading ? 'none' : '0 4px 16px rgba(212,175,55,0.4)',
              }}
            >
              <Send size={14} />
              {loading ? 'Đang gửi...' : 'Gửi lời chúc'}
            </button>
          </form>
        </div>

        {/* Messages list */}
        <div className="space-y-4">
          {messages.length === 0 && (
            <p className="text-center font-sans text-sm" style={{ color: '#b8962e' }}>
              Hãy là người đầu tiên gửi lời chúc!
            </p>
          )}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-sm p-5 flex gap-4 items-start"
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: '1px solid #e8d5a3',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #d4af37, #f5e6c8)' }}
              >
                <Heart fill="white" stroke="white" size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <span className="font-serif text-base font-medium" style={{ color: '#5c3d1a' }}>
                    {msg.name}
                  </span>
                  <span className="font-sans text-xs" style={{ color: '#b8962e' }}>
                    {formatDate(msg.created_at)}
                  </span>
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#7a5c2e' }}>
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
