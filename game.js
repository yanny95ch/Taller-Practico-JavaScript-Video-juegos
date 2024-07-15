const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', starGame);

function starGame() {
    let canvasSize;
    if (window.innerHeight  > window.innerWidth) {
        canvasSize = window.innerWidth*0.8
    }else {
        canvasSize = window.innerHeight * 0.8;
    }

    canvas.setAttribute('width', canvasSize );
    canvas.setAttribute('height', canvasSize);

    const elementsSize = canvasSize / 10;
    console.log({canvasSize, elementsSize});

    game.font = elementsSize + 'px verdada';
    game.textAlign='end';

    for (let i = 1; i <= 10; i++) {
        game.fillText(emojis['X'], elementsSize * i,elementsSize);
        
    }

    



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
