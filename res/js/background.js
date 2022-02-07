// background img arrays
const imgs = [
  "background-bg1.jpg",
  "background-bg2.jpg",
  "background-bg3.jpg",
  "background-bg4.jpg",
  "background-bg5.jpg",
];

// chosen imgs
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

// add background img tag
const bgImg = document.createElement("img");

// create img property
bgImg.src = `img/${chosenImg}`;

// show body create img tag
document.body.appendChild(bgImg);
