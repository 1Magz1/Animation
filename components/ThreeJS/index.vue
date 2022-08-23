<template>
  <div class="three">
    <canvas />
  </div>
</template>
<script lang="ts">
import * as THREE from 'three';
import {
  CatmullRomCurve3,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import Vue from 'vue';

// @vue/component
export default Vue.extend({
  name: 'three-js',
  data() {
    return {
      renderer: {} as WebGLRenderer,
      cube: null,
      scene: {} as Scene,
      camera: {} as PerspectiveCamera,
      time: 0,
      path: {} as CatmullRomCurve3,
      pointsData: [
        [18.1, 58.2],
        [93.6, 8.6],
        [275.3, 89.5],
        [75.9, 148],
        [51.7, 90.2],
        [18.1, 58.2],
      ],
      vectorPoints: [] as Array<Vector3>,
      colors: [0x8664d4, 0x4dc2cc, 0x4d86cc],
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    // Tube Animation
    init() {
      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
      );

      this.renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('canvas') as HTMLCanvasElement,
        alpha: true,
      });

      this.renderer.setSize(window.innerWidth, window.innerHeight);

      for (let i = 0; i < this.pointsData.length; i += 1) {
        const x = this.pointsData[i][0];
        const y = 0;
        const z = this.pointsData[i][1];
        this.vectorPoints[i] = new THREE.Vector3(x, y, z);
      }

      this.path = new THREE.CatmullRomCurve3(this.vectorPoints);

      for (let i = 0; i < this.colors.length; i += 1) {
        const newGeometry = new THREE.TubeBufferGeometry(
          this.path,
          100,
          (i * 2) + 4,
          10,
          true,
        );
        const newMaterial = new THREE.MeshBasicMaterial({
          color: this.colors[i],
          transparent: true,
          wireframe: true,
          opacity: (1 - i / 3) * 0.5,
        });
        const newTube = new THREE.Mesh(newGeometry, newMaterial);
        this.scene.add(newTube);
      }
    },
    animate() {
      this.time += 0.0010;
      const p1 = this.path.getPointAt(this.time % 1);
      const p2 = this.path.getPointAt((this.time + 0.02) % 1);

      this.camera.position.set(p1.x, p1.y, p1.z);
      this.camera.lookAt(p2);

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    },
    // Cube animation
    // init() {
    //   this.scene = new THREE.Scene();
    //
    //   this.camera = new THREE.PerspectiveCamera(
    //     75,
    //     window.innerWidth / window.innerHeight,
    //   );
    //   this.camera.position.z = 5;
    //
    //   this.renderer = new THREE.WebGLRenderer({
    //     canvas: document.querySelector('canvas'),
    //     alpha: true,
    //   });
    //
    //   this.renderer.setSize(window.innerWidth, window.innerHeight);
    //
    //   const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);
    //   const material = new THREE.MeshBasicMaterial({ color: 0xee7752, wireframe: true });
    //
    //   this.cube = new THREE.Mesh(geometry, material);
    //   this.scene.add(this.cube);
    // },
    // animate() {
    //   this.cube.rotation.x += 0.01;
    //   this.cube.rotation.y += 0.015;
    //   this.renderer.render(this.scene, this.camera);
    //   requestAnimationFrame(this.animate);
    // },
  },
});
</script>
