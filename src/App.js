import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { polygonPathName, loadPolygonPath } from 'tsparticles-path-polygon';
import './styles.css';
import ParticleTest from './ParticleTest';

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return <ParticleTest />;
}
