
// 함수 표현식을 사용하고 싶으면 클로저를 사용해야한다. 호이스팅이 안되기 때문!!! 나중에 클로저 공부해서 적용시키기
// https://www.w3schools.com/howto/howto_js_draggable.asp

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
    console.log('divX : ' + divX, + " , divY : " + divY);
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function createBox() {
    let div = document.createElement("div");
    div.classList.add("mydiv");
    div.setAttribute("onmousedown", "dragElement(event)");
    document.body.appendChild(div);
}

window.onload = function() {
  window.onclick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    
    console.log(`마우스 클릭 좌표 (${x}, ${y})`);
  }
}