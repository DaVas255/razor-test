let productCount = 0;

function calculateTotalVolume() {
  let totalVolume = 0;
  $('.product-volume').each(function () {
    totalVolume += parseFloat($(this).val()) || 0;
  });
  $('#volume').val(totalVolume);
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
                          <div class="product__clue">Скорее всего, это <span class="accent-color">линия "Одежда"</span></div>
                        </label>
                        <h3 class="product__data-title">Введите транспортировочные данные</h3>
                        <div class="product__data">
                          <label>Длина, см <input type="number" id="length-${productCount}" class="product__dimension" placeholder="Длина"></label>
                          <label>Ширина, см <input type="number" id="width-${productCount}" class="product__dimension" placeholder="Ширина"></label>
                          <label>Высота, см <input type="number" id="height-${productCount}" class="product__dimension" placeholder="Высота"></label>
                          <div>или</div>
                          <label>Введите объем <input type="text" id="volume-${productCount}" class="product-volume" placeholder="Объем" disabled></label>
                        </div>
                        <label>Вес коробки, кг <input type="number" class="product__input" placeholder="Введите вес коробки"></label>
                        <label>Кол-во коробок, шт <input type="number" class="product__input" placeholder="Введите кол-во коробок"></label>
                        <label>Стоимость товара, $ <input type="number" class="product__input" placeholder="Введите общую стоимость всего товара"></label>
                        <label><input type="checkbox"> Хрупкий товар</label>

                    </div>`;

  $('#productList').append(productHTML);
});

$(document).on('input', '.product__dimension', function () {
  let productId = $(this).attr('id').split('-')[1];
  calculateVolume(productId);
});

$(document).on('click', '.product__remove', function () {
  let productId = $(this).data('id');
  $(`#product-${productId}`).remove();
  calculateTotalVolume();
});
