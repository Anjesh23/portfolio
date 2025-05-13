// Currently all dropdown behavior is handled with CSS (hover).
// If you want to use a click-based toggle for mobile:

document.querySelector('.dropbtn').addEventListener('click', function (e) {
    e.stopPropagation();
    document.querySelector('.dropdown-content').classList.toggle('show');
  });
  function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
  }
  
  
  window.addEventListener('click', function () {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach((d) => d.classList.remove('show'));
  });
  