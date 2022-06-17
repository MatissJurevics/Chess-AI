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
export let clicked = false;

canvas.addEventListener("click", (e) => {
  if (!clicked) {
    startx = Math.floor(e.offsetX/100);
    starty = Math.floor(e.offsetY/100);
    if (boardMap[starty][startx] == 0) {
        return false;
    } 
    clicked = true
  }
  else {
    movePiece(startx, starty, Math.floor(e.offsetX/100), Math.floor(e.offsetY/100));
    reloadPos();
    clicked = false
  }
  
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {clicked = false; console.log("escaped")}
})
