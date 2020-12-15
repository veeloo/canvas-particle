class Particle {
    /**
     *
     * @param {*} x
     * @param {*} y
     * @param {*} radius
     * @param {*} color
     */

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

        this.velocity = 0;
        this.gravity = 1;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > canvas.height) {
            this.y = canvas.height;
            this.velocity = 0;
        }
    }

    clear() {
        console.log("halo");
    }
}
