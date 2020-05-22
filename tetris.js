const canvas = document.getElementById('tetris'); 
const context = canvas.getContext('2d'); 

// scale context to make displayed tetriminus visible 
context.scale(20,20); 

// make sure this works, 
context.fillStyle = `#000`; 
context.fillRect(0,0, canvas.width, canvas.height)

// value of 0 => nothing 
// value of 1 => block 
const matrix = [
    [0, 0, 0],
    [1, 1, 1], 
    [0, 1, 0], 
]



function drawMatrix(matrix, offset){
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value !== 0) {
                context.fillStyle = 'red'; 
                context.fillRect(
                    x + offset.x, 
                    y + offset.y,
                    1,1); 
            }
        }); 
    }); 
}

const player = {
    position: {x: 5, y: 5}; 
    matrix: matrix; 
}


drawMatrix(player.matrix, player.position); 