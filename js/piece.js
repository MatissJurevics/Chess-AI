import { boardMap } from "./data.js"

export const movePiece = (x,y,newx,newy) => {
  console.log(boardMap)
  boardMap[newy][newx] = boardMap[y][x]
  boardMap[y][x] = 0;
}
