import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

export function Arcade({ onModelClick, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/pacman_arcade__animation/scene.gltf');
  const { actions } = useAnimations(animations, group);
  const { raycaster, camera, gl } = useThree();
  const mouse = new THREE.Vector2();
  const hoverRef = useRef(false);
  const pacmanContainerRef = useRef(null); // Reference for the Pac-Man game container

  // State for showing the container (PacMan game)
  const [showGame, setShowGame] = useState(false);

  // Handle mouse movement to detect hover over the whole model
  const handleMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(group.current, true);

    if (intersects.length > 0) {
      // Change cursor to pointer if hovering over the whole model
      gl.domElement.style.cursor = 'pointer';
      hoverRef.current = true;
    } else {
      // Revert cursor if not hovering
      gl.domElement.style.cursor = 'default';
      hoverRef.current = false;
    }
  };

 
  // Initialize the Pacman game when the container shows up
  useEffect(() => {
    if (showGame && pacmanContainerRef.current) {
      // Start the Pac-Man game within the container
      const pacman = new PacmanCanvas(pacmanContainerRef.current);
      pacman.start(); // Start the game
    }
  }, [showGame]);

  // Inline CSS for the PacMan Game Container
  const styles = {
    container: {
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -20%)',
      width: '600px',
      height: '400px',
      backgroundColor: 'white',
      border: '2px solid #ccc',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      zIndex: 10
    },
    content: {
      position: 'relative',
      padding: '20px',
      width: '100%',
      height: '100%'
    },
    closeBtn: {
      position: 'absolute',
      top: '5px',
      right: '5px',
      backgroundColor: 'red',
      color: 'white',
      border: 'none',
      fontSize: '16px',
      padding: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="ad72bb6817744cbea1b39b136ec1313cfbx" rotation={[Math.PI / 2, 34, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="pac_man_machine" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="pac_man_machine_automat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pac_man_machine_automat_0.geometry}
                      material={materials.automat}
                    />
                  </group>
                  <group
                    name="pacman"
                    position={[7.345, 37.744, -1.735]}
                    rotation={[-0.815, 0, 0]}
                    scale={0.095}
                  >
                    <group name="Object_7" position={[0, -0.317, 0]}>
                      <mesh
                        name="pacman_pac_&_ghost_0"
                        castShadow
                        receiveShadow
                        geometry={nodes['pacman_pac_&_ghost_0'].geometry}
                        material={materials.pac__ghost}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>

      {/* Container for Pacman game */}
      {showGame && (
        <div style={styles.container}>
          <div style={styles.content}>
            <button style={styles.closeBtn} onClick={() => setShowGame(false)}>
              X
            </button>
            {/* PacMan game container */}
            <div ref={pacmanContainerRef} style={{ width: '100%', height: '100%' }}></div>
          </div>
        </div>
      )}
    </>
  );
}

useGLTF.preload('/models/pacman_arcade__animation/scene.gltf');
