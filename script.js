const images = [
  "https://m.media-amazon.com/images/I/71mysfO6JuL._SX3000_.jpg",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/c1786792b3252eb0.jpg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1f9c9ad24c2bc37b.jpg?q=60",
];
let index = 0;

const img = document.getElementById("image");

function showImage() {
  img.src = images[index];
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % images.length;
  showImage();
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  showImage();
};

let autoSlide = setInterval(() => {
  index = (index + 1) % images.length;
  showImage();
}, 3000);
