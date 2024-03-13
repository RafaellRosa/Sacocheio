let images = document.querySelectorAll('.images img');
let index = 0;
console.log(images.length);
let text = document.querySelectorAll('.slidesText text');
console.log(text.length);



function sliderAction() {
 images.forEach(image => image.style.display = 'none');
 images[index].style.display = 'block';
 images[index]
 index = (index + 1) % images.length;
 text.forEach(text => text.style.display = 'none');
 text[index].style.display = 'block';

};
sliderAction();
setInterval(sliderAction, 3000);
