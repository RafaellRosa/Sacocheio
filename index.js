const images = document.querySelectorAll('.images img');
let index = 0;
console.log(images.length);
const text = document.querySelectorAll('.slidesText text');
console.log(text.length);
const buttons =  document.querySelectorAll('.selectButton button ');




function sliderAction() {
 images.forEach(image => image.style.display = 'none');
 images[index].style.display = 'block';
 index = (index + 1) % images.length;
 text.forEach(text => text.style.display = 'none');
 text[index].style.display = 'block';





  buttons.forEach( (button, i) => {
    buttons.addEventLister('click', () => {
      index = i;
    })
   }) 
  }
















sliderAction();
setInterval(sliderAction, 10000);
