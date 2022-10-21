import { addDiv } from "./hw/hw-10.js"
import { getRandomArray } from "./hw/hw-5.js"
import { getMaxDigit } from "./hw/hw-3.js"
import '../style/index.css';

function addElement() {
    const divWebpack = document.createElement("div");
    divWebpack.innerHTML = `HW-16 webpack`;

    const box = document.createElement("div");
    box.className = "wrapper__box";
    document.getElementsByTagName("body")[0].appendChild(box)
    const textBoxDiv = document.createElement("div");
    textBoxDiv.className = "wrapper__box";
    box.appendChild(textBoxDiv, divWebpack);

    const divHW3 = document.createElement("div");
    divHW3.className = "main__box";
    divHW3.innerHTML = `<b> Homework 3: </b>` + `${hw3}`;
    textBoxDiv.appendChild(divHW3);

    const divHW5 = document.createElement("div");
    divHW5.className = "main__box";
    divHW5.innerHTML = `<b> Homework 5: </b>` + `${hw5}`;
    textBoxDiv.appendChild(divHW5);

    const divHW10 = document.createElement("div"); 
    divHW10.className = "main__box";
    divHW10.innerHTML = `<b> Homework 10: </b>` + `${hw10}`;
}

document.body.onload = addElement;

const hw3= getMaxDigit(1236);
const hw5 = getRandomArray(10, 2, 87);
const hw10 = addDiv("red", "white");