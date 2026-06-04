import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import RSVP from '@/components/RSVP';
import Wishes from '@/components/Wishes';
import QRTransfer from '@/components/QRTransfer';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

export default function WeddingPage() {
  return (
    <main style={{ background: '#fffef9' }}>
      <Navigation />
      <Hero />
      <Countdown />
      <Gallery />
      <Location />
      <RSVP />
      <Wishes />
      <QRTransfer />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
