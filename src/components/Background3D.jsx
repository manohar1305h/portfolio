import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CyberDustParticles = ({ count = 1500 }) => {
  const points = useRef();
  const { viewport } = useThree();
  
  const [positions, velocities, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    // Palette from screenshot: mostly white/grey with distinct neon purple/magenta
    const colorChoices = [
      new THREE.Color('#ffffff'), // White
      new THREE.Color('#ffffff'), // White (weighted)
      new THREE.Color('#aaaaaa'), // Grey
      new THREE.Color('#D400FF'), // Neon Purple
      new THREE.Color('#D400FF'), // Neon Purple (weighted)
      new THREE.Color('#8F00FF')  // Darker Purple
    ];

    for (let i = 0; i < count; i++) {
      // Spread across a massive visible area and wide depth
      positions[i * 3] = (Math.random() - 0.5) * 60; 
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5; // deep spread

      // Very slow floating velocities
      velocities[i * 3] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, velocities, colors];
  }, [count]);

  const mouse = useRef(new THREE.Vector3(0, 0, 0));

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.x = (nx * viewport.width) / 2;
      mouse.current.y = (ny * viewport.height) / 2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport.width, viewport.height]);

  useFrame(() => {
    if (!points.current) return;

    const positionsArray = points.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      let px = positionsArray[i3];
      let py = positionsArray[i3 + 1];
      let pz = positionsArray[i3 + 2];
      
      px += velocities[i3];
      py += velocities[i3 + 1];
      pz += velocities[i3 + 2];

      // Subtle Mouse Interaction
      const dx = mouse.current.x - px;
      const dy = mouse.current.y - py;
      const distSq = dx * dx + dy * dy;

      const radiusSq = 30; 
      if (distSq < radiusSq) {
        const force = (radiusSq - distSq) / radiusSq;
        // Pushing away softly
        velocities[i3] -= (dx / Math.sqrt(distSq)) * force * 0.002;
        velocities[i3 + 1] -= (dy / Math.sqrt(distSq)) * force * 0.002;
      }

      // Friction
      velocities[i3] *= 0.98;
      velocities[i3 + 1] *= 0.98;
      velocities[i3 + 2] *= 0.98;

      // Base drifting limits
      const speedLimit = 0.02;
      if (velocities[i3] > speedLimit) velocities[i3] = speedLimit;
      if (velocities[i3] < -speedLimit) velocities[i3] = -speedLimit;

      // Soft wrapping if they leave viewport
      if (py < -30) py = 30;
      if (py > 30) py = -30;
      if (px < -30) px = 30;
      if (px > 30) px = -30;

      positionsArray[i3] = px;
      positionsArray[i3 + 1] = py;
      positionsArray[i3 + 2] = pz;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y += 0.0005; // extremely slow global ambient rotation
    points.current.rotation.x += 0.0002;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      {/* 0.15 size gives the perfect mix of dots and larger squares based on depth */}
      <pointsMaterial 
        size={0.15} 
        vertexColors 
        transparent 
        opacity={0.9} 
        sizeAttenuation={true} 
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <CyberDustParticles count={1500} />
      </Canvas>
    </div>
  );
};

export default Background3D;
