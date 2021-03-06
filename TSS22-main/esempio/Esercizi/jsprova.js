import * as THREE from "https://cdn.skypack.dev/three";
import Threeasy from "https://cdn.skypack.dev/threeasy/build/threeasy.min.js";

const app = new Threeasy(THREE, {
	preload: { img: "https://assets.codepen.io/5946/threeasy-mg.png" },
	light: false
});

app.camera.position.set(0, 1.5, 1);
app.camera.lookAt(0, 0, 0);

const light = new THREE.PointLight(0xffffff, 2, 25);
light.position.set(0, 0.75, 2);
app.scene.add(light);

app.postload(() => {
	app.img.repeat.set(2, 1);

	const mat = new THREE.MeshStandardMaterial({
		map: app.img,
		transparent: true,
		side: THREE.DoubleSide
	});
	const geo = new THREE.CylinderGeometry(0.75, 0.75, 0.3, 64, 64, 1, false);

	const mesh1 = new THREE.Mesh(geo, mat);
	mesh1.rotation.z = Math.PI * 0.25;
	app.animate(() => {
		mesh1.rotateOnWorldAxis(new THREE.Vector3(-1, 1, 0), -0.005);
	});
	app.scene.add(mesh1);

	const mesh2 = new THREE.Mesh(geo, mat);
	mesh2.rotation.z = Math.PI * -0.25;
	app.animate(() => {
		mesh2.rotateOnWorldAxis(new THREE.Vector3(1, 1, 0), 0.005);
	});
	mesh2.position.z = -0.5;
	app.scene.add(mesh2);
});
