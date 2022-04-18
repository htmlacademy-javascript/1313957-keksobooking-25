const INDEX_RANGES = {
  start: 10,
  end: 20,
};

const PIN_SIZES = {
  mainPinSize: {
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
  pinSize: {
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  },
};

const MAP_COORDINATES = {
  latitude: 35.675,
  longitude: 139.75,
};

const REALTY_TYPES = {
  house: 'Дом',
  hotel: 'Отель',
  palace: 'Дворец',
  flat: 'Квартира',
  bungalow: 'Бунгало',
};

const REALTY_DECLENSION = {
  house: 'дома',
  hotel: 'отеля',
  palace: 'дворца',
  flat: 'квартиры',
  bungalow: 'бунгало',
};

const REALTY_PRICES = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

const FILTER_DEFAULT = 'any';

const PRICE_VALUES = {
  'low': {
    min: 0,
    max: 10000
  },
  'high': {
    min: 50000,
    max: 100000
  },
  'middle': {
    min: 10000,
    max: 50000
  },
  'any': {
    min: 0,
    max: 100000
  },
};

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const SLIDER_SETTINGS = {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 1,
};

export {
  INDEX_RANGES, PIN_SIZES, MAP_COORDINATES, REALTY_TYPES, REALTY_PRICES,
  REALTY_DECLENSION, FILTER_DEFAULT, PRICE_VALUES, FILE_TYPES, SLIDER_SETTINGS,
};
