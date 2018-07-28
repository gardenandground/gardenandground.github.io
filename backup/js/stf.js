var timeee;
var loga;
var per2;
var elem = document.getElementById("myBar");
var width = 0;
var finishTime = setInterval(frame, 1000);
var timer = 1;
var endTime = 90;
var percent = document.getElementById("per");
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}
function frame() {
    if (timer > endTime) {
        clearInterval(finishTime);
    }
    else {
        timeee = endTime + 1 - timer;
        loga = getBaseLog(endTime, timeee);
        per2 = 100 + (1 - (loga * 100));
        width = per2.toFixed(0);
        if (width > 100) {
            width = 100;
        }
        elem.style.width = width + '%';
        // console.log(timer+" "+width);
        timer++;
    }
    // console.log(timer);
    percent.innerHTML = width + '%';
}
