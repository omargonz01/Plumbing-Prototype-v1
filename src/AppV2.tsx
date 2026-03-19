import Header from './components/Header';
import HeroV2 from './components/v2/HeroV2';
import CapabilitiesV2 from './components/v2/CapabilitiesV2';
import TrustBar from './components/prove/TrustBar';
import Proof from './components/prove/Proof';
import Footer from './components/Footer';

function AppV2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header from original site */}
      <Header />
      
      {/* Hybrid Hero: Premium layout + Prove messaging */}
      <HeroV2 />
      
      {/* Prove logic explicitly mapped in */}
      <div className="bg-gray-50 py-10">
        <TrustBar />
      </div>
      
      {/* Hybrid Capabilities: Premium multi-card layout + Prove capabilities */}
      <CapabilitiesV2 />
      
      {/* Original Prove module included naturally into layout */}
      <div className="border-t border-gray-100 py-10" id="proof">
        <Proof />
      </div>
      
      {/* Premium Footer from original site */}
      <Footer />
    </div>
  );
}

export default AppV2;
