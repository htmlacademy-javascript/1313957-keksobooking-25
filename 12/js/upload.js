import {FILE_TYPES} from './const.js';

const matches = (file) =>{
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const avatarInput = document.querySelector('.ad-form__field input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');

avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  const checkFile = matches(file);
  if (checkFile) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

const photoInput = document.querySelector('.ad-form__upload input[type=file]');
const photoContainer = document.querySelector('.ad-form__photo');

photoInput.addEventListener('change', () => {
  const file = photoInput.files[0];
  const checkFile = matches(file);
  if (checkFile) {
    const imgSrc = URL.createObjectURL(file);
    photoContainer.innerHTML = `<img src=${imgSrc} alt="Фото жилья" width="70" height="70">`;
  }
});

const resetUpload = () => {
  previewAvatar.src = 'img/muffin-grey.svg';
  photoContainer.innerHTML = '';
};

export {resetUpload};
