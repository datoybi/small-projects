
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); // 그릐기 위한 속성과 메서드가 있는 내장 HTML


// 사각형 채우기
ctx.fillStyle = "#FF0000"; // 색 지정 
ctx.fillRect(0,0, 100, 100); // 사각형을 그림

// 선 그리기
ctx.moveTo(0, 0); // 선의 시작점
ctx.lineTo(200, 200); // 선 끝점
ctx.stroke();


// 원 그리기
ctx.beginPath(); // 시작
// 곡선을 만든다
// 시작 각도(stratangle)를 0으로 설정하고 끝 각도(endangle)를 2*MATH.PI로 설정하면 원이 완성됨
// arc(x, y, r, stratangle, endangle)
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.arc(0, 0, 40, 0, 2 * Math.PI);

ctx.stroke();

// 그리디언트 생성하기
// 선형 그리디언트 생성
let grd1 = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd1;
ctx.fillRect(10, 10, 150, 80);

// 다른 모양 그리디언트 생성
let grd2 = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd2;
ctx.fillRect(10, 10, 150, 80);


ctx.fonnt = '30px Arial'; // 글꼴 속성 크기 지정
// 캔버스에 채워진 텍스트를 그린다.
ctx.fillText('Hello World', 10, 50)

ctx.fonnt = '30px Arial'; // 글꼴 속성 크기 지정
ctx.strokeText("Hello World", 10, 50);


// 색상 및 중앙에 텍스트 추가
ctx.font = "30px Comic Sanc MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
