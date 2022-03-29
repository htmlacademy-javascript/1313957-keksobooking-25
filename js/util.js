const getRandomPositiveInteger = function (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = function (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digits));
};

const getLocation = function (location) {
  const lat = getRandomPositiveFloat(location.latitudeMin, location.latitudeMax, location.floatNumber);
  const lag = getRandomPositiveFloat(location.longitudeMin, location.longitudeMax, location.floatNumber);
  return `${lat}, ${lag}`;
};

const getRandomItem = function (items) {
  return items[Math.floor(Math.random() * items.length)];
};

const getRandomItems = function (items, num) {
  return items.splice(Math.floor(Math.random() * num));
};

const getOfferDescription = function (description) {
  const desc = getRandomItems(description, 6);
  return desc.join(', ');
};

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getLocation,
  getRandomItem,
  getRandomItems,
  getOfferDescription,
};
