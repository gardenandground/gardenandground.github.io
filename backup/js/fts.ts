let timeee;
let loga;
let per2;
let elem = document.getElementById("myBar");
let width = 0; 
let finishTime = setInterval(frame, 1000);
let timer = 1;
let endTime = 90;
let percent = document.getElementById("per");

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

function frame() {
    if (timer > endTime) {
        clearInterval(finishTime);
    }
    else{
        per2 = (Math.log(timer)/Math.log(endTime))*100;
        width = per2.toFixed(0); 
        elem.style.width = width + '%';
        // console.log(timer+" "+width);
        timer++;
    }
    // console.log(timer);
     
    percent.innerHTML = width + ' %';
}
