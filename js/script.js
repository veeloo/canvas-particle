const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particleCount = [];

function drawCanvas() {
    let w = canvas.width;
    let h = canvas.height;
    c.fillStyle = "black";
    c.fillRect(0, 0, w, h);
}

function clearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("click", function (e) {
    let radius = Math.floor(Math.random() * 20);
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

    particleCount.push(1);

    const particle = new Particle(e.clientX, e.clientY, radius, color);
    particle.draw();
});

function generateNewParticle(x, y, radius, color) {}

function Init() {
    drawCanvas();
}

Init();
