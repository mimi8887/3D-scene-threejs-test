import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.18.0/dist/lil-gui.esm.js';


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(30, 10, 30);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(2, 2.5, 1);
controls.update();

camera.lookAt(2, 3, 1)

// const renderScene = new RenderPass(scene, camera);
// const composer = new EffectComposer(renderer);
// composer.addPass(renderScene);

// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// scene.add(groundMesh);

//spotlight
const spotLight = new THREE.SpotLight(new THREE.Color(0.43, 0.21, 1), 3000, 100, 0.22, 1);
spotLight.position.set(20, 50, 0.68);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

//spotlight2
//parent object
const spotLight2Parent = new THREE.Object3D();
scene.add(spotLight2Parent);
const spotLight2 = new THREE.SpotLight(0xffffff, 136, 17, 0.3, 1);
spotLight2.position.set(0, 0, 0);
spotLight2.castShadow = true;
spotLight2.shadow.bias = -0.0001;
spotLight2Parent.add(spotLight2);
spotLight2Parent.position.set(-0.8, 11.2, -1.8);
spotLight2Parent.rotation.set(-1.9, 0, -0.4);

const spotLight2Target = new THREE.Object3D();
spotLight2Target.position.set(0, 0, -1); // forward from spotlight
spotLight2Parent.add(spotLight2Target);
spotLight2.target = spotLight2Target;

const spotLight3 = new THREE.SpotLight(new THREE.Color(0.8, 0.3, 1), 500, 200, 0.22, 1);
spotLight3.position.set(20, 10.5, 20);
spotLight3.castShadow = true;
spotLight3.shadow.bias = -0.0001;
scene.add(spotLight3);

// SpotLightHelper
// const spotLightHelper2 = new THREE.SpotLightHelper(spotLight);
// scene.add(spotLightHelper2);

// // ambient light
// const light = new THREE.AmbientLight( 0xa400f0, 0.1 );
// scene.add( light );

// pointlight 1
const pointLight = new THREE.PointLight( new THREE.Color(0.351, 0.498, 1), 4, 50 );
pointLight.position.set( -2.6, 1.7, 4.8 );
scene.add( pointLight );
// pointlight 2
const pointLight2 = new THREE.PointLight( new THREE.Color(0.695, 0.326, 0.695), 2, 50 );
pointLight2.position.set(-2.6, 2.8, -0.2 );
scene.add( pointLight2 );

const pointLight3 = new THREE.PointLight( new THREE.Color(0.5, 0.226, 0.616), 3.6, 200, 1.5 );
pointLight3.position.set(-5.1, 4.65, 1.1 );
scene.add( pointLight3 );

// PointLightHelper
// const pointLightHelper = new THREE.PointLightHelper(pointLight3, 1);
// scene.add(pointLightHelper);

// GUI controls

// const gui = new GUI();
// const lightFolder = gui.addFolder('Spotlight3 Position');
// lightFolder.add(spotLight3, 'visible');
// lightFolder.add(spotLight3.position, 'x', -20, 20).name('X Position');
// lightFolder.add(spotLight3.position, 'y', 0, 100).name('Y Position');
// lightFolder.add(spotLight3.position, 'z', -20, 20).name('Z Position');
// lightFolder.add(spotLight3, 'intensity', 0, 3000).name('Intensity');
// lightFolder.add(spotLight3, 'distance', 0, 200).name('Distance');
// lightFolder.add(spotLight3.color, 'r', 0.0, 1.0).name('R');
// lightFolder.add(spotLight3.color, 'g', 0.0, 1.0).name('G');
// lightFolder.add(spotLight3.color, 'b', 0.0, 1.0).name('B');

// lightFolder.open();

