import { square } from "./entities/square";
import { cubic } from "./entities/cubic";
import * as THREE from "three";
import { OrbitControls } from "./threeExtras/controls/OrbitControls";

export function main(n: number): string {
  const squareResult = square(n);
  const cubicResult = cubic(n);

  //Just to test use of three js
  //Adding something from examples folder is tricky
  //OrbitControls is shown as example

  //1) Copy ts and js file from examples (jsm) to src project
  //2) Change relative path from "../../....three.module.js" to "three"
  //3) Ready to use!

  //Drawback of using this method is that when compiled , threejs will be bundled
  //Credits to :https://github.com/MagnusBrzenk/threejs-typescript-boilerplate
  let orb = new OrbitControls(
    new THREE.PerspectiveCamera(10, 2, 0.2, 10),
    document.createElement("canvas")
  );
  console.log(orb.domElement); //Print to avoid lint ts of var unused

  return `Result square is ${squareResult} and cubic is ${cubicResult}`;
}

console.log(main(2));
console.log(main(3));
