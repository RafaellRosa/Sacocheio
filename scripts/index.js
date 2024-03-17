import {podcasts} from "./podcasts.js";

const images = document.querySelectorAll('.images img');
let index = 0;
const text = document.querySelectorAll('.slidesText text');
const selectButton = document.querySelectorAll('.buttonstoselect button');

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

  clearInterval(intervalId);
  intervalId = setInterval(() => {
    index = (index + 1) % images.length;
    sliderAction();
  }, 5000);
    sliderAction();
}

sliderAction(); 
let intervalId = setInterval(() => {
  index = (index + 1) % images.length;
  sliderAction(); 
}, 5000);
sliderAction();



podcasts.forEach(podcast =>
 { podcastsContainer.innerHTML += `
  <pod class="podcastDiv">
  <img src="images/podcastsicons/sacocheioicon.jpg" alt="" class="podcastIcon">
  <article class="podcastInfo">
    <h1 class="podcastName">${podcast.name}</h1>
    <p class="podcastDescription"> ${podcast.info}</p>
    <aside>${podcast.subinfo}</aside>
  </article>
</pod>  `});