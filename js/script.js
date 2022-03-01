const items = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const title = ["Svezia", "Svizzera", "Gran Bretagna", "Germania", "Paradise"];

const text = [
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  "Lorem ipsum",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

const carouselElements = document.querySelectorAll("#carousel-elements img");
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

let activeItem = 0;

downButton.addEventListener("click", function () {
  carouselElements[activeItem].classList.add("hidden");
  activeItem++;
  if (activeItem === 5) {
    activeItem = 0;
  }
  carouselElements[activeItem].classList.remove("hidden");
});
