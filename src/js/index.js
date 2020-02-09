// import $ from "jquery";
// import Swiper from 'swiper';

//import popper from "popper.js";
//import bootstrap from "bootstrap";
// let svg=setSvgToHtml('img/work.svg',1);

;(function (window, document) {
'use strict';

// var file = 'img/logo.svg',
// var file = 'img/work2.svg',
// var file = 'img/galka.svg',
var file = 'img/icons-sprite.svg',
  revision = 2;

if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
  return true;

var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
  request,
  data,
  insertIT = function () {
    document.body.insertAdjacentHTML('afterbegin', data);
  },
  insert = function () {
    if (document.body) insertIT();
    else document.addEventListener('DOMContentLoaded', insertIT);
  };

if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
  data = localStorage.getItem('inlineSVGdata');
  if (data) {
    insert();
    return true;
  }
}

try {
  request = new XMLHttpRequest();
  request.open('GET', file, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      data = request.responseText;
      insert();
      if (isLocalStorage) {
        localStorage.setItem('inlineSVGdata', data);
        localStorage.setItem('inlineSVGrev', revision);
      }
    }
  }
  request.send();
} catch (e) {
}

}(window, document));





$(document).ready(function() {
  var mySwiper = new Swiper ('.proud.slider .swiper-container', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    roundLengths: true,
    // slidesOffsetBefore: 5,
    // If we need pagination
    pagination: {
      el: '.proud.slider-pagination .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.proud.slider-block .swiper-button-next',
      prevEl: '.proud.slider-block .swiper-button-prev',
    },
  });
  var mySwiper2 = new Swiper ('.our-cases.slider .swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    roundLengths: true,
    // slidesOffsetBefore: 5,
    // If we need pagination
    pagination: {
      el: '.our-cases.slider-pagination .swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.our-cases.slider-block .swiper-button-next',
      prevEl: '.our-cases.slider-block .swiper-button-prev',
    },
  });
  var mySwiper3 = new Swiper ('.reviews .swiper-container', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 30,
    roundLengths: true,
    // slidesOffsetBefore: 5,
    // If we need pagination
    pagination: {
      el: '.reviews .swiper-pagination',
    },

  })


});
