// menu btn script
let navLinks = document.getElementById('navLinks');

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu(){
  navLinks.style.right = "-200px";
}

// background script

const background = document.getElementById('background');

window.onscroll = logScroll;

function logScroll() {
  if (window.pageYOffset >= 900) {
    background.style.height = '64px';
  }
  else {
    background.style.height = '0px';
  }
}