// const pointLightFolder = gui.addFolder('PointLight Controls');
// pointLightFolder.add(pointLight3, 'visible');
// pointLightFolder.add(pointLight3.position, 'x', -50, 50).name('X Position');
// pointLightFolder.add(pointLight3.position, 'y', 0, 50).name('Y Position');
// pointLightFolder.add(pointLight3.position, 'z', -50, 50).name('Z Position');
// pointLightFolder.add(pointLight3, 'intensity', 0, 10).name('Intensity');
// pointLightFolder.add(pointLight3, 'distance', 0, 200).name('Distance');
// pointLightFolder.add(pointLight3, 'decay', 0, 5).name('Decay');
// pointLightFolder.add(pointLight3.color, 'r', 0.0, 1.0).name('R');
// pointLightFolder.add(pointLight3.color, 'g', 0.0, 1.0).name('G');
// pointLightFolder.add(pointLight3.color, 'b', 0.0, 1.0).name('B');

// pointLightFolder.open();

// const lightFolder2 = gui.addFolder('Spotlight2 Controls');
// lightFolder2.add(spotLight2, 'visible');
// lightFolder2.add(spotLight2Parent.position, 'x', -50, 50).name('X Position');
// lightFolder2.add(spotLight2Parent.position, 'y', 0, 50).name('Y Position');
// lightFolder2.add(spotLight2Parent.position, 'z', -50, 50).name('Z Position');
// lightFolder2.add(spotLight2, 'intensity', 0, 1000).name('Intensity');
// lightFolder2.add(spotLight2, 'distance', 0, 200).name('Distance');

// // Add rotation controls on parent
// lightFolder2.add(spotLight2Parent.rotation, 'x', -Math.PI, Math.PI).name('X Rotation');
// lightFolder2.add(spotLight2Parent.rotation, 'y', -Math.PI, Math.PI).name('Y Rotation');
// lightFolder2.add(spotLight2Parent.rotation, 'z', -Math.PI, Math.PI).name('Z Rotation');

// // Add color controls
// lightFolder2.add(spotLight2.color, 'r', 0.0, 1.0).name('R');
// lightFolder2.add(spotLight2.color, 'g', 0.0, 1.0).name('G');
// lightFolder2.add(spotLight2.color, 'b', 0.0, 1.0).name('B');

// lightFolder2.open();


// assets
// wall and floor
const floor = new GLTFLoader();
floor.load('public/wall-floor/wall-floor.glb', function (gltf) {
  console.log("wall floor mesh loaded")
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }
            // emissive intensity
      if (child.material.emissiveMap) {
        child.material.emissiveIntensity = 5;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  gltf.scene.scale.set(0.5, 0.5, 0.5);
  scene.add(gltf.scene);
  console.log(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});

// chair

const chair = new GLTFLoader();
chair.load('public/chair/chair.gltf', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(gltf.scene);
  console.log(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});

// desk

const desk = new GLTFLoader();
desk.load('public/desk/desk.glb', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }

      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(gltf.scene);
  console.log(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});

// screens

const screens = new GLTFLoader();
screens.load('public/screens/screens.glb', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }
      if (child.material.emissiveMap) {
        child.material.emissiveIntensity = 1;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(gltf.scene);
  console.log(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});


//curtain
const curtain = new GLTFLoader();
curtain.load('public/curtain/curtain.glb', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      child.material.alphaMap = child.material.map;
      child.material.transparent = true;
      child.material.needsUpdate = true;
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});


//bed
const bed = new GLTFLoader();
bed.load('public/bed/bed.gltf', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  scene.add(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});

//left wall
const leftWall = new GLTFLoader();
leftWall.load('public/left_wall/left_wall.gltf', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }
      if (child.material.emissiveMap) {
        child.material.emissiveIntensity = 15;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});

//aquarium
const aquarium = new GLTFLoader();
let mixer;
aquarium.load('public/aquarium/aquarium.glb', function (gltf) {
  console.log("mesh aquarium loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }

      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(gltf.scene);

  mixer = new THREE.AnimationMixer(gltf.scene);
  gltf.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });

}, undefined, function (error) {
  console.error(error);
});

//table
const table = new GLTFLoader();
table.load('public/table/low-table.glb', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  scene.add(gltf.scene);

}, undefined, function (error) {
  console.error(error);
});

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  const delta = clock.getDelta();
  if (mixer) mixer.update(delta);
  // pointLightHelper.update();
  // spotLightHelper2.update();
  renderer.render(scene, camera);
  // composer.render();
}

animate();
