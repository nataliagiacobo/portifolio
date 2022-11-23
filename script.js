
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        prevScrollPos = currentScrollPos;
    } else if (currentScrollPos > prevScrollPos + 200) {
        document.getElementById("navbar").style.top = "-73px";
        prevScrollPos = currentScrollPos;
    }
}

