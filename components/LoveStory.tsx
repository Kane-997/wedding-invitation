'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';

const events = [
  {
    year: '2018',
    title: 'Lần đầu gặp nhau',
    description:
      'Chúng tôi tình cờ gặp nhau tại một buổi cà phê sách ở Quận 3. Một ánh mắt, một nụ cười — và trái tim đã lên tiếng.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    align: 'left',
  },
  {
    year: '2019',
    title: 'Buổi hẹn hò đầu tiên',
    description:
      'Anh mời em đi dạo dọc bờ sông Sài Gòn lúc chiều tà. Đó là buổi chiều đẹp nhất mà chúng tôi không bao giờ quên.',
    image: 'https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=600',
    align: 'right',
  },
  {
    year: '2021',
    title: 'Du lịch cùng nhau',
    description:
      'Chuyến đi Đà Lạt — nơi chúng tôi cùng nhau khám phá và nhận ra rằng đây là người mình muốn đồng hành mãi mãi.',
    image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
    align: 'left',
  },
  {
    year: '2024',
    title: 'Lời cầu hôn',
    description:
      'Anh quỳ gối dưới ánh nến lấp lánh và hỏi: "Em có muốn trở thành một phần của cuộc đời anh không?" — Em đã nói Có.',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    align: 'right',
  },
  {
    year: '2025',
    title: 'Ngày về chung một nhà',
    description:
      'Và hôm nay, chúng tôi bước vào chương mới đẹp nhất của cuộc đời — trong vòng tay của những người thân yêu nhất.',
    image: 'https://images.pexels.com/photos/1043902/pexels-photo-1043902.jpeg?auto=compress&cs=tinysrgb&w=600',
    align: 'left',
  },
];

function TimelineItem({ event, index }: { event: (typeof events)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = event.align === 'left';

  return (
    <div
      ref={ref}
      className="relative flex flex-col mb-12"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `all 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="text-center px-4">
        <span className="font-sans text-xs tracking-[0.35em] uppercase block mb-2" style={{ color: '#d4af37' }}>
          {event.year}
        </span>
        <h3 className="font-serif text-lg mb-2" style={{ fontWeight: 400, color: '#5c3d1a' }}>
          {event.title}
        </h3>
        <p className="font-sans text-sm" style={{ color: '#7a5c2e', lineHeight: 1.6 }}>
          {event.description}
        </p>
      </div>

      <div className="my-3 flex justify-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d4af37, #f5e6c8)', boxShadow: '0 0 0 4px #fdf6e9' }}>
          <Heart fill="white" stroke="white" size={14} />
        </div>
      </div>

      <div className="px-4">
        <div className="overflow-hidden rounded-sm" style={{ boxShadow: '0 8px 32px rgba(139,100,32,0.18)' }}>
          <img src={event.image} alt={event.title} className="w-full h-40 object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default function LoveStory() {
  return (
    <section id="story" className="py-12 px-4" style={{ background: 'linear-gradient(180deg, #fffef9 0%, #fdf6e9 100%)' }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Hành trình của chúng tôi
          </p>
          <h2 className="font-serif text-3xl mb-3" style={{ fontWeight: 300, color: '#5c3d1a' }}>
            Chuyện tình yêu
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="relative">
          {events.map((event, i) => (
            <TimelineItem key={i} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
