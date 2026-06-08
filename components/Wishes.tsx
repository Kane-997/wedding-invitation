'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

type Wish = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const { data } = await supabase
          .from('rsvp')
          .select('id, name, message, created_at')
          .not('message', 'is', null)
          .neq('message', '')
          .order('created_at', { ascending: false })
          .limit(15);

        if (data) {
          setWishes(
            data.map((item: any) => ({
              id: item.id,
              name: item.name,
              message: item.message,
              created_at: item.created_at,
            }))
          );
        }
      } catch (err) {
        console.error('Failed to fetch wishes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishes();
    const interval = setInterval(fetchWishes, 5000);
    return () => clearInterval(interval);
  }, []);
   // Auto chuyển lời chúc
  useEffect(() => {
    if (wishes.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % wishes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [wishes]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

  const next = () => setCurrent((current + 1) % (wishes.length || 1));
  const prev = () => setCurrent((current - 1 + (wishes.length || 1)) % (wishes.length || 1));

  return (
    <section id="wishes" className="py-12 px-4" style={{ background: 'linear-gradient(180deg, #fffef9 0%, #fdf6e9 100%)' }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Lời chúc từ bạn bè
          </p>
          <h2 className="font-serif text-3xl mb-3" style={{ fontWeight: 300, color: '#5c3d1a' }}>
            Lời Chúc
          </h2>
          <div className="gold-divider" />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="font-sans text-sm" style={{ color: '#b8962e' }}>
              Đang tải lời chúc...
            </p>
          </div>
        ) : wishes.length === 0 ? (
          <div className="text-center py-12">
            <Heart size={32} className="mx-auto mb-4" style={{ color: '#d4af37', opacity: 0.5 }} />
            <p className="font-sans text-sm" style={{ color: '#b8962e' }}>
              Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc!
            </p>
          </div>
        ) : (
          <div>
            <div
              className="rounded-sm p-6 text-center transition-all duration-500 relative min-h-56 flex flex-col items-center justify-center"
              style={{
  background: 'rgba(255,255,255,0.9)',
  border: '1px solid #e8d5a3',
  boxShadow: `
    0 10px 30px rgba(212,175,55,0.12),
    0 4px 12px rgba(0,0,0,0.04)
  `,
}}
            >
              <div className="mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #d4af37, #f5e6c8)' }}
                >
                  <Heart fill="white" stroke="white" size={20} />
                </div>
                <h3 className="font-serif text-lg" style={{ color: '#5c3d1a' }}>
                  {wishes[current]?.name}
                </h3>
                <p className="font-sans text-xs mt-1" style={{ color: '#b8962e' }}>
                  {formatDate(wishes[current]?.created_at)}
                </p>
              </div>
<div
  className="absolute top-4 left-4 font-serif"
  style={{
    fontSize: '64px',
    color: '#d4af37',
    opacity: 0.15,
    lineHeight: 1,
  }}
>
  "
</div>
              <p className="font-sans text-sm leading-relaxed px-4 italic" style={{ color: '#7a5c2e' }}>
                "{wishes[current]?.message}"
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={prev}
                  className="p-2 rounded-full transition-all"
                  style={{
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid #e8d5a3',
                    color: '#d4af37',
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="p-2 rounded-full transition-all"
                  style={{
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid #e8d5a3',
                    color: '#d4af37',
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {wishes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className="transition-all rounded-full"
                  style={{
                    width: current === idx ? '24px' : '8px',
                    height: '8px',
                    background: current === idx ? '#d4af37' : '#e8d5a3',
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
