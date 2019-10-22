import "./styles.css";
import WebGLFont from "./components/WebGLFont/WebGLFont";
import { shaders } from "./components/WebGLFont/shaders";

const type = new WebGLFont({
  word: "the-queen-antonella",
  position: [-90, -10, 0],
  rotation: [Math.PI, 0, 0],
  zoom: 350,
  vertex: shaders[5].vertex,
  fragment: shaders[5].fragment
});
