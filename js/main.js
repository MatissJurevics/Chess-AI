import { boardMap, valueMap, setupString } from "./data.js";
import {
  initBoard,
  canvas,
  context,
  setupFromFEN,
  reloadPos,
} from "./board.js";
import { movePiece, checkmove } from "./piece.js";

initBoard();
setupFromFEN(setupString);




canvas.addEventListener("click", e => {checkmove(e)})


