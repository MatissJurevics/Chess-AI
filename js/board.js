import { setupString, boardMap, valueMap } from "./data.js";

export const canvas = document.getElementById("canvas");
canvas.style.background = "#E3E4DB";
export const context = canvas.getContext("2d");

context.clearRect(0, 0, canvas.width, canvas.height);
export const initBoard = () => {
  // itirate through rows on the board
  for (let i = 0; i < 8; i++) {
    // itirate through columns on the board
    for (let j = 0; j < 8; j++) {
      context.fillStyle = "#493843";
      // Applies one condition on every other row
      if (i % 2 == 1) {
        if (j % 2 == 0) {
          context.fillRect(j * 100, i * 100, 100, 100);
        }
      } else {
        if (j % 2 == 1) {
          context.fillRect(j * 100, i * 100, 100, 100);
        }
      }
    }
  }
};


let BPAWN = new Image();
BPAWN.src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/45px-Chess_pdt45.svg.png"
let WPAWN = new Image();
WPAWN.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/45px-Chess_plt45.svg.png"

let BROOK = new Image();
BROOK.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/45px-Chess_rdt45.svg.png"
let WROOK = new Image();
WROOK.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/45px-Chess_rlt45.svg.png"
let BBISHOP = new Image();
BBISHOP.src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/45px-Chess_bdt45.svg.png"
let WBISHOP = new Image();
WBISHOP.src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/45px-Chess_blt45.svg.png"
let BKNIGHT = new Image();
BKNIGHT.src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/45px-Chess_ndt45.svg.png"
let WKNIGHT = new Image();
WKNIGHT.src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/45px-Chess_nlt45.svg.png"
let BQUEEN = new Image();
BQUEEN.src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/45px-Chess_qdt45.svg.png"
let WQUEEN = new Image();
WQUEEN.src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/45px-Chess_qlt45.svg.png"
let BKING = new Image();
BKING.src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/45px-Chess_kdt45.svg.png"
let WKING = new Image();
WKING.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/45px-Chess_klt45.svg.png"

const loadPos = (j, i, char) => {
  
  switch (valueMap[char]) {
    case "wpawn":
      context.drawImage(WPAWN, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "bpawn":
      context.drawImage(BPAWN, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "brook":
      context.drawImage(BROOK, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "wrook":
      context.drawImage(WROOK, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "bknight":
      context.drawImage(BKNIGHT, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "wknight":
      context.drawImage(WKNIGHT, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "wbishop":
      context.drawImage(WBISHOP, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "bbishop":
      context.drawImage(BBISHOP, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "bqueen":
      context.drawImage(BQUEEN, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "wqueen":
      context.drawImage(WQUEEN, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "bking":
      context.drawImage(BKING, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
    case "wking":
      context.drawImage(WKING, j * 100 + 15, i * 100 + 15, 70, 70);
      break;
  }
};
export const initPos = (i,j,char) => {
  boardMap[i][j] = char;
  loadPos(j,i,char)

}
export const reloadPos = () => {
  context.clearRect(0,0,800,800)
  initBoard()
  for (let i = 0; i < boardMap.length; i++) {
    for (let j = 0; j < boardMap[i].length; j++) {
      loadPos(j,i,boardMap[i][j])
    }
  }
}

export const setupFromFEN = (FEN) => {
  let col = 0;
  let row = 0;
  FEN.split("").forEach((char, index) => {
    switch (char) {
      case "/":
        row++;
        col = 0;
        break;
      default:
        if (parseInt(char, 10).toString() === char) {
          col += parseInt(char, 10);
          break;
        }
        initPos(row,col % 8,  char);
        col++;
        break;
    }
  });
};
