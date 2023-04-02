import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { polygonPathName, loadPolygonPath } from 'tsparticles-path-polygon';

export default function ParticleTest() {
  const particlesInit = useCallback(async (engine) => {
    await loadPolygonPath(engine);
  }, []);

  return (
    <Particles
      options={{
        particles: {
          color: {
            value: '#15db95',
          },
          move: {
            attract: {
              enable: false,
              distance: 10,
              rotate: {
                x: 2000,
                y: 2000,
              },
            },
            direction: 'none',
            enable: true,
            outModes: {
              default: 'destroy',
            },
            path: {
              clamp: true,
              enable: true,
              delay: {
                value: 0,
              },
              generator: polygonPathName,
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30,
              },
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: '#000',
              length: 20,
              enable: true,
            },
          },
          number: {
            limit: 10,
            value: 0,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: 2,
          },
        },
        background: {
          color: '#000',
        },
        emitters: {
          direction: 'none',
          life: {
            count: 1,
            duration: 20,
          },
          rate: {
            quantity: 1,
            delay: 0.5,
          },
          size: {
            width: 0,
            height: 0,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      }}
      init={particlesInit}
    />
  );
}
