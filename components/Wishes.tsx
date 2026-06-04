'use client';

import { useEffect, useState } from 'react';
import { supabase, RSVPInsert } from '@/lib/supabase';
import { Heart } from 'lucide-react';

type Wish = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export default function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const { data } = await supabase
          .from('rsvp')
          .select('id, name, message, created_at')
          .not('message', 'is', null)
          .neq('message', '')
          .order('created_at', { ascending: false })
          .limit(50);

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

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

  return (
    <section
      id="wishes"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #fffef9 0%, #fdf6e9 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Lời chúc từ bạn bè
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#5c3d1a' }}
          >
            Lời Chúc Từ Khách Mời
          </h2>
          <div className="gold-divider mt-4" />
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
          <div className="grid md:grid-cols-2 gap-4">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="rounded-sm p-5 flex gap-4 items-start"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1px solid #e8d5a3',
                  transition: 'all 0.3s ease-out',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    '0 8px 24px rgba(139,100,32,0.12)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
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
                      {wish.name}
                    </span>
                    <span className="font-sans text-xs" style={{ color: '#b8962e' }}>
                      {formatDate(wish.created_at)}
                    </span>
                  </div>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: '#7a5c2e' }}>
                    {wish.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
