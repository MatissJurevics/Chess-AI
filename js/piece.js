import { boardMap } from "./data.js"


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
