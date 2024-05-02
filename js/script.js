const btnDropdown = document.querySelector('.btn');
const menuDropdown = document.querySelector('.dropdown');
const arrow = document.getElementById("arrow");


const toggleDropdown = function () {
    menuDropdown.classList.toggle("show");
    arrow.classList.toggle("arrow");
};

btnDropdown.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
  if (menuDropdown.classList.contains("show")) {
    toggleDropdown();
  }
});



const dropdownBtn = document.querySelector('#btn2');
const dropdownMenu = document.querySelector('#dropdown2');
const arrow2 = document.getElementById("arrow2");

const toggleDropdown2 = function () {
  dropdownMenu.classList.toggle("show");
  arrow2.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown2();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown2();
  }
});








