import * as THREE from 'three';
import { OrbitControls } from 'THREE/examples/jsm/controls/OrbitControls';

export default class Sketch {
	constructor(options) {
		this.container = options.domElement;
		this.width = this.container.offsetWidth;
		this.height = this.container.offsetHeight;

		this.camera = new THREE.PerspectiveCamera(
			70,
			this.width / this.height,
			0.01,
			10
		);
		this.camera.position.z = 1;

		this.scene = new THREE.Scene();

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setSize(this.width, this.height);
		// this.renderer.setPixelRatio(window.devicePixelRatio);

		this.container.appendChild(this.renderer.domElement);
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);

		this.time = 0;
		this.addObjects();
		this.render();
	}

	addObjects = () => {
		this.geometry = new THREE.BoxBufferGeometry(0.2, 0.2, 0.2);
		this.material = new THREE.MeshNormalMaterial();

		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.scene.add(this.mesh);
	};

	render = () => {
		this.time += 0.05;
		this.mesh.rotation.x = this.time / 2000;
		this.mesh.rotation.y = this.time / 1000;

		this.renderer.render(this.scene, this.camera);

		// console.log(this.time);
		requestAnimationFrame(this.render);
	};
}

new Sketch({
	domElement: document.getElementById('container'),
});

// let camera, scene, renderer;
// let geometry, material, mesh;

// init();

// function init() {
// 	camera = new THREE.PerspectiveCamera(
// 		70,
// 		window.innerWidth / window.innerHeight,
// 		0.01,
// 		10
// 	);
// 	camera.position.z = 1;

// 	scene = new THREE.Scene();

// 	geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
// 	material = new THREE.MeshNormalMaterial();

// 	mesh = new THREE.Mesh(geometry, material);
// 	scene.add(mesh);

// 	renderer = new THREE.WebGLRenderer({ antialias: true });
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	renderer.setAnimationLoop(animation);
// 	const container = document.getElementById('container');
// 	container.appendChild(renderer.domElement);
// }

// function animation(time) {
// 	mesh.rotation.x = time / 2000;
// 	mesh.rotation.y = time / 1000;

// 	renderer.render(scene, camera);
// }
