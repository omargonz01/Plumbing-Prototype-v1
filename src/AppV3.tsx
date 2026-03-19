import HeaderV3 from './components/v3/HeaderV3';
import HeroV3 from './components/v3/HeroV3';
import LogoCloudV3 from './components/v3/LogoCloudV3';
import CapabilitiesV3 from './components/v3/CapabilitiesV3';
import MetricsV3 from './components/v3/MetricsV3';
import FooterV3 from './components/v3/FooterV3';

export default function AppV3() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-red-500 selection:text-white">
      <HeaderV3 />
      <HeroV3 />
      <LogoCloudV3 />
      <CapabilitiesV3 />
      <MetricsV3 />
      <FooterV3 />
    </div>
  );
}
