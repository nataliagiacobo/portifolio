// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     console.log("rodando");
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("myNavbar").style.top = "0";
//     } else {
//         document.getElementById("myNavbar").style.top = "-65px";
//     }
//     prevScrollpos = currentScrollPos;
// }

var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    console.log("rodando");
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        prevScrollPos = currentScrollPos;
    } else if (currentScrollPos > prevScrollPos + 200) {
        document.getElementById("navbar").style.top = "-73px";
        prevScrollPos = currentScrollPos;
    }
}