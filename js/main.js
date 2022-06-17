import { boardMap, valueMap, setupString } from "./data.js";
import {
  initBoard,
  canvas,
  context,
  setupFromFEN,
  reloadPos,
} from "./board.js";
import { movePiece } from "./piece.js";

initBoard();
setupFromFEN(setupString);


let startx = 0;
let starty = 0;
let clicked = false;

canvas.addEventListener("click", (e) => {
  if (!clicked) {
    startx = Math.floor(e.offsetX/100);
    starty = Math.floor(e.offsetY/100);
  }
  else {
    movePiece(startx, starty, Math.floor(e.offsetX/100), Math.floor(e.offsetY/100));
    reloadPos();
  }
  console.log("clicked", clicked, e.offsetX/100, e.offsetY/100);
  clicked = !clicked
});
