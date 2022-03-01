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

const carousel = document.getElementById("carousel-elements");
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

/* Generate Carousel */
let carouselContent = "";

for (let i = 0; i < items.length; i++) {
  carouselContent += `
    <div class="w-full h-full">
        <img
            class="w-full h-full object-cover"
            src="${items[i]}"
            alt="img"
        />
    </div>`;
}

carousel.innerHTML += carouselContent;

/* Add .hidden class to every other img tag */
const carouselElements = document.querySelectorAll("#carousel-elements div");
for (let i = 1; i < items.length; i++) {
  carouselElements[i].classList.add("hidden");
}

/* Buttons */
let activeItem = 0;

downButton.addEventListener("click", function () {
  carouselElements[activeItem].classList.add("hidden");
  activeItem++;
  if (activeItem === 5) {
    activeItem = 0;
  }
  carouselElements[activeItem].classList.remove("hidden");
});

upButton.addEventListener("click", function () {
  carouselElements[activeItem].classList.add("hidden");
  activeItem--;
  if (activeItem === -1) {
    activeItem = 4;
  }
  carouselElements[activeItem].classList.remove("hidden");
});
