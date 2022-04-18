import {SLIDER_SETTINGS} from './const.js';

const sliderElement = document.querySelector('.ad-form__slider');
const priceElement = document.querySelector('#price');
const {range, start, step} = SLIDER_SETTINGS;

priceElement.value = 5000;

noUiSlider.create(sliderElement, {
  range: range,
  start: start,
  step: step,
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
