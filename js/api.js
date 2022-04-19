import {clearData} from './form.js';
import {generateAds} from './data.js';
import {ADS_COUNT, INDEX_RANGES} from './const.js';

const getMapData = (onSuccess, onError) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return generateAds();
      }
    })
    .then((data) => {
      if (data.length >  ADS_COUNT) {
        onSuccess(data.slice(INDEX_RANGES.start, INDEX_RANGES.end));
      } else {
        onSuccess(data);
      }
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

