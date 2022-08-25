import './style.css';
import {
  Form, Name, refresh, Score,
} from '../module/Import.js';
import Api from '../module/Apifunction.js';

let id;
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:${id}/scores`;

const setId = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games ', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Game  Name',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      id = json.result.split(' ');
      [,,, id] = id;
    });
};

window.addEventListener('DOMContentLoaded', () => {
  setId();
  Api.getData(url);
});

const clearForm = () => {
  Name.value = '';
  Score.value = '';
};

Form.addEventListener('submit', (e) => {
  e.preventDefault();
  Api.setData(url, Name, Score);
  clearForm();
});

refresh.addEventListener('click', () => {
  Api.getData(url);
  // Api.deleteApi(url);
});
