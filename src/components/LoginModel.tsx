"use client";

import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, Center, Environment, ContactShadows } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';

function Model() {
  // Load the OBJ file
  const obj = useLoader(OBJLoader, '/models/perfume.obj');
  const groupRef = useRef<THREE.Group>(null);

  // Apply a hyper-realistic glass / liquid material
  useMemo(() => {
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: '#050505', // Deep luxurious black
      transmission: 0.2, // Slightly transparent dark glass
      opacity: 1,
      metalness: 0.8, // High metalness for a sleek reflective surface
      roughness: 0.1, // Very smooth
      ior: 2.0, // High index of refraction for crystal/obsidian
      thickness: 5.0, // Thick dark glass
      specularIntensity: 2.0,
      envMapIntensity: 3.0, // Highly reflective from the environment
      clearcoat: 1.0, // Adds an extra glossy layer on top
      clearcoatRoughness: 0.05,
    });

    obj.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = glassMaterial;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [obj]);

  // Slowly rotate the model
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Center automatically aligns the geometry */}
      <Center>
        <primitive 
          object={obj} 
          scale={2.5}
          position={[0, -1, 0]} // Move down slightly so it sits near the shadow
        />
      </Center>
    </group>
  );
}

export default function LoginModel() {
  return (
    <div className="w-full h-full bg-jad-cream relative">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        {/* Elegant lighting setup */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <spotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={1} />
        
        {/* Environment adds realistic reflections */}
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Model />
          {/* Beautiful soft floor shadow */}
          <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#000000" />
        </Suspense>

        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Loading overlay for the 116MB file */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="text-jad-gold font-light tracking-widest text-sm uppercase animate-pulse">
          Loading 3D Experience...
        </div>
      </div>
    </div>
  );
}
