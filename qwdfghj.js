var gap = 10;
var spaceshipsPerRow = 10;
var startLeft = 30;
var startTop = 50;
var spaceshipWidth = 20;
var spaceshipHeight = 20;
var rowsOfSpaceships = 5;
var xSpeed = 1;
var xDistance = 1;

function createSpaceship(left, top) {
    let spaceship = document.createElement('img');
    spaceship.src = 's.png';
    document.body.appendChild(spaceship);
    spaceship.className = 'spaceship';
    spaceship.style.top = top + 'px';
    spaceship.style.left = left + 'px';
}

function createRow(left, top) {
    for (let spaceshipCounter = 0; spaceshipCounter < spaceshipsPerRow; spaceshipCounter++) {
        createSpaceship(left, top);
        left = left + spaceshipWidth + gap;
    }
}

function createGrid() {
    let top = startTop;
    for (let row = 0; row < rowsOfSpaceships; row++) {
        createRow(startLeft, top);
        top = top + spaceshipHeight + gap;
    }
}

function moveSpaceships() {
    let spaceships = document.querySelectorAll('.spaceship');
    for (let spaceship of spaceships) {
        let left = parseInt(spaceship.style.left) + xSpeed;
        spaceship.style.left = left + 'px';
    }
}

function spaceInvaders() {
    if (xDistance == 100) { // when the fleet hits the right boundary
        xSpeed = -1; // change direction
    }
    moveSpaceships();
    xDistance += xSpeed;
    requestAnimationFrame(spaceInvaders);
}

createGrid();
spaceInvaders();
