const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

let canvasSize;
let elementsSize;

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function starGame() {
    

    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px verdada';
    game.textAlign='end';

    const map = maps[0];
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log(map,mapRows,mapRowCols);

    /*for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapRowCols[row-1][col - 1]], elementsSize * col,elementsSize * row );
            
        }  
    }*/

    mapRowCols.forEach((row , rowI) => {
        row.forEach((col,colI) => {
             const emoji = emojis[col];
             const posX = elementsSize * (colI + 1);
             const posY = elementsSize * (rowI + 1);
             game.fillText(emoji,posX,posY);
        })
    });

     /*
     valdar el ancho y alto del cuyadro en el canvas dependiendo del tama;o
    window.innerHeight
    window.innerWidth    
   ---------------------------------------------
   Atributos 
    game.font = '25 px verdada';
    game.fillStyle= 'purple';
    game.textAlign = 'end';
    game.fillText('Platzi', 50,50);
    --------------------------------------------
    Una de las formas de agregar cajas contenido ubicando dentro del canvas
    game.fillRect(0,50,100,100);
    game.clearRect(50,50,50,50);
    game.clearRect()
    */
}


function setCanvasSize (){

    let canvasSize;
    if (window.innerHeight  > window.innerWidth) {
        canvasSize = window.innerWidth*0.8
    }else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize );
    canvas.setAttribute('height', canvasSize);

    elementsSize = canvasSize / 10;

    starGame()
} 