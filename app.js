/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.querySelectorAll(".nav__link");
const tabLinks = document.querySelectorAll(".tabs-wrap ul li");
const all = document.querySelectorAll(".tab-wraps");
const foods = document.querySelectorAll(".food");
const snacks = document.querySelectorAll(".snack");
const beverages = document.querySelectorAll(".beverage");

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

menuIcon.addEventListener("click", e => {
  navMenu.classList.remove("hidden");
});
closeIcon.addEventListener("click", e => {
  navMenu.classList.add("hidden");
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}

if (localStorage.getItem("mode") === "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", e => {
  if (localStorage.getItem("mode") === "light") {
    darkMode();
  } else {
    lightMode();
  }
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
function scroll() {
  const scrollYBtn = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    scrollYBtn.classList.add("bottom-4");
  } else {
    scrollYBtn.classList.remove("bottom-4");
  }
}

window.addEventListener("scroll", scroll);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
function headerBorder() {
  const header = document.getElementById("header");
  if (this.scrollY >= 30) {
    header.classList.add("border-b");
  } else {
    header.classList.remove("border-b");
  }
}
window.addEventListener("scroll", headerBorder);
/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

function activeLink() {
  const sections = document.querySelectorAll("section");

  let current = "home";
  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    if (this.scrollY > sectionTop - 60) {
      current = section.getAttribute("id");
    }
    // console.log(sectionTop);
    // console.log("screenY", this.scrollY);
    //console.log("currenctSection", current);
  });

  navLinks.forEach(navLink => {
    navLink.classList.remove("text-secondaryColor");
    if (navLink.href.includes(current)) {
      navLink.classList.add("text-secondaryColor");
    }
  });
}

window.addEventListener("scroll", activeLink);

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

let sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
});

sr.reveal("#home__image");
sr.reveal(".home__sec", { origin: "bottom" });
sr.reveal(".category__sec", { interval: 300 });
sr.reveal(".promo__card-1", { origin: "left" });
sr.reveal(".promo__card-2", { origin: "right" });
sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });
sr.reveal(".menu__items", { origin: "left" });
sr.reveal(".custumer__review", { origin: "right" });
sr.reveal(".footer");
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
tabLinks.forEach(tab => {
  // food tabs select logic
  tab.addEventListener("click", () => {
    tabLinks.forEach(tab => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    // food items choice logic
    let tabVal = tab.getAttribute("food-tabs");
    all.forEach(all => (all.style.display = "none"));

    if (tabVal === "food") {
      foods.forEach(food => (food.style.display = "block"));
    } else if (tabVal === "snack") {
      snacks.forEach(snack => (snack.style.display = "block"));
    } else if (tabVal === "beverage") {
      beverages.forEach(beverage => (beverage.style.display = "block"));
    } else {
      all.forEach(all => (all.style.display = "block"));
    }
  });
});
