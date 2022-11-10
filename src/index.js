import { diff } from "../src/miniMaple";

document.addEventListener('DOMContentLoaded', setup)

function setup() {
    document.getElementById('diff_button').onclick = makeDiff;
}

function makeDiff() {
    const first_param = document.getElementById('first_param').value;
    const second_param = document.getElementById('second_param').value;
    const result = diff(first_param, second_param);


    const someDummyDiv = document.createElement('div');

    if (result === null)
        someDummyDiv.innerHTML = `error! incorrect parameters!`;
    else someDummyDiv.innerHTML = `${first_param}, ${second_param} => ${result}`;

    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}

