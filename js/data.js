// For loadPieces()
let playAsWhite = (Math.random() > 0.5);
export let setupString = playAsWhite ? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR".split('').reverse().join('') : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
// setupString = "r3k2r/p1pppppp/n7/8/8/8/P2PPPpP/R3K2R"
export let boardMap = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
export let valueMap = {
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

