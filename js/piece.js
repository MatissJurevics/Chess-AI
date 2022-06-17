import { boardMap } from "./data.js"
import {
  initBoard,
  canvas,
  context,
  setupFromFEN,
  reloadPos,
} from "./board.js";

let startx = 0;
let starty = 0;
let clicked = false;

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    clicked = false; console.log("esc")
  }
})

export const checkmove = e => {
  if (!clicked) {
    startx = Math.floor(e.offsetX/100);
    starty = Math.floor(e.offsetY/100);
    if (boardMap[starty][startx] == 0) {
        return false;
    } 
    showAvailableMove(startx, starty);
    clicked = true
  }
  else {
    movePiece(startx, starty, Math.floor(e.offsetX/100), Math.floor(e.offsetY/100));
    reloadPos();
    clicked = false
  }
  
}


export const movePiece = (x,y,newx,newy) => {
  // console.log("movePiece",x,y,newx,newy)
  // checks if there is a piece
  if (!boardMap[y][x]) {return false}

  // checks if the new and old positions contained the same team
  let curIsUpper = boardMap[y][x] === boardMap[y][x].toString().toUpperCase()
  let newIsUpper = boardMap[newy][newx] === boardMap[newy][newx].toString().toUpperCase()
  if (curIsUpper === newIsUpper && !isFinite(boardMap[newy][newx])) {return false}
  // if (newx > 7 || newy > 7 || newx < 0 || newy < 0) {alert("Out of bounds"); return false}
  if (boardMap[newy][newx] == boardMap[y][x]) {return false}
  boardMap[newy][newx] = boardMap[y][x]
  boardMap[y][x] = 0;
  return true
}

// god this is a mess
const renderAvPos = (x,y) => {
  if (boardMap[y][x] == 0) {
    context.fillStyle = "rgba(00,255,255,0.1)";
    context.fillRect(x*100,y*100,100,100)
  }
  return false

}

const showAvailableMove = (x,y) => {
  let piece = boardMap[y][x].toString();
  let white = (boardMap[y][x] === boardMap[y][x].toString().toUpperCase());
  switch (piece.toLowerCase()) {
    case "p":
      let negYoffset = 1
      if (y == 6) {
        negYoffset = 2
      }
      for (let i = 0; i < negYoffset; i++) {
        renderAvPos(x, y-1-i)
      }
      break;
    case "r":
      for (let i = 0; i < 8; i++) {
        renderAvPos(x,i)
        renderAvPos(i,y)
      }
      break;
    case "q":
      for (let i = 0; i < 8; i++) {
        renderAvPos(x,i)
        renderAvPos(i,y)
        renderAvPos(x+i,y+i)
        renderAvPos(x-i,y+i)
        renderAvPos(x-i,y-i)
        renderAvPos(x+i,y-i)
      }
      break;
    case "k":
      renderAvPos(x-1,y)
      renderAvPos(x,y-1)
      renderAvPos(x+1,y)
      renderAvPos(x,y+1)
      renderAvPos(x-1,y-1)
      renderAvPos(x+1,y+1)
      renderAvPos(x+1,y-1)
      renderAvPos(x-1,y+1)
    case "b":
      for (let i=0; i<8; i++) {
        renderAvPos(x+i,y+i)
        renderAvPos(x-i,y+i)
        renderAvPos(x-i,y-i)
        renderAvPos(x+i,y-i)
      }
    case "n":
      renderAvPos(x+2,y+1)
      renderAvPos(x+2,y-1)
      renderAvPos(x+1,y+2)
      renderAvPos(x+1,y-2)
      renderAvPos(x-2,y+1)
      renderAvPos(x-2,y-1)
      renderAvPos(x-1,y+2)
      renderAvPos(x-1,y-2)




  }
}