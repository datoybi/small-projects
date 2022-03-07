
const drawClock = () => {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
}

const drawMiddle = () => {
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, 2 * Math.PI);
    ctx.fillStyle = "gray";
    ctx.fill();
}



let canvas = document.getElementById("canvas2");
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
// 해당 원점 단위를 수평, 수직으로 이동
ctx.translate(radius, radius);
radius = radius * 0.9;
drawClock();





