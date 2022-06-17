import { boardMap, valueMap, setupString } from "./data.js"
import  { initBoard, context, setupFromFEN }  from "./board.js"
import { movePiece } from "./piece.js"




initBoard();
setupFromFEN(setupString);

const form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let data = new FormData(form)
    movePiece(data.get("curX"), data.get("curY"), data.get("newX"), data.get("newY"))
})