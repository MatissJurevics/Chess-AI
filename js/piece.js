import { boardMap } from "./data.js"

export const movePiece = (x,y,newx,newy) => {
  if (!boardMap[y][x]) {alert("no piece there"); return false}
  boardMap[newy][newx] = boardMap[y][x]
  boardMap[y][x] = 0;
}
