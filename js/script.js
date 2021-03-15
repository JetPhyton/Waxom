function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});
;

function openSearch() {
  var search = document.getElementsByClassName('header__extra-menu');
  var searchbar = document.getElementsByClassName('header__extra-menu-searchbar');
  var searchico = document.getElementsByClassName('header__extra-menu-search-ico');
  var cart = document.getElementsByClassName('header__extra-menu-cart');
  var menu = document.getElementsByClassName('header__menu');
  var slide = document.getElementsByClassName('slider__img');
  search[0].classList.toggle("header__extra-menu_active");
  searchbar[0].classList.toggle("header__extra-menu-searchbar_active");
  searchico[0].classList.toggle("header__extra-menu-search-ico_active");
  cart[0].classList.toggle('hide-all');
  menu[0].classList.toggle('hide-all');
  slide[0].classList.toggle('img-bar')
}
var slideIndex  = 1;
showSlide(slideIndex);
function plusSLides(n) {
  showSlide(slideIndex += n);
}
function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
var slides = document.getElementsByClassName('slider__img');
var dots  = document.getElementsByClassName('slider__dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider__img_show");
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("slider__dot_active");
  }
  slides[slideIndex - 1].classList.add("slider__img_show");
  dots[slideIndex - 1].classList.add("slider__dot_active");
}
