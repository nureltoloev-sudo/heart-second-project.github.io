const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    drawHearts();
}

document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.backgroundColor = "black";
document.body.appendChild(canvas);

function heart(n) {
    const x = 15 * Math.pow(Math.sin(n), 3);
    const y = 12 * Math.cos(n) - 5 * Math.cos(2 * n) - 2 * Math.cos(3 * n) - Math.cos(4 * n);
    return { x, y };
}

function drawHearts() {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    const scale = 7;

    for (let i = 1; i < 16; i += 1) {
        ctx.beginPath();
        for (let j = 0; j <= 100; j += 1) {
            const { x, y } = heart(j / 15);
            const px = x * i * scale;
            const py = -y * i * scale;
            if (j === 0) {
                ctx.moveTo(px, py);
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.stroke();
    }
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
