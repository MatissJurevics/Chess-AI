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

let boardMap = [
  [2, 4, 3, 6, 5, 3, 4, 2],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [7, 7, 7, 7, 7, 7, 7, 7],
  [2, 4, 3, 5, 6, 3, 4, 2],
];
let valueMap = {
  1: "bpawn",
  2: "brook",
  3: "bbishop",
  4: "bknight",
  5: "bqueen",
  6: "bking",
  7: "wpawn",
};
let BPAWN = new Image();
BPAWN.src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2015%2F09%2F27%2F108210_game_512x512.png";
let WPAWN = new Image();
WPAWN.src =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F143290%2Fisolated%2Fpreview%2F3dc0e132939ad9ebff880b64637ea820-pawn-chess-figure-white-by-vexels.png&f=1&nofb=1";
const loadPositions = () => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (boardMap[i][j]) {
        switch (valueMap[boardMap[i][j]]) {
          case "bpawn":
            context.drawImage(BPAWN, j * 100 + 25, i * 100 + 25, 50, 50);
          case "wpawn":
            context.drawImage(WPAWN, j * 100 + 25, i * 100 + 25, 50, 50);
          case "rook":
            context.fillStyle = "blue";
            context.font = "15px arial";
            context.fillText(
              valueMap[boardMap[i][j]],
              j * 100 + 35,
              i * 100 + 57.5
            );
          case "bishop":
            context.fillStyle = "blue";
            context.font = "15px arial";
            context.fillText(
              valueMap[boardMap[i][j]],
              j * 100 + 35,
              i * 100 + 57.5
            );
          case "knight":
            context.fillStyle = "blue";
            context.font = "15px arial";
            context.fillText(
              valueMap[boardMap[i][j]],
              j * 100 + 35,
              i * 100 + 57.5
            );
          case "queen":
            context.fillStyle = "blue";
            context.font = "15px arial";
            context.fillText(
              valueMap[boardMap[i][j]],
              j * 100 + 35,
              i * 100 + 57.5
            );
          case "king":
            context.fillStyle = "blue";
            context.font = "15px arial";
            context.fillText(
              valueMap[boardMap[i][j]],
              j * 100 + 35,
              i * 100 + 57.5
            );
        }
      }
    }
  }
};

initBoard();

loadPositions();
