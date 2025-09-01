import React from 'react';
import { ARAnchor, ARView } from 'react-three-mind';

function App() {

  return (
    <>
      <ARView
        imageTargets="/targets/card.mind"
        filterMinCF={0.001}
        filterBeta={1000}
        missTolerance={5}
        warmupTolerance={5}
        flipUserCamera={false}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ARAnchor target={0}>
          <mesh position={[0,0,0]} rotation={[0,0,0]}>
            <boxGeometry />
            <meshNormalMaterial />
          </mesh>
        </ARAnchor>
      </ARView>
    </>
  );
}

export default App;
