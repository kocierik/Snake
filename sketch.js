let player
let point
let tail = []

function setup() {
    createCanvas(400, 400)
    background(41)
    frameRate(10)
    let c = color('magenta');
    player = new Snake(20, 20, 20, 0, fill(color('gray')));
    point = new Point(100, 100, fill(color(255, 0, 0)))

}

function draw() {
    background(41)
    player.createSnake()
    player.update()
    player.show()
    player.moveSnake()
    player.check1Position()
    player.checkPoint()
}