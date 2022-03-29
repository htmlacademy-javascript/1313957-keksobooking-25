import {generateAds} from './data.js';

import {REALTY_TYPES,} from './const.js';

const map = document.querySelector('#map-canvas');
const advertisementTemplate = document.querySelector('#card');
const popup = advertisementTemplate.content.querySelector('.popup');

const generatedAdvertisements = generateAds();
const popupListFragment = document.createDocumentFragment();

generatedAdvertisements.forEach(({author, offer}) => {
  const {avatar} = author;
  const {title, address, price, type, rooms, guests, checkin, checkout, features, description, photos} = offer;
  const popupElement = popup.cloneNode(true);
  popupElement.querySelector('.popup__avatar').src = avatar;
  popupElement.querySelector('.popup__title').textContent = title;
  popupElement.querySelector('.popup__text--address').textContent = address;
  popupElement.querySelector('.popup__text--price').textContent = `${price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = REALTY_TYPES[type];
  popupElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  const featureContainer = popupElement.querySelector('.popup__features');
  const featureList = featureContainer.querySelectorAll('.popup__feature');
  featureList.forEach((featureItem) => {
    const isNecessary = features.some(
      (feature) => featureItem.classList.contains(`popup__feature--${feature}`),
    );
    if (!isNecessary) {
      featureItem.remove();
    }
  });
  popupElement.querySelector('.popup__description').textContent = description;
  if (photos.length > 0) {
    const photoContainer = popupElement.querySelector('.popup__photos');
    photos.forEach((photo) => {
      const photoItem = photoContainer.querySelector('.popup__photo');
      photoItem.src = photo;
      photoContainer.appendChild(photoItem);
    });
  }
  popupListFragment.appendChild(popupElement);
});

map.appendChild(popupListFragment);
