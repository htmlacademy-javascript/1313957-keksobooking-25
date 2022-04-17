import {REALTY_DECLENSION, REALTY_PRICES} from './const.js';
import {messageError, messageSuccess} from './message.js';
import {resetMapSettings} from './map.js';
import {sendFormData} from './api.js';
import {resetUpload} from './upload.js';

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error',
}, false);

function validateTitle(value) {
  const titleLength = value.length;
  return titleLength >= 30 && titleLength <= 100;
}

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'Длина заголовка должна быть от 30 до 100 символов');

function validatePriceRequired(value) {
  return value.length && parseInt(value, 10) >= 0;
}

pristine.addValidator(
  form.querySelector('#price'),
  validatePriceRequired,
  'Цена должна быть заполнена',
  10,
  true
);

function validatePriceAmount(value) {
  return value.length && parseInt(value, 10) <= 100000;
}

pristine.addValidator(
  form.querySelector('#price'),
  validatePriceAmount,
  'Цена не более 100 000 рублей'
);

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const roomNumberOption = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

function validateCapacity() {
  return roomNumberOption[roomNumber.value].includes(capacity.value);
}

function getCapacityErrorMessage() {
  return `
  ${roomNumber.value}
  ${roomNumber.value === '1' ? 'комната не для' : ' комнаты не для'}
  ${capacity.value !== '0' ? capacity.value : ''}
  ${capacity.value === '1' ? 'гостя' : ' гостей'}
  `;
}

pristine.addValidator(
  roomNumber,
  validateCapacity,
  getCapacityErrorMessage,
);

pristine.addValidator(
  capacity,
  validateCapacity,
  getCapacityErrorMessage
);

const type = form.querySelector('#type');
const price = form.querySelector('#price');

type.addEventListener('change', () => {
  price.placeholder = REALTY_PRICES[type.value];
});

function validateRealtyPrice() {
  const minValue = parseInt(REALTY_PRICES[type.value], 10);
  const enteredValue = parseInt(price.value, 10);
  return enteredValue >= minValue;
}

function getRealtyPriceErrorMessage() {
  return `Для ${REALTY_DECLENSION[type.value]} цена не менее ${REALTY_PRICES[type.value]}`;
}

pristine.addValidator(
  price,
  validateRealtyPrice,
  getRealtyPriceErrorMessage
);

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

function setOptionSelected(timeInOptions, idx) {
  for (const item of timeInOptions) {
    item.removeAttribute('selected');
  }
  timeInOptions[idx].selected = true;
  timeInOptions[idx].setAttribute('selected', 'selected');
}

timeIn.addEventListener('change', () => {
  const idx = timeIn.selectedIndex;
  setOptionSelected(timeIn.children, idx);
  setOptionSelected(timeOut.children, idx);
});

timeOut.addEventListener('change', () => {
  const idx = timeOut.selectedIndex;
  setOptionSelected(timeIn.children, idx);
  setOptionSelected(timeOut.children, idx);
});

const resetFormSettings = function () {
  form.reset();

  setOptionSelected(timeIn.children, 0);
  setOptionSelected(timeOut.children, 0);

  const sliderElement = form.querySelector('.ad-form__slider');
  sliderElement.noUiSlider.set(5000);
};

const sendForm = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      form.classList.add('ad-form--disabled');
      const formData = new FormData(evt.target);
      sendFormData(formData, onSuccess, onError);
      form.classList.remove('ad-form--disabled');
    }
  });
};

const buttonReset = form.querySelector('.ad-form__reset');

const onButtonResetClick = (cb) => {
  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetFormSettings();
    resetMapSettings();
    resetUpload();
    cb();
  });
};

sendForm(messageSuccess, messageError);

export {resetFormSettings, onButtonResetClick};
