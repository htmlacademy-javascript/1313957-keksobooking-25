import {MAP_COORDINATES, PIN_SIZES} from './const.js';
import {createPopupElement} from './popup.js';
import {loadingError} from './message.js';
import {getMapData} from './api.js';
import {filterAds} from './filter.js';
import {debounce} from './debounce.js';
import {clickButtonReset} from './form.js';

const {latitude, longitude} = MAP_COORDINATES;
const {mainPinSize, pinSize} = PIN_SIZES;

const mapFilters = document.querySelector('.map__filters');
const addressInput = document.querySelector('#address');
const form = document.querySelector('.ad-form');
const formFieldset = form.querySelectorAll('fieldset');

const disableMap = () => {
  mapFilters.classList.add('map__filters--disabled');
  form.classList.add('ad-form--disabled');
  formFieldset.forEach((field) => {
    field.setAttribute('disabled', 'disabled');
  });
};

const enableMap = () => {
  form.classList.remove('ad-form--disabled');
  formFieldset.forEach((field) => {
    field.removeAttribute('disabled');
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
  iconSize: mainPinSize.iconSize,
  iconAnchor: mainPinSize.iconAnchor,
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
  iconSize: pinSize.iconSize,
  iconAnchor: pinSize.iconSize,
});

const markerGroup = L.layerGroup().addTo(map);

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
      .addTo(markerGroup)
      .bindPopup(createPopupElement(author, offer));
  });
};

const onSuccess = (ads) => {
  renderPoints(ads);
  mapFilters.addEventListener('change',  () => {
    markerGroup.clearLayers();
    debounce(renderPoints(filterAds(ads)));
  });

  mapFilters.classList.remove('map__filters--disabled');

  clickButtonReset(() => renderPoints(ads));
};

const onError = () => {
  loadingError();
};

getMapData(onSuccess, onError);

const resetMapSettings = () => {
  map.closePopup();
  mapFilters.reset();
  mapFilters.dispatchEvent(new Event('change'));
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

export {resetMapSettings, markerGroup};
