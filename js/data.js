import {getLocation, getRandomPositiveInteger, getRandomPositiveFloat, getRandomItem, getRandomItems} from './util.js';
import { ADS_COUNT, LOCATION, REALTY_TYPES, CHECK_VALUES, FEATURES, PHOTOS, } from './const.js';

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
          address: getLocation(LOCATION),
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
          lat: getRandomPositiveFloat(LOCATION.latitudeMin, LOCATION.latitudeMax, LOCATION.floatNumber),
          lng: getRandomPositiveFloat(LOCATION.longitudeMin, LOCATION.longitudeMax, LOCATION.floatNumber),
        },
      }
    );
  }
  return dataAds;
};

export {generateAds};
