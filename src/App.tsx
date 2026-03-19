import ProveHeader from './components/prove/ProveHeader';
import Positioning from './components/prove/Positioning';
import TrustBar from './components/prove/TrustBar';
import Capabilities from './components/prove/Capabilities';
import Proof from './components/prove/Proof';
import ProveFooter from './components/prove/ProveFooter';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ProveHeader />
      <Positioning />
      <TrustBar />
      <div id="capabilities">
        <Capabilities />
      </div>
      <div id="proof">
        <Proof />
      </div>
      <ProveFooter />
    </div>
  );
}

export default App;
