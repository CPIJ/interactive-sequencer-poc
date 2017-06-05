const size = 10;

class Region {

    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = size
        this.height = size
    }

    collidesWith(other) {
        return this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.height + this.y > other.y
    }


}