import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 10, 1000 );
camera.position.z = 25;
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0x170226);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let cubeMesh = new THREE.Mesh();
let stars, starGeo;
let sphereMesh = new THREE.Mesh();
let sphereMesh2 = new THREE.Mesh();
let sphereMesh3 = new THREE.Mesh();

lighting();
cube();
particles();

function particles() {
  const points = [];

  for (let i = 0; i < 4000; i++) {
    let star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
    );
    points.push(star);
  }

  starGeo = new THREE.BufferGeometry().setFromPoints(points);

  let sprite = new THREE.TextureLoader().load("assets/images/star.png");
  let starMaterial = new THREE.PointsMaterial({
    color: 0xf1f1f1,
    size: 0.7,
    map: sprite,
  });

  stars = new THREE.Points(starGeo, starMaterial);
  scene.add(stars);
}

function animateParticles() {
    starGeo.verticesNeedUpdate = true;
    stars.position.y -= 0.9;
  }

function cube() {
  // Base Cube
  const texture = new THREE.TextureLoader().load("assets/textures/slatetexture.jpg");
  const cubeMaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0x814999 });
  const cubeGeometry = new THREE.BoxGeometry( 25, 1, 19 ); // width, height, depth
  cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
  scene.add( cubeMesh );
  cubeMesh.position.set( 0, -7.5, 0 );

  // Left Side Cube
  const texture2 = new THREE.TextureLoader().load("assets/textures/slatetexture.jpg");
  const cubeMaterial2 = new THREE.MeshBasicMaterial({ map: texture2, color: 0x814999 });
  const cubeGeometry2 = new THREE.BoxGeometry( 6, 9, 19 );
  const cubeMesh2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2);
  scene.add( cubeMesh2 );
  cubeMesh2.position.set( -9.5, -2.5, 0 );

  // North Side Cube
  const textureNorth = new THREE.TextureLoader().load("assets/textures/slatetexture.jpg");
  const cubeMaterialNorth = new THREE.MeshBasicMaterial({ map: textureNorth, color: 0x814999 });
  const cubeGeometryNorth = new THREE.BoxGeometry( 19, 9, 3 );
  const cubeMeshNorth = new THREE.Mesh(cubeGeometryNorth, cubeMaterialNorth);
  scene.add( cubeMeshNorth );
  cubeMeshNorth.position.set( 3, -2.5, -8 );

  // South Side Cube
  const textureSouth = new THREE.TextureLoader().load("assets/textures/slatetexture.jpg");
  const cubeMaterialSouth = new THREE.MeshBasicMaterial({ map: textureSouth, color: 0x814999 });
  const cubeGeometrySouth = new THREE.BoxGeometry( 19, 9, 2 );
  const cubeMeshSouth = new THREE.Mesh(cubeGeometrySouth, cubeMaterialSouth);
  scene.add( cubeMeshSouth );
  cubeMeshSouth.position.set( 3, -2.5, 8.5 );

  const textureSE = new THREE.TextureLoader().load("assets/textures/slatetexture.jpg");
  const cubeMaterialSE = new THREE.MeshBasicMaterial({ map: textureSE, color: 0x814999 });
  const cubeGeometrySE = new THREE.BoxGeometry( 6, 9, 2 );
  const cubeMeshSE = new THREE.Mesh(cubeGeometrySE, cubeMaterialSE);
  scene.add( cubeMeshSE );
  cubeMeshSE.position.set( 9.5, -2.5, 6.5 );

  // flat
  const westGeometry = new THREE.BoxGeometry( 6, 0.25, 19 );
  const westMaterial = new THREE.MeshMatcapMaterial({ color: 0x814999 });
  const westMesh = new THREE.Mesh(westGeometry, westMaterial);
  scene.add( westMesh );
  westMesh.position.set( -9.5, 2.125, 0 );

  const northGeometry = new THREE.BoxGeometry( 19, 0.25, 3 );
  const northMaterial = new THREE.MeshMatcapMaterial({ color: 0x814999 });
  const northMesh = new THREE.Mesh(northGeometry, northMaterial);
  scene.add( northMesh );
  northMesh.position.set( 3, 2.125, -8 );

  const southGeometry = new THREE.BoxGeometry( 19, 0.25, 2 );
  const southMaterial = new THREE.MeshMatcapMaterial({ color: 0x814999 });
  const southMesh = new THREE.Mesh(southGeometry, southMaterial);
  scene.add( southMesh );
  southMesh.position.set( 3, 2.125, 8.5 );

  const seGeometry = new THREE.BoxGeometry( 6, 0.25, 2 );
  const seMaterial = new THREE.MeshMatcapMaterial({ color: 0x814999 });
  const seMesh = new THREE.Mesh(seGeometry, seMaterial);
  scene.add( seMesh );
  seMesh.position.set( 9.5, 2.125, 6.5 );

  const flatSnowGeometry = new THREE.BoxGeometry( 4, 0.1, 2 );
  const flatSnowMaterial = new THREE.MeshMatcapMaterial({ color: 0xffffff });
  const flatSnowMesh = new THREE.Mesh(flatSnowGeometry, flatSnowMaterial);
  scene.add( flatSnowMesh );
  flatSnowMesh.position.set( -10.5, 2.275, -8.5 );

  // Rock SouthWest
  const rockSWGeometry = new THREE.IcosahedronGeometry( 2, 0 );
  const rockSWMaterial = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockSWMesh = new THREE.Mesh(rockSWGeometry, rockSWMaterial);
  scene.add( rockSWMesh );
  rockSWMesh.position.set( -10, 2.25, 7.75 );

  const rockSWGeometrySnow = new THREE.IcosahedronGeometry( 1.9, 0 );
  const rockSWMaterialSnow = new THREE.MeshMatcapMaterial({ color: 0xffffff });
  const rockSWMeshSnow = new THREE.Mesh(rockSWGeometrySnow, rockSWMaterialSnow);
  scene.add( rockSWMeshSnow );
  rockSWMeshSnow.position.set( -10, 2.4, 7.75 );

  const rockSWGeometry2 = new THREE.IcosahedronGeometry( 1.5, 0 );
  const rockSWMaterial2 = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockSWMesh2 = new THREE.Mesh(rockSWGeometry2, rockSWMaterial2);
  scene.add( rockSWMesh2 );
  rockSWMesh2.position.set( -8, 2.25, 7.25 );

  // Rock NorthWest
  const rockNWGeometry = new THREE.IcosahedronGeometry( 1.5, 0 );
  const rockNWMaterial = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockNWMesh = new THREE.Mesh(rockNWGeometry, rockNWMaterial);
  scene.add( rockNWMesh );
  rockNWMesh.position.set( -10, 2.25, -5.55 );

  const rockNWGeometry2 = new THREE.IcosahedronGeometry( 1, 0 );
  const rockNWMaterial2 = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockNWMesh2 = new THREE.Mesh(rockNWGeometry2, rockNWMaterial2);
  scene.add( rockNWMesh2 );
  rockNWMesh2.position.set( -8, 2.25, -6 );

  // RockNorth
  const rockNorthGeometry = new THREE.IcosahedronGeometry( 1.8, 0 );
  const rockNorthMaterial = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockNorthMesh = new THREE.Mesh(rockNorthGeometry, rockNorthMaterial);
  scene.add( rockNorthMesh );
  rockNorthMesh.position.set( 1.5, 2.25, -8.1 );

  const rockNorthGeometrySnow = new THREE.IcosahedronGeometry( 1.7, 0 );
  const rockNorthMaterialSnow = new THREE.MeshMatcapMaterial({ color: 0xffffff });
  const rockNorthMeshSnow = new THREE.Mesh(rockNorthGeometrySnow, rockNorthMaterialSnow);
  scene.add( rockNorthMeshSnow );
  rockNorthMeshSnow.position.set( 1.5, 2.35, -8.1 );

  // Rock SouthEast
  const rockSEGeometry = new THREE.IcosahedronGeometry( 1.8, 0 );
  const rockSEMaterial = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockSEMesh = new THREE.Mesh(rockSEGeometry, rockSEMaterial);
  scene.add( rockSEMesh );
  rockSEMesh.position.set( 10.5, 2.25, 7.75 );

  const rockSEGeometrySnow = new THREE.IcosahedronGeometry( 1.7, 0 );
  const rockSEMaterialSnow = new THREE.MeshMatcapMaterial({ color: 0xffffff });
  const rockSEMeshSnow = new THREE.Mesh(rockSEGeometrySnow, rockSEMaterialSnow);
  scene.add( rockSEMeshSnow );
  rockSEMeshSnow.position.set( 10.5, 2.35, 7.75 );

  const rockSEGeometry2 = new THREE.IcosahedronGeometry( 1.3, 0 );
  const rockSEMaterial2 = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockSEMesh2 = new THREE.Mesh(rockSEGeometry2, rockSEMaterial2);
  scene.add( rockSEMesh2 );
  rockSEMesh2.position.set( 8.5, 2.25, 7.25 );

  // Rock South
  const rockSouthGeometry = new THREE.IcosahedronGeometry( 1.15, 0 );
  const rockSouthMaterial = new THREE.MeshMatcapMaterial({ color: 0x4b3c4d });
  const rockSouthMesh = new THREE.Mesh(rockSouthGeometry, rockSouthMaterial);
  scene.add( rockSouthMesh );
  rockSouthMesh.position.set( 5, 2.25, 8.7 );

  const rockSouthGeometrySnow = new THREE.IcosahedronGeometry( 1.05, 0 );
  const rockSouthMaterialSnow = new THREE.MeshMatcapMaterial({ color: 0xffffff });
  const rockSouthMeshSnow = new THREE.Mesh(rockSouthGeometrySnow, rockSouthMaterialSnow);
  scene.add( rockSouthMeshSnow );
  rockSouthMeshSnow.position.set( 5, 2.35, 8.7 );

  // Lava Cube
  const textureLava = new THREE.TextureLoader().load("assets/textures/lavatexture.jpg");
  const cubeMaterialLava = new THREE.MeshBasicMaterial({ map: textureLava, color: 0xe09616 });
  const cubeGeometryLava = new THREE.BoxGeometry( 19, 2, 14 );
  const cubeMeshLava = new THREE.Mesh(cubeGeometryLava, cubeMaterialLava);
  scene.add( cubeMeshLava );
  cubeMeshLava.position.set( 3, -6, 0.5 );

  // Steel Platform Cube 

  const cubeSteelMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
  const cubeSteelGeometry = new THREE.BoxGeometry( 2.5, 0.5, 2 );
  const cubeMeshSteel = new THREE.Mesh(cubeSteelGeometry, cubeSteelMaterial);
  scene.add( cubeMeshSteel );
  cubeMeshSteel.position.set( -5.25, 1.8, 0.5 );

  const cubeSteelMaterial2 = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
  const cubeSteelGeometry2 = new THREE.BoxGeometry( 2.25, 0.4875, 1.875 );
  const cubeMeshSteel2 = new THREE.Mesh(cubeSteelGeometry2, cubeSteelMaterial2);
  scene.add( cubeMeshSteel2 );
  cubeMeshSteel2.position.set( -2.875, 1.8, 0.5 );

  const cubeSteelMaterial3 = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
  const cubeSteelGeometry3 = new THREE.BoxGeometry( 2., 0.475, 1.75 );
  const cubeMeshSteel3 = new THREE.Mesh(cubeSteelGeometry3, cubeSteelMaterial3);
  scene.add( cubeMeshSteel3 );
  cubeMeshSteel3.position.set( -0.75, 1.8, 0.5 );

  // Steel Platform Outline   ––––––––––––––––

  const cubeSteelOLGeometry = new THREE.EdgesGeometry(cubeSteelGeometry);
  const cubeSteelOLMaterial = new THREE.LineBasicMaterial({ color: 0x646464 });
  const cubeSteelOLMesh = new THREE.LineSegments(cubeSteelOLGeometry, cubeSteelOLMaterial);
  scene.add(cubeSteelOLMesh);
  cubeSteelOLMesh.position.set(-5.25, 1.8, 0.5);

  const cubeSteelOLGeometry2 = new THREE.EdgesGeometry(cubeSteelGeometry2);
  const cubeSteelOLMaterial2 = new THREE.LineBasicMaterial({ color: 0x646464 });
  const cubeSteelOLMesh2 = new THREE.LineSegments(cubeSteelOLGeometry2, cubeSteelOLMaterial2);
  scene.add(cubeSteelOLMesh2);
  cubeSteelOLMesh2.position.set(-2.875, 1.8, 0.5);

  const cubeSteelOLGeometry3 = new THREE.EdgesGeometry(cubeSteelGeometry3);
  const cubeSteelOLMaterial3 = new THREE.LineBasicMaterial({ color: 0x646464 });
  const cubeSteelOLMesh3 = new THREE.LineSegments(cubeSteelOLGeometry3, cubeSteelOLMaterial3);
  scene.add(cubeSteelOLMesh3);
  cubeSteelOLMesh3.position.set(-0.75, 1.8, 0.5);

  // Communication Device   ––––––––––––––––

  const cubeGeometryDevice = new THREE.BoxGeometry( 1.5, 1.5, 0.5 );
  const cubeMaterialDevice = new THREE.MeshMatcapMaterial({ color: 0x404040 });
  const cubeMeshDevice = new THREE.Mesh(cubeGeometryDevice, cubeMaterialDevice);
  scene.add( cubeMeshDevice );
  cubeMeshDevice.position.set( -7.6, 3.75, -1 );

  const cubeGeometryDevice2 = new THREE.BoxGeometry( 0.5, 1.3, 0.4 );
  const cubeMaterialDevice2 = new THREE.MeshMatcapMaterial({ color: 0x404040 });
  const cubeMeshDevice2 = new THREE.Mesh(cubeGeometryDevice2, cubeMaterialDevice2);
  scene.add( cubeMeshDevice2 );
  cubeMeshDevice2.position.set( -6.75, 3.75, -1 );

  const cubeGeometryDeviceStand = new THREE.BoxGeometry( 0.8, 1, 0.4 );
  const cubeMaterialDeviceStand = new THREE.MeshMatcapMaterial({ color: 0x404040 });
  const cubeMeshDeviceStand = new THREE.Mesh(cubeGeometryDeviceStand, cubeMaterialDeviceStand);
  scene.add( cubeMeshDeviceStand );
  cubeMeshDeviceStand.position.set( -7.6, 2.5, -1 );

  const cubeGeometryDeviceScreen = new THREE.BoxGeometry( 1.2, 1.2, 0.1 );
  const cubeMaterialDeviceScreen = new THREE.MeshBasicMaterial({ color: 0xbf2c4e });
  const cubeMeshDeviceScreen = new THREE.Mesh(cubeGeometryDeviceScreen, cubeMaterialDeviceScreen);
  scene.add( cubeMeshDeviceScreen );
  cubeMeshDeviceScreen.position.set( -7.6, 3.75, -0.75 );
} // end of cube function

let currentSphere = 0;
let animationStart = performance.now();
const duration = 3000; // Duration of the animation in milliseconds
const distance = 2; // Distance to move the sphere

function lighting() {
  const light = new THREE.HemisphereLight(0x780a44, 0x1c3020, 1);
  scene.add(light);

  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(0, 0, 0);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.near = 500;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 30;
  scene.add(spotLight);
}

// OrbitControls allow the camera to orbit around a target
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Enable damping (inertia)
controls.dampingFactor = 0.05; // Damping factor
controls.enableZoom = true; // Enable zooming
controls.enablePan = true; // Enable panning
controls.autoRotate = false; // Disable auto-rotation
controls.autoRotateSpeed = 2.0; // Auto-rotation speed 

function animate() {
  requestAnimationFrame(animate);

  animateParticles();

  //cubeMesh.rotation.x += 0.008;
  //cubeMesh.rotation.y += 0.008;
  renderer.render(scene, camera);
}

animate();
