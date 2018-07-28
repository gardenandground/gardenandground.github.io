var elem = document.getElementById("myBar");
var width = 0;
var id = setInterval(frame, 900);
var percent = document.getElementById("per");
// document.getElementById("content").style.display ="none";
function frame() {
    if (width >= 100) {
        clearInterval(id);
        // document.getElementById("loading").style.display ="none";
        // document.getElementById("content").style.display ="inline";
    }
    else {
        width++;
        elem.style.width = width + '%';
    }
    percent.innerHTML = width + '%';
}
