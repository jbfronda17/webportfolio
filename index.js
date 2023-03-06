const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 10) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNavAltMarkup');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
navLinks.forEach( function(l) { l.addEventListener('click', function() {
    // avoid flickering on desktop
    if (menuToggle.classList.contains('show')) {
      bsCollapse.toggle();
    }
  });
});