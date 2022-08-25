import './style.css';
import {Form,Name,refresh,Score} from '../module/Import.js';
import Api from '../module/Apifunction';
import Scoreboard from '../module/Scoreboard';

let id;
let url=`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:${id}/scores`;

const setId = ()=> {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games ', {
      method: 'POST',
      body: JSON.stringify({
          "name": "Game  Name"
      }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((response) => response.json())
      .then((json) => {
          id = json.result.split(" ");
         id=id[3];
      });
}

window.addEventListener('DOMContentLoaded', () => {
  setId();
  Scoreboard.addLi(url);
});

Form.addEventListener('submit',(e)=>{
  e.preventDefault();
  Api.setData(url,Name,Score);
  Scoreboard.clearForm();
});
  
refresh.addEventListener('click',()=>{
  Scoreboard.addLi(url);
  // Api.deleteApi(url);    
})