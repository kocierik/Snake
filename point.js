class Point {
    constructor(x, y, color1) {
        this.x = x
        this.y = y
        this.color1 = color1
        this.scl = 20
    }

    createPoint() {
        rect(this.x, this.y, 20, 20)
    }
}