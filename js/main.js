// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInteger (min, max) {
  const from = Math.ceil(min);
  const before = Math.floor(max);
  return Math.floor(Math.random() * (before - from + 1)) + from;
}

getRandomInteger(4, 16);

// с использованием https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function getRandomIntegerFloat (min, max, length) {
  const from = Math.ceil(min);
  const before = Math.floor(max);
  return ((Math.random() * (before - from + 1)) + from).toFixed(length);
}

getRandomIntegerFloat(4, 19, 6);
