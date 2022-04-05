import {MAP_COORDINATES} from './const.js';
import {generateAds} from './data.js';
import {createPopupElement} from './popup.js';

const {latitude, longitude} = MAP_COORDINATES;
const addressInput = document.querySelector('#address');

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

disableMap();

addressInput.value = `координаты: ${latitude}, ${longitude}`;

const map = L.map('map-canvas')
  .on('load', () => {
    enableMap();
  })
  .setView({
    lat: latitude,
    lng: longitude,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPin = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: latitude,
    lng: longitude,
  },
  {
    draggable: true,
    icon: mainPin,
  }
);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addressInput.value = `координаты: ${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});

const pin = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const popup = document.querySelector('#card').content.querySelector('.popup');

const points = generateAds();

points.forEach(({author, offer, location: {lat, lng} }) => {
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: pin,
    }
  );
  marker
    .addTo(map)
    .bindPopup(createPopupElement(popup, author, offer));
});
