import {resetMapSettings} from './map.js';
import {resetFormSettings} from './form.js';
import {ADV_COUNT} from './const.js';

const getMapData = (onSuccess, onError) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => {
      const shortData = data.slice(0, ADV_COUNT);
      onSuccess(shortData);
    })
    .catch(() => {
      onError();
    });
};

const sendFormData = (formData, onSuccess, onError) => {
  fetch(
    'https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
    })
    .then(() => {
      resetFormSettings();
      resetMapSettings();
      onSuccess();
    })
    .catch(() => onError());
};

export {getMapData, sendFormData};

