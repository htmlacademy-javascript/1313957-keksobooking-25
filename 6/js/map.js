const disableMap = () => {
  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');
  const formFieldset = form.querySelectorAll('fieldset');
  formFieldset.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });

  const mapFiltersForm = document.querySelector('.map__filters');
  const mapSelects = mapFiltersForm.querySelectorAll('select');
  mapSelects.forEach((select) => {
    select.setAttribute('disabled', 'disabled');
  });
  const mapFeatures = mapFiltersForm.querySelector('.map__features');
  const inputFeatures = mapFeatures.querySelectorAll('.map__checkbox');
  inputFeatures.forEach((input) => {
    input.setAttribute('disabled', 'disabled');
  });
};

const enableMap = () => {
  const form = document.querySelector('.ad-form');
  form.classList.remove('ad-form--disabled');
  const formFieldset = form.querySelectorAll('fieldset');
  formFieldset.forEach((field) => {
    field.removeAttribute('disabled');
  });

  const mapFiltersForm = document.querySelector('.map__filters');
  const mapSelects = mapFiltersForm.querySelectorAll('select');
  mapSelects.forEach((select) => {
    select.removeAttribute('disabled');
  });
  const mapFeatures = mapFiltersForm.querySelector('.map__features');
  const inputFeatures = mapFeatures.querySelectorAll('.map__checkbox');
  inputFeatures.forEach((input) => {
    input.removeAttribute('disabled');
  });
};

export {disableMap, enableMap};
