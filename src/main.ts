import { Angle, Radius } from "./constant";
import * as H from "./hex";

const canvas = document.querySelector(
    "canvas#grid-canvas"
) as HTMLCanvasElement;

const context = canvas.getContext("2d");

const grid = new H.HexGrid(
    [
        [0, 0],
        [0, 1],
    ],
    5
);

console.log(grid);
