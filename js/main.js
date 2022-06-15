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

// For loadPieces()
let setupString = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
// setupString = "8/8/8/4p1K1/2k1P3/8/8/8"
let boardMap = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
let valueMap = {
  p: "bpawn",
  r: "brook",
  b: "bbishop",
  n: "bknight",
  q: "bqueen",
  k: "bking",
  P: "wpawn",
  R: "wrook",
  B: "wbishop",
  N: "wknight",
  Q: "wqueen",
  K: "wking",
};

const loadPositions = (j, i, char) => {
  console.log(`${char}: ${i}, ${j}`);
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
        loadPositions(col % 8, row, char);
        col++;
        break;
    }
    
  });
};

initBoard();
setupFromFEN(setupString);
