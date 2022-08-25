import Api from "./Apifunction.js";
import { Name, Score, Ul } from "./Import.js";

class Scoreboard {
    static addLi = async (url) => {
        let arr = await Api.getData(url);
        for (const el of Object.keys(arr)) {
            for (const index of Object.keys(arr[el])) {
                const li = document.createElement('li');
                const liText = document.createTextNode(`${arr[el][index].user}:${arr[el][index].score}`)
                li.appendChild(liText);
                Ul.appendChild(li);
            }
        }
    }

    static clearForm = () => {
        Name.value = '';
        Score.value = '';
    }
}

export default Scoreboard;