import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

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
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

camera.lookAt(0, 0, 0)

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(groundMesh);

const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
spotLight.position.set(50, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);
const light = new THREE.AmbientLight( 0x404040, 2 ); // soft white light
scene.add( light );

// wall and floor
const floor = new GLTFLoader();
floor.load('public/wall-floor/wall-floor.gltf', function (gltf) {
  console.log("mesh loaded")
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      if (child.material.map) {
        child.material.map.colorSpace = THREE.SRGBColorSpace;
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
desk.load('public/desk/desk.gltf', function (gltf) {
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


//curtain
const curtain = new GLTFLoader();
curtain.load('public/curtain/curtain.gltf', function (gltf) {
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
aquarium.load('public/aquarium/aquarium.gltf', function (gltf) {
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




function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
