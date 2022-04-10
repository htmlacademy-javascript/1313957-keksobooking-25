import {resetMapSettings} from './map.js';
import {resetFormSettings} from './form.js';

const gerMapData = (onSuccess, onError) => {
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
      onSuccess(data);
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

export {gerMapData, sendFormData};

