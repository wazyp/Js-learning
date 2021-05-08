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

function object(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

function checkColision(object1, object2) {
    if (object1.x < object2.x + object2.width &&
        object1.x + object1.width > object2.x &&
        object1.y < object2.y + object2.height &&
        object1.y + object1.height > object2.y) {
        return true;
    }
    return false;
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    let bar1 = new object(2 , 250, 5, 100);
    let bar2 = new object(350 , 2, 100, 5);
    let bar3 = new object(793 , 250, 5, 100);
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(bar1.x, bar1.y, bar1.width, bar1.height);
        ctx.fillRect(bar2.x, bar2.y, bar2.width, bar2.height);
        ctx.fillRect(bar3.x, bar3.y, bar3.width, bar3.height);
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

        let kavdratche = new object(this.x , this.y, this.width, this.height);


        let colision = null;
        if (checkColision(kavdratche, bar1)) {
            colision = 'colision 1';
        }
        if (checkColision(kavdratche, bar2)) {
            colision = 'colision 2';
        }
        if (checkColision(kavdratche, bar3)) {
            colision = 'colision 3';
        }

        if (colision != null) {
            const event = new CustomEvent('hit',  { bubbles: true, detail: { text: () => colision } });
            dispatchEvent(event);
        }
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

addEventListener('hit', ev => console.log(ev.detail.text()), false);

upButton.addEventListener('mousedown', function() {
    myGamePiece.speedY -= 1;
});

upButton.addEventListener('mouseup', function() {
    myGamePiece.speedY += 1;
});

downButton.addEventListener('mousedown', function() {
    myGamePiece.speedY += 1;
});

downButton.addEventListener('mouseup', function() {
    myGamePiece.speedY -= 1;
});

leftButton.addEventListener('mousedown', function() {
    myGamePiece.speedX -= 1;
});

leftButton.addEventListener('mouseup', function() {
    myGamePiece.speedX += 1;
});

rightButton.addEventListener('mousedown', function() {
    myGamePiece.speedX += 1;
});

rightButton.addEventListener('mouseup', function() {
    myGamePiece.speedX -= 1;
});

window.addEventListener('mouseup', function() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
});

window.addEventListener('load', function () {
    startGame();
});
