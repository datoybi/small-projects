
// 함수 표현식을 사용하고 싶으면 클로저를 사용해야한다. 호이스팅이 안되기 때문!!! 나중에 클로저 공부해서 적용시키기
// https://www.w3schools.com/howto/howto_js_draggable.asp
let line = false;
let lines = [];
let boxNum = 3;
let lineNume = 0;

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
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    // console.log('divX : ' + divX, + " , divY : " + divY);
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function createLine(){
  // delBoxColor();
  line = true;
  lines = [];  
}

function createBox() {
    let div = document.createElement("div");
    div.classList.add("mydiv");
    div.id = `mydiv${boxNum}`;
    div.setAttribute("onmousedown", "dragElement(event)");
    document.body.appendChild(div);
    boxNum ++;
}

function delBoxColor() {
  let mydiv = document.querySelectorAll('.mydiv')
  for(div of mydiv) {
    div.classList.remove('line_clicked');
  }
}

function makeLine(){
  console.log('makeline')
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

  console.log(`ax : ${ax[0]} , ay : ${ay} , bx : ${bx} , by : ${by}`)
  ax = Number(ax[0]) + 50
  ay = Number(ay[0]) + 50
  bx = Number(bx[0]) + 50
  by = Number(by[0]) + 50

  console.log(`ax : ${ax} , ay : ${ay} , bx : ${bx} , by : ${by}`)
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

window.onload = function() {
  // linedraw(0,0, 100, 100);

  window.onclick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    console.log(`마우스 클릭 좌표 (${x}, ${y})`);
    // console.log(event.target)
    // console.log(event.target.style.top)
    // console.log(event.target.style.top)

    let clicked = event.target.classList[0];
    // 선 생성 버튼을 눌렀을 때
    if(line === true) {
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
    }
  }
}
