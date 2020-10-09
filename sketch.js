let player
let point
let tail = []
let divPoints
let bg

function setup() {
    divPoints = createDiv().addClass('points');
    createCanvas(400, 400)
        //bg = loadImage('./assets/background.jpg');
    frameRate(10)
    player = new Snake(20, 20, 20, 0, fill(color('gray')));
    point = new Point(100, 100, fill(color(255, 0, 0)))

}

function pointGame() {
    divPoints.innerHTML = divPoints.html('score: ' + player.score, false);
}

function draw() {
    pointGame()
    background(41)
    player.createSnake()
    player.update()
    player.show()
    player.moveSnake()
    player.check1Position()
    player.checkPoint()
    player.lose()
}