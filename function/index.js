const url = "https://api.adviceslip.com/advice";

const btn = document.querySelector('#advice-button')

btn.addEventListener('click',()=>{
    changeMsg()
})

async function changeMsg(){
const response = await fetch(url);
const data = await response.json();

let advice = data.slip.advice;
let numero = data.slip.id

const number = document.querySelector('#advice-number')
const msgAdvice = document.querySelector('#advice')

msgAdvice.innerHTML = `"${advice}"`
number.innerHTML = `${numero}`;

}




