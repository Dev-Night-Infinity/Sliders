// images info
var images = [
  {
    name: "Image 1",
    image: "img/1.jpg",
    link: "img/1.jpg",
  },
  {
    name: "Image 2",
    image: "img/2.jpg",
    link: "img/2.jpg",
  },
  {
    name: "Image 3",
    image: "img/3.jpg",
    link: "img/3.jpg",
  },
  {
    name: "Image 4",
    image: "img/4.jpg",
    link: "img/4.jpg",
  },
  {
    name: "Image 5",
    image: "img/4.jpg",
    link: "img/4.jpg",
  },
  {
    name: "Image 6",
    image: "img/6.jpg",
    link: "img/6.jpg",
  },
  {
    name: "Image 7",
    image: "img/7.jpg",
    link: "img/7.jpg",
  },
  {
    name: "Image 8",
    image: "img/8.jpg",
    link: "img/8.jpg",
  },
];

// variables
var index = 0;
var slideCount = images.length;

showSlide(index);

// click function for arrow
document.querySelector(".fa-angle-left").addEventListener("click", function () {
  index--;
  showSlide(index);
});
document.querySelector(".fa-angle-right").addEventListener("click", function () {
    index++;
    showSlide(index);
});

// image info change
function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slideCount - 1;
  } else if (i >= slideCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = images[index].name;
  document.querySelector(".card-img-top").setAttribute("src", images[index].image);
  document.querySelector(".card-link").setAttribute("href", images[index].link);
}










