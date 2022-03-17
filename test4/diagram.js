
// 함수 표현식을 사용하고 싶으면 클로저를 사용해야한다. 호이스팅이 안되기 때문!!! 나중에 클로저 공부해서 적용시키기
// https://www.w3schools.com/howto/howto_js_draggable.asp
let line = false;
let lines = [];
let boxNum = 3;

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

function lineElement(){

  // document.querySelectorAll('.mydiv').classList.remove('line_clicked');
  delBoxColor();
  line = true;
  lines = [];  
}

function makeLine() {

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
// function createLine() {
//   console.log('line : ' + line)
//   line = true; 
// }


window.onload = function() {
  window.onclick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    // console.log(`마우스 클릭 좌표 (${x}, ${y})`);
    // console.log(event.target)
   
    let clicked = event.target.classList[0];
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
    console.log(lines)  

 
  }
}