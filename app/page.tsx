import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Countdown from '@/components/Countdown';
import LoveStory from '@/components/LoveStory';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import RSVP from '@/components/RSVP';
import Guestbook from '@/components/Guestbook';
import QRTransfer from '@/components/QRTransfer';
import MusicPlayer from '@/components/MusicPlayer';
import Footer from '@/components/Footer';

export default function WeddingPage() {
  return (
    <main style={{ background: '#fffef9' }}>
      <Navigation />
      <Hero />
      <Countdown />
      <LoveStory />
      <Gallery />
      <Location />
      <RSVP />
      <Guestbook />
      <QRTransfer />
      <Footer />
      <MusicPlayer />
    </main>
  );
}
