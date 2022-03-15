// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger(4, 16);

// с использованием https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function getRandomIntegerFloat(min, max, length) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return ((Math.random() * (max - min + 1)) + min).toFixed(length);
}

getRandomIntegerFloat(4, 19, 6);
