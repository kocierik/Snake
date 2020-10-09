class Snake {
    constructor(x, y, speed, score, colorS) {
        this.x = x
        this.y = y
        this.speed = speed
        this.scl = 20
        this.score = score
        this.colorS = colorS
    }
    createSnake() {
        rect(this.x, this.y, this.scl, this.scl)
    }

    moveSnake() {
        switch (keyCode) {
            case UP_ARROW:
                this.y -= this.speed;
                break;
            case DOWN_ARROW:
                this.y += this.speed;
                break;
            case LEFT_ARROW:
                this.x -= this.speed;
                break;
            case RIGHT_ARROW:
                this.x += this.speed;
                break;
            default:
        }
    }
    check1Position() {
        if (this.x > width)
            this.x = 0
        if (this.y > height)
            this.y = 0
        if (this.x < 0)
            this.x = width
        if (this.y < 0)
            this.y = height
    }

    checkPoint() {
        point.createPoint()
        if (point.x == player.x && point.y == player.y) {
            point.x = width / point.scl * floor(random(point.scl))
            point.y = height / point.scl * floor(random(point.scl))
            this.score++
                console.log(this.score)
        }
    }

    lose() {

    }

    update() {
        for (let i = 0; i < tail.length - 1; i++) {
            tail[i] = tail[i + 1];
        }

        tail[this.score] = createVector(this.x, this.y)
    }

    show() {
        for (let i = 0; i < tail.length; i++) {
            rect(tail[i].x, tail[i].y, this.scl, this.scl);
        }
        rect(this.x, this.y, this.scl, this.scl);
    }
}