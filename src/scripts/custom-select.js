$('#select-box').on('click', function () {
  if ($('#select-box').hasClass('active')) {
    $('#select-box').removeClass('active');
  } else {
    $('#select-box').addClass('active')
  }
});

$('.custom-select__option input[type="checkbox"]').on('change', function () {
  let packageName = $(this).val();

  if ($(this).is(':checked')) {
    $('.selected-packages').append(
      `<div class="custom-select__package-badge" data-name="${packageName}">${packageName} <span class="remove-package"></span></div>`
    );
  } else {
    $(`.custom-select__package-badge[data-name='${packageName}']`).remove();
  }
});

$(document).on('click', '.remove-package', function () {
  let packageName = $(this).parent().attr('data-name');
  $(`.custom-select__option input[value='${packageName}']`).prop('checked', false);
  $(this).parent().remove();
});
