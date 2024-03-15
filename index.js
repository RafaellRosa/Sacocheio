const images = document.querySelectorAll('.images img');
let index = 0;
const text = document.querySelectorAll('.slidesText text');
const selectButton = document.querySelectorAll('.buttonstoselect button');
console.log(selectButton.length, selectButton[1]);





function sliderAction() {
  images.forEach(image => image.style.display = 'none');
  images[index].style.display = 'block';
  index = (index) % images.length;
  text.forEach(text => text.style.display = 'none');
  text[index].style.display = 'block';


    selectButton.forEach(button => {button.classList.remove('selectedButton')});
    selectButton[index].classList.remove('selectbutton');
    selectButton[index].classList.add('selectedButton');

}


function clique (valor) {

  index = valor;

  
    sliderAction();

}



sliderAction(); // Chamada inicial da função para configurar o slider corretamente
setInterval(() => {
  index = (index + 1) % images.length;
  sliderAction(); // Atualização automática do slider a cada 10 segundos
}, 10000);
sliderAction();
setInterval(sliderAction, 7000);
