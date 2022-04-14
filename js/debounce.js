// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example
const timeoutDelay = 500;

function debounce (callback) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {debounce};
