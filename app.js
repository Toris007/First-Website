const heroSlide = document.querySelector(".hero-container");
const images = document.querySelectorAll(".hero-img>img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const heroP = document.querySelector(".hero-text>p");
const heroH1 = document.querySelector(".hero-text>h1");
const heroBtn = document.querySelector(".hero-text>.shop-btn");
const heroSection = document.querySelectorAll(".hero-container>.hero-section");
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".nav-list");
// show now bar
// menuIcon.addEventListener("click", function () {
//   const checkClass = navList.classList;
//   if (checkClass.contains("active")) {
//     navList.classList.add("active");
//   }
// });
menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
});
navList.onclick = () => {
  navList.classList.remove("active");
};
onscroll = () => {
  navList.classList.remove("active");
};

let counter = 0;

nextBtn.addEventListener("click", nextSlide);
function nextSlide() {
  heroSection[counter].style.animation = "next-out 0.5s forwards";
  if (counter == heroSection.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  heroSection[counter].style.animation = "next-in 0.5s forwards";
}

prevBtn.addEventListener("click", prevSlide);
function prevSlide() {
  heroSection[counter].style.animation = "prev-out 0.5s forwards";
  if (counter == 0) {
    counter = heroSection.length - 1;
  } else {
    counter--;
  }
  heroSection[counter].style.animation = "prev-in 0.5s forwards";
}

function autoSlide() {
  stop = setInterval(function () {
    nextSlide();
  }, 3000);
}
autoSlide();

heroSlide.addEventListener("mouseover", function () {
  clearInterval(stop);
});

heroSlide.addEventListener("mouseleave", function () {
  autoSlide();
});
