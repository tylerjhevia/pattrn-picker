let menu = $('.menu');
let navLinks = $('.nav-links');

function showNavLinks() {
  $(navLinks).toggleClass('dropdown');
}

menu.on('click', showNavLinks);
