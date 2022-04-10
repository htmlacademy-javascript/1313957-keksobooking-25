import {MAP_COORDINATES} from './const.js';
import {createPopupElement} from './popup.js';
import {loadingError} from './message.js';
import {gerMapData} from './api.js';

const {latitude, longitude} = MAP_COORDINATES;

const addressInput = document.querySelector('#address');
const form = document.querySelector('.ad-form');
const formFieldset = form.querySelectorAll('fieldset');
const mapFiltersForm = document.querySelector('.map__filters');
const mapSelects = mapFiltersForm.querySelectorAll('select');

const disableMap = () => {
  form.classList.add('ad-form--disabled');
  formFieldset.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });

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
  form.classList.remove('ad-form--disabled');
  formFieldset.forEach((field) => {
    field.removeAttribute('disabled');
  });

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
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderPoints = (points) => {
  points.forEach(({author, offer, location}) => {
    const marker = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: pin,
      }
    );
    marker
      .addTo(map)
      .bindPopup(createPopupElement(author, offer));
  });
};

const resetMapSettings = () => {
  map.closePopup();
  mapFiltersForm.reset();
  addressInput.value = `координаты: ${latitude}, ${longitude}`;

  map.setView({
    lat: latitude,
    lng: longitude,
  }, 13);

  mainMarker.setLatLng({
    lat: latitude,
    lng: longitude,
  }, 13);
};

const onSuccess = (advertisements) => renderPoints(advertisements);
const onError = () => loadingError();

gerMapData( onSuccess, onError);

export {resetMapSettings};
