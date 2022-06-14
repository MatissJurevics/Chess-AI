const canvas = document.getElementById("canvas")
canvas.style.background = "#E3E4DB"
const context = canvas.getContext('2d');

context.clearRect(0, 0, canvas.width, canvas.height)

const initBoard = () => {
    // itirate through rows on the board
    for (let i = 0; i < 8; i++) {
        // itirate through columns on the board
        for (let j = 0; j < 8 ; j++) {
            context.fillStyle = "#493843"
            // Applies one condition on every other row
            if(i%2==1) {
                if(j%2==1) {
                    context.fillRect(j*100, i*100, 100 , 100)
                }
            } else {
                if(j%2==0) {
                    context.fillRect(j*100, i*100, 100 , 100)
                }
            }
        }
    }
}


let boardMap = [
    [2,4,3,6,5,3,4,2],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [2,4,3,5,6,3,4,2],
]
let valueMap = {
    1: "pawn",
    2: "rook",
    3: "bishop",
    4: "knight",
    5: "queen",
    6: "king",
}

const loadPositions = () => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (boardMap[i][j]) {
                context.fillStyle = "blue"
                context.font = "15px arial"

                context.fillText(valueMap[boardMap[i][j]], j*100 + 35, i*100 + 57.5)
            }
        }
    }
}
initBoard()

loadPositions()