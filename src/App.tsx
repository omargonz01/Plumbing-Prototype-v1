import Header from './components/Header';
import Hero from './components/Hero';
import HowToGetService from './components/HowToGetService';
import TrustedService from './components/TrustedService';
import Newsletter from './components/Newsletter';
import BestPlumbing from './components/BestPlumbing';
import FAQ from './components/FAQ';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowToGetService />
      <TrustedService />
      <Newsletter />
      <BestPlumbing />
      <FAQ />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
