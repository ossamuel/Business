// // this will store my lst item
// let mainNav = document.getElementById("js-menu");

// // this will get my toggle button and onclick display items
// let navBarToggle = document.getElementById("js-navbar-toggle");

// navBarToggle.addEventListener("click", function() {
//   mainNav.classList.toggle("active");
// });
// let mainNav = document.getElementById("js-menu");
// let navBarToggle = document.getElementById("js-navbar-toggle");
// navBarToggle.addEventListener("click", funcs);
// function funcs() {
//   mainNav.classList.toggle("active");
// }

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("main").style.display = "none";
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("main").style.display = "block";
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
