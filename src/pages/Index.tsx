import Header from '../components/Header';
import Hero from '../components/Hero';
import Fleet from '../components/Fleet';
import Services from '../components/Services';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import FloatingDownload from '../components/FloatingDownload';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Fleet />
      <Services />
      <Booking />
      <Footer />
      <FloatingDownload />
    </div>
  );
};

export default Index;
