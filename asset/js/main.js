
window.addEventListener("scroll", function() {
    const scrollTop = document.querySelector("header");
    scrollTop.classList.toggle("sticky", window.scrollY > 0);
})

// function OpenInNewTabWinBrowser() {
//      window.open(
//         "https://www.facebook.com/hoangseikai/", "_blank").focus();
// }
// function Defaults() {
//     addEventListener ("click", function (e) {e.preventDefault ();}, false);
// }


const menu = document.querySelector(".menu-bar");
menu.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
});
let menuOpen = 'close';
menu.addEventListener('click', function() {
    if (menuOpen == 'close') {
        menu.classList.add('open');
        menuOpen = 'open';
    } else {
        menu.classList.remove('open');
        menuOpen = 'close';
    }
});

