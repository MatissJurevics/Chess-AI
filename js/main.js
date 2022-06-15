import loadPos from "./init.js"
import {boardMap, valueMap, setupString} from "./data.js"

const canvas = document.getElementById("canvas");
canvas.style.background = "#E3E4DB";
const context = canvas.getContext("2d");



context.clearRect(0, 0, canvas.width, canvas.height);

const initBoard = () => {
  // itirate through rows on the board
  for (let i = 0; i < 8; i++) {
    // itirate through columns on the board
    for (let j = 0; j < 8; j++) {
      context.fillStyle = "#493843";
      // Applies one condition on every other row
      if (i % 2 == 1) {
        if (j % 2 == 1) {
          context.fillRect(j * 100, i * 100, 100, 100);
        }
      } else {
        if (j % 2 == 0) {
          context.fillRect(j * 100, i * 100, 100, 100);
        }
      }
    }
  }
};




const setupFromFEN = (FEN) => {
  let col = 0;
  let row = 0;
  FEN.split("").forEach((char, index) => {
    switch (char) {
      case "/":
        row++;
        col = 0
        break;
      default:
        if (parseInt(char, 10).toString() === char) {
          col += parseInt(char, 10);
          break;
        }
        loadPos(col % 8, row, char);
        col++;
        break;
    }
    
  });
};

initBoard();
setupFromFEN(setupString);
