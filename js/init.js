import {boardMap, valueMap, setupString} from "./data.js"


const loadPositions = (j, i, char) => {
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

  export default loadPositions