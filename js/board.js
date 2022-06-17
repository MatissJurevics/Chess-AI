import { setupString, boardMap, valueMap } from "./data.js";

const canvas = document.getElementById("canvas");
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
let WPAWN = new Image();
let BROOK = new Image();
let WROOK = new Image();
let BBISHOP = new Image();
let WBISHOP = new Image();
let BKNIGHT = new Image();
let WKNIGHT = new Image();
let BQUEEN = new Image();
let WQUEEN = new Image();
let BKING = new Image();
let WKING = new Image();

const loadPos = (j, i, char) => {
  
  switch (valueMap[char]) {
    case "wpawn":
      // context.drawImage(WPAWN, j * 100 + 25, i * 100 + 25, 50, 50);
      context.fillText("Wpawn", j * 100 + 25, i * 100 + 25, 50, 50);

      break;
    case "bpawn":
      context.fillText("Bpawn", j * 100 + 25, i * 100 + 25, 50, 50);
      // context.drawImage(BPAWN, j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "brook":
      context.fillStyle = "red";
      context.fillText("Brook", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "wrook":
      context.fillStyle = "red";
      context.fillText("Wrook", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "bknight":
      context.fillStyle = "red";
      context.fillText("Bknight", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "wknight":
      context.fillStyle = "red";
      context.fillText("Wknight", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "wbishop":
      context.fillStyle = "red";
      context.fillText("Wbishop", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "bbishop":
      context.fillStyle = "red";
      context.fillText("Bbishop", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "bqueen":
      context.fillStyle = "red";
      context.fillText("Bqueen", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "wqueen":
      context.fillStyle = "red";
      context.fillText("Wqueen", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "bking":
      context.fillStyle = "red";
      context.fillText("Bking", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
    case "wking":
      context.fillStyle = "red";
      context.fillText("Wking", j * 100 + 25, i * 100 + 25, 50, 50);
      break;
  }
};
export const initPos = (i,j,char) => {
  boardMap[i][j] = char;
  loadPos(j,i,char)
  console.log(boardMap)
}
export const reloadPos = () => {
  for (let i = 0; i < boardMap.length; i++) {
    for (let j = 0; j < boardMap[i].length; j++) {

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
