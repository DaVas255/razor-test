$.when($.ready).then(function () {
  $('#modalOpen').on('click', () => {
    $('.modal').fadeIn();
  })

  $('.modal, .modal__close').on('click', (event) => {
    if ($(event.target).is('.modal, .modal__close')) $('.modal').fadeOut();
  });

})

