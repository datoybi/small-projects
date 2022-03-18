
// 함수 표현식을 사용하고 싶으면 클로저를 사용해야한다. 호이스팅이 안되기 때문!!! 나중에 클로저 공부해서 적용시키기
// https://www.w3schools.com/howto/howto_js_draggable.asp
let line = false;
let lines = [];
let boxNum = 3;
let lineNum = 0;
let min_canvasX
let max_canvasX
let min_canvasY
let max_canvasY

// function dragElement(e) {
//     let elmnt = e.target;
//     let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     e = e || window.event;
//     e.preventDefault();
//     // pos3,4는 마우스 클릭 좌표
//     pos3 = e.clientX; 
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   // 마우스 움직일 때 좌표 계산
//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();

//     pos1 = pos3 - e.clientX; // 0 - 100 = -100 0
//     pos2 = pos4 - e.clientY; // 0 - 100 = -100 0 
//     pos3 = e.clientX; // 100
//     pos4 = e.clientY; // 100

//     // pos3 = 0, pos4 = 0, post1 = -100, pos2 = -100
//     let top = elmnt.offsetTop - pos2;
//     let left = elmnt.offsetLeft - pos1;
    
//     // if( min_canvasY > top){
//     //   top = min_canvasY
//     // } else if(top > max_canvasY - 100) {
//     //   top = max_canvasY - 100
//     // } 
//     // if( min_canvasX > left){
//     //   left = min_canvasX
//     // } else if(left > max_canvasX - 100) { // 100은 박스의 크기
//     //   left = max_canvasX-100
//     // } 

//     // console.log('top, left : ' + top + ' , ' + left)
//     // elmnt.style.top = top + "px"; 
//     // elmnt.style.left = left + "px"; 

//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

//   }
//   function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }


function dragElement(e) {
  let elmnt = e.target;
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  let divX = 0, divY = 0;
  elmnt = e.target;
  e = e || window.event;
  e.preventDefault();
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;

// 마우스 움직일 때 좌표 계산
function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  // calculate the new cursor position:    
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  divX = (elmnt.offsetLeft - pos1);
  divY = (elmnt.offsetTop - pos2);
  elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  // console.log('divX : ' + divX, + " , divY : " + divY);
}
function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}
}


function lineElement(event) {
  let clicked = event.target.classList[0];
  if(clicked === 'mydiv' || event.target.id === 'createLine'){
    if (event.target.id !== 'createLine'){
      lines.push(event.target.id);
      document.querySelector(`#${event.target.id}`).classList.add('line_clicked');
    } 
    if (lines.length === 2){
      makeLine();
    } else if (lines.length > 2) {
      line = false
      lines = []
      delBoxColor()
    }
  } else { // 다른곳 클릭했을 경우 
    line = false
    lines = []
    delBoxColor()
  }

  function makeLine(){
    let ax, ay, bx, by;
    
    lines.map((line, index) => {
      switch(index){
        case 0:
          ax = document.querySelector(`#${line}`).style.left.split('px')
          ay = document.querySelector(`#${line}`).style.top.split('px')
          break;
        case 1:
          bx = document.querySelector(`#${line}`).style.left.split('px')
          by = document.querySelector(`#${line}`).style.top.split('px')
          break;
      }
    })
    // console.log(`ax : ${ax[0]} , ay : ${ay} , bx : ${bx} , by : ${by}`)
    ax = Number(ax[0]) + 50;
    ay = Number(ay[0]) + 50;
    bx = Number(bx[0]) + 50;
    by = Number(by[0]) + 50;
    // console.log(`ax : ${ax} , ay : ${ay} , bx : ${bx} , by : ${by}`)
    linedraw(ax, ay, bx, by)
  }
    
  function linedraw(x1, y1, x2, y2) {
    if (x2 < x1) {
        var tmp;
        tmp = x2 ; x2 = x1 ; x1 = tmp;
        tmp = y2 ; y2 = y1 ; y1 = tmp;
    }
    var lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    var m = (y2 - y1) / (x2 - x1);
    var degree = Math.atan(m) * 180 / Math.PI;
    document.body.innerHTML += "<div class='line' style='transform-origin: top left; transform: rotate(" + degree + "deg); width: " + lineLength + "px; height: 1px; background: black; position: absolute; top: " + y1 + "px; left: " + x1 + "px;'></div>";
  }
}

function createLine(){
  line = true;
  lines = []
  delBoxColor();
}

// 박스 생성
function createBox() {
    let div = document.createElement("div");
    div.classList.add("mydiv");
    div.id = `mydiv${boxNum}`;
    div.setAttribute("onmousedown", "dragElement(event)");
    div.setAttribute("style", "top: 0px; left: 0px;");
    document.body.appendChild(div);
    boxNum ++;
}
// 라인 선택시 박스 css 삭제
function delBoxColor() {
  let mydiv = document.querySelectorAll('.mydiv')
  for(div of mydiv) {
    div.classList.remove('line_clicked');
  }
}

window.onload = function() {
  min_canvasX = canvas.getBoundingClientRect().left
  max_canvasX = canvas.getBoundingClientRect().right
  min_canvasY = canvas.getBoundingClientRect().top
  max_canvasY = canvas.getBoundingClientRect().bottom
  
  console.log(canvas.getBoundingClientRect())
  
  console.log(min_canvasX)
  console.log(max_canvasX)
  console.log(min_canvasY)
  console.log(max_canvasY)
  
  // console.log(canvas.getBoundingClientRect())
  // console.log(canvas.getBoundingClientRect().left)
  // console.log(canvas.getBoundingClientRect().top)

  window.onclick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    console.log(`마우스 클릭 좌표 (${x}, ${y})`);
    // console.log(event.target)
    // console.log(event.target.style.top)
    // console.log(event.target.style.top)

    // 선 생성 버튼을 눌렀을 때
    if(line === true) {
      lineElement(event);
    }
  }

  // window.addEventListener('resize', function() { 
  //   console.log('ok')
  //   min_canvasX = canvas.getBoundingClientRect().left
  //   max_canvasX = canvas.getBoundingClientRect().right
  //   min_canvasY = canvas.getBoundingClientRect().top
  //   max_canvasY = canvas.getBoundingClientRect().bottom
  // });


}


