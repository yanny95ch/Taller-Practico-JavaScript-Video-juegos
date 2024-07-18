const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');
const btnUp = document.querySelector('#up');
const btnleft = document.querySelector('#left');
const btnright = document.querySelector('#right');
const btndown  = document.querySelector('#down');

let canvasSize;
let elementsSize;
let level = 0;
let lives = 3;

const playerPosition = {
    x:undefined,
    y:undefined,
};
const giftPosition = {
    x: undefined,
    y: undefined,
};
let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

function setCanvasSize (){
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

function starGame() {
    

    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px verdada';
    game.textAlign='end';

    const map = maps[level];

    if (!map) {
        gameWin();
        return;
    }
    
    const mapRows = map.trim().split('\n');
    const mapRowCols = mapRows.map(row => row.trim().split(''));
    console.log(map,mapRows,mapRowCols);

    enemyPositions = [];
    /*
    ----Areglo bidimencional
    for (let row = 1; row <= 10; row++) {
        for (let col = 1; col <= 10; col++) {
            game.fillText(emojis[mapRowCols[row-1][col - 1]], elementsSize * col,elementsSize * row );
            
        }  
    }*/

    game.clearRect(0,0,canvasSize,canvasSize);  
    
    
    mapRowCols.forEach((row , rowI) => {
        row.forEach((col,colI) => {
             const emoji = emojis[col];
             const posX = elementsSize * (colI + 1);
             const posY = elementsSize * (rowI + 1);

            if (col == 'O') {
                if(!playerPosition.x && !playerPosition.y){
                    playerPosition.x = posX;
                    playerPosition.y = posY
                    console.log({playerPosition});

                }
            } else if(col == 'I'){
                giftPosition.x = posX;
                giftPosition.y = posY;
            }else  if(col == 'X'){
                enemyPositions.push({
                    x :posX,
                    y : posY,
                });
            }
             game.fillText(emoji,posX,posY);
        })
    });

    movePlayer()
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

function movePlayer(){
    const giftColosionX = playerPosition.x.toFixed(3) == giftPosition.x.toFixed(3);
    const giftColosionY = playerPosition.y.toFixed(3) == giftPosition.y.toFixed(3);
    const giftColosion = giftColosionX && giftColosionY

    if (giftColosion) {
        levelWin();
    }

    const enemyCollision = enemyPositions.find(enemy => {
        const enemyCollisionX = enemy.x == playerPosition.x.toFixed(3) ;
        const enemyCollisionY = enemy.y == playerPosition.y.toFixed(3) ;
        return enemyCollisionX && enemyCollisionY;
    } );

    if (enemyCollision) {
        leveFail();
    };

    game.fillText(emojis['PLAYER'],playerPosition.x , playerPosition.y)
     
}

function levelWin(){
    console.log('Subiste de nivel');
    level++;
    starGame();
}
function leveFail(){
    console.log('Chocaste con un enemigo');
    lives -- ;

    if(lives <= 0){
        level= 0;
        lives=3;
    }
    playerPosition.x = undefined;
    playerPosition.y = undefined;
    starGame();

}

function gameWin(){
    console.log('Terminaste el Juego');
}

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnleft.addEventListener('click', moveLeft);
btnright.addEventListener('click', moveRight);
btndown.addEventListener('click', moveDown);

function moveByKeys (event){
   if (event.key == 'ArrowUp') moveUp();
    else if (event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
    else if (event.key == 'ArrowDown')moveDown();  
}

function moveUp(){
    console.log('Me quiero mover hacia arriba');
    if ((playerPosition.y - elementsSize)< elementsSize ) {
        console.log('OUT');
    }else{
        playerPosition.y -= elementsSize;
        starGame();
    } 
}

function moveLeft(){
    console.log('Me quiero mover hacia izquierda');
    if ((playerPosition.x - elementsSize)< elementsSize ) {
        console.log('OUT');
    }else{
        playerPosition.x -= elementsSize;
        starGame();
    } 
}

function moveRight(){
    console.log('Me quiero mover hacia derecha');
    if ((playerPosition.x + elementsSize) > canvasSize) {
        console.log('OUT');
    }else{
        playerPosition.x += elementsSize;
        starGame();
    } 
}

function moveDown(){
    console.log('Me quiero mover hacia abajo');
    if ((playerPosition.y + elementsSize) > canvasSize) {
        console.log('OUT');
    }else{
        playerPosition.y += elementsSize;
        starGame();
    }
}
