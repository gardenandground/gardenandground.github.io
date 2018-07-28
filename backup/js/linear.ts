let elem = document.getElementById("myBar");   
let width = 0;
let id = setInterval(frame, 900);
let percent = document.getElementById("per");

// document.getElementById("content").style.display ="none";
function frame() {
    if (width >= 100) {
        clearInterval(id);
        // document.getElementById("loading").style.display ="none";
        // document.getElementById("content").style.display ="inline";
    }
    else{
        width++; 
        elem.style.width = width + '%';
    } 
    percent.innerHTML = width + '%';
}