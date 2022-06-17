import { boardMap } from "./data.js"

export const movePiece = (x,y,newx,newy) => {
  console.log("movePiece",x,y,newx,newy)
  if (!boardMap[y][x]) {alert("no piece there"); return false}
  if (newx > 7 || newy > 7 || newx < 0 || newy < 0) {alert("Out of bounds"); return false}
  boardMap[newy][newx] = boardMap[y][x]
  
  boardMap[y][x] = 0;
}
