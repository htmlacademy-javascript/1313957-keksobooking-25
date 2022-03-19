const ADS_COUNT = 10;

const REALTY_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

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

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getLocation = function () {
  const lat = getRandomPositiveFloat(35.65, 35.70, 5);
  const lag = getRandomPositiveFloat(139.70, 139.80, 5);
  return `${lat}, ${lag}`;
};

const getRandomItem = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomItems = function (items, num) {
  return items.splice(Math.floor(Math.random() * num));
};

const generateAds = () => {
  const dataAds = [];

  for (let i = 1; i <= ADS_COUNT; i++) {
    const imgNumber = i < 10 ? `0${i}` : i;
    dataAds.push(
      {
        author: {
          avatar: `img/avatars/user${imgNumber}.png`,
        },
        offer: {
          title: 'Объявление',
          address: getLocation(),
          price: getRandomPositiveInteger(100, 50000),
          type: getRandomItem(REALTY_TYPES),
          rooms: getRandomPositiveInteger(1, 10),
          guests: getRandomPositiveInteger(1, 15),
          checkin: getRandomItem(CHECK_VALUES),
          checkout: getRandomItem(CHECK_VALUES),
          features: getRandomItems(FEATURES, 6),
          description: 'Описание объекта для подачи объявления',
          photos: getRandomItems(PHOTOS, 3),
        },
        location: {
          lat: getRandomPositiveFloat(35.65, 35.70, 5),
          lng: getRandomPositiveFloat(139.70, 139.80, 5),
        },
      }
    );
  }
  return dataAds;
};

generateAds();

