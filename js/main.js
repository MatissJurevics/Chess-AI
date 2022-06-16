import { boardMap, valueMap, setupString } from "./data.js"
import  { initBoard, context, setupFromFEN }  from "./board.js"




initBoard();
setupFromFEN(setupString);
