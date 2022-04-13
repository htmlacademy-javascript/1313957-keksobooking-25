const sliderElement = document.querySelector('.ad-form__slider');
const priceElement = document.querySelector('#price');

priceElement.value = 5000;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    }
  },
});

sliderElement.noUiSlider.on('update', ()=> {
  priceElement.value = sliderElement.noUiSlider.get();
});

priceElement.addEventListener('input', () => {
  sliderElement.noUiSlider.set(priceElement.value);
});
