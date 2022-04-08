const ADS_COUNT = 10;

const LOCATION = {
  latitudeMin: 35.65,
  latitudeMax: 35.70,
  longitudeMin: 139.70,
  longitudeMax: 139.80,
  floatNumber: 5,
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

const CHECK_VALUES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTIONS = [
  'сдаю недорого',
  'тараканы в подарок',
  'недалеко от моря - закачаешься',
  'соседи спокойные',
  'нет микроволновки',
  'удобства во дворе',
  'разные разности бесплатно',
];

export {
  ADS_COUNT, LOCATION, MAP_COORDINATES, REALTY_TYPES, REALTY_PRICES, REALTY_DECLENSION, CHECK_VALUES, FEATURES, PHOTOS, DESCRIPTIONS,
};
