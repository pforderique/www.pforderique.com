import React from "react";
import * as THREE from "three";

import "../../utilities.css";

class Loading extends React.Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    scene.background = new THREE.Color(0x031227);
    camera.position.z = 100;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    const geometry = new THREE.TorusGeometry(6, 1.2, 6, 6);
    const material = new THREE.MeshBasicMaterial({
      color: 0x64ffda,
      // wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    torus.position.x -= 1;
    torus.position.y += 25;
    scene.add(torus);

    const ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);

    var animate = function () {
      requestAnimationFrame(animate);

      // torus.rotation.x += 0.01;
      torus.rotation.y += 0.08;
      torus.rotation.z += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }
  render() {
    return (
      <>
        <div
          id="info"
          style={{
            position: "absolute",
            top: "52vh",
            width: "100%",
            textAlign: "center",
            display: "block",
          }}
        >
          Loading page
        </div>
        {/* <div className="u-textCenter u-highlight">Loading page...</div> */}
        <div ref={(ref) => (this.mount = ref)} />
      </>
    );
  }
}

export default Loading;
