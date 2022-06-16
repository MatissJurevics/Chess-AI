

const canvas = document.getElementById("canvas");
canvas.style.background = "#E3E4DB";
export const context = canvas.getContext("2d");

context.clearRect(0, 0, canvas.width, canvas.height);
export const initBoard = () => {
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
