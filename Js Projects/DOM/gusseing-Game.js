let random=(parseInt(Math.random()*100+1));

let gusses=[];
let remaining=10;

const submit= document.querySelector("#submit-Button");
const input= document.querySelector("#num-input");
const Pgusses= document.querySelector(".previous-Gusses");
const Rgusses= document.querySelector(".remaning-Gusses");
const lowHigh= document.querySelector(".low-High");

submit.addEventListener('click')