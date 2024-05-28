// ###TODO: this doesn't work -- trying to get it to hide when you scroll down, then show up any time you scroll up.
// let lastScrollTop = 0;
// window.addEventListener("scroll", function () {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//   if (currentScroll > lastScrollTop) {
//     // Scroll down
//     document.querySelector("nav").style.top = "-80px"; // Adjust the value as needed
//   } else {
//     // Scroll up
//     document.querySelector("nav").style.top = "0px";
//   }
//   lastScrollTop = currentScroll;
// });

document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error fetching navbar:", error));
});






