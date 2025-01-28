import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import React from 'react';
import { createXRStore, XR } from '@react-three/xr';
import NavBar from './html/NavBar.jsx';
import QRScanner from './components/QRScanner';

const store = createXRStore();

function App() {
  const handleScanSuccess = (decodedText) => {
    console.log(`QR Code detected: ${decodedText}`);
    // Handle AR interactions or pass this data to Experience
  };

  return (
    <>
      <NavBar />
      {/*<QRScanner onScanSuccess={handleScanSuccess} />*/}
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <XR store={store}>
          <color attach="background" args={['#ececec']} />
          <Experience />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
