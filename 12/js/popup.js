import {REALTY_TYPES,} from './const.js';

const popup = document.querySelector('#card').content.querySelector('.popup');

const createPopupElement = function (author, offer) {

  const popupElement = popup.cloneNode(true);

  popupElement.querySelector('.popup__avatar').src = author.avatar;
  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = REALTY_TYPES[offer.type];
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const featureContainer = popupElement.querySelector('.popup__features');
  if (offer.features !== undefined && offer.features.length >0){
    const featureList = featureContainer.querySelectorAll('.popup__feature');
    featureList.forEach((featureItem) => {
      const isNecessary = offer.features.some(
        (feature) => featureItem.classList.contains(`popup__feature--${feature}`),
      );
      if (!isNecessary) {
        featureItem.remove();
      }
    });
  } else {
    featureContainer.remove();
  }

  popupElement.querySelector('.popup__description').textContent = offer.description;
  const photoContainer = popupElement.querySelector('.popup__photos');
  if (offer.photos !== undefined && offer.photos.length > 1) {
    offer.photos.forEach((photo) => {
      const photoItem = photoContainer.querySelector('.popup__photo');
      photoItem.src = photo;
      photoContainer.appendChild(photoItem);
    });
  } else {
    photoContainer.remove();
  }

  return popupElement;
};

export {createPopupElement};
