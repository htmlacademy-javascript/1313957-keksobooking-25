const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error',
}, false);

function validateTitle (value) {
  const titleLength = value.length;
  return titleLength >= 30 && titleLength <= 100;
}

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'Длина заголовка должна быть от 30 до 100 символов');

function validatePriceRequired (value) {
  return value.length && parseInt(value, 10) !== 0;
}

pristine.addValidator(
  form.querySelector('#price'),
  validatePriceRequired,
  'Цена должна быть заполнена',
  10,
  true
);

function validatePriceAmount (value) {
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
  '1' : ['1'],
  '2' : ['1' , '2'],
  '3' : ['3', '2', '1'],
  '100' : ['0'],
};

function validateCapacity () {
  return roomNumberOption[roomNumber.value].includes(capacity.value);
}

function getCapacityErrorMessage () {
  return `
  ${roomNumber.value}
  ${roomNumber.value === '1' ? 'комната не для' :' комнаты не для'}
  ${capacity.value !== '0' ? capacity.value : ''}
  ${capacity.value === '1' ? 'гостя' :' гостей'}
  `;
}

pristine.addValidator(roomNumber, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

form.addEventListener('submit', (evt) => {
  const submitForm = pristine.validate();
  if (!submitForm) {
    evt.preventDefault();
  }
});

