$(document).ready(function ($) {

  $('#modalOpen').on('click', () => {
    $('.modal').fadeIn();
  })

  $('.modal').on('click', () => {
    $('.modal').fadeOut();
  });

  $('.modal__close').on('click', () => {
    $('.modal').fadeOut();
  });
})

