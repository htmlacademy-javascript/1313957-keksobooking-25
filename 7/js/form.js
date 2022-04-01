const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__label',
  errorTextParent: 'ad-form__label',
  errorTextClass: 'ad-form__error',
}, false);

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  'Длина заголовка объявления должна быть от 30 до 100 символов.');

function validatePrice (value) {
  return value.length && parseInt(value, 10) > 100000;
}

pristine.addValidator(
  form.querySelector('#price'),
  validatePrice,
  'Цена за ночь не должна быть более 100 000 рублей!'
);

const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const roomNumberOption = {
  '1' : ['1'],
  '2' : ['2' , '3'],
  '3' : ['3', '2', '1'],
  '100' : ['0'],
};

function validateCapacity () {
  return roomNumberOption[roomNumber.value].includes(capacity.value);
}

function getCapacityErrorMessage () {
  return `
  ${roomNumber.value}
  ${roomNumber.value === '1' ? 'комната не рассчитана на' :' комнаты не рассчитаны на'}
  ${capacity.value}
  ${capacity.value === '1' ? 'гостя' :' гостей'}
  `;
}

pristine.addValidator(roomNumber, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(capacity, validateCapacity, getCapacityErrorMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

