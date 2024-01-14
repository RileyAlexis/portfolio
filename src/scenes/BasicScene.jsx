import React, { useEffect, useRef } from 'react';
import { Engine, Scene, HemisphericLight, FreeCamera, Vector3, MeshBuilder, Animation, StandardMaterial, Texture } from '@babylonjs/core';

const SceneComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Babylon.js engine initialization
    const engine = new Engine(canvasRef.current, true);

    // Create a scene
    const scene = new Scene(engine);

    // Create a camera
    const camera = new FreeCamera('camera', new Vector3(0, 5, -10), scene);
    camera.setTarget(Vector3.Zero());
    camera.attachControl(canvasRef.current, true);

    // Create a light
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);

    // Create a box
    const box = MeshBuilder.CreateBox('box', { size: 2 }, scene);

    //Craete a material
    const material = new StandardMaterial('boxMaterial', scene);

    //Load the Texture
    const texture = new Texture('/assets/textures/baremetal.jpg', scene);
    material.diffuseTexture = texture;

    //Apply the texture to the box
    box.material = material;

    // Rotate Animation
    const rotateAnimation = new Animation('rotateAnimation', 'rotation.y', 30, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CYCLE);
    const keyFrames = [];
    keyFrames.push({ frame: 0, value: 0 });
    keyFrames.push({ frame: 800, value: 2 * Math.PI });
    rotateAnimation.setKeys(keyFrames);
    box.animations = [rotateAnimation];
    scene.beginAnimation(box, 0, 800, true);


    // Run the render loop
    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });

    // Resize the Babylon engine on window resize
    window.addEventListener('resize', () => {
      engine.resize();
    });

    // Cleanup function
    return () => {
      engine.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh'}} />;
};

export default SceneComponent;
