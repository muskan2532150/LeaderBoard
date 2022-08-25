import { Ul } from './Import.js';

class Api {
    static setData = (url, Name, Score) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          user: `${Name.value}`,
          score: Score.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
    }

    static getData = async (url) => {
      fetch(url).then((response) => response.json()).then((data) => data.result.forEach((el) => {
        const li = document.createElement('li');
        const liText = document.createTextNode(`${el.user}:${el.score}`);
        li.appendChild(liText);
        Ul.appendChild(li);
      }));
    }

    static deleteApi = (url) => {
      fetch(url, {
        method: 'DELETE',
      });
    }
}

export default Api;