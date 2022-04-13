const body = document.querySelector('body');
const success = body.querySelector('#success').content.querySelector('.success');
const error = body.querySelector('#error').content.querySelector('.error');

const addListeners = (messageNode) => {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      messageNode.remove();
    }
  });

  document.addEventListener('click', () => {
    messageNode.remove();
  });
};

const messageSuccess = () => {
  const messageNode = success.cloneNode(true);
  body.appendChild(messageNode);

  addListeners(messageNode);
};

const messageError = () => {
  const messageNode = error.cloneNode(true);
  body.appendChild(messageNode);

  const btn = messageNode.querySelector('.error__button');

  btn.addEventListener('click', () => {
    messageNode.remove();
  });

  addListeners(messageNode);
};

const loadingError = () => {
  const map = document.body.querySelector('.map');
  const messageContainer = document.createElement('div');

  messageContainer.classList.add('loading-error');
  messageContainer.textContent = 'Данные по объявлениям не были получены!';

  map.append(messageContainer);

  map.addEventListener('click', () => {
    messageContainer.remove();
  });
};

export {messageSuccess, messageError, loadingError};
