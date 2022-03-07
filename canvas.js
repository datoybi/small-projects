
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); // 그릐기 위한 속성과 메서드가 있는 내장 HTML

/*
// 사각형 채우기
ctx.fillStyle = "#FF0000"; // 색 지정 
ctx.fillRect(0,0, 100, 100); // 사각형을 그림

// 선 그리기
ctx.moveTo(0, 0); // 선의 시작점
ctx.lineTo(200, 200); // 선 끝점
ctx.stroke();
*/

// 원 그리기
ctx.beginPath(); // 시작
// 곡선을 만든다
// 시작 각도(stratangle)를 0으로 설정하고 끝 각도(endangle)를 2*MATH.PI로 설정하면 원이 완성됨
// arc(x, y, r, stratangle, endangle)
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.arc(0, 0, 40, 0, 2 * Math.PI);

ctx.stroke();