import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import React from 'react';
import { createXRStore, XR } from '@react-three/xr';
import NavBar from './html/NavBar.jsx';
import { ARAnchor, ARView } from 'react-three-mind';

const store = createXRStore();

function App() {

  return (
    <>
      <ARView
        imageTargets="/targets/card.mind"
        filterMinCF={0.1}
        filterBeta={1000}
        missTolerance={5}
        warmupTolerance={5}
        flipUserCamera={true}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ARAnchor
          target={0}
          onAnchorFound={() => console.log('Target found! 🎉')}
          onAnchorLost={() => console.log('Target lost! 😢')}
        >
          {/*<Experience />*/}
          <mesh position={[0, 0, 0]}>
            <planeGeometry />
            <meshNormalMaterial />
          </mesh>
        </ARAnchor>
      </ARView>
      {/*<NavBar />*/}
      {/*<Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>*/}
      {/*  <XR store={store}>*/}
      {/*    <color attach="background" args={['#ececec']} />*/}
      {/*    <Experience />*/}
      {/*  </XR>*/}
      {/*</Canvas>*/}
    </>
  );
}

export default App;
