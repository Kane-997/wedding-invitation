'use client';

import { Heart, MapPin, Clock, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
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
          style={{ background: 'rgba(0,0,0,0.25)' }}
        />
      </div>

    