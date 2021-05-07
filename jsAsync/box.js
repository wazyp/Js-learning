var myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, 'red', 385, 285);
    myGameArea.start();
}

var myGameArea = new function() {
    this.canvas = document.createElement('canvas');
    this.start = function() {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context = this.canvas.getContext('2d');

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    this.clear = function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(350, 2, 100, 5);
        ctx.fillRect(2, 250, 5, 100);
        ctx.fillRect(793, 250, 5, 100);
    }
    this.newPos = function() {
        let ctx = myGameArea.canvas;
        if (this.x > 0 && this.speedX < 0) {
            this.x += this.speedX;
        }
        if ((this.x + this.width) < ctx.width && this.speedX > 0) {
            this.x += this.speedX;
        }

        if (this.y > 0 && this.speedY < 0) {
            this.y += this.speedY;
        }
        if ((this.y + this.height) < ctx.height && this.speedY > 0) {
            this.y += this.speedY;
        }

        if (this.x < 350 + 100 &&
            this.x + this.width > 350 &&
            this.y < 2 + 5 &&
            this.y + this.height > 2) {

            const event1 = new CustomEvent('hit',  { bubbles: true, detail: { text: () => 'detect 2' } });
            dispatchEvent(event1);
        }
        if (this.x < 2 + 5 &&
            this.x + this.width > 2 &&
            this.y < 250 + 100 &&
            this.y + this.height > 250) {

            const event1 = new CustomEvent('hit',  { bubbles: true, detail: { text: () => 'detect 1' } });
            dispatchEvent(event1);
        }
        if (this.x < 793 + 5 &&
            this.x + this.width > 793 &&
            this.y < 250 + 100 &&
            this.y + this.height > 250) {

            const event1 = new CustomEvent('hit',  { bubbles: true, detail: { text: () => 'detect 3' } });
            dispatchEvent(event1);
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function hitEvent(details) {
    console.log('Hit number: ' + details.detail);
}

const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

addEventListener('hit', ev => console.log(ev.detail.text()), false);

upButton.addEventListener('mousedown', function onClick() {
    myGamePiece.speedY -= 1;
});

upButton.addEventListener('mouseup', function onClick() {
    myGamePiece.speedY += 1;
});

downButton.addEventListener('mousedown', function onClick() {
    myGamePiece.speedY += 1;
});

downButton.addEventListener('mouseup', function onClick() {
    myGamePiece.speedY -= 1;
});

leftButton.addEventListener('mousedown', function onClick() {
    myGamePiece.speedX -= 1;
});

leftButton.addEventListener('mouseup', function onClick() {
    myGamePiece.speedX += 1;
});

rightButton.addEventListener('mousedown', function onClick() {
    myGamePiece.speedX += 1;
});

rightButton.addEventListener('mouseup', function onClick() {
    myGamePiece.speedX -= 1;
});

window.addEventListener('load', function () {
    startGame();
});
