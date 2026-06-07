'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const MUSIC_URL = '/audio/Mot-doi.mp3';

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

    // Auto-play on first visit
    const hasVisited = sessionStorage.getItem('visited');
    if (!hasVisited) {
      audio.play().then(() => {
        setPlaying(true);
        setStarted(true);
        sessionStorage.setItem('visited', 'true');
      }).catch(() => {
        sessionStorage.setItem('visited', 'true');
      });
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={MUSIC_URL} preload="auto" />
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggle}
          className="flex items-center justify-center rounded-full shadow-lg"
          style={{
            background: 'rgba(255,255,255,0.95)',
            border: '1.5px solid #d4af37',
            width: '44px',
            height: '44px',
            boxShadow: '0 4px 24px rgba(212,175,55,0.3)',
          }}
          title={playing ? 'Tắt nhạc' : 'Bật nhạc'}
        >
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c9a84c, #d4af37)' }}>
            {playing ? (
              <Pause fill="white" stroke="white" size={12} />
            ) : (
              <Play fill="white" stroke="white" size={12} />
            )}
          </div>
        </button>

        {!started && (
          <div className="absolute bottom-full right-0 mb-2 px-2 py-1 rounded-sm text-xs font-sans whitespace-nowrap" style={{ background: '#d4af37', color: 'white', boxShadow: '0 2px 12px rgba(212,175,55,0.4)' }}>
            <Music size={10} className="inline mr-1" />
            Bật nhạc
          </div>
        )}
      </div>
    </>
  );
}
