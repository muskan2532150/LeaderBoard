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
       createLi(el,ul);
      }));
    Box.appendChild(ul);
  }
}

const createLi = (el,ul) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'ul-li');
  const i = document.createElement('i');
  const div = document.createElement('div');
  const div1 = document.createElement('div');
  i.setAttribute('class', 'fa-solid fa-award');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p1Text = document.createTextNode(`${el.user}:`);
  const p2Text = document.createTextNode(`${el.score}`);
  p1.appendChild(p1Text);
  p2.appendChild(p2Text);
  
  div.appendChild(i);
  div1.appendChild(p1);
  div1.appendChild(p2);
  div.appendChild(div1);
  li.appendChild(div);
  ul.appendChild(li);
}


export default Api;