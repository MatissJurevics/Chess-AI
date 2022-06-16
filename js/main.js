import loadPos from "./init.js"
import { boardMap, valueMap, setupString } from "./data.js"
import  { initBoard, context }  from "./board.js"


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
