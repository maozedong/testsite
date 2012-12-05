window.onload = function () {
    var div = document.getElementById("imgContainer");
    var bodyDiv = document.getElementById('body');
    bodyDiv.addEventListener("click", popupImg, false);
    div.addEventListener("mousemove", popupImg2, false);
}

var relocateWindow = function (url) {
    window.location = url;
}
var openSite = function (url) {
    window.open(url);
};
var popupImg2 = function (event) {
    var imgContainer = document.getElementById("imgContainer");
    var popupDiv = document.getElementById('bigImg');
    var popupImg = event.target.cloneNode(false);
    popupImg.style.maxWidth = '555px';
    popupImg.removeAttribute('class');
    popupDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    //    popupDiv.style.width = parent.innerWidth;
    //    popupDiv.style.height = parent.innerHeight;
    popupDiv.style.top = imgContainer.offsetTop + imgContainer.innerHeight;
    popupDiv.style.left = imgContainer.offsetLeft;
    popupDiv.style.zIndex = 10;
    popupDiv.style.position = "absolute";

    popupDiv.style.display = "inline";

    if (popupDiv.hasChildNodes()) {
        popupDiv.replaceChild(popupImg, popupDiv.firstChild);
    }
    else {
        popupDiv.appendChild(popupImg);
    }
}

//popup images
var popupImg = function (event) {
    document.body.style.overflow = 'hidden';
    document.getElementById("bigImg").style.display = "none";
    var popupDiv = document.getElementById('imgbox');
    var popupImg = event.target.cloneNode(false);
    popupImg.style.maxWidth = '555px';
    popupImg.removeAttribute('class');
    popupDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    popupDiv.style.width = parent.innerWidth;
    popupDiv.style.height = parent.innerHeight;
    popupDiv.style.top = 0;
    popupDiv.style.left = 0;
    popupDiv.style.position = "fixed";
    popupDiv.style.zIndex = 1;
    popupDiv.style.display = "inline";

    if (popupDiv.hasChildNodes()) {
        popupDiv.replaceChild(popupImg, popupDiv.firstChild);
    }
    else {
        popupDiv.appendChild(popupImg);
    }
    popupDiv.firstChild.style.position = "absolute";
    popupDiv.firstChild.style.top = window.innerHeight / 2 - popupDiv.firstChild.offsetHeight / 2;
    popupDiv.firstChild.style.left = window.innerWidth / 2 - popupDiv.firstChild.offsetWidth / 2;
    popupDiv.addEventListener("click", bigImgOnclick, false);
}

var bigImgOnclick = function () {
    this.style.display = "none";
    document.getElementById("imgContainer").addEventListener("mousemove", popupImg2, false);
    document.body.style.overflow = 'auto';
}

/////////////////////////////////////////START disable/enable scrolling START///////////////////////////////////////
var keys = [37, 38, 39, 40];
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function keydown(e) {
    for (var i = keys.length; i--; ) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}
function wheel(e) {
    preventDefault(e);
}
function disable_scroll() {
    if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
}
function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;
}
/////////////////////////////////END disable/enable scrolling END////////////////////////