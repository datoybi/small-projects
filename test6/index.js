function linedraw(ax,ay,bx,by)
{
    if(ax > bx) {
        bx = ax + bx; 
        ax = bx - ax;
        bx = bx - ax;

        by = ay + by;
        ay = by - ay;
        by = by - ay;
    }

    let distance = Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
    let calc = Math.atan((by - ay) / (bx - ax));
    let degree = calc * 180 / Math.PI;

    let line = document.createElement('div');
    line.style.css({
        position: 'absolute',
        height: '1px',
        transformOrigin: 'top left',
        width: distance,
        top: ay + 'px',
        left: ax + 'px',
        transform: `rotate(${degree}deg)`,
        backgroundColor: 'back',
    });
    document.body.appendChild(line);}


window.onload = function() {
    linedraw(0,0, 100, 100);
    window.onclick = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        console.log(`마우스 클릭 좌표 (${x}, ${y})`);
    }
}