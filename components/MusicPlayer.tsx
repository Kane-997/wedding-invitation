'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
        setStarted(true);
      }).catch(() => {});
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.35;
    audio.loop = true;
  }, []);

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} preload="none" />
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggle}
          className="flex items-center gap-2 rounded-full shadow-lg transition-all duration-300 group"
          style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1.5px solid #d4af37',
            padding: '10px 18px',
            boxShadow: '0 4px 24px rgba(212,175,55,0.3)',
          }}
          title={playing ? 'Tắt nhạc' : 'Bật nhạc'}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #d4af37)' }}
          >
            {playing ? (
              <Pause fill="white" stroke="white" size={14} />
            ) : (
              <Play fill="white" stroke="white" size={14} />
            )}
          </div>
          <div className="hidden sm:flex flex-col items-start">
            <span
              className="font-sans text-xs font-medium leading-tight"
              style={{ color: '#5c3d1a' }}
            >
              {playing ? 'Đang phát' : 'Nhạc nền'}
            </span>
            <span
              className="font-sans leading-tight"
              style={{ fontSize: '10px', color: '#b8962e' }}
            >
              {playing ? 'A Thousand Years' : 'Nhấn để bật nhạc'}
            </span>
          </div>
          {playing && (
            <div className="flex items-end gap-0.5 h-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-0.5 rounded-full"
                  style={{
                    background: '#d4af37',
                    height: `${30 + Math.random() * 70}%`,
                    animation: `pulse-soft ${0.5 + i * 0.15}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>
          )}
        </button>

        {!started && (
          <div
            className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-sm text-xs font-sans whitespace-nowrap"
            style={{
              background: '#d4af37',
              color: 'white',
              boxShadow: '0 2px 12px rgba(212,175,55,0.4)',
            }}
          >
            <Music size={10} className="inline mr-1" />
            Nhấn để nghe nhạc cưới
          </div>
        )}
      </div>
    </>
  );
}
