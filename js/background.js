const images=["2.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];

const choseImage=images[Math.floor(Math.random()*images.length)];

const bgImage=document.createElement("img");

bgImage.src=`img/${choseImage}`;
bgImage.id="bgImg";

document.body.appendChild(bgImage);