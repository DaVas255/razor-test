let productCount = 0;

function calculateTotalVolume() {
  let totalVolume = 0;
  $('.product-volume').each(function () {
    totalVolume += parseFloat($(this).val()) || 0;
  });
  $('#totalVolume').val(totalVolume);
}

function calculateVolume(productId) {
  let length = parseFloat($(`#length-${productId}`).val()) || 0;
  let width = parseFloat($(`#width-${productId}`).val()) || 0;
  let height = parseFloat($(`#height-${productId}`).val()) || 0;
  let volume = length * width * height;
  $(`#volume-${productId}`).val(volume);
  calculateTotalVolume();
}

$('#productAdd').on('click', function () {
  productCount++;
  let productHTML = `
                    <div class="product" id="product-${productCount}">
                        <h3 class='product__title'>Товар ${productCount} <span class="product__remove" data-id="${productCount}"></span></h3>
                        <label>
                          Название товара
                          <input placeholder="Название товара" class="product__name"/>
                          <div class="product__">Скорее всего, это <span class="accent-color">линия "Одежда"</span></div>
                        </label>
                        <label>Длина: <input type="number" id="length-${productCount}" class="dimension"></label>
                        <label>Ширина: <input type="number" id="width-${productCount}" class="dimension"></label>
                        <label>Высота: <input type="number" id="height-${productCount}" class="dimension"></label>
                        <label>Объем: <input type="text" id="volume-${productCount}" class="product-volume" disabled></label>
                    </div>`;

  $('#productList').append(productHTML);
});

$(document).on('input', '.dimension', function () {
  let productId = $(this).attr('id').split('-')[1];
  calculateVolume(productId);
});

$(document).on('click', '.product__remove', function () {
  let productId = $(this).data('id');
  $(`#product-${productId}`).remove();
  calculateTotalVolume();
});
