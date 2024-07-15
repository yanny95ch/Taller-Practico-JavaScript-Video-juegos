const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', starGame);

function starGame() {
    //game.fillRect(0,50,100,100);
    //game.clearRect(50,50,50,50);
    //game.clearRect()

    game.font = '25 px verdada';
    game.fillStyle= 'purple';
    game.textAlign = 'end';
    game.fillText('Platzi', 25 ,25);

}
