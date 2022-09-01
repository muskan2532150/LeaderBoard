import './style.css';
import './media.css';
import {
  Form, Name, refresh, Score,
} from '../module/Import.js';
import Api from '../module/Apifunction.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Pp1S9HLMkbonTZ7Ipojt/scores';

window.addEventListener('DOMContentLoaded', () => {
  Api.getData(url);
});

Form.addEventListener('submit', (e) => {
  e.preventDefault();
  Api.setData(url, Name, Score);
  Form.reset();
});

refresh.addEventListener('click', (e) => {
  const liList = e.target.parentNode.nextElementSibling.firstElementChild;
  liList.remove();
  Api.getData(url);
});
