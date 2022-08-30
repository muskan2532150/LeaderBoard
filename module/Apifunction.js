import { Box } from './Import.js';

class Api {
  static setData =async (url, Name, Score) => {
   await fetch(url, {
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
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'part-one-ul');
    await fetch(url)
      .then((response) => response.json())
      .then((data) => data.result.forEach((el) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'ul-li');
        const liText = document.createTextNode(`${el.user}:  ${el.score}`);
        li.appendChild(liText);
        ul.appendChild(li);
      }));
    Box.appendChild(ul);
  }
}

export default Api;