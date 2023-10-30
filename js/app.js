var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

let head = document.head;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  let linkFav = document.createElement("link");
  linkFav.setAttribute("rel", "shorcut icon");
  linkFav.setAttribute("href", "../assets/YamatoLogo.png");

  head.append(linkFav);
} else {
  let linkFav = document.createElement("link");
  linkFav.setAttribute("rel", "shorcut icon");
  linkFav.setAttribute("href", "../assets/YamatoLogoBlack.png");

  head.append(linkFav);
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    enabled: false,
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    enabled: false,
  },
  autoplay: {
    delay: 3000,
    enabled: true,
  },
});
