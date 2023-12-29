//!Создаем burger
const burger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__menu');
burger.addEventListener('click', function(e){
  burger.classList.toggle('header__burger_active');
  menuBurger.classList.toggle('header__menu_active');
  document.body.classList.toggle('_lock');
});

//!Создаем poppup для кнопки contact
const contact = document.querySelectorAll('.contact-btn');
const contactBody = document.querySelector('.contact__body');
const contactContent = document.querySelector('.contact__form')
const contactExit = document.querySelector('.contact__exit');
function action(){
  contactBody.classList.toggle('contact__body_active');
  document.body.classList.toggle('_lock');
  contactContent.classList.toggle('contact__form_active');
}
contact.forEach(contact =>{
  contact.addEventListener("click", function(e){
    action();
});
});
contactBody.addEventListener("click", function(e){
  if(!e.target.closest('.contact__form')){
    action();
  }
});
contactExit.addEventListener("click", function(e){
  contactBody.classList.toggle('contact__form_active');
});

//!Пишем slider
const sliderItem = document.querySelectorAll('.review__column');
const sliderBody = document.querySelector('.review__slider');
let offset = 0;
let slider = sliderItem;
let count;
let width;

function init(){
  sliderItem.forEach(function(item){
    count = item.getBoundingClientRect().width + 15;
  });
  let currentSlide = Math.round(offset / count);
  offset = currentSlide * count;
  sliderBody.style.left = offset + 'px';
  let clearWidth = sliderItem[0].offsetWidth;
  width = sliderBody.scrollWidth;
  if(offset < -(width - clearWidth - 15)){
    offset = 0;
    sliderBody.style.left = offset + 'px';
  }
}
init();

document.querySelector('.review__prev').addEventListener("click", function(e){
  offset += count;
  if(offset > 0){
    offset = -count * (slider.length - 1);
  }
  sliderBody.style.left = offset + 'px';
});   
document.querySelector('.review__next').addEventListener("click", function(e){
  offset -= count;
  if(offset <= -width){
    offset = 0;
  }
  sliderBody.style.left = offset + 'px';;
});

window.addEventListener('resize', init);

//!Пишем spollers 
document.querySelectorAll('[data-spollers]').forEach((accordion) => {
  accordion.addEventListener("click", () =>{
    let content = accordion.nextElementSibling;
    let body = document.querySelectorAll('.accordion');
    let bodyStyle;

    body.forEach(function(body) {
      body.style.maxHeight = null;
      body.style.opacity = null;
    });

    bodyStyle = window.getComputedStyle(content);

    if(bodyStyle.getPropertyValue('max-height') != '0px'){
      content.style.maxHeight = null;
      content.style.opacity = null;
      content.style.padding = null;
    } else {
      content.style.maxHeight = '100%';
      content.style.opacity = 1;
      content.style.padding = '10px';
    }
  });
});
