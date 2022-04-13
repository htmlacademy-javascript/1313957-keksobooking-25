// import {markerGroup} from './map.js';
import {FILTER_DEFAULT, PRICE_VALUES} from './const.js';

const mapFilters = document.querySelector('.map__filters');
const mapFeatures = mapFilters.querySelector('.map__features');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');

const filterHousingType = ({offer}) => housingType.value === offer.type || housingType.value === FILTER_DEFAULT;
const filterByPrice = ({offer}) => offer.price >= PRICE_VALUES[housingPrice.value].min && offer.price <= PRICE_VALUES[housingPrice.value].max;
const filterByRooms = ({offer}) => (housingRooms.value === FILTER_DEFAULT) ? offer : offer.rooms === Number(housingRooms.value);
const filterByGuests = ({offer}) => (housingGuests.value === FILTER_DEFAULT) ? offer : offer.guests === Number(housingGuests.value);

const filterByFeatures = ({offer}) => {
  const filtersFeatures = [];
  const checkedFilters = mapFeatures.querySelectorAll('input[name="features"]:checked');
  checkedFilters.forEach((el) => filtersFeatures.push(el.value));

  if (filtersFeatures.length === 0) {
    return true;
  }
  if (offer.features){
    return filtersFeatures.every((feature) => offer.features.includes(feature));
  } else {
    return false;
  }
};

// const setMapFilters = (cb) => {
//   filterForm.addEventListener('change', () => {
//     markerGroup.clearLayers();
//     cb();
//   });
// };

const filterAds = (offers) => offers.filter((offer) => (
  filterHousingType(offer) &&
  filterByPrice(offer) &&
  filterByRooms(offer) &&
  filterByGuests(offer) &&
  filterByFeatures(offer))
);

export {filterAds};
