const images = document.querySelectorAll('.images img');
let index = 0;
const text = document.querySelectorAll('.slidesText text');
const selectButton = document.querySelectorAll('.buttonstoselect button');
console.log(selectButton.length, selectButton[1]);





function sliderAction() {
  images.forEach(image => image.style.display = 'none');
  images[index].style.display = 'block';
  index = (index + 1) % images.length;
  text.forEach(text => text.style.display = 'none');
  text[index].style.display = 'block';


  selectButton[index].classList.remove('selectedButton');
  selectButton[index].classList.add('selectedButton');
  selectButton[index].classList.remove('selectbutton');



}


function clique (valor) {
  index = valor;
  sliderAction();

}



sliderAction();
setInterval(sliderAction, 7000);
