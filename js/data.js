// For loadPieces()
export let setupString = Math.random() > 0.5 ? "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR".split('').reverse().join('') : "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
// setupString = "8/8/8/4p1K1/2k1P3/8/8/8"
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

