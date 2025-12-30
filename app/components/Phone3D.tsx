"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, OrbitControls, Stage, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Model({ 
  texturePath1, 
  texturePath2, 
  phoneColor 
}: { 
  texturePath1: string; 
  texturePath2: string; 
  phoneColor: string 
}) {
  const { scene } = useGLTF('/free_iphone_13_pro_2021.glb');
  
  const texture1 = useTexture(texturePath1);
  const texture2 = useTexture(texturePath2);

  // Konfigurasi Tekstur agar tegak dan benar
  texture1.flipY = true;
  texture1.colorSpace = THREE.SRGBColorSpace;

  texture2.flipY = true;
  texture2.colorSpace = THREE.SRGBColorSpace;

  useEffect(() => {
    const deepBlue = "#2E4452"; 

    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        if (mesh.name === "Object_26") {
          mesh.material = new THREE.MeshStandardMaterial({
            map: texture1,
            roughness: 0.1,
            metalness: 0.3,
            emissiveMap: texture1,
            emissiveIntensity: 0.4
          });
        } 
        else if (mesh.name === "Object_13") {
          mesh.material = new THREE.MeshStandardMaterial({
            map: texture2,
            roughness: 0.1,
            metalness: 0.3,
            emissiveMap: texture2,
            emissiveIntensity: 0.4
          });
        }
        else {
          mesh.material = (mesh.material as THREE.Material).clone();
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.color = new THREE.Color(deepBlue);
          mat.metalness = 0.9;
          mat.roughness = 0.15;
        }
      }
    });
  }, [scene, texture1, texture2]);

  // --- UBAH SKALA DI SINI ---
  // Dari 3.8 menjadi 2.5 (atau lebih kecil seperti 2.0)
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

export default function Phone3D({ 
  screenshot1, 
  screenshot2 
}: { 
  screenshot1: string; 
  screenshot2: string 
}) {
  const warnaHpPilihan = "#4B4A46";

  return (
    <div className="w-full h-[600px] cursor-grab active:cursor-grabbing">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
          
          {/* Tambahkan adjustCamera={false} agar pengecilan skala manual terlihat hasilnya */}
          <Stage environment="city" intensity={0.5} adjustCamera={false}>
            <Model 
              texturePath1={screenshot1} 
              texturePath2={screenshot2} 
              phoneColor={warnaHpPilihan} 
            />
          </Stage>

          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} blur={2.5} />

          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/free_iphone_13_pro_2021.glb');