import {clearData} from './form.js';
import {INDEX_RANGES} from './const.js';

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
      const shortData = data.slice(INDEX_RANGES.start, INDEX_RANGES.end);
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
      clearData();
      onSuccess();
    })
    .catch(() => onError());
};

export {getMapData, sendFormData};

