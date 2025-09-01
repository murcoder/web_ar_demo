import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import React from 'react';
import { createXRStore, XR } from '@react-three/xr';
import NavBar from './html/NavBar.jsx';

const store = createXRStore();

function App() {

  return (
    <>
      <NavBar />
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
