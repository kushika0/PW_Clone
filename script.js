document.querySelectorAll('.dropdown').forEach(function (dropdown) {
  const toggle = dropdown.querySelector('.dropdown-icon i');

  dropdown.addEventListener('mouseenter', function () {
    let menu = dropdown.querySelector('.dropdown-menu');
    menu.classList.add('show');

    // Change icon to up
    if (toggle.classList.contains('fa-chevron-down')) {
      toggle.classList.remove('fa-chevron-down');
      toggle.classList.add('fa-chevron-up');
    }
  });

  dropdown.addEventListener('mouseleave', function () {
    let menu = dropdown.querySelector('.dropdown-menu');
    menu.classList.remove('show');

    // Change icon back to down
    if (toggle.classList.contains('fa-chevron-up')) {
      toggle.classList.remove('fa-chevron-up');
      toggle.classList.add('fa-chevron-down');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("mainNavbar");
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.getElementById("navbarNav");

  // Show
  collapse.addEventListener("show.bs.collapse", function () {
    navbar.classList.add("navbar-white");
  });

  // Hide
  collapse.addEventListener("hide.bs.collapse", function () {
    navbar.classList.remove("navbar-white");
  });
});

