/* Data */
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

/* Start DOM Elements */
const carousel = document.getElementById("carousel-elements");
const thumbnails = document.getElementById("thumbnails");
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");

/* Generate Carousel & Thumbnails*/
let carouselContent = "";
let thumbnailContent = "";

for (let i = 0; i < items.length; i++) {
  carouselContent += `
    <div class="relative w-full h-full">
        <div class="absolute right-0 bottom-0 text-white p-8 text-right">
            <h1 class="text-xl font-semibold ">${title[i]}</h1>
            <p>${text[i]}</p>
        </div>
        <img
            class="w-full h-full object-cover"
            src="${items[i]}"
            alt="${title[i]}"
        />
    </div>`;

  thumbnailContent += `
    <div class="cursor-pointer relative h-[4.8rem]">
      <div
        class="hidden absolute bottom-0 top-0 right-0 left-0 bg-black opacity-50">
      </div>
      <img class="h-full w-full" src="${items[i]}" alt="${title[i]}" />
    </div>`;
}

carousel.innerHTML += carouselContent;
thumbnails.innerHTML += thumbnailContent;

/* Thumbnails Overlay */
const thumbnailsOverlay = document.querySelectorAll(
  "#thumbnails > div > div.absolute"
);

/* 
  Add .hidden class to every img, exlcuding the first.
  Remove .hidden class to every thumbnail, excluding the first.
*/
const carouselElements = document.querySelectorAll("#carousel-elements > div");

for (let i = 1; i < items.length; i++) {
  carouselElements[i].classList.add("hidden");
  thumbnailsOverlay[i].classList.remove("hidden");
}

/* Buttons */
let activeItem = 0;

downButton.addEventListener("click", function () {
  carouselElements[activeItem].classList.add("hidden");
  thumbnailsOverlay[activeItem].classList.remove("hidden");
  activeItem++;
  if (activeItem === 5) {
    activeItem = 0;
  }
  carouselElements[activeItem].classList.remove("hidden");
  thumbnailsOverlay[activeItem].classList.add("hidden");
});

upButton.addEventListener("click", function () {
  carouselElements[activeItem].classList.add("hidden");
  thumbnailsOverlay[activeItem].classList.remove("hidden");
  activeItem--;
  if (activeItem === -1) {
    activeItem = 4;
  }
  carouselElements[activeItem].classList.remove("hidden");
  thumbnailsOverlay[activeItem].classList.add("hidden");
});

/* 
EXTRA: click on thumnails img
*/
const thumbnailsImg = document.querySelectorAll("#thumbnails > div");

for (let i = 0; i < thumbnailsImg.length; i++) {
  thumbnailsImg[i].addEventListener("click", function () {
    carouselElements[activeItem].classList.add("hidden");
    thumbnailsOverlay[activeItem].classList.remove("hidden");
    activeItem = i;
    carouselElements[activeItem].classList.remove("hidden");
    thumbnailsOverlay[activeItem].classList.add("hidden");
  });
}
